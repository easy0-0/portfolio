$('.banner .bx').bxSlider({
    mode : 'horizontal',
    auto : true,
    infiniteLoop : true,
    speed : 1500
});


$('header .bar').click(function(){
    $('.gnb').css('left','0');
});
$('.close').click(function(){
    $('.gnb').css('left','-70%');
});

$('.imgslide ul').mousemove(function(e){
    $('.imgslide ul').css({
        left : '-'+e.pageX+"px"
    });
});