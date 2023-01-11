/// <reference path="./jquery.d.ts" />


$('ul li').on('click',function(e){
    e.preventDefault();
});
$('a').on('click',function(e){
    e.preventDefault();
});

//메뉴
let cnt = 0;
$('.nav ul .sd').on('click',function(){
    if(cnt == 0){
        $(this).css({
            backgroundColor:'black',
            color :'white'
        });
        $(this).find('.arrow').attr('src','./images/chevron-up-solid.svg');
        $(this).children('dl').slideDown(300);
        cnt = 1;
    }
    else{
        $(this).children('dl').slideUp(300);
        $(this).find('.arrow').attr('src','./images/chevron-down-solid.svg');
        $(this).css({
            backgroundColor:'transparent',
            color :'unset'
        });
        cnt = 0;
    }
});

$('.list li').on('mouseover',function(){
    $(this).css('color','indigo');
    $(this).children('.sub').stop().css('display','block');
});
$('.list li').on('mouseleave',function(){
    $(this).css('color','unset');
    $(this).children('.sub').stop().css('display','none');
});
$('.inner dl').on('mouseover',function(){
    $(this).css('color','orange');
});
$('.inner dl').on('mouseleave',function(){
    $(this).css('color','white');
});
//슬라이드
let i = 0;

function slstart(){
    $('main .slide').stop().css({
    'left':'-1440px',
    'transition':'all 0.5s'
});}

function sl(){
    setTimeout(function(){
    $('.slide a').eq(0).appendTo('.slide');
    $('main .slide').css('left', '0').css('transition','none');
},500);}

function slindex(){if(i < 9){
    i++;
    $('.slmenu li').eq(i-1).stop().css('backgroundColor','white');
    setTimeout(function(){
        $('.slmenu li').eq(i-1).stop().next().css('backgroundColor','indigo');
    },10);
}else{
    $('.slmenu li').eq(i-1).stop().next().css('backgroundColor','white');
    $('.slmenu li').eq(0).stop().css('backgroundColor','indigo');
    i = 0;
}
}


let inter = setInterval(function(){
    slstart();
    sl();
    slindex();
},5000);

let sw = 0;
$('#pause').on('click',function(){
    if(sw == 0){
        clearInterval(inter);
        $('#pause img').attr('src','./images/circle-play-solid.svg');
        sw = 1;
    }else{
        slstart();
            sl();
            slindex();
        inter = setInterval(function(){
            slstart();
            sl();
            slindex();
        },5000);
        $('#pause img').attr('src','./images/circle-pause-solid.svg');
        sw = 0;
    }
});

//스크롤
$('.page').on('mousewheel',function(e,d){
    if(d>0){
        let prev = $(this).prev().offset().top;
        $('html,body').stop().animate({
            'scrollTop': prev
        },1000,'swing');
    }else if(d<0){
        let next = $(this).next().offset().top;
        $('html,body').stop().animate({
            'scrollTop': next
        },1000,'swing');
    }
});

//전시 슬라이드
function swipestart(){
    $('.show .swipe').stop().css({
    'left':'-380px',
    'transition':'all 0.3s'
});}

function swipe(){
    setTimeout(function(){
    $('.swipe ul').eq(0).appendTo('.swipe');
    $('.show .swipe').css('left', '0').css('transition','none');
},300);}

let inter2 = setInterval(function(){
    swipestart();
    swipe();
},3600);


let sw2 = 0;
$('#showpause').on('click',function(){
    if(sw2 == 0){
        clearInterval(inter2);
        $('#showpause img').attr('src','./images/play-solid.svg');
        sw2 = 1;
    }else{
        swipestart();
        swipe();
        inter2 = setInterval(function(){
            swipestart();
            swipe();
        },3300);
        $('#showpause img').attr('src','./images/pause-solid.svg');
        sw2 = 0;
    }
});
$('#showright').click(function(){
    $('.show .swipe').stop().css({
        'left':'-380px',
        'transition':'all 0.3s'
    });
    setTimeout(function(){
        $('.swipe ul').eq(0).appendTo('.swipe');
        $('.show .swipe').css('left', '0').css('transition','none');
    },300);
});
$('#showleft').click(function(){
    $('.swipe ul').last().prependTo('.swipe');
    $('.show .swipe').stop().css({
        'left':'-380px',
    });
    $('.show .swipe').stop().animate({
        'left': '0',
    },300);
});

//탭
$('.tab1').show();
$('.tab2').hide();
$('.tab3').hide();
$('.tab4').hide();

$('#tab1').click(function(){
    $('.notice ul').hide();
    $('.tab1').show();
    $('.notice button').css({
        fontWeight : 'normal',
        borderBottom : 'none',
        color : 'gray'
    });
    $(this).css({
        fontWeight : 'bold',
        borderBottom : '3px solid black',
        color : 'black'
    });
});
$('#tab2').click(function(){
    $('.notice ul').hide();
    $('.tab2').show();
    $('.notice button').css({
        fontWeight : 'normal',
        borderBottom : 'none',
        color : 'gray'
    });
    $(this).css({
        fontWeight : 'bold',
        borderBottom : '3px solid black',
        color : 'black'
    });
});
$('#tab3').click(function(){
    $('.notice ul').hide();
    $('.tab3').show();
    $('.notice button').css({
        fontWeight : 'normal',
        borderBottom : 'none',
        color : 'gray'
    });
    $(this).css({
        fontWeight : 'bold',
        borderBottom : '3px solid black',
        color : 'black'
    });
});
$('#tab4').click(function(){
    $('.notice ul').hide();
    $('.tab4').show();
    $('.notice button').css({
        fontWeight : 'normal',
        borderBottom : 'none',
        color : 'gray'
    });
    $(this).css({
        fontWeight : 'bold',
        borderBottom : '3px solid black',
        color : 'black'
    });
});

//배너 슬라이드
let j = 0;
function bannerstart(){
    $('.bannersl').stop().css({
    'left':'-100%',
    'transition':'all 1s'
});}

function bannersl(){
    setTimeout(function(){
    $('.bannersl a').eq(0).appendTo('.bannersl');
    $('.bannersl').css({
        'left': '0',
        'transition' : 'none'
    });
},1000);}

function bannerindex(){
    if(j < 2){
        j++;
        $('.bannermenu li').eq(j-1).stop().css('backgroundColor','white');
        setTimeout(function(){
            $('.bannermenu li').eq(j-1).stop().next().css('backgroundColor','indigo');
        },100);
}else{
    $('.bannermenu li').eq(j-1).stop().next().css('backgroundColor','white');
    $('.bannermenu li').eq(0).stop().css('backgroundColor','indigo');
    j = 0;
}
}


let inter3 = setInterval(function(){
    bannerstart();
    bannersl();
    bannerindex();
},3000);

let sw3 = 0;
$('#bannerpause').on('click',function(){
    if(sw3 == 0){
        clearInterval(inter3);
        $('#bannerpause img').attr('src','./images/circle-play-solid.svg');
        sw3 = 1;
    }else{
            bannerstart();
            bannersl();
            bannerindex();
        inter3 = setInterval(function(){
            bannerstart();
            bannersl();
            bannerindex();
        },3000);
        $('#bannerpause img').attr('src','./images/circle-pause-solid.svg');
        sw3 = 0;
    }
});

//이벤트
$('.eventright').on('click',function(){
    $('.event .num').text(2);
    $('.event ul').css({
        left : '-100%',
        transition : 'all 0.3s'
    });
});
$('.eventleft').on('click',function(){
    $('.event .num').text(1);
    $('.event ul').css({
        left : '0',
        transition : 'all 0.3s'
    });
});

$('.online img').on('click',function(){
    $('.online video').css('display','block').get(0).play();
    $('#close').css('display','block');
});
$('#close').on('click',function(){
    $('.online video').css('display','none').get(0).pause();
    $('#close').css('display','none');
});

//footer 메뉴
let cnt2 = 0;
$('.footmenu li').on('click',function(){
    if(cnt2 == 0){
        $(this).children('dl').slideDown(300);
        $(this).css({
            backgroundColor:'black',
            color :'white'
        });
        $(this).find('img').attr('src','./images/footer_down.svg');
        cnt2 = 1;
    }
    else{
        $(this).children('dl').slideUp(300);
        $(this).find('img').attr('src','./images/footer_up.svg');
        $(this).css({
            backgroundColor:'transparent',
            color :'black'
        });
        cnt2 = 0;
    }
    console.log(cnt2);
});