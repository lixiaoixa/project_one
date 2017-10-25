$(function(){
	//吸顶效果
	var new_peopleTop = $("#new_people").offset().top;
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= new_peopleTop){
				$("#stairs").show();
			}
			else {
				$("#stairs").hide();
			}
	    });
	    
	//表示是否点击了楼层按钮正在执行动画
	var isMoving = false;
				
	//点击楼层按钮， 让页面滚动到对应的楼层
	$("#stairs li").click(function(){
		$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		var index = $(this).index();
//		console.log(index);
		var top = $("#recommend,#special,#biggoods").eq(index).offset().top;
		isMoving = true;
		$("html,body").stop(true).animate({scrollTop: top}, function(){
			isMoving = false;
		});
	})
	//滚动页面
	$(window).scroll(function(){
		//如果没有点击楼层按钮执行动画， 则执行代码
		if (!isMoving) {
			var scrollTop = $(window).scrollTop();
//			console.log(scrollTop);
			//遍历所有的楼层div
			var index = 0;
			$("#recommend,#special,#biggoods").each(function(){
				//每个楼层div的top值
				var top = $(this).offset().top;
				var winH = $(window).height(); //页面高度
				if (scrollTop + winH/2 >= top) {
					index = $(this).index()-7;
				}
			})
//			console.log(index);
			$("#stairs li").eq(index).find("span").addClass("active")
				.parent().siblings().find("span").removeClass("active")
		}
		
	})
	

	
	
	
	
})