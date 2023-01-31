/// <reference path="./jquery.d.ts" />

let cnt = 1;
let member = [];

$('header ul li').eq(0).css('backgroundColor','#333');
$('main').show();
$('header ul li').on('click',function(){
    if(cnt == 0){
        $(this).css('backgroundColor','#333');
        $('main').show();
        cnt = 1;
        
    }else{
        $('header ul li').css('backgroundColor','transparent');
        $('main').hide();
        cnt = 0;
    }
});

let cnt2 = 1;
$('nav ul li').eq(0).css('color','red');
$('nav ul li').eq(0).children('dl').slideDown();
$('nav ul li').eq(0).find('dl dt').css('color','orangered');
$('nav ul li').eq(0).find('dl dd').css('color','black');
$('nav ul li').on('click',function(){
    if(cnt2 == 0){
        $(this).css({
            color :'red'
        });
        $(this).find('span img').attr('src','./img/caret-up-solid.svg');
        $(this).children('dl').slideDown(300);
        $(this).find('dl dt, dl dd').css('color','black').mouseover(function(){$(this).css('color','orangered')}).mouseleave(function(){$(this).css('color','black')});
        cnt2 = 1;
    }
    else{
        $(this).children('dl').slideUp(300);
        $(this).find('span img').attr('src','./img/caret-down-solid.svg');
        $(this).css({
            color :'unset'
        });
        cnt2 = 0;
    }
});

$('#pagebtn').click(function(){
    $(this).css('background','rgba(182, 208, 216, 0.151)');
    $('#etcbtn').css('background','white');
    $('.page').css('zIndex','2');
    $('.etc').css('zIndex','1');
});
$('#etcbtn').click(function(){
    $(this).css('background','rgba(182, 208, 216, 0.151)');
    $('#pagebtn').css('background','white');
    $('.etc').css('zIndex','2');
    $('.page').css('zIndex','1');
});

//데이터 불러오기
$(function(){
    list("본사");
    $('#site').change(function(){
        list(this.value);
    });
});
function list(site){
    $('.res').empty();
    $.ajax({
        url :"./script/list.json",
        dataType : 'json',
        success : function(d){
            let str = $("<ul>");
                for( let i in d.DATA){
                    member.push(d.DATA[i]);
                    if(d.DATA[i].site == site){   
                    let row = $('<li class="view" />').append(
                        $('<p />').text(d.DATA[i].idnum),
                        $('<p />').text(d.DATA[i].membername),
                        $('<p />').text(d.DATA[i].part),
                        $('<p />').text(d.DATA[i].position),
                        $('<p />').text(d.DATA[i].site),
                        $('<p />').text(d.DATA[i].phone),
                        $('<p />').text(d.DATA[i].email),
                        $('<p />').text(d.DATA[i].address)
                    );
                    str.append(row);
                }
                $('.res').append(str);
            }            
        }
    });
};
$('.res').on('click','.view',function(){
    let num = $(this).children().eq(0).text();
    let idx = Number((num.charAt(6))-1);
    // console.log(idx);
    $('#idnum').val(member[idx].idnum);
    $('#membername').val(member[idx].membername);
    $('#engname').val(member[idx].engname);
    $('#regnum').val(member[idx].regnum);
    $('#birth').val(member[idx].birth);
    if(member[idx].gender == "male"){
        $('#gender_m').prop("checked",true);
        $('#pic img').attr('src',"./img/male.jpg");
    }else{
        $('#gender_f').prop("checked",true);
        $('#pic img').attr('src',"./img/female.jpg");
    }
    if(member[idx].marry == "married"){
        $('#married').prop("checked",true);
    }else{
        $('#single').prop("checked",true);
    }
    if(member[idx].nation == "korean"){
        $('#korean').prop("checked",true);
    }else{
        $('#foreigner').prop("checked",true);
    }
    $('#tel').val(member[idx].tel);
    $('#phone').val(member[idx].phone);
    $('#email').val(member[idx].email);
    $('#zipcode').val(member[idx].zipcode);
    $('#address').val(member[idx].address);
    $('#adddetail').val(member[idx].adddetail);
    if(member[idx].site == "지사"){
        $('#site2 #branch').prop("selected",true);
    }else if(member[idx].site == "본사"){
        $('#site2 #head').prop("selected",true);
    }
    $('#joindate').val(member[idx].joindate);
    $('#part').val(member[idx].part);
    $('#position').val(member[idx].position);
    
});
//검색
function searchlist(search, searchfor){
    
    let reg; 
    let chknull;
    let chknull2;
    let str = $("<ul>");
    if(search !=""){
        reg = RegExp(search,"u");
    }
    $('.res').empty();
    $.ajax({
        url :"./script/list.json",
        dataType : 'json',
        success : function(d){
            for(let i in d.DATA){
                if(search == ''){
                    member.push(d.DATA[i]);  
                        let row = $('<li class="view" />').append(
                            $('<p />').text(d.DATA[i].idnum),
                            $('<p />').text(d.DATA[i].membername),
                            $('<p />').text(d.DATA[i].part),
                            $('<p />').text(d.DATA[i].position),
                            $('<p />').text(d.DATA[i].site),
                            $('<p />').text(d.DATA[i].phone),
                            $('<p />').text(d.DATA[i].email),
                            $('<p />').text(d.DATA[i].address)
                        );
                        str.append(row);
                    }
                    $('.res').append(str);
                if(searchfor == "search_part"){
                    chknull = reg.exec(d.DATA[i].part);
                    // console.log(chknull);
                    if(chknull != null ){
                        member.push(d.DATA[i]);  
                        let row = $('<li class="view" />').append(
                            $('<p />').text(d.DATA[i].idnum),
                            $('<p />').text(d.DATA[i].membername),
                            $('<p />').text(d.DATA[i].part),
                            $('<p />').text(d.DATA[i].position),
                            $('<p />').text(d.DATA[i].site),
                            $('<p />').text(d.DATA[i].phone),
                            $('<p />').text(d.DATA[i].email),
                            $('<p />').text(d.DATA[i].address)
                        );
                        str.append(row);
                    }
                    $('.res').append(str);
                }
                if(searchfor == "search_pos"){
                    chknull2 = reg.exec(d.DATA[i].position);
                    // console.log(chknull2);
                    if(chknull2 != null){
                        member.push(d.DATA[i]);  
                        let row = $('<li class="view" />').append(
                            $('<p />').text(d.DATA[i].idnum),
                            $('<p />').text(d.DATA[i].membername),
                            $('<p />').text(d.DATA[i].part),
                            $('<p />').text(d.DATA[i].position),
                            $('<p />').text(d.DATA[i].site),
                            $('<p />').text(d.DATA[i].phone),
                            $('<p />').text(d.DATA[i].email),
                            $('<p />').text(d.DATA[i].address)
                        );
                        str.append(row);
                    }
                    $('.res').append(str);
                }
            }
        }
    });
}

$('#search').on('click',function(){
    let search = $('#search_word').val();
    let searchfor = $('#search_for').val();
    if(search == ""){
        searchlist("","");
    }else{
        searchlist(search, searchfor);
    }
});
$('#search_word').keypress(function(e){
    if(e.keyCode == 13 || e.which == 13){
        let search = $('#search_word').val();
        let searchfor = $('#search_for').val();
        if(search == ""){
            searchlist("","");
        }else{
            searchlist(search, searchfor);
        }
    } 
});
