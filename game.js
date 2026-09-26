
const canvas=document.getElementById("court");
const ctx=canvas.getContext("2d");

let y=250;
let jumping=false;

function draw(){
ctx.clearRect(0,0,700,350);

ctx.fillStyle="#333";
ctx.fillRect(0,300,700,50);

ctx.fillStyle="orange";
ctx.beginPath();
ctx.arc(600,100,30,0,Math.PI*2);
ctx.strokeStyle="white";
ctx.stroke();

ctx.fillStyle="black";
ctx.fillRect(200,y,35,50);

ctx.fillRect(190,y+50,15,60);
ctx.fillRect(230,y+50,15,60);

}

function dunk(){
if(jumping)return;
jumping=true;

let i=setInterval(()=>{
y-=8;
draw();

if(y<80){
clearInterval(i);

let back=setInterval(()=>{
y+=8;
draw();

if(y>=250){
clearInterval(back);
jumping=false;
}
},30)

}
},30)
}

draw();
