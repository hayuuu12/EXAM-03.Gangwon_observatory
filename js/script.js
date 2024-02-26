$(function(){

    $('.gnb>li:eq(0)').hover(function(){
        $('.lnb:eq(0)').fadeToggle();
    });
    $('.gnb>li:eq(1)').hover(function(){
        $('.lnb:eq(1)').fadeToggle();
    });
    $('.gnb>li:eq(2)').hover(function(){
        $('.lnb:eq(2)').fadeToggle();
    });
    $('.gnb>li:eq(3)').hover(function(){
        $('.lnb:eq(3)').fadeToggle();
    });


    $('.tabnav>li').click(function(e){
        e.preventDefault();
        $('.tabnav>li').removeClass('active');
        const href = $(this).find('a').attr('href');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $(href).addClass('active');
     });
     


    //POPUP창
    $('.pop').click(function(e){
        e.preventDefault();
        $('.popup').fadeIn();
     });

     $('.close').click(function(){
        $('.popup').fadeOut();
     });

}); //JQ


// var num=1;
// $('.heroin>img').fadeOut(0);
// $('.heroin>img').eq(num).fadeIn(0); 

// setInterval(function(){
//     if(num<3) {
//         num++;
//     }else{
//         num=0;
//     }
//     $('.heroin>img').fadeOut('slow');
//     $('.heroin>img').eq(num).fadeIn('slow');
// },3000);

$(document).ready(function(){
    var slides = 3;
    var cnt = 0;

    function slide_func(){
        cnt = cnt == slides ? 0 : cnt + 1;

        $(".heroin>img").fadeOut(500);
        $(".heroin>img").eq(cnt).fadeIn(500);
    }
    setInterval(slide_func, 3000);
});








// function fadeToggle(){
//     $('.heroin').animate({
//         fadeToggle
//      }, 300, function(){
//         $('.heroin img:eq(0)').clone().appendTo('.heroin');
//         $('.heroin img:eq(0)').remove();
//      });
// }


// function fadeToggle(){
//     $('.heroin').fadeToggle("slow", function(){
//         $('.heroin img:eq(0)').clone().appendTo('.heroin');
//         $('.heroin img:eq(0)').remove();
//     });
// }
// setInterval(fadeToggle, 3000); //함수를 3초간 무제한 반복


// setInterval(function(){
//     $('.heroin > img:eq(0)')
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo('.heroin');
// },3000);