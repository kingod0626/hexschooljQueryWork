$(document).ready(function(){

    $(".dropdown").click(function(event){
        event.preventDefault();
        $(".dropdown-open").slideToggle();
    });

    var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
        direction: 'horizontal',
        speed: 3000,
        loop: true,
        autoplay: {
        delay: 1500,
        },
        effect: 'cube',
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
    $(".top").click(function(event){
        event.preventDefault();
        $("html,top").animate({
            scrollTop: 0
        }, 500);
        
    });

   
});