$(function(){
	$("#biggoods .bigname .top .left").mouseenter(function(){
		$(this).find("p").css({color:"#fa4a97"});
	})
	
	$("#biggoods .bigname .top .left").mouseleave(function(){
		$(this).find("p").css({color:""});
	})
	
	
})