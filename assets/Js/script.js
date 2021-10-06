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







   //  <!-- ===========================   The start of Performance Script  ========================== -->


    let  rotate_img_one = document.getElementById("rotate_img_one");
    let  perform_sub_title_one = document.getElementById("perform_sub_title_one");
    let  perform_text_one = document.getElementById("perform_text_one");
    let  perform_img_one = document.getElementById("perform_img_one");

function setchange_one(){
    rotate_img_one.style.transform= "rotateY(360deg)";
   perform_sub_title_one.style.color ="#000";
   perform_text_one.style.color="#000";
   perform_img_one.style.width= "77px";
   
}
function removechange_one(){
    rotate_img_one.style.transform= "rotateY(0deg)";

    perform_sub_title_one.style.color ="#fff ";
    perform_text_one.style.color="#fff";
     perform_img_one.style.width= "0px";

}

    let  rotate_img_two = document.getElementById("rotate_img_two");

    let  perform_sub_title_two =document.getElementById("perform_sub_title_two");
    let  perform_text_two =document.getElementById("perform_text_two");
    let  perform_img_two = document.getElementById("perform_img_two");

function setchange_two(){
    rotate_img_two.style.transform= "rotateY(360deg)";
    
   perform_sub_title_two.style.color ="#000";
   perform_text_two.style.color="#000";
   perform_img_two.style.width= "77px";
   
}
function removechange_two(){
    rotate_img_two.style.transform= "rotateY(0deg)";
    perform_sub_title_two.style.color ="#fff ";
    perform_text_two.style.color="#fff";
     perform_img_two.style.width= "0px";

}

    let  rotate_img_three = document.getElementById("rotate_img_three");
  
   let  perform_sub_title_three =document.getElementById("perform_sub_title_three");
    let  perform_text_three =document.getElementById("perform_text_three");
    let  perform_img_three = document.getElementById("perform_img_three");

function setchange_three(){
    rotate_img_three.style.transform= "rotateY(360deg)";
    
   perform_sub_title_three.style.color ="#000";
   perform_text_three.style.color="#000";
   perform_img_three.style.width= "77px";
   
}
function removechange_three(){
    rotate_img_three.style.transform= "rotateY(0deg)";
    perform_sub_title_three.style.color ="#fff ";
    perform_text_three.style.color="#fff";
     perform_img_three.style.width= "0px";

}

    let  rotate_img_four = document.getElementById("rotate_img_four");

   let  perform_sub_title_four =document.getElementById("perform_sub_title_four");
    let  perform_text_four =document.getElementById("perform_text_four");
    let  perform_img_four = document.getElementById("perform_img_four");

function setchange_four(){
    rotate_img_four.style.transform= "rotateY(360deg)";
   perform_sub_title_four.style.color ="#000";
   perform_text_four.style.color="#000";
   perform_img_four.style.width= "77px";
   
}
function removechange_four(){
    rotate_img_four.style.transform= "rotateY(0deg)";
    perform_sub_title_four.style.color ="#fff ";
    perform_text_four.style.color="#fff";
     perform_img_four.style.width= "0px";

}

    let  rotate_img_five = document.getElementById("rotate_img_five");

   let  perform_sub_title_five =document.getElementById("perform_sub_title_five");
    let  perform_text_five =document.getElementById("perform_text_five");
    let  perform_img_five = document.getElementById("perform_img_five");

function setchange_five(){
    rotate_img_five.style.transform= "rotateY(360deg)"; 
   perform_sub_title_five.style.color ="#000";
   perform_text_five.style.color="#000";
   perform_img_five.style.width= "77px";
   
}
function removechange_five(){
    rotate_img_five.style.transform= "rotateY(0deg)";
    perform_sub_title_five.style.color ="#fff ";
    perform_text_five.style.color="#fff";
     perform_img_five.style.width= "0px";

}


    let  rotate_img_six = document.getElementById("rotate_img_six");
   let  perform_sub_title_six =document.getElementById("perform_sub_title_six");
    let  perform_text_six =document.getElementById("perform_text_six");
    let  perform_img_six = document.getElementById("perform_img_six");

function setchange_six(){
    rotate_img_six.style.transform= "rotateY(360deg)"; 
   perform_sub_title_six.style.color ="#000";
   perform_text_six.style.color="#000";
   perform_img_six.style.width= "77px";
   
}
function removechange_six(){
    rotate_img_six.style.transform= "rotateY(0deg)";
    perform_sub_title_six.style.color ="#fff ";
    perform_text_six.style.color="#fff";
     perform_img_six.style.width= "0px";

}






    //  <!-- ===========================   The End of Performance Script  ========================== -->
