   let buttons = document.getElementsByTagName("button");
  let audio = document.getElementById("BtnSound");
  
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
          audio.currentTime = 0; 
          audio.play();
      });
    }


    



  var menuBtn = document.getElementById("MenuBtn");
var lPanel = document.querySelector(".LPannel");

menuBtn.onclick = function() {
    if(lPanel.style.display === "none" || lPanel.style.display === "") {
        lPanel.style.display = "block";  } 
    else {
        lPanel.style.display = "none"; }
};


var menuBtn = document.getElementById("MenuBtn");
var lPanel = document.querySelector(".LPannel");

menuBtn.onclick = function() {
    if(lPanel.classList.contains("showPanel")) {
        lPanel.classList.remove("showPanel");  
    } else {
        lPanel.classList.add("showPanel");  
    }
};


var HBtn = document.getElementById("HomeBtn");

HBtn.onclick = function() {
       window.location.href = "/MAIN/index.html";
};

      function DescriptionPage(){
      window.location.href = "Description.html"
  }

      function GallaryPage(){
      window.location.href = "https://devejdelrosario26.github.io/BSIT-1D-Semi-Finals-Exam/MAIN/OtherHTMLs/Gallary/Gallary.html"
  }

