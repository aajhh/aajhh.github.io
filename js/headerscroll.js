window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
             document.getElementById("header-logo").style.visibility = "visible";
    } else {
         document.getElementById("header-logo").style.visibility = "hidden";
    }
} 