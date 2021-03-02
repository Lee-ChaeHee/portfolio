

$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.


    $("#container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================









    // nav section move event
    $("#nav > li > a, .sectionBtn").click(function () {
        var posY = $($(this).attr("href")).position().top;
        $('.container').stop().animate({"scrollTop": posY}, 1200, 'easeInOutExpo');
        return false;
    });


    let bgHeight = $('#container .main section');
    let heightValue = bgHeight.height();
    let section02 = $('#section02');

    console.log(bgHeight.height());
    function init(){

        console.log(innerWidth);


        if(matchMedia("screen and (max-width: 1920px) and (min-width: 1681px)").matches){

            console.log('데스크탑');

            if(matchMedia("screen and (max-width: 1920px) and (min-width: 1746px)").matches){
                // bgHeight.css('height',`${980-89}px`);
                bgHeight.css('height',`${heightValue}px`);
                console.log('100%');

            }else if(matchMedia("screen and (max-width: 1745px) and (min-width: 1537px)").matches){
                bgHeight.css('height',`${heightValue-89}px`);
                console.log('110%');

            }else if(matchMedia("screen and (max-width: 1536px)").matches){
                bgHeight.css('height',`${heightValue-196}px`);
                console.log('125%');
            }



        }else if(matchMedia("screen and (max-width: 1680px)").matches){
            console.log('노트북');

            if(matchMedia("screen and (max-width: 1680px) and (min-width: 1528px)").matches){
                bgHeight.css('height',`${heightValue-122}px`);
                console.log('100%');

            }else if(matchMedia("screen and (max-width: 1527px) and (min-width: 1345px)").matches){
                bgHeight.css('height',`${heightValue-200}px`);
                console.log('110%');

            }else if(matchMedia("screen and (max-width: 1344px)").matches){
                bgHeight.css('height',`${heightValue-293}px`);
                console.log('125%');
            }


        }



    }

    // init();
    // window.addEventListener('resize',init);


//==============================================================
});


$(function () {

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================






        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);





        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












