"use strict";

Module.register("MMM-Mediapipe", {
  defaults: {
  },

  start: function() {
    this.sendSocketNotification("Mediapipe_Start", this.config);
  },

  socketNotificationReceived: function(notification, payload) {
    this.sendNotification(notification, payload);
  },
});
