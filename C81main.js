
//var mouseevent="empty";
var lastpositionofx,lastpositionofy;



canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";
var widthofline=1;
var width=screen.width;
var newwidth=screen.width-70;
var newhight=screen.height-300;
if(width<992){
    document.getElementById("mycanvas").width=newwidth;
    document.getElementById("mycanvas").height=newhight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    widthofline=document.getElementById("linewidth").value;
    mouseevent="touchstart";
    
    color=document.getElementById("colorinput").value;
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop;

}
canvas.addEventListener("touchmove",mytouchmove);

function mytouchmove(e){
    console.log("mytouchmove");

    currentpostionofmousex=e.touches[0].clientX-canvas.offsetLeft;
    currentpostionofmousey=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last position of x and y coordinates=");
        console.log("x="+lastpositionofx+"y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);
        console.log("current position of x and y=");
        console.log("x="+currentpostionofmousex+"y="+currentpostionofmousey);
        ctx.lineTo(currentpostionofmousex,currentpostionofmousey);
        ctx.stroke();

 
    lastpositionofx=currentpostionofmousex;
    lastpositionofy=currentpostionofmousey;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}