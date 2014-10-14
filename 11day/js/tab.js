$(function(){
$("p.panel").load($("ul.tab li a.selected").attr("href"));
$("ul.tab li a").click(function(){
	$("ul.tab li a.selected").removeClass("selected");
	$(this).addClass("selected");
	$("p.panel").load($(this).attr("href"));
	return false;
});
});