// Fixed header

var hdr = document.querySelector('.header'),
hdrHight = hdr.scrollHeight,
menuHeight =  document.querySelector('.menu').scrollHeight + hdrHight;
menuHeight =  document.querySelector('.menu__mobile').scrollHeight + hdrHight;

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

$(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>hdrHight){
            $('.menu__mobile').css('position', 'fixed');
            $('.menu__mobile').css('top', '0');
            $(hdr).css('height', menuHeight);
        }
        else if ($(this).scrollTop()<hdrHight){
           $('.menu__mobile').css('position', 'relative');
           $(hdr).css('height', hdrHight);
        }
    });
});



// END fixed header


// Mobile menu
button = document.querySelector('.button__mobile');
wrapper = document.querySelector('.menu__mobile__wrapper')
menu = document.querySelector('.menu__mobile')
links = document.querySelector('.menu__link__mobile')

button.addEventListener("click" ,() => {
    button.classList.toggle('button__mobile__active');
    wrapper.classList.toggle('menu__mobile__wrapper__active');
    menu.classList.toggle('menu__mobile__active');
    links.style.animationName = 'appearance';
	links.style.animationDuration = '0.5s';
})

// END Mobile menu

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
    $('.room__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev_room"><img src="img/icons/arrov-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next_room"><img src="img/icons/arrov-right.png"></button>'
    });
  });


// END all sliders

$(".filter-circle__rent-pay").slider({
	min: 8250,
	max: 125860,
	values: [8250,125860],
	range: true,
	animate: "normal",
	stop: function(event, ui){
		$("input.minPay").val($(".filter-circle__rent-pay").slider("values",0));
		$("input.maxPay").val($(".filter-circle__rent-pay").slider("values",1));
	},
	slide: function(event, ui){
		$("input.minPay").val($(".filter-circle__rent-pay").slider("values",0));
		$("input.maxPay").val($(".filter-circle__rent-pay").slider("values",1));
	}
});

$(".filter-circle__rent-area").slider({
	min: 11,
	max: 434,
	values: [11,434],
	range: true,
	animate: "normal",
	stop: function(event, ui){
		$("input.minArea").val($(".filter-circle__rent-area").slider("values",0));
		$("input.maxArea").val($(".filter-circle__rent-area").slider("values",1));
	},
	slide: function(event, ui){
		$("input.minArea").val($(".filter-circle__rent-area").slider("values",0));
		$("input.maxArea").val($(".filter-circle__rent-area").slider("values",1));
	}
});


$("input.minArea").change(function(){
    var value1=$("input.minArea").val();
    var value2=$("input.maxArea").val();

    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $("input.minArea").val(value1);
    }
    $(".filter-circle__rent-area").slider("values",0,value1);
});


$("input.maxArea").change(function(){
    var value1=$("input.minArea").val();
    var value2=$("input.maxArea").val();

    if (value2 > 1000) { value2 = 1000; $("input.maxArea").val(1000)}

    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $("input.maxArea").val(value2);
    }
    $(".filter-circle__rent-area").slider("values",1,value2);
});


	$("input.minPay").change(function(){
		var value1=$("input.minPay").val();
		var value2=$("input.maxPay").val();

	    if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input.minPay").val(value1);
		}
		$(".filter-circle__rent-pay").slider("values",0,value1);
	});


	$("input.maxPay").change(function(){
		var value1=$("input.minPay").val();
		var value2=$("input.maxPay").val();

		if (value2 > 1000) { value2 = 1000; $("input.maxPay").val(1000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input.maxPay").val(value2);
		}
		$(".filter-circle__rent-pay").slider("values",1,value2);
	});



