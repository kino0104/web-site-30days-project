window.onload = function(){
	var container = document.getElementById('container'),
		queue = null,
		canvas = document.getElementById('box');
	
	canvasSize();
	draw();
	
	function canvasSize(){
		canvas.width = container.offsetWidth;
		canvas.height = container.offsetHeight;
	}
	
	//window.addEventListener("resize",function(){
	window.onresize = function(){
		clearTimeout(queue);
		queue = setTimeout(function(){
			canvasSize();
		}, 200);
	}
	
	function draw(){
		if(!canvas || !canvas.getContext) return false;

		var ctx = canvas.getContext('2d');
	
		(function loop(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			var x=[],y=[],wh=[],r=[],g=[],b=[];
		
			for(var i=0; i<Math.floor(Math.random() * 500); i++){
				x[i] = Math.floor(Math.random() * (canvas.width - 50)),
				y[i] = Math.floor(Math.random() * (canvas.height -50)),
				wh[i] = Math.floor(Math.random() * 50),
				r[i] = Math.floor(Math.random() * 255),
				g[i] = Math.floor(Math.random() * 255),
				b[i] = Math.floor(Math.random() * 255);
				ctx.fillStyle = "rgb("+r[i]+","+g[i]+","+b[i]+")";
				ctx.fillRect(x[i],y[i],wh[i],wh[i]);
			}
			setTimeout(loop,1000);
		})();
	}
}