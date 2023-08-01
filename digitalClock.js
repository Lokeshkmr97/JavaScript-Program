let hourHand=document.querySelector('.hour');
let minuteHand=document.querySelector('.minute');
let secondHand=document.querySelector('.second');

let ticking=()=>
{
    let currentDate=new Date();
    let getHour=currentDate.getHours();
    let getMin=currentDate.getMinutes();
    let getSec=currentDate.getSeconds();

    hourHand.textContent=getHour;
    minuteHand.textContent=getMin;
    secondHand.textContent=getSec;

}

setInterval(ticking,1000); // 1000 =1 sec