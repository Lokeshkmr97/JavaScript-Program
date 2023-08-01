let button1=document.querySelector('button');
let changePara=document.querySelector('p');
let changeBorderColor=document.querySelector('.container')
let changeBackgroundColor=document.querySelector('.container');

console.log(button1)

// button1.addEventListener('click',()=>{
//     console.log("Clicked Me");
//     changePara.textContent="This Is Change Paragraph";
//     console.log(changeBorderColor.style.border="3px solid red");
//     changeBackgroundColor.style.backgroundColor="Yellow";


// })


let changeTextColor=()=>{
    changePara.style.color="red";
}

let changeText=()=>{
    changePara.textContent="After Text Change Paragraph";
}

let changeFontSize=()=>{
    changePara.style.fontSize="40px";
}

let changeBorderColored=()=>{
    changeBorderColor.style.border="3px solid red";
}

let changeBackgroundColored=()=>{
    changeBackgroundColor.style.backgroundColor="yellow";
}