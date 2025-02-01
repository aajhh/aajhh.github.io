let mybutton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
             document.getElementById("header-logo").src = "/images/general/header logo.png";
             document.getElementById("logoText").innerHTML = "";
             document.getElementById("myHeader").style.borderBottomStyle = "solid";
             mybutton.style.display = "block";
    } else {
         document.getElementById("header-logo").src = "";
         document.getElementById("logoText").innerHTML = "home";
         document.getElementById("myHeader").style.borderBottomStyle = "none";
         mybutton.style.display = "none";
    }
} 

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 