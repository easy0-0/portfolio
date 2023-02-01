
let cnt=0
let cnt2=0
$('#v01').on('click',function(){
    if(cnt == 0){
        $(this).get(0).play();
        cnt=1;
    }else{
        $(this).get(0).pause();
        cnt=0;
    }
});
$('#v02').on('click',function(){
    if(cnt2 == 0){
        $(this).get(0).play();
        cnt2=1;
    }else{
        $(this).get(0).pause();
        cnt2=0;
    }
});

