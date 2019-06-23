$(document).ready(function() {
    //изменение header по скроллу
    let header = $(".header_top");
    //let heightHeader = header.height(); // высота шапки
    $(window).scroll(function () {
        if ($(this).scrollTop() > header.height() && header.hasClass('header_top')) {
            header.removeClass('header_top').addClass('header_fixed');
        } else if ($(this).scrollTop() <= header.height() && header.hasClass('header_fixed')) {
            header.removeClass("header_fixed").addClass('header_top');
        }
    });//scroll

    //отображение меню в header_top по нажатию на кнопку
    let navButton = $('.nav-button');//кнопка для скрытия/отображения меню в header на первой странице
    let hideMenu = $('.nav');//меню, которое необходимо скрытвать и показывать
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

        // //вертикальный слайдер//переделать через children
    let itemVerticalSlider = $('.content-vertical-slider-item');//элементы слайдера
    let heightVerticalSlider = itemVerticalSlider.height();//высота слайдера(то, наскольео нам надо менять расположение слайда для перелистываннния)
    let itemSwitchVerticalSlider = $('.switch-vertical-slider__item');//элементы переключателя слайдера
    let timer = 0;
    console.log(timer);
    let indVerticalSlider = 0;//счетчик слайдера
    console.log('pic_index=' + indVerticalSlider);
    //ставим слайлер  и переключатель в начальное положение
    itemVerticalSlider.eq(indVerticalSlider).css({
        top: 0
    });
    itemSwitchVerticalSlider.eq(indVerticalSlider).addClass('active');

    startSlider();//запускаем переключение слайдера
    function startSlider() {
        if (timer > 0) { return; }
            timer = setInterval(function () {
                itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                    top: '-' + heightVerticalSlider + 'px',
                });
                if (indVerticalSlider < itemVerticalSlider.length - 1) {
                    indVerticalSlider++;
                    console.log('pic_index=' + indVerticalSlider);
                } else {
                    indVerticalSlider = 0;
                    console.log('pic_index=' + indVerticalSlider);
                }
                itemVerticalSlider.eq(indVerticalSlider).css({
                    top: heightVerticalSlider + 'px'
                });
                itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                    top: "0px"
                });

                itemSwitchVerticalSlider.removeClass('active');
                itemSwitchVerticalSlider.eq(indVerticalSlider).addClass('active');

            }, 3000);
        console.log(timer);
        }

    function stopSlider() {
        clearInterval(timer);
        timer = 0;
        console.log(timer);
    }

    $('.switch-vertical-slider').hover(function () {
        stopSlider();
        }, function () {
        startSlider();
        });
    itemSwitchVerticalSlider.click(function () {//отслеживваем клики по переключателю
             if (itemVerticalSlider.length === itemSwitchVerticalSlider.length) {//если количество точек не совпадает с количесвом слайдов, то не даем переключать слайды
                console.log(indVerticalSlider, $(this).index());
                if (indVerticalSlider !== $(this).index()) {
                   // stopSlider();
                    itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                        top: '-' + heightVerticalSlider + 'px'
                    });
                    console.log('pic_index=' + indVerticalSlider);
                    indVerticalSlider = $(this).index();
                    itemVerticalSlider.eq(indVerticalSlider).css({
                        top: heightVerticalSlider + 'px'
                    });
                    itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({top: 0});
                    console.log('pic_index=' + indVerticalSlider);
                    itemSwitchVerticalSlider.removeClass('active');
                    $(this).addClass('active');

                    console.log('таймер остановлен');
                   // setTimeout(startSlider, 8000);
                    console.log('таймер вкд');
                }
                 return false;
            } else {
                console.log('Невозможно переключать слайдер так как разное количество точек и слайдов');
            }
        });




// //горизонтальный слайдер
let itemHorizontalSlider = $('.content-horizontal-slider-item');//элементы слайдера
let widthHorizontalSlider = itemHorizontalSlider.width();//ширина слайдера(то, наскольео нам надо менять расположение слайда для перелистываннния)
let itemSwitchHorizontalSlider = $('.switch-horizontal-slider__item');//элементы переключателя слайдера
let timer2 = 0;
console.log('width: ' + widthHorizontalSlider);
let indHorizontalSlider = 0;//счетчик слайдера
//console.log('pic_index=' + indHorizontalSlider);
//ставим слайлер  и переключатель в начальное положение
itemHorizontalSlider.eq(indHorizontalSlider).css({
    right: 0
});
itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');


    itemSwitchHorizontalSlider.click(function () {//отслеживваем клики по переключателю (немного говых учлоыий)
        if (itemHorizontalSlider.length === itemSwitchHorizontalSlider.length) {//если количество точек не совпадает с количесвом слайдов, то не даем переключать слайды
            console.log(indHorizontalSlider, $(this).index());
            if (indHorizontalSlider < $(this).index() ) {

                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                    right: '-' + widthHorizontalSlider + 'px'
                });
                //console.log('pic_index=' + indVerticalSlider);
                indHorizontalSlider = $(this).index();
                itemHorizontalSlider.eq(indHorizontalSlider).css({
                    right: widthHorizontalSlider + 'px'
                });
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
                //console.log('pic_index=' + indVerticalSlider);

                //console.log('таймер остановлен');
                //console.log('таймер вкд');
            } else if (indHorizontalSlider > $(this).index() ) {
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                    right: widthHorizontalSlider + 'px'
                });
                //console.log('pic_index=' + indVerticalSlider);
                indHorizontalSlider = $(this).index();
                itemHorizontalSlider.eq(indHorizontalSlider).css({
                    right: '-' + widthHorizontalSlider + 'px'
                });
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
                //console.log('pic_index=' + indVerticalSlider);


            }

            itemSwitchHorizontalSlider.removeClass('active');
            $(this).addClass('active');
            // stopSlider2();
            // setTimeout(startSlider2, 8000);
            return false;
        } else {
            console.log('Невозможно переключать слайдер так как разное количество точек и слайдов');
        }
    });

    startSlider2();//запускаем переключение слайдера
    function startSlider2() {
        if (timer2 > 0) { return; }
        timer2 = setInterval(function () {
            itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                right: '-' + widthHorizontalSlider + 'px'
            });
            if (indHorizontalSlider < itemHorizontalSlider.length - 1) {
                indHorizontalSlider++;
                //console.log('pic_index=' + indVerticalSlider);
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

        }, 3000);
    }

    function stopSlider2() {
        clearInterval(timer2);
        timer2 = 0;
        console.log(timer2);
    }

    $('.switch-horizontal-slider').hover(function () {
        stopSlider2();
    }, function () {
        startSlider2();
    });
function nextSlide() {
    itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
        right: '-' + widthHorizontalSlider + 'px'
    });
    if (indHorizontalSlider<itemHorizontalSlider.length-1) {
        indHorizontalSlider++;
    } else {
        indHorizontalSlider=0;
    }
    //console.log('pic_index=' + indVerticalSlider);
    itemHorizontalSlider.eq(indHorizontalSlider).css({
        right: widthHorizontalSlider + 'px'
    });
    itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
    itemSwitchHorizontalSlider.removeClass('active');
    itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');

}
    $('#next').click(function() {
        stopSlider2();
        nextSlide();
        setTimeout(startSlider2, 8000);
    });
    function prevSlide() {
        itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
            right: widthHorizontalSlider + 'px'
        });
        if (indHorizontalSlider>0) {
            indHorizontalSlider--;
        } else {
            indHorizontalSlider=itemHorizontalSlider.length-1;
        }
        //console.log('pic_index=' + indVerticalSlider);
        //indHorizontalSlider = $(this).index();
        itemHorizontalSlider.eq(indHorizontalSlider).css({
            right: '-' + widthHorizontalSlider + 'px'
        });
        itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
        itemSwitchHorizontalSlider.removeClass('active');
        itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');
    }
    $('#prev').click(function() {
        stopSlider2();
        prevSlide();
        setTimeout(startSlider2, 8000);

    });

    //
    let priceBox= $('.price-box');
   priceBox.click(function () {
        priceBox.removeClass('price-box_active');
        $(this).addClass('price-box_active');
    })
});



