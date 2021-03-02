$(function(){
    
    // header
    $('.gnb').mouseenter(function(){
        $('.sub, .sub_bg').slideDown(100)
    })
    $('#header').mouseleave(function(){
        $('.sub, .sub_bg').hide()
    })
    
    // slider
    // 1. 첫번째 이미지를 제외한 나머지 보이지 않게 처리
    // 2. indi의 li를 클릭했을 때 on class가 붙어라
    // 3. indi의 li를 클릭했을 때 해당 이미지가 나와라(fadeIn)
    // 4. 자동롤링
    // 5. btnAuto를 클릭했을 때 play가 있으면 다시 실행, play가 없으면 롤링을 정지하여라
    
    $('.img_wrap:not(:first)').hide();
    
    // indi
    $('.indi li').click(function(){
        main_v = $(this).index()
        
        if( $(this).hasClass('on') == false ){
            $('.img_wrap').fadeOut()
        }
        //$('.img_wrap.v'+(main_v+1) ).fadeIn()
        $('.img_wrap:eq('+main_v+')').fadeIn()
        
        $('.indi li').removeClass('on')
        $(this).addClass('on')
    })
    
    var main_v = 0;
    var rolling = setInterval(main_visual,5000)
    
    function main_visual(){
        main_v++
        if( main_v > 2 ){
            main_v = 0
        }
        $('.img_wrap').fadeOut()
        $('.img_wrap:eq('+main_v+')').fadeIn()
        
        $('.indi li').removeClass('on')
        $('.indi li:eq('+main_v+')').addClass('on')
    }
    
    $('#btnAuto').click(function(){
        //if( play가 있으면 ){
        if( $(this).hasClass('play') == true ){
            // 롤링을 다시 시작
            rolling = setInterval(main_visual,5000)
            // play 삭제
            $(this).removeClass('play')
        } else {
            //롤링을 멈춰라
            clearInterval(rolling)
            //play 추가
            $(this).addClass('play')
        }
    })
    
    
    // news
    
    var news_n = 0;
    $('.news_btn .next').click(function(){
        news_n++
        $('.news_list').hide()
        if( news_n == 5 ){
            news_n = 0
        }
        $('.news_list:eq('+news_n+')').show()
        
        $('.cpage').text(news_n+1)
    })
    
    $('.news_btn .prev').click(function(){
        news_n--
        $('.news_list').hide()
        if(news_n == -1){
            news_n = 4
        }
        $('.news_list:eq('+news_n+')').show()
        
        $('.cpage').text(news_n+1)
    })
    
})










