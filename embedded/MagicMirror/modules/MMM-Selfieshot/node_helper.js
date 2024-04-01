/* eslint-disable prettier/prettier */
const NodeWebcam = require( "node-webcam" );
const moment = require("moment");
const path = require("path");
const exec = require("child_process").exec;
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

require('dotenv').config();

var log = () => {
	//do nothing
};

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	start: function() {
		this.devices = [];
		this.device = false;

	},

	initialize: function(payload) {
		this.config = payload;
		if (payload.debug) {
			log = (...args) => {
				console.log("[SELFIE]", ...args);
			};
		}
		if (payload.useWebEndpoint) {
			log("Web server endpoint is activated:", `/${payload.useWebEndpoint} [POST]`);
			this.expressApp.use(bodyParser.json());
  		this.expressApp.use(bodyParser.urlencoded({extended: true}));
			this.expressApp.post("/" + payload.useWebEndpoint, (req, res) => {
				log("External request arrives from", req.ip);
				this.sendSocketNotification("WEB_REQUEST", req.body);
				res.status(200).send({status: 200});
			});
		}
		var Webcam = NodeWebcam.create({});
		Webcam.list((list)=>{
			log("Searching camera devices...");
			if (!list || list.length <= 0) {
				log ("Cannot find any camera in this computer.");
				return;
			}
			this.devices.concat(list);
			log("Detected devices:", list);
			if (payload.device) {
				var idx = list.indexOf(payload.device);
				if (idx !== -1) {
					this.device = list[idx];
					log(`'${payload.device}' will be used.`);
				} else {
					log(`Cannot find '${payload.device}' in the list. '${list[0]}' be selected as default.`);
				}
			} else {
				log(`Default camera '${list[0]}' will be used.`);
			}
			this.sendSocketNotification("INITIALIZED");
		});
	},

	socketNotificationReceived: function(noti, payload) {
		if (payload.debug) log("Notification received: " + noti);
		if (noti == "INIT") {
			this.initialize(payload);
		}
		if (noti == "SHOOT") {
			console.log('shoot payload:', payload)
			this.shoot(payload);
		}
		if (noti == "EMPTY") {
			var dir = path.resolve(__dirname, "photos");
			exec(`rm ${dir}/*.jpg`, (err, sto, ste)=>{
				log("Cleaning directory:", dir);
				if (err) this.log("Error:", err);
				if (sto) this.log(sto);
				if (ste) this.log(ste);
			});
		}
	},

	shoot: function(payload) {
        var uri = moment().format("YYMMDD_HHmmss") + ".jpg";
        var filename = path.resolve(__dirname, "photos", uri);
        
        var command = `libcamera-still -o ${filename} --width ${this.config.width} --height ${this.config.height} --quality ${this.config.quality} --nopreview`;
    
        console.log(`[MMM-Selfieshot] Executing command: ${command}`);
    
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`[MMM-Selfieshot] Error taking photo: ${error}`);
                return;
            }
            console.log(`[MMM-Selfieshot] Photo captured: ${filename}`);
            // 성공적으로 사진을 찍었으면, 결과를 전송
            this.sendSocketNotification("SHOOT_RESULT", {
                path: filename,
                uri: uri,
                session: payload.session
            });
            this.sendPhotoToBackend(filename);
        });
    },    

	sendPhotoToBackend: function(filepath) {
		const formData = new FormData();
		formData.append('request', {'clothesIdList':[1, 3, 5]});
		formData.append('ootdImg', fs.createReadStream(filepath));

		const apiEndpoint = 'https://j10e207.p.ssafy.io/api/v1/ootd';
		const userToken = process.env.USER_TOKEN;
	
		axios.post(apiEndpoint, formData, {
			headers: {
				...formData.getHeaders(),
				'Authorization': `Bearer ${userToken}`
			}
		})
		.then(response => {
			console.log('Photo uploaded successfully:', response.data);
		})
		.catch(error => {
			console.error('Failed to upload photo:', error);
		});
	},
});
