Module.register("MMM-Face-Recognition-SMAI", {


  defaults: {
    prompt: "Use FaceID to access profiles",
    fileUrl: "modules/MMM-Face-Recognition-SMAI/public/face1.png",
    soundUrl: "modules/MMM-Face-Recognition-SMAI/public/FaceID_success.mp3",
    width: "300px",
    position: "left",
    refreshInterval: 2
  },

  start: function () {
    this.count = 0
    this.isLoggedIn = false
    this.sound = new Audio(this.config.soundUrl)
  },

  getStyles: function () {
          return [
              this.file('css/mmm-style.css')
          ];
      },


  getDom: function() {
    var element = document.createElement("div")
    element.className = "face-image"
    element.innerHTML = this.config.prompt
    var subElement = document.createElement("p")
    subElement.id = "COUNT"
    element.appendChild(subElement)

  
    return element
  },

  //Create Socket Connnection with nodehelper.js
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
        var timer = setInterval(()=>{
          this.sendSocketNotification("DO_YOUR_JOB", this.count)
          this.count++
        }, 1000)
        break
    }
  },

  //Recieve notification from socket of Python Variables via nodehelper.js
  socketNotificationReceived: function(notification, payload) {
      switch(notification) {
        case "I_DID":
          if (!this.isLoggedIn) {
            // 비로그인 상태에서 로그인 상태로 변경될 때
  
            // 사용자 환영 메시지 업데이트
            var elem = document.getElementById("COUNT");
            elem.innerHTML = "Welcome back, " + payload;
            elem.classList.add(this.config.position);
            elem.style.width = this.config.width;
  
            // 이미지 업데이트
            var img = document.createElement("img");
            img.setAttribute('src', this.config.fileUrl);
            elem.appendChild(img);
  
            // 효과음 재생
            this.sound.play();
  
            // 로그인 상태로 설정
            this.isLoggedIn = true;
  
            this.updateDom();
          }
          break;
      
      default:
        if (this.isLoggedIn) {
          this.isLoggedIn = false; 
          
          var elem = document.getElementById("COUNT")
          elem.innerHTML = "Welcome back, User"

          //Creat Image Element Image
        elem.classList.add(this.config.position);
        elem.style.width = this.config.width;
        
        

        var img = document.createElement("img");
        img.setAttribute('src', "modules/MMM-Face-Recognition-SMAI/public/guest.gif");
        elem.appendChild(img);
        this.updateDom();
      }
      // return elem
      break;
    }
  },
})
