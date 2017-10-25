$(function(){
	//搜索框
	$("#search .right_l .find button").on({
		"mouseenter":function(){
			$(this).css({background:"#ec0971"});
		},
		"mouseleave":function(){
			$(this).css({background:""});
		}
	});
	//热词
	$("#search .right_l .hot_word li a").on({
		"mouseenter":function(){
			$(this).css({color:"#fa4a97"});
		},
		"mouseleave":function(){
			$(this).css({color:""});
		}
	});
	//购物车
	$("#search .right_r").on({
		//点击进入购物车页面
		"click":function(){
			location.href="../cart/cart.html";
		}
	})
	//移入显示加入购物的商品
	var _show_cart_detail=$("<div class='show_cart_detail'></div>").appendTo("#search .right .right_r");
	$("<p>最近加入的商品</p>").appendTo(_show_cart_detail);
	$(".show_cart_detail").hide();
	$("<div class='cart_line'></div>").appendTo("#search .right .right_r");
	$(".cart_line").hide();
	$(".go_cart").hide();
	$("#search .right_r").mouseenter(function(){
		var arr=$.cookie("cart");
		if(arr){
			//有商品时移入
			var total_number=0;
			$(".show_commodity_detail").remove();
			$(".go_cart").remove();
			$(".show_cart_detail").css({border:"1px solid #fa4a97"});
			$("#search .icon-gouwuchekong").css({color:"#fa4a97"});
			$("#search .right_r .cart").css({background:"#ffffff"});
			$("#search .right_r").css({"border-bottom":"none","border-color":"#fa4a97",height:38});
			$("#search .right_r .cart_line").show();
			$(".show_cart_detail").show();
			$(".show_cart_detail p").html("最近加入的商品");
			arr = JSON.parse(arr);
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				var _show_commodity_detail=$("<div class='show_commodity_detail'></div>").appendTo(_show_cart_detail);
				$('<img src='+obj.bigImg+' class="commodity_img">').appendTo(_show_commodity_detail);
				$("<div class='commodity_detail'>"+obj.name+obj.description+"</div>").appendTo(_show_commodity_detail);
				$("<div class='commodity_number'>x"+obj.num+"</div>").appendTo(_show_commodity_detail);
				$("<div class='single_money'>"+obj.unit+ obj.new_price.toFixed(2)+"</div>").appendTo(_show_commodity_detail);
			    total_number+=obj.num;
			    $("#search .right_r  span .many").show();
				$("#search .right_r  span .many").html(total_number);
			}
			$("<div class='go_cart'><input type='button' value='查看购物车'></div>").appendTo(_show_cart_detail);
		}
		else{
			//当无商品时移入
			$("#search .right_r  span .many").show();
			$("#search .right_r  span .many").html(0);
			$(".show_cart_detail").css({border:"1px solid #fa4a97"});
			$("#search .icon-gouwuchekong").css({color:"#fa4a97"});
			$("#search .right_r .cart").css({background:"#ffffff"});
			$("#search .right_r").css({"border-bottom":"none","border-color":"#fa4a97",height:38});
			$("#search .right_r .cart_line").show();
			$(".show_cart_detail").show();
			$(".show_cart_detail p").css({"border-bottom":"none"});
			$(".show_cart_detail p").html("购物车还没有商品，请先选购!");
			$(".go_cart").remove();
		}
	})
	$("#search .right_r").mouseleave(function(){
		var arr=$.cookie("cart");
		if(arr){
			//有商品时移出
			$("#search .icon-gouwuchekong").css({color:""});
			$("#search .right_r .cart").css({background:""});
			$("#search .right_r").css({"border-bottom":"1px solid #e5e5e5","border-color":"",height:"34px"});
			$("#search .right_r .cart_line").hide();
			$(".show_cart_detail").hide();
			$(".show_cart_detail").css({border:"none"});
			$(".cart_line").hide();
			$(".show_commodity_detail").remove();
		}
		else{
			//无商品时移出
			$("#search .right_r  span .many").hide();
			$("#search .icon-gouwuchekong").css({color:""});
			$("#search .right_r .cart").css({background:""});
			$("#search .right_r").css({"border-bottom":"1px solid #e5e5e5","border-color":"",height:"34px"});
			$("#search .right_r .cart_line").hide();
			$(".show_cart_detail").hide();
			$(".show_cart_detail").css({border:"none"});
			$(".cart_line").hide();
		}
		
		
	})
	$("#search .right_r").on("mouseenter",".commodity_detail",function(){
		$(this).css({color:"#fa4a97"});
	})
	$("#search .right_r").on("mouseleave",".commodity_detail",function(){
		$(this).css({color:""});
	})
	$("#search .right_r").on("mouseenter",".go_cart input",function(){
		$(this).css({background:"#ec0971"});
	})
	$("#search .right_r").on("mouseleave",".go_cart input",function(){
		$(this).css({background:""});
	})
	$("#search .right_r").on("click",".go_cart input",function(){
		location.href="../cart/cart.html";
	})
	
})