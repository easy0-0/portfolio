/// <reference path="./jquery.d.ts" />

//스크롤
$(window).on('scroll',function(){
    let scr = Math.floor($(window).scrollTop());
    if(scr >= 5){
        $('.m_weather').hide();
        $('.weather').show();
    }else if(scr < 5){
        $('.m_weather').show();
        $('.weather').hide();
    }
    if(scr > 200){
        $('.fix').stop().slideDown(50);
    }else{
        $('.fix').stop().slideUp(50);
    }
});
$('.arrow').click(function(){
    $('html,body').stop().animate({
        scrollTop: "370px"
    },50);
});

$('.menu ul').mousemove(function(e){
    $(this).css({
        left:"-"+(e.pageX)+"px"
    });
});

//날씨
function m_weatherstart(){
    $('.m_weather ul').css({
        top: "-60px",
    },1000);
}
function m_weather(){
    setTimeout(function(){
        $('.m_weather li').eq(0).appendTo('.m_weather ul');
        $('.m_weather ul').css({
            top: "0"
        });
    },1000);
}
setInterval(() => {
    m_weatherstart();
    m_weather();
}, 5000);

function weatherstart(){
    $('.weathersl ul').css({
        top:"-100px"
    },1000);
}
function weather(){
    setTimeout(function(){
        $('.weathersl li').eq(0).appendTo('.weathersl ul');
        $('.weathersl ul').css({
            top:"0"
        });
    },1000);
}
setInterval(function(){
    weatherstart();
    weather();
},5000);

//now
$('.player ul').mousemove(function(e){
    $(this).css({
        left:"-"+((e.pageX)/10)+"px"
    });
});

//광고 제거
$('.banner').show();
$('#bannerbtn').click(function(){
    $('.banner').hide();
});

//슬라이드
$('#btn1').addClass('att');
$('#btn1').click(function(){
    $('.slide ul').css('left','0');
    $(this).addClass('att');
    $('#btn2').removeClass('att');
    $('#btn3').removeClass('att');
});
$('#btn2').click(function(){
    $('.slide ul').css('left','-100%');
    $(this).addClass('att');
    $('#btn1').removeClass('att');
    $('#btn3').removeClass('att');
});
$('#btn3').click(function(){
    $('.slide ul').css('left','-200%');
    $(this).addClass('att');
    $('#btn1').removeClass('att');
    $('#btn2').removeClass('att');
});

//글자크기
let sw=0;
function font(){

$('.minus').click(function(){
    if(sw == 0){
        $('html,body').css('fontSize','smaller');
        sw = -1;
    }else if(sw == 1){
        $('html,body').css('fontSize','16px');
        sw = 0;
    }
});
$('.plus').click(function(){
    if(sw == 0){
        $('html,body').css('fontSize','larger');
        sw = 1;
    }else if(sw == -1){
        $('html,body').css('fontSize','16px');
        sw = 0;
    }
});
}
font();

//검색창

$('.srch').click(function(){
    $('.bodywrap').hide();
    $('.searchwrap').show();
    $('.srch_focus').focus();
});
$('.close').click(function(){
    $('.bodywrap').show();
    $('.searchwrap').hide();
});
$('.back').click(function(){
    $('.bodywrap').show();
    $('.searchwrap').hide();
    $('.login').hide();
});

//로그인

$('.log').click(function(){
    $('.bodywrap').hide();
    $('.login').show();
});
$('.userid').click(function(){
    $('.pwd').css('border','1px solid transparent');
    $(this).css('border','1px solid var(--main-color)');
});
$('.pwd').click(function(){
    $('.userid').css('border','1px solid transparent');
    $(this).css('border','1px solid var(--main-color)');
});


$('#lang').change(function(){
    let lang = $('#lang').val();
    if(lang == "korean"){
        $('.kor').show();
        $('.eng').hide();
    }else if(lang == "english"){
        $('.kor').hide();
        $('.eng').show();
    }
});


function login(){
    let id = document.querySelector('#userid');
    let pwd = document.querySelector('#pwd');
    let id2 = document.querySelector('#userid2');
    let pwd2 = document.querySelector('#pwd2');
    document.querySelector('.btn').addEventListener('click',function(){
            if(id.value == ""){
                alert("아이디를 입력해주세요.");
                id.focus();
            }else if(pwd.value == ""){
                alert("비밀번호를 입력해주세요.");
                pwd.focus();
            }else if(id.value != "" && pwd.value != ""){
                alert(id.value+"님 로그인되었습니다.");
                location.href = "sub.html";
            }
    });
    document.querySelector('.btn2').addEventListener('click',function(){
        if(id2.value == ""){
            alert("Enter your username.");
            id2.focus();
        }else if(pwd2.value == ""){
            alert("Enter your password.");
            pwd2.focus();
        }else if(id2.value != "" && pwd2.value != ""){
            alert(id2.value+", You are logged in.");
            location.href = "sub.html";
        }
    });
}
login();
