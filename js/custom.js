/*global $, window, setTimeout, mixitup */
$(function () {
    "use strict";
    // navBar
    
    $(".links li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    
    //make header show the height of the window
    
    
    $(".header").height($(window).height());
    
    // make the header the size of the screen on resize and make the slider in the center too
    
    $(window).resize(function () {
        $(".header").height($(window).height());
        $(".header .slider").css('paddingTop', ($(window).height() - $(".header .slider > div").height()) / 2);

    });
    
    // make the slider in the center
    
    $(".header .slider").css('paddingTop', ($(window).height() - $(".header .slider > div").height()) / 2);
    
    $('.slider').bxSlider({
        pager : false
    });
    
    // scroll smooth
    
    $('.links li a').click(function () {
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    //auto Slide
    var i = 0;
        
    function autoSlider() {
        $(".testi .slide div").eq(i).addClass("active").siblings().removeClass("active");
        i = i + 1;
        if (i >= $(".testi .slide div").length) {
            i = 0;
        }
        setTimeout(autoSlider, 5000);
    }
    autoSlider();
    // mixitup
    var mixer = mixitup(".img-port");
    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    
    // nice scroll
    
    $("body").niceScroll({
        cursorcolor: "#1fc4a0",
        cursorwidth: "10px",
        cursorborder: "1px solid #1fc4a0",
        cursorborderradius: 0
    });
});