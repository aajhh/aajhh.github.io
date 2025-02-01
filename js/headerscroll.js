window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
             document.getElementById("header-logo").style.visibility = "visible";
             document.getElementById("myHeader").style.borderBottomStyle = "solid";
    } else {
         document.getElementById("header-logo").style.visibility = "hidden";
         document.getElementById("myHeader").style.borderBottomStyle = "none";
    }
} 