var NodeHelper = require("node_helper");
const { exec } = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");

module.exports = NodeHelper.create({
    socketNotificationReceived: function(notification, payload) {
        if (notification === "image_clicked") {
            this.executePythonScript();
        }
    },

    executePythonScript: function() {
        exec("source /home/bada/myvenv/bin/activate && python3 /home/bada/S10P22E207/embedded/AI/fitting.py", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
});