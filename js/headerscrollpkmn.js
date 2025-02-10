let mybutton = document.getElementById("toTop");
var initialSrc = "/images/general/home button.png";
var scrollSrc = "/images/general/header logo.png";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
             document.getElementById("header-logo").src = scrollSrc;
             document.getElementById("myHeader").style.borderBottomStyle = "solid";
             mybutton.style.display = "block";
    } else {
         document.getElementById("header-logo").src = initialSrc;
         document.getElementById("myHeader").style.borderBottomStyle = "none";
         mybutton.style.display = "none";
    }
} 

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 