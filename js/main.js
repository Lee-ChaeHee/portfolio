/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



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



    const $container = $('#container');

    const container = document.querySelector('#container');


    function pager(nextPage){
        container.removeAttribute('class');

        setTimeout(()=>{
            container.setAttribute('class',nextPage);
        },700);
    }


    function wheelFunc(e){

        let value = e.deltaY;

        if(value < 0){ //up


            if($container.hasClass('page-3')){ // 1 > 2

                $('#section03').removeClass('open');
                pager('page-2');


            }else if($container.hasClass('page-2')){ // 2 > 3

                $('#section02').removeClass('open');
                pager('page-1');
            }






        }else{ //down


            if($container.hasClass('page-1')){ // 1 > 2

                $('#section02').addClass('open');
                pager('page-2');


            }else if($container.hasClass('page-2')){ // 2 > 3

                $('#section03').addClass('open');
                pager('page-3');
            }



        }


    }


    window.addEventListener('wheel',wheelFunc);





    $('#nav > ul > li').click(function () {


        $('#nav > ul > li').removeClass('on');
        $(this).addClass('on');


        if($('#nav > ul > li').eq(0).hasClass('on')){
            $('#section01').addClass('open');
            $('#section02,#section03').removeClass('open');
            pager('page-1');
            console.log(11111);

        }else if($('#nav > ul > li').eq(1).hasClass('on')){
            $('#section02').addClass('open');
            $('#section03').removeClass('open');
            pager('page-2');
            console.log(11111);

        }else if($('#nav > ul > li').eq(2).hasClass('on')){
            $('#section02').addClass('open');

            // setTimeout(()=>{
            //     $('#section03').addClass('open');
            // },1000)

            $('#section03').delay(600).queueAddClass('open');


            pager('page-3');
        }


    });










//==============================================================
});


$(function () {

    // scroll event
    $('#container').scroll(function () {
        var scrollTop = $('#container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================






        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);





        //===================================================================
        // nav on/off event
        $('#container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('#container .main > section:first').position().top;
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












