let product = ["A","B","C","D","E","F"];

function addComma(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function chart(){
    for(let i=1;i<7;i++){
        let price = Number($('.wrap ul li').eq(i).find('.price').val());
        let sale = Number($('.wrap ul li').eq(i).find('.quantity').val());
        let sum = Number(price * sale) ;
        
        $('.wrap ul li').eq(i).find('p').eq(3).text(sum);
    }

    let cht = document.querySelector('#chart');
    let ctx = cht.getContext('2d');
    ctx.clearRect(0,0,900,600);
    
    ctx.fillStyle="black";
    ctx.font = "700 20px 'Nanum Gothic Coding',monospace"
    ctx.textAlign="center";
    ctx.fillStyle="black";
    ctx.fillText("상품별 매출 현황",170,40);
    ctx.font = "400 15px 'Nanum Gothic Coding',monospace"
    ctx.fillStyle="rgb(59, 175, 175)";
    ctx.fillRect(150,70,40,10);
    ctx.fillStyle="gray"
    ctx.fillText("판매량",220,80);
    ctx.fillStyle="orangered";
    ctx.fillRect(150,98,40,4);
    ctx.beginPath();
    ctx.arc(170, 100, 5, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle="gray"
    ctx.fillText("총판매액",225,105);

    for(let i=0;i<9;i++){
        ctx.fillRect(150,150+(i*50),600,1);
        ctx.fillText(addComma(String(i*200)),125,550-(i*50));
    }
    ctx.fillRect(150,140,1,420);

    for(let i=0;i<6;i++){
        ctx.fillStyle="gray"
        ctx.font = "400 15px 'Nanum Gothic Coding',monospace"
        ctx.fillText(addComma(String(i*5000000)),795,550-(i*80));
        ctx.fillRect(250+(i*100),550,1,10);
        ctx.fillStyle="black"
        ctx.font = "700 18px 'Nanum Gothic Coding',monospace"
        ctx.fillText(String(product[i]),200+(i*100),580);
    }
    ctx.fillRect(750,140,1,420);

}
chart();

function graph1 (){
    let cht = document.querySelector('#chart');
    let ctx = cht.getContext('2d');
    for(let i=0;i<6;i++){
        let sell = Number($('.wrap ul li').eq(i+1).find('.quantity').val());
        ctx.fillStyle="rgb(59, 175, 175)";
        ctx.fillRect(190+(i*100),550-(sell/4),20,(sell/4));
        
    }
}

function graph2(){
    let cht = document.querySelector('#chart');
    let ctx = cht.getContext('2d');
    let selltotal=[];
    for(let i=0;i<6;i++){
        let total = Number($('.wrap ul li').eq(i+1).find('p').eq(3).text());
        selltotal.push(total);
    }
    let max = Math.max.apply(null, selltotal);

    for(let i=0;i<5;i++){
        let total = Number($('.wrap ul li').eq(i+1).find('p').eq(3).text());
        let total2 = Number($('.wrap ul li').eq(i+2).find('p').eq(3).text());
        ctx.beginPath();
            ctx.strokeStyle="orangered";
            ctx.lineWidth=3;
            ctx.moveTo(200+(i*100),550-(total/63000));
            ctx.lineTo(200+((i+1)*100),550-(total2/63000));
            ctx.stroke();
            ctx.closePath();
    }
    
    for(let i=0;i<6;i++){
        let total = Number($('.wrap ul li').eq(i+1).find('p').eq(3).text());
        ctx.beginPath();
        ctx.fillStyle="orangered";
        ctx.arc(200+(i*100),550-(total/63000), 5, 0, Math.PI * 2, false);
        ctx.fill();
        
        if(total == max){
            ctx.fillStyle="black";
            ctx.font="700 18px 'Nanum Gothic Coding',monospace"
            ctx.fillText(addComma(String(total)),200+(i*100),550-(total/60000));
            ctx.fillStyle="orange";
            ctx.fillText("매출1위",200+(i*100),550-(total/56000));
        }else{
            ctx.fillStyle="black";
            ctx.font="700 15px 'Nanum Gothic Coding',monospace"
            ctx.fillText(addComma(String(total)),200+(i*100),550-(total/60000));
        }
    }
}
$('#btn').on('click',function(){
    chart();
    graph1();
    graph2();
});

$('.wrap li input').keypress(function(e){
    if(e.keyCode == 13 || e.which == 13){
        chart();
        graph1();
        graph2();
    } 
});


$('#reset').on('click',function(){
    $(location).prop("href", location.href);
});