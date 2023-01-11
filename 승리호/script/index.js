$('#play01').on('click',function(){
    $('#v01').get(0).play();
    $(this).css('background','none');
});
$('#v01').on('click',function(){
    $(this).get(0).pause();
    $('#play01').css('background','url(../images/circle-play-regular.png) 100%/cover');
});

$('#play02').on('click',function(){
    $('#v02').get(0).play();
    $(this).css('background','none');
});
$('#v02').on('click',function(){
    $(this).get(0).pause();
    $('#play02').css('background','url(../images/circle-play-regular.png) 100%/cover');
});