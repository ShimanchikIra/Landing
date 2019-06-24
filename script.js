$(document).ready(function() {
    //изменение header по скроллу
    let header = $(".header_top");//высота изначального header
    $(window).scroll(function () {
        if ($(this).scrollTop() > header.height() && header.hasClass('header_top')) {
            header.removeClass('header_top').addClass('header_fixed');
        } else if ($(this).scrollTop() <= header.height() && header.hasClass('header_fixed')) {
            header.removeClass("header_fixed").addClass('header_top');
        }
    });

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

    let timeSlide=3000;//время переключения слайдов
    // вертикальный слайдер
    let itemVerticalSlider = $('.content-vertical-slider-item');//элементы слайдера
    let heightVerticalSlider = itemVerticalSlider.height();//высота слайдера(то, наскольео нам надо менять расположение слайда для перелистываннния)
    let itemSwitchVerticalSlider = $('.switch-vertical-slider__item');//элементы переключателя слайдера
    let timerVerticalSlider = 0;
    let indVerticalSlider = 0;//счетчик слайдера
    //ставим слайлер  и переключатель в начальное положение
    itemVerticalSlider.eq(indVerticalSlider).css({
        top: 0
    });
    itemSwitchVerticalSlider.eq(indVerticalSlider).addClass('active');
    startVerticalSlider();//запускаем переключение слайдера

    function startVerticalSlider() {//переключение слайлов по тайсеру
        if (timerVerticalSlider > 0) { return;}
            timerVerticalSlider = setInterval(function () {
                itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({//убираем предыдущий слайд
                    top: '-' + heightVerticalSlider + 'px',
                });
                if (indVerticalSlider < itemVerticalSlider.length - 1) {//переходим к слудуюшему слайду, если текущий был не последним
                    indVerticalSlider++;
                } else {//переходим к первому слайду
                    indVerticalSlider = 0;
                }
                itemVerticalSlider.eq(indVerticalSlider).css({//устанавливаем новый слайдер
                    top: heightVerticalSlider + 'px'
                });
                itemVerticalSlider.eq(indVerticalSlider).stop(true, false).animate({
                    top: "0px"
                });
                itemSwitchVerticalSlider.removeClass('active');//меняем положение переключатеоя
                itemSwitchVerticalSlider.eq(indVerticalSlider).addClass('active');

            }, timeSlide);
        }

    $('.switch-vertical-slider').hover(function () {//при наведении на блок с переключатеоями слайдов таймер отстанавливается
        (function() {
            clearInterval(timerVerticalSlider);
            timerVerticalSlider = 0;
        })();
        }, function () {
        startVerticalSlider();
        });

     itemSwitchVerticalSlider.click(function () {//отслеживваем клики по переключателю
             if ((itemVerticalSlider.length === itemSwitchVerticalSlider.length) && (indVerticalSlider !== $(this).index())) {//если количество точек не совпадает с количесвом слайдов или слайдер находится в выбранном полодении , то не даем переключать слайды
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
    let itemHorizontalSlider = $('.content-horizontal-slider-item');//элементы слайдера
    let widthHorizontalSlider = itemHorizontalSlider.width();//ширина слайдера(то, наскольео нам надо менять расположение слайда для перелистываннния)
    let itemSwitchHorizontalSlider = $('.switch-horizontal-slider__item');//элементы переключателя слайдера
    let timerHorizontalSlider = 0;//таймер для горизонтального слайдера
    let indHorizontalSlider = 0;//счетчик слайдера
    //ставим слайлер  и переключатель слайдов в начальное положение
    itemHorizontalSlider.eq(indHorizontalSlider).css({
      right: 0
    });
    itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');

    startHorizontalSlider();//запускаем переключение слайдера
    function startHorizontalSlider() {
        if (timerHorizontalSlider > 0) { return; }
        timerHorizontalSlider = setInterval(function () {
            itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({//убилаем переключ
                right: '-' + widthHorizontalSlider + 'px'
            });
            if (indHorizontalSlider < itemHorizontalSlider.length - 1) {//переходим к слудуюшему слайду, если текущий был не последним
                indHorizontalSlider++;
            } else {//переходим к первому слайду, если текущий был последним
                indHorizontalSlider = 0;
            }
            itemHorizontalSlider.eq(indHorizontalSlider).css({//устаавливаем слайд
                right: widthHorizontalSlider + 'px'
            });
            itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                right: "0px"
            });
            itemSwitchHorizontalSlider.removeClass('active');//убираем переключатель с текущее положение
            itemSwitchHorizontalSlider.eq(indHorizontalSlider).addClass('active');//ставим переключатель с текущее положение
        }, timeSlide);
    }

    $('.switch-horizontal-slider, #next, #prev').hover(function () {//при наведении на блок с переключатеоями слайдов таймер отстанавливается
        (function() {
            clearInterval(timerHorizontalSlider);
            timerHorizontalSlider = 0;
        })();
    }, function () {
        startHorizontalSlider();
    });

    itemSwitchHorizontalSlider.click(function () {//отслеживваем клики по переключателю
        if (itemHorizontalSlider.length === itemSwitchHorizontalSlider.length) {//если количество точек не совпадает с количесвом слайдов, то не даем переключать слайды
            if (indHorizontalSlider < $(this).index() ) {//если слайд, на который мы хотим переключиться находится после текущего слайда, то листаем вправо
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({
                    right: '-' + widthHorizontalSlider + 'px'
                });
                indHorizontalSlider = $(this).index();//ставим слайдер в нужное положение
                itemHorizontalSlider.eq(indHorizontalSlider).css({
                    right: widthHorizontalSlider + 'px'
                });
                itemHorizontalSlider.eq(indHorizontalSlider).stop(true, false).animate({right: 0});
            } else if (indHorizontalSlider > $(this).index() ) {//если слайд, на который мы хотим переключиться находится до текущего слайда, то листаем влево
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



    $('#next').click(function() {//Переключение на слудующий слайд
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

    //клик по блоку с ценой
    let priceBox= $('.price-box');//блоки с ценой
    priceBox.click(function () {
        priceBox.removeClass('price-box_active');
        $(this).addClass('price-box_active');
    })
});



