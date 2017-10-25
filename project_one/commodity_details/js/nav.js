$(function(){
	$("#nav ul li a").on({
		"mouseenter":function(){
			$(this).addClass("active").parent().siblings().find("a").removeClass("active");
		},
		"mouseleave":function(){
			$(this).removeClass("active");
		},
	});
    $("#nav ul .guarantee").mouseenter(function(){
    	$(this).find(".guarantee_list").show();
    	$("#nav ul .guarantee .guarantee_list .guarantee_menu").mouseenter(function(){
    		$(this).css({background:"#fa4a97"}).siblings().css({background:""});
    	});
    });
    $("#nav ul .guarantee").mouseleave(function(){
    	$(this).find(".guarantee_list").hide();
    })
     $("#nav ul li .forever").click(function(){
    	location.href="../index/index.html";
    })
})