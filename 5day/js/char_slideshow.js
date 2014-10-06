onload = function(){
	var name,
		i,
		btn,
		reset,
		timer;

	btn = document.getElementById('btn');
	btn.onclick = function input(){
		name = document.getElementById('name').value;
		btn.disabled = true;
		loop(name, 1);
	}
	function loop(name, i){
		document.getElementById('result').innerHTML = name.substr(0,i);
		if(i == name.length){
			i = 0;
		}
		timer = setTimeout(function(){
			loop(name, i+1)
		},1000);
	}
	
	document.getElementById('reset').onclick = function reset(){
		clearTimeout(timer);
		btn.disabled = false;
		document.getElementById('result').innerHTML = "";
	}
}