$(function(){
	$("#special .specially ul li a").mouseenter(function(){
		$(this).find(".right p").css({color:"#fa4a97"});
	})
	
	$("#special .specially ul li a").mouseleave(function(){
		$(this).find(".right p").css({color:""});
	})
	
	
})