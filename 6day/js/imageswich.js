onload = function(){
	var photo = document.getElementById('photo');
	thumbnail = document.getElementsByClassName('thumbnail');

 	 for(var i = 0; i < thumbnail.length; i++){
 	 	thumbnail[i].onclick = function(){
 	 	photo.setAttribute('src', this.getAttribute('src'));
 	 	};
 	 }
};