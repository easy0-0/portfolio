$('#play01').on('click',function(){
    $('#v01').get(0).play();
    $(this).hide();
});
$('#v01').on('click',function(){
    $(this).get(0).pause();
    $('#play01').show();
});

$('#play02').on('click',function(){
    $('#v02').get(0).play();
    $(this).hide();
});
$('#v02').on('click',function(){
    $(this).get(0).pause();
    $('#play02').show();
});
