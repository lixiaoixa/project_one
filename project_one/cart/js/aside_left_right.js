$(function(){
	//吸顶效果
	var mycartTop = $("#big .mycart_detail").offset().top;
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= mycartTop){
				$("#aside_left,#aside_right").show();
			}
			else {
				$("#aside_left,#aside_right").hide();
			}
	})
	//购物车
	$("#aside_right .list .mycart a").mouseenter(function(){
		$("#aside_right .list .mycart a p").css({color:"#fa4b9b"});
		$(this).css({background:"#f9f9f9"});
	})
	$("#aside_right .list .mycart a").mouseleave(function(){
		$("#aside_right .list .mycart a p").css({color:""});
		$(this).css({background:""});
	})
	$("#aside_right .list .mycart a").click(function(){
		location.href="../cart/cart.html";
	})
	//咨询
	$("#aside_right .list .advisory a").mouseenter(function(){
		$(this).css({background:"#f9f9f9"});
	})
	$("#aside_right .list .advisory a").mouseleave(function(){
		$(this).css({background:""});
	})
	//微信
	$("#aside_right .list .weixin a").on({
		"mouseenter":function(){
			$(this).css({background:"#f9f9f9"});
			$(this).find(".weixin_qr").show().stop().animate({left:-158},700,"swing");
	  	},
	    "mouseleave":function(){
			$(this).css({background:""});
			$(this).find(".weixin_qr").hide().stop();
			$(this).find(".weixin_qr").css({left:-220});
		}
	});
    //回到顶部
    $("#aside_right .toTop").click(function(){
    	var sc=$(window).scrollTop();    
    	$("body,html").stop().animate({scrollTop:0},500);
    })
})
