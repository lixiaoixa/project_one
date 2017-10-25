$(function(){
	$("#footer .help .left .like li a").mouseenter(function(){
		$(this).css({color:"#fa4a97"});
	})
	
	$("#footer .help .left .like li a").mouseleave(function(){
		$(this).css({color:""});
	})
	$("#footer .help .right .wx_wb .qr_weixin").mouseenter(function(){
		$(this).siblings(".db_img").show();
	})
	
	$("#footer .help .right .wx_wb .qr_weixin").mouseleave(function(){
		$(this).siblings(".db_img").hide();
	})
	
})