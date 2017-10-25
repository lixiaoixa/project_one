$(function(){
	//头部左边
	$("#header .phone").on({
		"mouseenter":function(){
			$(this).css({color:"#fa4a97"});
		},
		"mouseleave":function(){
			$(this).css({color:""});
		}
	});
	//头部右边
	$("#header .right .login,.register,.help").on({
		"mouseenter":function(){
			$(this).css({color:"#fa4a97"});
		},
		"mouseleave":function(){
			$(this).css({color:""});
		}
	});
})