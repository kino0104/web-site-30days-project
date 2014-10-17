
$(function(){
	$('#accordion dd').hide();
	$('#accordion dt a').click(function(){
	var speed;
	var length =$(this).parent().next().text().length;
	if(length > 200){
		speed = 1000;
	}else{
		speed = 500;
	}
	$('#accordion dd').slideUp(speed);
    $(this).parent().next().slideDown(speed);
    return false;
	});
});