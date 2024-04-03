"use strict";

Module.register("MMM-Simple-Swiper", {
  defaults: {
    echoPin: 24, // GPIO #, 기존 echoRightPin 및 triggerRightPin 제거
    triggerPin: 23, // GPIO #
    threshold: 100, // 센서 거리 조건을 100으로 조정
    debug: false,
    delay: 750,
  },

  start: function() {
    this.sendSocketNotification("SWIPER_START_SWIPING", this.config);
  },

  socketNotificationReceived: function(notification, payload) {
    this.sendNotification(notification, payload);
  },
});
