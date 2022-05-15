var lastpositionX;
var lastpositionY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");    
color = "black";
widthOfLine = 2;

var width = screen.width;
newWidth = screen.width - 70;
newHeigth = screen.width - 300;

        if(width < 992){
            document.getElementById("myCanvas").width = newWidth;
            document.getElementById("myCanvas").heigth = newHeight;
            document.body.style.overflow = "hidden";
        }

    canvas.addEventListener("touchstart", myTouchStart);    
    function myTouchStart(e)
    {
        console.log("myTouchStart");
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        laspositionX = e.touches[0].clientX - canvas.offsetLeft;
        laspositionY = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
    {
         console.log("myTouchMove");
         currentX = e.touches[0].clientX - canvas.offsetLeft;
         currentY = e.touches[0].clientY - canvas.offsetTop;

         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = widthOfLine;

         console.log("Ultima posição das coordenadas x e y = ");
         console.log("x = " + lastpositionX + "y = " + lastpositionY);
         ctx.moveTo(lastpositionX, lastpositionY);

         console.log("Posição atual das coordenadas x e y = ");
         console.log("x  = " + currentX + "y = " + currentY);
         ctx.lineTo(currentX, currentY);
         ctx.stroke();

         lastpositionX = currentX; 
         lastpositionY = currentY;
    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
