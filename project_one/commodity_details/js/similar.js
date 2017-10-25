$(function(){
	$("#similar .similar_main ul li").mouseenter(function(){
		$(this).find(".one").css({color:"#fa4a97"});
	})
	$("#similar .similar_main ul li").mouseleave(function(){
		$(this).find(".one").css({color:""});
	})
})