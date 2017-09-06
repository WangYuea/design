/// <reference path="../assets/jquery/jquery.min.js" />

$(function () {
    bannerAniamte();
    tabWelcome();
    desginShow();
    experienceText();
    projectBottomShow();
    
});
//网站头部轮播图代码
function bannerAniamte(){
    //获取轮播图所有需要的元素
    var banner = $(".banner-index");
    var moveWidth = banner.width();
    var ulObj = banner.children();
    var index = 0;
    var liObj = ulObj.children();
    var btn = $(".banner-btn");
    var btnLeft = btn.children(".banner-btn-fl");
    var btnRight = btn.children(".banner-btn-fr");
    var dots = $(".banner-text-box").find("ol").children();
    var liText = $(".banner-img-text");
    $(".banner-text-box").hover(function () {
        clearInterval(timer);
        btn.show(200);
    }, function () {
        timer = setInterval(moveRignt, 6000);
        btn.hide(200);
    });
    //鼠标经过文字清除定时器，离开定时器继续
    $(".banner-img-text").hover(function () {
        clearInterval(timer);
        btn.show(200);
    }, function () {
        timer = setInterval(moveRignt, 6000);
        btn.hide(200);
    });
    //鼠标经过圆点切换图片
    dots.mouseenter(function () {
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        ulObj.animate({ "left": -index * moveWidth + "px" }, 500);
        for (var i = 0; i < liText.length; i++) {
            liText.eq(i).removeClass("active");
        }
        liText.eq(index).addClass("active");
    })
    //dots.hover(function () {
    //    //console.log(timer);
    //    //clearInterval(timer);
    //    index = $(this).index();
    //    $(this).addClass("active").siblings().removeClass("active");
    //    ulObj.animate({ "left": -index * moveWidth + "px" }, 500);
    //    //for (var i = 0; i < liText.length; i++) {
    //    //    liText.eq(i).removeClass("active");
    //    //}
    //    //liText.eq(index).addClass("active");

    //}, function () {

    //    //timer = setInterval(moveRignt, 6000);
    //});

    //右侧按钮点击事件
    btnRight.on("click", function () {
        //clearInterval(timer);
        moveRignt();

    });
    //左侧按钮点击事件
    btnLeft.on("click", function () {
        //clearInterval(timer);   
        if (index <= 0) {
            index = liObj.length - 1;
            ulObj.css("left", -index * moveWidth + "px")
        }
        index--;
        ulObj.animate({ "left": -index * moveWidth + "px" }, 500);
        dots.eq(index).addClass("active").siblings("li").removeClass("active");
        for (var i = 0; i < liText.length; i++) {
            liText.eq(i).removeClass("active");
        }
        liText.eq(index).addClass("active");

    });
    //移动动画封装
    function moveRignt() {
        if (index == liObj.length - 1) {
            index = 0;
            ulObj.css("left", -index * moveWidth + "px")
        }
        index++;

        ulObj.animate({ "left": -index * moveWidth + "px" }, 500);
        if (index == liObj.length - 1) {
            dots.eq(0).addClass("active").siblings("li").removeClass("active");
            for (var i = 0; i < liText.length; i++) {
                liText.eq(i).removeClass("active");
            }
            liText.eq(0).addClass("active");
        }
        dots.eq(index).addClass("active").siblings("li").removeClass("active");
        for (var i = 0; i < liText.length; i++) {
            liText.eq(i).removeClass("active");
        }

        liText.eq(index).addClass("active");
    }
    //定时器
    var timer = setInterval(moveRignt, 6000);



    setTimeout(function () {
        $(".banner-title").css({ "transform": "translateY(0)", "opacity": 1 });
    }, 1000);
    setTimeout(function () {
        $(".banner-img-text").eq(0).addClass("active");
    }, 500);
}
//welcome 欢迎模块 的tab切换代码
function tabWelcome() {
    //获取所需要的元素
    var tabNav = $(".welcome-show-fl").children().children();
    var tabCon = $(".welcome-show-fr").children().children();
    //为左侧tab标题绑定单机事件
    tabNav.on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        tabCon.eq(index).slideDown(500).siblings().slideUp(500);
    });
}
//设计作品展示
function desginShow() {
    var desginShowTopLi = $(".desginShow-top").children().children();
    desginShowTopLi.hover(function () {
        $(this).find(".desginShow-top-black").css("transform", "scale(1)").addClass("current");
    }, function () {
        $(this).find(".desginShow-top-black").css("transform", "scale(0)").removeClass("current");
    })
    var desginShowBottomLi = $(".desginShow-bottom").children().children();
    desginShowBottomLi.hover(function () {
        $(this).find(".desginShow-bottom-black").css("transform", "scale(1)").addClass("current");
    }, function () {
        $(this).find(".desginShow-bottom-black").css("transform", "scale(0)").removeClass("current");
    })
}
//经历模块
function experienceText() {
    var aObj = $(".experience-con").children().children().find("a");
    aObj.hover(function () {
        $(this).next().css("animation", "move 2s ease-out 0.3s forwards");
       
    }, function () {
        $(this).next().css("animation", "");
    });
}
//底部图片展示图片
function projectBottomShow() {
    var projectImgWidth = $(".pic-ad-imgs").width();
    var projectImgDiv = $(".pic-ad-imgs").children();
    var projectAObj = projectImgDiv.children().find(".desName");
    var index = 0;
   var timer= setInterval(function () {
        projectImgDiv.animate({ "left": -index * projectImgWidth }, 200);
        index++;
        if (index >=projectAObj.length) {
            index = 0;
            projectImgDiv.css("left", -index * projectImgWidth);
        }
    }, 3000);
   projectAObj.hover(function () {
       clearInterval(timer);
   }, function () {
       timer = setInterval(function () {
           projectImgDiv.animate({ "left": -index * projectImgWidth }, 200);
           index++;
           if (index >= projectAObj.length) {
               index = 0;
               projectImgDiv.css("left", -index * projectImgWidth);
           }
       }, 3000);
    });
}