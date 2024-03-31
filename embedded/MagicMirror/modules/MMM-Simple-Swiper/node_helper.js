var NodeHelper = require("node_helper");
const fs = require("fs");
const path = require("path");

module.exports = NodeHelper.create({
  start: function() {
    this.pythonProcess = null;
    this.resultFilePath = path.join(__dirname, "swipe_result.txt");
    this.lastResult = "";
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "SWIPER_START_SWIPING") {
      this.startSwiper(payload);
    }
  },

  startSwiper: function(config) {
    const scriptPath = path.join(__dirname, "swiper.py");
    if (this.pythonProcess != null) {
      this.pythonProcess.kill();
      this.pythonProcess = null;
    }

    // Python 스크립트 실행
    this.pythonProcess = require("child_process").spawn("sudo", ["python3", scriptPath]);

    // 파일 변경 감지 및 처리
    fs.watch(this.resultFilePath, (eventType, filename) => {
      if (filename) {
        // console.log("Detected change in results file.");
        this.processResults();
      }
    });
  },

  processResults: function() {
    fs.readFile(this.resultFilePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the results file:", err);
        return;
      }
      // Avoid processing if the result is the same as last time
      if (this.lastResult === data) return;

      this.lastResult = data;
      if (data.trim() === "SHOW_HIDDEN_PAGE") {
        this.sendSocketNotification("SHOW_HIDDEN_PAGE", "screenSaver");
      } else if (data.trim() === "LEAVE_HIDDEN_PAGE") {
        this.sendSocketNotification("LEAVE_HIDDEN_PAGE")
      }
    });
  },

  stop: function() {
    if (this.pythonProcess != null) {
      this.pythonProcess.kill();
      this.pythonProcess = null;
    }
    this.lastResult = "";
  },
});
