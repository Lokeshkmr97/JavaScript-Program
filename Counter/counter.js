let changeCounter=document.querySelector('p')

let changeCounterValue=()=>{
    //console.log(changeCounter.innerText, typeof changeCounter.innerText)
    let num=Number(changeCounter.innerText)+1
    changeCounter.textContent=num;
    console.log(num)
}