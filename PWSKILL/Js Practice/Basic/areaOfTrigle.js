let s1=5,s2=6,s3=7;

let sum=s1+s2+s3;
// semi perimeter of tringle

let sp=sum/2;

let area=Math.sqrt(sp*(sp-s1)*(sp-s2)*(sp-s3));

console.log(`Area of Triangle = ${area}`);