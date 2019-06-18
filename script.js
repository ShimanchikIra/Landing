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

    $(".scroll-button").click(function() {
        $('html,body').animate({
                scrollTop: $("#scroll").offset().top},
            'slow');
    });




    var img=document.getElementsByClassName('vertical-slider__img')[0];//получвем элемент, в который записывается цитата
    var title=document.getElementsByClassName('vertical-slider__title')[0];//получвем элемент, в который записывается автор
    var text=$('.vertical-slider__text')[0];

    text.innerHTML=mass[0]['text'];
    // var n=document.getElementById('numQuotes').children;//получвем массив элемент radio

    img.src = mass[0]['link'];//при загрузке вставляем в HTML первую цитату
    title.innerHTML=mass[0]['title'];//и ее автора
    // n[0].checked="checked";// и выбираем первый radio
    // var i=1;//счетчик для номера цитаты
    //
    // //функция, которая отслеживает изменение radio и записывает цитату, номер которой мы выбрали
    // for(let j=0; j<n.length; j++) {
    //     n[j].onchange = () => {
    //         p.innerHTML = l[j]['quote'];
    //         s.innerHTML=l[j]['author'];
    //         i=j;
    //     };
    // }
    // //функция, которая меняет цитаты на странице (используется в таймере)
    // function slider(arr) {
    //     if (i!==arr.length){
    //         p.innerHTML = l[i]['quote'];
    //         s.innerHTML=l[i]['author'];
    //         n[i].checked="checked";
    //         return i++;
    //
    //     } else {
    //         p.innerHTML = l[0]['quote'];
    //         s.innerHTML=l[0]['author'];
    //         n[0].checked="checked";
    //         return i=0;
    //     }
    //
    // }
    //
    // setInterval(slider, 5000, l);

});
var mass = [//массив с цитатами
    {
        link: "img/benefit1.png",
        title: "lokk kkkk 1111",
        text: "2: A new email service being developed by a group from MIT and CERN promises to bring secure,\n" +
            "encrypted email to the masses and keep sensitive information away from prying eyes.",
        list: {
            f: "1",
            g: "2",
            y: "3"
        }
    },
    {
        link: "img/TimelinePC.png",
        title: "lokk kkkk 22222",
        text: "2: A new email service being developed by a group from MIT and CERN promises to bring secure,\n" +
            "encrypted email to the masses and keep sensitive information away from prying eyes."

    },
    {
        link: "img/TimelinePC.png",
        title: "lokk kkkk 3333",
        text: "2: A new email service being developed by a group from MIT and CERN promises to bring secure,\n" +
            "encrypted email to the masses and keep sensitive information away from prying eyes."
    }
];
