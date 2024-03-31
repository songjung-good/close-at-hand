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
    this.is_login = false
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
  
  //Create Socket Connnection with nodehelper.
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
      //Store Image Here
  
          var elem = document.getElementById("COUNT")
          elem.innerHTML = "반가워요, " + payload + "님!"

          if (!this.is_login) {
            this.sound.play();
            this.is_login = true; // 로그인 상태 업데이트
          }
  
        //Creat Image Element Image
        elem.classList.add(this.config.position);
        elem.style.width = this.config.width;
        
    
        var img = document.createElement("img");
        img.setAttribute('src', this.config.fileUrl);
        elem.appendChild(img);
        break;
      
      default:
        if (this.is_login) {
          this.is_login = false; // 로그아웃 상태로 업데이트
        }

        var elem = document.getElementById("COUNT")
        elem.innerHTML = "안녕하세요!"
  
          //Creat Image Element Image
        elem.classList.add(this.config.position);
        elem.style.width = this.config.width;
        
    
        var img = document.createElement("img");
        img.setAttribute('src', "modules/MMM-Face-Recognition-SMAI/public/guest.gif");
        elem.appendChild(img);
    }
  },
  
})