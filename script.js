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
    let hideMenu = $('.navigation');//меню, которое необходимо скрытвать и показывать
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

        // //вертикальный слайдер
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
                    stopSlider();
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
                    setTimeout(startSlider, 8000);
                    console.log('таймер вкд');
                }
                 return false;
            } else {
                console.log('Невозможно переключать слайдер так как разное количество точек и слайдов');
            }
        });


    });