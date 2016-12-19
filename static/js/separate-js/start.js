<!--responsive menu-->
$(document).ready(function(){
    var touch = $('#touch-menu');
    var close = $('#close-menu');
    var menu = $('.tablet-header__menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(close).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
<!--anchor links-->

$(document).ready(function(){
    $("body").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



<!-- start-slider-->
$(document).ready(function(){
    $(' .start-slider .bxslider').bxSlider({
        auto: true,
        pause: 10000,
        responsive: true,
    });
});

<!-- slider-glasses-->
$(document).ready(function(){
    $('.slider-glasses .bxslider').bxSlider({
        auto: true,
        pause: 10000,
        responsive: true
    });
});

<!-- slider-promo-->
$(document).ready(function(){
    $('.slider-promo .bxslider').bxSlider({
        auto: true,
        pause: 9000,
        responsive: true,
        autoDirection: 'prev'
    });
});

<!-- slider-choice-->
$(document).ready(function(){
    $('.slider-choice .bxslider').bxSlider({
        auto: true,
        pause: 9000,
        responsive: true

    });
});

<!-- slider-brands-->
$(document).ready(function(){
    $('.slider-brands .bxslider').bxSlider({
        auto: true,
        pause: 6000,
        responsive: true

    });
});
<!--fixed nav-->
$(document).ready(function() {

    // Scroll Events
    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();

        // Activate menu
        if (wScroll > 750) {
            $('.main-header__row_below').addClass('move');
        }
        else {
            $('.main-header__row_below').removeClass('move');
        };

    });
});

<!--hideme-->
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(){

        var bottom_of_object = $(this).position().top + 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({
                'opacity':'1'

            },6000);
        }
    });
});

// Animation for START PAGE
$(function() {
        h1 = $('.start-slider h1'),
        h5 = $('.start-slider h5'),
        btn = $('.start-slider .btn'),
        tl = new TimelineMax();

    tl
        .from(h1, 1, {text:"", ease:Power0.easeNone})
        .from(h5, 2, {text:"", ease:Power0.easeNone})
        .fromTo(btn, 0.7,
            {x: -25, autoAlpha: 0},
            {x: 0, autoAlpha: 1, ease:Power1.easeOut})
});

// Animation for FOOTER
$(function() {
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic(),
        footer = $('footer'),
        li = $('footer li'),

        tlf = new TimelineMax();

    tlf
        .staggerFrom(li, 0.3,{autoAlpha: 0, color: 'red', ease:Power1.easeNone}, 0.2);



    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
        triggerElement: 'footer',
        reverse: false,
        offset: -170 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tlf)
        .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
    // scene.addIndicators();

});

