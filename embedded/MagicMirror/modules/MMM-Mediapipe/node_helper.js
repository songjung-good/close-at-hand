var NodeHelper = require("node_helper");
const fs = require("fs");
const path = require("path");

//push용

module.exports = NodeHelper.create({
  start: function() {
    console.log("MMM-Mediapipe helper started.");
    this.pythonProcess = null;
    this.resultFilePath = path.join(__dirname, "gesture.txt");
    this.lastResult = "";
    this.prevGesture = "";
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "Mediapipe_Start") {
      this.startMediapipe(payload);
    }
  },

  startMediapipe: function(config) {
    const scriptPath = path.join(__dirname, "recognize.py");
    if (this.pythonProcess != null) {
      this.pythonProcess.kill();
      this.pythonProcess = null;
    }

    // Python 스크립트 실행
    this.pythonProcess = require("child_process").spawn("sudo", ["python3", scriptPath]);

    // 파일 변경 감지 및 처리
    fs.watchFile(this.resultFilePath, { interval: 1000 }, (eventType, filename) => {
      console.log("gesture 파일 변경 감지중");
      if (filename) {
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
      if (this.prevGesture === "Open_Palm" && data.trim() === "Closed_Fist") {
        console.log("PAGE_INCREMENT");
        this.sendSocketNotification("PAGE_INCREMENT");
      }

      // 이전 제스처 업데이트
      this.prevGesture = data.trim();
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
