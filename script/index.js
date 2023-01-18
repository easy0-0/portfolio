/// <reference path="./jquery.d.ts" />

var spinner;
$(document).ready(function(){
    spinner = new Spinner().spin().el;
    $('body').append(spinner);
});
$(window).load(function(){
        $(spinner).fadeOut();
    
        
$('.page').on('mousewheel',function(e,d){
    if(d>0){
        let prev = $(this).prev().offset().top;
        let idx = ($(this).index())-1;
        $('html,body').stop().animate({
            'scrollTop': prev
        },1000,'easeOutCirc');
    }else if(d<0){
        let next = $(this).next().offset().top;
        let idx = ($(this).index())+1;
        $('html,body').stop().animate({
            'scrollTop': next
        },1000,'easeOutCirc');
    }
});

$('.li2').hide();
$('header ul li').on('click',function(e){
    let ht =$('.page').eq(0).height();
    let index = $(this).index();
    let t = ht * index;
    $('html,body').stop().animate({
        'scrollTop':t
    },1000,'easeOutCirc');
    if(index != 0){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(index).hide();
        $('.li1').eq(index).show().css('textDecoration','underline');
        $('header').css({
            'width':'20%',
            'transition':'all 0.5s'
        });
    }else{
        $('.li2').hide();
        $('.li1').show().css('textDecoration','none');
        $('header').css({
            'width':'30%',
            'transition':'all 0.5s'
        });
    }
});
function aboutmove(){
    $('.left').removeClass('removeleft');
        $('.right').removeClass('removeright');
        $('.left').addClass('moveleft');
        $('.right').addClass('moveright');
}
function aboutremove(){
    $('.left').removeClass('moveleft');
        $('.right').removeClass('moveright');
        $('.left').addClass('removeleft');
        $('.right').addClass('removeright');
}

function workmove(){
    $('.work .section01').addClass('move1');
    $('.work .section02').addClass('move2');
    $('.work .section03').addClass('move3');
    $('.work .section04').addClass('move4');
    $('.work .section05').addClass('move5');
    $('.work .btnleft').addClass('appearLeft');
    $('.work .btnright').addClass('appearRight');
}
function workremove(){
    $('.work .section01').removeClass('move1');
    $('.work .section02').removeClass('move2');
    $('.work .section03').removeClass('move3');
    $('.work .section04').removeClass('move4');
    $('.work .section05').removeClass('move5');
    $('.work .btnleft').removeClass('appearLeft');
    $('.work .btnright').removeClass('appearRight');
}

$('#pager li').hide();
$('#pager').hide();

$(window).on('scroll',function(){
    let scr = Math.floor($(window).scrollTop());
    let ht =$('.page').eq(0).height();
    if(scr >= 0 && scr < ht){
        $('.li2').hide();
        $('.li1').show().css('textDecoration','none');
        $('header').css({
            'width':'30%',
            'transition':'all 0.5s'
        });
        $('#pager li').stop().animate({
            'top': '20px'
        },300,"easeOutBounce");
        $('#pager li').stop().hide();
        $('#pager').stop().hide();
        aboutremove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workremove();
    }else if(scr >= ht && scr < ht*2){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(1).hide();
        $('.li1').eq(1).show().css('textDecoration','underline');
        $('header').css({
            'width':'20%',
            'transition':'all 0.5s'
        });
        $('#pager').show();
        $('#pager li').show();
        $('#pager li').stop().animate({
            'top': '50px'
        },300,"easeOutBounce");
        aboutmove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workremove();
    }else if(scr >= ht*2 && scr < ht*3){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(2).hide();
        $('.li1').eq(2).show().css('textDecoration','underline');
        $('#pager li').stop().animate({
            'top': '80px'
        },300,"easeOutBounce");
        aboutremove();
        count();
        $('.cls1').addClass('cani01');
        $('.cls2').addClass('cani02');
        $('.cls3').addClass('cani03');
        workremove();
    }else if(scr >= ht*3 && scr < ht*4){
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(3).hide();
        $('.li1').eq(3).show().css('textDecoration','underline');
        $('#pager li').stop().animate({
            'top': '110px'
        },300,"easeOutBounce");
        aboutremove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workmove();
    }else{
        $('.li1').hide();
        $('.li2').show();
        $('.li2').eq(4).hide();
        $('.li1').eq(4).show().css('textDecoration','underline');
        $('#pager li').stop().animate({
            'top': '140px'
        },300,"easeOutBounce");
        aboutremove();
        $('.cls1').removeClass('cani01');
        $('.cls2').removeClass('cani02');
        $('.cls3').removeClass('cani03');
        workremove();
        return count();
        
    }
});

$('#title').delay(1000).css({
    'animation':'title 1.5s forwards cubic-bezier(.42,0,1,1)'
});

$('#subtitle').hide();
$('header').delay(500).animate({
    'left': '0',
    'opacity' : '1'
},2000,function(){
    $('#subtitle').show().css({
        'animation':'type 3s steps(22), cur 1s steps(1) infinite'
    });
});


function count(){
    count0();
function count0(){
    let cnt=0;
    id0 = setInterval(count0,10);
    function count0(){
        cnt++;
        if(cnt > 90){clearInterval(id0);}
        else{$('.skinner ul li').eq(0).find('span').text(cnt+"%");
        $('.skinner ul li').eq(1).find('span').text(cnt+"%");
        $('.skinner ul li').eq(4).find('span').text(cnt+"%");
        $('.skinner ul li').eq(5).find('span').text(cnt+"%");}
}}
count1();
function count1(){
    let cnt1=0;
    id1 = setInterval(count1,10);
    function count1(){
        cnt1++;
        if(cnt1 > 70){clearInterval(id1);}
        else{$('.skinner ul li').eq(2).find('span').text(cnt1+"%");
        $('.skinner ul li').eq(7).find('span').text(cnt1+"%");}
}}
count2();
function count2(){
    let cnt2=0;
    id2 = setInterval(count2,10);
    function count2(){
        cnt2++;
        if(cnt2 > 75){clearInterval(id2);}
        else{$('.skinner ul li').eq(3).find('span').text(cnt2+"%");
        $('.skinner ul li').eq(6).find('span').text(cnt2+"%");}
}}
}

$('#btnright').click(function(){
    $('.workinner').css('left','-100%');
    $('.workinner2').css('left','0');
});
$('#btnleft').click(function(){
    $('.workinner2').css('left','100%');
    $('.workinner').css('left','0');
});


});
