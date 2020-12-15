var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 750, 450);
var width = canvas.width;
var height = canvas.height;

function pencil (){
    canvas.onmousedown = function (e){
        curX = e.clientX - canvas.offsetLeft;
        curY = e.clientY - canvas.offsetTop;
        hold = true;
             
        prevX = curX;
        prevY = curY;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
    };
         
    canvas.onmousemove = function (e){
        if(hold){
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
            color2();
            draw();
        }
    };
         
    canvas.onmouseup = function (e){
        hold = false;
    };
         
    canvas.onmouseout = function (e){
        hold = false;
    };

    function color2 () {
    	ctx.strokeStyle = "#000000";
    	ctx.lineWidth = 2;
    };
         
    function draw (){
        ctx.lineTo(curX, curY);
        ctx.stroke();
        canvas_data.pencil.push({ "startx": prevX, "starty": prevY, "endx": curX, "endy": curY, 
            "thick": ctx.lineWidth, "color": ctx.strokeStyle });
    }
}

function eraser (){
    canvas.onmousedown = function (e){
        curX = e.clientX - canvas.offsetLeft;
        curY = e.clientY - canvas.offsetTop;
        hold = true;
             
        prevX = curX;
        prevY = curY;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
    };
         
    canvas.onmousemove = function (e){
        if(hold){
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
            color();
            erase();
        }
    };
         
    canvas.onmouseup = function (e){
        hold = false;
    };
         
    canvas.onmouseout = function (e){
        hold = false;
    };
         
    function color () {
    	ctx.strokeStyle = "#FFFFFF";
    	ctx.lineWidth = 10;
    };

    function erase (){
        ctx.lineTo(curX, curY);
        ctx.stroke();
        canvas_data.pencil.push({ "startx": prevX, "starty": prevY, "endx": curX, "endy": curY, 
            "thick": ctx.lineWidth, "color": ctx.strokeStyle });
    }
}


function reset (){
	ctx.clearRect(0, 0, width, height);
    pencil();
}



function prepDownload(a, canvas, name) {
    a.download = name
    a.href = canvas.toDataURL("image/jpeg")
}
