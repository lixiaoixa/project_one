$(function(){
	$("#category .total .two").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .two").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .three").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .three").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .four").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .four").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .five").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .five").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .six").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .six").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .seven").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .seven").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .eight").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .eight").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
	$("#category .total .nine").mouseenter(function(){
		$(this).find(".second_menu").show();
		$(this).find("i").hide();
		$(this).find(".second_menu .line").show();
		$(this).prev("li").css({"border-bottom":"1px solid #f2f2f0"});
		$(this).css({"border-left":"4px solid #fb60a7","border-bottom":"1px solid #f2f2f0",background:"white"});
	});
	$("#category .total .nine").mouseleave(function(){
		$(this).find(".second_menu").hide();
		$(this).find("i").show();
		$(this).find(".second_menu .line").hide();
		$(this).prev("li").css({"border-bottom":""});
		$(this).css({"border-left":"","border-bottom":"",background:""});
	});
//	鼠标移上变颜色
    $("#category  .second_menu a").on({
    	"mouseenter":function(){
    		$(this).css({color:"#fa4b9b"}).siblings("a").css({color:""});
    	},
    	"mouseleave":function(){
    		$(this).css({color:""});
    	}
    });
//  $("#category .two1,.two2,.three1,.three2,.four1,.four2,.five1,.five2,.six1,.six2,.seven1,.seven2,.eight1,.eight2,.nine1,.nine2  li a").on({
//  	"mouseenter":function(){
//  		$(this).css({color:"#fa4b9b"});
//  	}
//  });
	$("#category .two1 li a,#category .two2 li a,#category .three1 li a,#category .three2 li a,#category .four1 li a,#category .four2 li a,#category .five1 li a,#category .five2 li a,#category .six1 li a,#category .six2 li a,#category .seven1 li a,#category .seven2 li a,#category .eight1 li a,#category .eight2 li a,#category .nine1 li a,#category .nine2 li a").mouseenter(function(){
		$(this).css({color:"#fa4b9b"}).parent().siblings().find("a").css({color:""});
	});
	$("#category .two1 li a,#category .two2 li a,#category .three1 li a,#category .three2 li a,#category .four1 li a,#category .four2 li a,#category .five1 li a,#category .five2 li a,#category .six1 li a,#category .six2 li a,#category .seven1 li a,#category .seven2 li a,#category .eight1 li a,#category .eight2 li a,#category .nine1 li a,#category .nine2 li a").mouseleave(function(){
		$(this).css({color:""});
	});
})