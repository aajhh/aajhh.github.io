$(window).on('scroll', function () {
    if ($(this).scrollTop() > 70) { // Set position from top
        $('.headernav').addClass("shrink");
        //$('.navbar-brand  img').attr('src', 'images/logo.png');
    }else{
        $('.headernav').removeClass("shrink");
        //$('.navbar-brand  img').attr('src', 'images/logo.png');
    }
    });