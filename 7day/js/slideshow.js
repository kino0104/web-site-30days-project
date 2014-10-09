onload = (function(){
var i;

slideShow(1);
function slideShow(i){
	var li = document.getElementsByTagName('li');
	if(i == (li.length+1)){
		i = 1;
		$('li:nth-child(1)').css('display','none');
	}
	$('li:nth-child('+i+')').fadeIn('slow').delay(3000).fadeOut('slow');

	setTimeout(function(){
		slideShow(i+1);
	},3000);
}

});