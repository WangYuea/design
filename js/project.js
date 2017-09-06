/// <reference path="../assets/jquery/jquery.min.js" />
$(function () {
    var imgs = $(".pro-limg").children().children();
    var texts = $(".pro-con-fl-text").find('p').children();
    var index = 0;
    var btnLeft = $(".btn-fl");
    var btnRight = $(".btn-fr");
    btnLeft.on('click', function () {
        index--;
        if (index < 0) {
            index = imgs.length - 1;
        }
        imgs.eq(index).fadeIn(300).siblings().fadeOut(300);
        texts.eq(index).fadeIn(300).siblings().fadeOut(300);
    });
    btnRight.on('click', function () {
        index++;
        if (index > imgs.length - 1) {
            index = 0;
        }
        imgs.eq(index).fadeIn(300).siblings().fadeOut(300);
        texts.eq(index).fadeIn(300).siblings().fadeOut(300);
    })
});