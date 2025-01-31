window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
             document.getElementById("header-logo").style.visibility = "visible";
    } else {
         document.getElementById("header-logo").style.visibility = "hidden";
    }
} 