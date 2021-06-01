// code from https://codepen.io/dyf234/pen/bvCBr

window.onload = function (){
  //canvas initialisation
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  //dimensions
  var width = canvas.width;
  var height = canvas.height;
  
  //Variables
  var degrees = 0;
  var new_degrees = 0;
  var difference = 0;
  var color = "lightgreen";
  var bgcolor = "#222";
  var text;
  var animation_loop,redraw_loop;
  
  function init() {
    
    //clear the canvas everytime a chart is drawn
    ctx.clearRect(0,0,width,height);
    //Create the background 360 circle
    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 30;
    ctx.arc(width/2,height/2,100,0,Math.PI*2,false);
    ctx.stroke();
  
    //gauge will be a simple arc
    var radians = degrees * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 30;
  
    //The arc starts from the rightmost end, in order to get it to start at the top, we need to deduct 90 degrees from the angle
    ctx.arc(width/2,height/2,100,0 - 90*Math.PI/180,
          radians - 90*Math.PI/180,false);
    ctx.stroke();
    
    //lets add the text
    ctx.fillStyle = color;
    ctx.font = "50px bebas";
    text = Math.floor(degrees/360*100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text,width/2 - text_width/2,height/2 + 15);
  }
  
  function draw() {
    
    //Cancel any movement animation if a new chart is requested
      if(typeof animation_loop != undefined) 
       clearInterval(animation_loop);

    //random degree from 0 to 360
    new_degrees = Math.round(Math.random()*360);
    var difference = new_degrees - degrees;
    
    //this will animate the qauge to new positions
    //the animation will take 1 second
    //time for each frame is 1 second / diff in degrees
    animation_loop = setInterval(animate_to,1000/difference);
  }
  function animate_to() {
		
     //clear animation loop if degrees reaches to new_degrees
	   if(degrees == new_degrees) 
			    clearInterval(animation_loop);
     if(degrees < new_degrees)
		     	degrees++;
		   else
			    degrees--;
    
	 init();
	}
  
  draw();
  redraw_loop = setInterval(draw,2000);
}

