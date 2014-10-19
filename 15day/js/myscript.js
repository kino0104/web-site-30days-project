$(function(){
	$(window).on('load resize', function(){
		var width = $('.topSlide').width();
		var height = $('.topSlide').width() * 0.74;
		console.log(width);
		console.log(height);
		$('.slide li img').css('width', width);
		$('.slide li img').css('height', height);
	});

$(function(){
	setInterval(function(){
		$(".slide:not(:animated)").animate({
			"margin-left" : -1*$(".slide li").width()
		}, function(){
			$(".slide").css("margin-left", "0");
			$(".slide").append($(".slide li:first-child"));
		});
	},5000);
});
});

