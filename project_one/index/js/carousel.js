$(function(){
	    //先获取轮播图的数据
		$.get("json/carousel.json", function(data){
			//console.log(data); 
			
			var arr = data;
			
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				
				$("<li><img src="+ obj.img +" ></li>").appendTo(" #carousel .list");
				var li = $("<li></li>").appendTo(" #carousel .list1");
				
				if (i==0) {
					li.addClass("active");
				}
			}
			
			//轮播
			lunbo();
		});
		function lunbo(){
		var _ul = $("#carousel .list");
		var _ul1 = $("#carousel .list1");
		var _li = $("#carousel .list li");
		var _li1 = $("#carousel .list1 li");
		
		//初始化显示第一张图
		_li.eq(0).show().siblings().hide();
		
		//图片总数量
		var size = $("#carousel .list li").size(); //5
		
		//自动轮播
		var i = 0; //记录图片下标
		var timer = setInterval(function(){
			i++;
			move(); 
		}, 2000);
		
		//移动的函数
		function move(){
			
			//如果i超出了图片总数量
			if (i == size) {
				i = 0; //即将移动到2张图
			}
			
			//透明度切换到第i张图
			_li.eq(i).stop().fadeIn().siblings().stop().fadeOut();
			
			//改变ul1的按钮状态
			_li1.eq(i).removeClass().addClass("active").siblings().removeClass("active"); 
			
		}
						
		
		//li1上面的按钮
		_li1.hover(function(){
			var index = $(this).index();
			console.log(index);
			i = index;
			move();
		})
		
		//移入carousel, 移出box
		$("#carousel").hover(function(){
			//移入, 关闭定时器
			clearInterval(timer);
		}, 
		function(){
			//移出, 重新开启定时器
			timer = setInterval(function(){
				i++;
				move();
			}, 2000);
		})
		}
		
		
				
})
