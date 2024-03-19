var util = require("util");
const path = require("path");

/// node_helper.js
var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  start: function() {
    this.countDown = 10000000
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "DO_YOUR_JOB":

      const sampleFilePath = path.join(__dirname, "sample.txt")
      const publicDirPath = path.join(__dirname, "public/")
  
      var fs = require('fs');
      fs.readFile(sampleFilePath, function(err,data)
            {
                if(err)
                    console.log(err)
                else
                    face_rec_name = data.toString().replace(/\s+/g, '')
                    console.log(face_rec_name);
            });
  
      fs.readdir(publicDirPath, (err, datadir) => {
        if (err) throw err;
          
          // Try it where we expect a match
          const checker = value =>
          ['-id.png'].some(element => value.includes(element));
          face_name_id = datadir.filter(checker)[0];
          
          
          face_name_id = face_name_id.split("-")
          face_name_display = face_name_id[0];
          
           if(face_rec_name == face_name_display)
          {
            console.log(face_name_display);
            this.sendSocketNotification("I_DID", face_rec_name)
          }else
          {
            this.sendSocketNotification("I_NOT", face_rec_name)
          }
          
      });
        break
    }
  },
})

// var util = require("util");
// var NodeHelper = require("node_helper");
// const path = require("path");
// console.log('현재 디렉토리:', __dirname);

// module.exports = NodeHelper.create({
//   start: function() {
//     this.countDown = 10000000;
//   },
//   socketNotificationReceived: function(notification, payload) {
//     switch(notification) {
//       case "DO_YOUR_JOB":
//         // 현재 디렉토리 기반으로 파일 경로 생성
//         const sampleFilePath = path.join(__dirname, "sample.txt")
//         const publicDirPath = path.join(__dirname, "public/")

//         var fs = require('fs');
//         // sample.txt 파일 읽기
//         fs.readFile(sampleFilePath, function(err, data) {
//           if(err) {
//             console.log(err);
//           } else {
//             let face_rec_name = data.toString().replace(/\s+/g, '')
//             console.log(face_rec_name)

//             // public 디렉토리 내의 파일 목록 읽기
//             fs.readdir(publicDirPath, (err, datadir) => {
//               if (err) throw err;

//               // 파일 이름 확인
//               const checker = value => ['-id.png'].some(element => value.includes(element));
//               let face_name_id = datadir.filter(checker)[0];

//               // 파일 이름 분할
//               face_name_id = face_name_id.split("-");
//               let face_name_display = face_name_id[0];

//               // 이름 비교 및 소켓 통지 보내기
//               if(face_rec_name == face_name_display) {
//                 console.log(face_name_display);
//                 this.sendSocketNotification("I_DID", face_rec_name);
//               } else {
//                 this.sendSocketNotification("I_NOT", face_rec_name);
//               }
//             });
//           }
//         });
//         break;
//     }
//   },
// });
