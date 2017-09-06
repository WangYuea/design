/// <reference path="../assets/jquery/jquery.min.js" />

$(function () {
    //获取DOM元素
    var liPic = $(".banner").children().children();
    var ulObj = $(".banner").children();
    var dotLi = $(".banner").find("ol").children();
    //设置一个变量
    var index = 0;
    //定时器
    setInterval(function () {
        liPic.eq(index).css({ "animation": "move" + (index + 1) + " 1s linear", "z-index": 3 }).siblings().css({ "animation": "none", "z-index": 1 }).end().prev().css({ "animation": "none", "z-index": 2 });
        liPic.eq(index).find("a").addClass("current").end().siblings().find("a").removeClass("current");
        index++;
        if (index >= liPic.length) {
            index = 0;
        }
        dotLi.eq(index).addClass("current").siblings().removeClass("current");
    }, 5000);
    //鼠标经过选择的分页器
    dotLi.mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        index = $(this).index();
        liPic.eq(index).css({ "animation": "move" + (index + 1) + " 1s linear", "z-index": 3 }).siblings().css({ "animation": "none", "z-index": 1 }).end().prev().css({ "animation": "none", "z-index": 2 });
        liPic.eq(index).find("a").addClass("current").end().siblings().find("a").removeClass("current");
    });
    //设置300毫秒后为最后一个li的a添加样式
    setTimeout(function () {
        liPic.eq(2).find("a").addClass("current");
    }, 300)
});