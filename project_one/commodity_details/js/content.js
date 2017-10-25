$(function(){
	$("#content #show_more").click(function(){
		if($("#content #show_more").html()=="收起"){
			$("#content .content_main .content_details .picture").stop().animate({top:130},1000,"swing");
			$(this).parent(".more").stop().animate({top:115},1000,"swing");
			$("#content .content_main .content_details .instruction").stop().animate({top:8683},1000,"swing");
			$(this).html("展开");
		}
		else{
			$("#content .content_main .content_details .picture").stop().animate({top:195},1000,"swing");
			$(this).parent(".more").stop().animate({top:180},1000,"swing");
			$("#content .content_main .content_details .instruction").stop().animate({top:8758},1000,"swing");
			$(this).html("收起");
		}
	})
	$("#content .content_main .content_nav li a").mouseenter(function(){
		$(this).css({background:"#ec0871"});
	})
	$("#content .content_main .content_nav li a").mouseleave(function(){
		$(this).css({background:""});
	})
})
