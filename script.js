$(document).ready(function(){
    //изменение header по скроллу
    var header = $(".header_top");
    var heightHeader = header.height(); // высота шапки
    $(window).scroll(function(){
        if ( $(this).scrollTop() > heightHeader && header.hasClass('header_top') ){
            header.removeClass('header_top').addClass('header_fixed');
        } else if($(this).scrollTop() <= heightHeader && header.hasClass('header_fixed')) {
            header.removeClass("header_fixed").addClass('header_top');
        }
    });//scroll

    //отображение меню в header_top по нажатию на кнопку
    var navButton=$('.nav-button');//кнопка для скрытия/отображения меню в header на первой странице
    var hideMenu=$('.navigation');//меню, которое необходимо скрытвать и показывать
    navButton.click(function () {
        $(this).toggleClass("nav-button_open");
        if ($(this).hasClass('nav-button_open')){
            hideMenu.fadeTo('slow',1);
        }
        else {
            hideMenu.fadeTo('slow',0);
        }
    });
});
