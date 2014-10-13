$(window).on('load resize',function(){
	var screenWidth = window.innerWidth;

	h2post();
	function h2post(){
		if(screenWidth < 768){
			var height = $('img').height();

			$('#main > h2').css('margin-top', height+'px');
		}else{
			$('#main > h2').css('margin-top', '');
		}
}
});