// Fixed header

var hdr = document.querySelector('.header'),
hdrHight = hdr.scrollHeight,
menuHeight =  document.querySelector('.menu').scrollHeight + hdrHight;

$(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>hdrHight){
            $('.menu').css('position', 'fixed');
            $('.menu').css('top', '0');
            $(hdr).css('height', menuHeight);
        }
        else if ($(this).scrollTop()<hdrHight){
           $('.menu').css('position', 'relative');
           $(hdr).css('height', hdrHight);
        }
    });
});

// END fixed header


// all sliders

$(document).ready(function(){
    $('.kvarc__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrov-right.png"></button>'
    });
    $('.forum__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrov-right.png"></button>'
    });
    $('.atoll__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrov-right.png"></button>'
    });
    $('.kvarc__page__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next_promo"><img src="img/icons/arrov-right.png"></button>'
    });
    $('.forum__page__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next_promo"><img src="img/icons/arrov-right.png"></button>'
    });
    $('.atoll__page__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next_promo"><img src="img/icons/arrov-right.png"></button>'
    });
  });


// END all sliders

