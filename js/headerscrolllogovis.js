window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
             document.getElementById("myHeader").style.borderBottomStyle = "solid";
    } else {
         document.getElementById("myHeader").style.borderBottomStyle = "none";
    }
} 