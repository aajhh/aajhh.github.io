window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
             document.getElementById("header-logo").style.visibility = "visible";
    } else {
         document.getElementById("header-logo").style.visibility = "hidden";
    }
} 