$(document).ready(function() {

    let header = $(".header_top");
    $(window).scroll(function () {
        if ($(this).scrollTop() > header.height() && header.hasClass('header_top')) {
            header.removeClass('header_top').addClass('header_fixed');
        } else if ($(this).scrollTop() <= header.height() && header.hasClass('header_fixed')) {
            header.removeClass("header_fixed").addClass('header_top');
        }
    });

    let navButton = $('.nav-button');
    let hideMenu = $('.nav');
    navButton.click(function () {
        $(this).toggleClass("nav-button_open");
        if ($(this).hasClass('nav-button_open')) {
            hideMenu.fadeTo('slow', 1);
        } else {
            hideMenu.fadeTo('slow', 0);
        }
    });

    //scroll на вторую страницу по размеру первой стрницы
    let heightPageStart = $(".page_start").height();
    $(".scroll-button").click(function () {
        $('html,body').animate({
                scrollTop: heightPageStart
            },
            'slow');
    });

    let timeSlide=3000;
    let itemVerticalSlider = $('.content-vertical-slider-item');
    let heightVerticalSlider = itemVerticalSlider.height();
    let itemSwitchVerticalSlider = $('.switch-vertical-slider__item');
    let timerVerticalSlider = 0;
    let indVerticalSlider = 0;
    itemVerticalSlider.eq(indVerticalSlider).css({
        top: 0
    });
    itemSwitchVerticalSlider.eq(indVerticalSlider).addClass('active');
    startVerticalSlider();

    function startVerticalSlider() {
        if (timerVerticalSlider > 0) { return;}
            timerVerticalSlider = setInterval(function () {
                itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                    top: '-' + heightVerticalSlider + 'px',
                });
                if (indVerticalSlider < itemVerticalSlider.length - 1) {
                    indVerticalSlider++;
                } else {
                    indVerticalSlider = 0;
                }
                itemVerticalSlider.eq(indVerticalSlider).css({
                    top: heightVerticalSlider + 'px'
                });
                itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                    top: "0px"
                });
                itemSwitchVerticalSlider.removeClass('active');
                itemSwitchVerticalSlider.eq(indVerticalSlider).addClass('active');

            }, timeSlide);
        }

    $('.switch-vertical-slider').hover(function () {
        (function() {
            clearInterval(timerVerticalSlider);
            timerVerticalSlider = 0;
        })();
        }, function () {
        startVerticalSlider();
        });

     itemSwitchVerticalSlider.click(function () {
             if ((itemVerticalSlider.length === itemSwitchVerticalSlider.length) && (indVerticalSlider !== $(this).index())) {
                    itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                        top: '-' + heightVerticalSlider + 'px'
                    });
                    indVerticalSlider = $(this).index();
                    itemVerticalSlider.eq(indVerticalSlider).css({
                        top: heightVerticalSlider + 'px'
                    });
                    itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({top: 0});
                    itemSwitchVerticalSlider.removeClass('active');
                    $(this).addClass('active');
                 return false;
            } else {
                console.log('Невозможно переключать слайдер так как разное количество точек и слайдов или слайдер находится на выбранной позиции');
            }
        });

     // горизонтальный слайдер
    let itemHorizontalSlider = $('.content-horizontal-slider-item');
    let widthHorizontalSlider = itemHorizontalSlider.width();
    let itemSwitchHorizontalSlider = $('.switch-horizontal-slider__item');
    let timerHorizontalSlider = 0;
    let indHorizontalSlider = 0;
    itemHorizontalSlider.eq(indHorizontalSlider).css({
      right: 0
    });
    itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');

    startHorizontalSlider();
    function startHorizontalSlider() {
        if (timerHorizontalSlider > 0) { return; }
        timerHorizontalSlider = setInterval(function () {
            itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({//убилаем переключ
                right: '-' + widthHorizontalSlider + 'px'
            });
            if (indHorizontalSlider < itemHorizontalSlider.length - 1) {
                indHorizontalSlider++;
            } else {
                indHorizontalSlider = 0;
            }
            itemHorizontalSlider.eq(indHorizontalSlider).css({
                right: widthHorizontalSlider + 'px'
            });
            itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                right: "0px"
            });
            itemSwitchHorizontalSlider.removeClass('active');
            itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');
        }, timeSlide);
    }

    $('.switch-horizontal-slider, #next, #prev').hover(function () {
        (function() {
            clearInterval(timerHorizontalSlider);
            timerHorizontalSlider = 0;
        })();
    }, function () {
        startHorizontalSlider();
    });

    itemSwitchHorizontalSlider.click(function () {
        if (itemHorizontalSlider.length === itemSwitchHorizontalSlider.length) {
            if (indHorizontalSlider < $(this).index() ) {
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                    right: '-' + widthHorizontalSlider + 'px'
                });
                indHorizontalSlider = $(this).index();//ставим слайдер в нужное положение
                itemHorizontalSlider.eq(indHorizontalSlider).css({
                    right: widthHorizontalSlider + 'px'
                });
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
            } else if (indHorizontalSlider > $(this).index() ) {
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                    right: widthHorizontalSlider + 'px'
                });
                indHorizontalSlider = $(this).index();//ставим слайдер в нужное положение
                itemHorizontalSlider.eq(indHorizontalSlider).css({
                    right: '-' + widthHorizontalSlider + 'px'
                });
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
            }
            itemSwitchHorizontalSlider.removeClass('active');
            $(this).addClass('active');
            return false;
        } else {
            console.log('Невозможно переключать слайдер так как разное количество точек и слайдов');
        }
    });



    $('#next').click(function() {
        itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
            right: '-' + widthHorizontalSlider + 'px'
        });
        if (indHorizontalSlider<itemHorizontalSlider.length-1) {
            indHorizontalSlider++;
        } else {
            indHorizontalSlider=0;
        }
        itemHorizontalSlider.eq(indHorizontalSlider).css({
            right: widthHorizontalSlider + 'px'
        });
        itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
        itemSwitchHorizontalSlider.removeClass('active');
        itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');
    });
    $('#prev').click(function() {//Переключение на предыдущий слайд
        itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
            right: widthHorizontalSlider + 'px'
        });
        if (indHorizontalSlider>0) {
            indHorizontalSlider--;
        } else {
            indHorizontalSlider=itemHorizontalSlider.length-1;
        }
        itemHorizontalSlider.eq(indHorizontalSlider).css({
            right: '-' + widthHorizontalSlider + 'px'
        });
        itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
        itemSwitchHorizontalSlider.removeClass('active');
        itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');
    });

    let priceBox= $('.price-box');
    priceBox.click(function () {
        priceBox.removeClass('price-box_active');
        $(this).addClass('price-box_active');
    })
});



