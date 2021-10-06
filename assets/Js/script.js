'use strict'

//sticky navbar
var nav = document.getElementById('nav');
     window.onscroll = function () {
    if(window.pageYOffset > 100) { 
      nav.classList.add("shrink");
    }else{
            nav.classList.remove("shrink");
         }
      }

      //accordion part
      var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
