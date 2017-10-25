$(function(){
	//获取传来的id
	var param = location.search.substring(1);
	var pid = getParams(param, "id");
//	console.log(pid);
	function getParams(str, name){
		var arr = str.split("&");
		for (var i=0; i<arr.length; i++) {
			var str1 = arr[i]; 
			var arr1 = str1.split("=");
			if (arr1[0] == name) {
				return arr1[1];
			}
		}
		return "";
	}
	//获取json的数据
	var obj1 = {};
	$.get("json/example.json", function(data){
		//console.log(data);
		obj1 = {};
		var arr = data;
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i]; 
			if (obj.id == pid) {
				show_details(obj);
//				addcookies(obj,Cnum);
				obj1 = arr[i];
			}
		}
	})
	var str="";
	//显示
	function show_details(obj){
		//左边
		str=obj.bigImg;
		var _left=$("<div class='left'></div>").appendTo(".commodity_show");
		var _bigpic=$("<div class='bigpic'></div>").appendTo(_left);
		$("<img src="+obj.bigImg+" class='main_pic'>").appendTo(_bigpic);
		$("<img src='img/magnifying.gif' class='magnifying'>").appendTo(_bigpic);
		$("<div class='smallarea'></div>").appendTo(_bigpic);
		var _bigarea=$("<div class='bigarea'></div>").appendTo(_left);
		$("<img src='' class='bigimg'>").appendTo(_bigarea);
		var _smallpic=$("<div class='smallpic'></div>").appendTo(_left);
		$("<img src="+obj.smallImg_one+" >").appendTo(_smallpic);
		$("<img src="+obj.smallImg_two+" >").appendTo(_smallpic);
		$("<img src="+obj.smallImg_three+">").appendTo(_smallpic);
		$("<img src="+obj.smallImg_four+">").appendTo(_smallpic);
		//右边
		var _right=$("<div class='right'></div>").appendTo(".commodity_show");
		var _name=$("<div class='name'></div>").appendTo(_right);
		var _name_left=$("<div class='name_left'></div>").appendTo(_name);		
		$("<a href='#'>"+obj.name+"</a><span>超韧湿水不易破无香抽纸3层130抽16包装 </span>").appendTo(_name_left);
	    var _app_img=$("<div class='app_img'></div>").appendTo(_name);
	    $("<a href='#'><img  src='img/wx.jpg'/></a>").appendTo(_app_img);
	    $("<a href='#'><img  src='img/wb.jpg'/></a>").appendTo(_app_img);
	    var _description=$("<div class='description'></div>").appendTo(_right);
	    $("<p>"+obj.description+"</p>").appendTo(_description);
	    var _price_out=$("<div class='price_out'></div>").appendTo(_right);
	    var _price_inner=$("<div class='price_inner'></div>").appendTo(_price_out);
	    var _price_left=$("<div class='price_left'></div>").appendTo(_price_inner);
	    $("<span class='pintuan'>拼团价</span><span class='new_price'>"+obj.unit+obj.new_price.toFixed(2)+"</span>").appendTo(_price_left);
	    $("<span class='baoyou'>拼团包邮</span><span class='old_price'><del>"+obj.unit+obj.new_price.toFixed(2)+"</del></span>").appendTo(_price_left);
        $("<div class='price_right'>已售<b>"+obj.sold+"</b>件</div>").appendTo(_price_inner);
        var _select=$("<div class='select'></div>").appendTo(_right);
        var _canselect=$("<div class='canselect'></div>").appendTo(_select);
        $("<p>可选</p>").appendTo(_canselect);
//      $("<a href='#' class='selected'><img src="+obj.selected_img+"class='selected_img'>"+"<img src='img/gouxuan_03.jpg' class='gouxuan'></a>").appendTo(_canselect);
        var _selected=$("<a href='#' class='selected'></a>").appendTo(_canselect);
        $("<img src="+obj.selected_img+" "+"class='selected_img'>").appendTo(_selected);
        $("<img src='img/gouxuan_03.jpg' class='gouxuan'>").appendTo(_selected);
        var _count=$("<div class='count'></div>").appendTo(_select);
        $("<p>数量</p>").appendTo(_count);
        var _counter=$("<div class='counter'></div>").appendTo(_count);
        $("<span class='counter_left'>-</span>").appendTo(_counter);
        $("<b class='_con'>1</b>").appendTo(_counter);
        $("<span class='counter_right'>+</span>").appendTo(_counter);
        var _score=$("<div class='score'></div>").appendTo(_select);
        var _score_left=$("<div class='score_left'></div>").appendTo(_score);
        $("<p>评分</p>").appendTo(_score_left);
        var _score_star=$("<div class='score_star'></div>").appendTo(_score_left);
        $("<img src='img/star.png'>").appendTo(_score_star);
        $("<img src='img/star.png'>").appendTo(_score_star);
        $("<img src='img/star.png'>").appendTo(_score_star);
        $("<img src='img/star.png'>").appendTo(_score_star);
        $("<img src='img/star.png'>").appendTo(_score_star);
        $("<div class='score_right'><span>"+obj.score_num+"</span>位蜜粉推荐</div>").appendTo(_score);
        var _buy=$("<div class='buy'></div>").appendTo(_select);
        var _buy_left_middle=$("<div class='buy_left_middle'></div>").appendTo(_buy);
        $("<div class='buy_left_none'>商品已加入到购物车</div>").appendTo(_buy_left_middle);
        var _buy_left=$("<div class='buy_left'></div>").appendTo(_buy_left_middle);
        $("<div class='singlebuy'><p>"+obj.unit+obj.single.toFixed(2)+"</p><span>单独购买</span></div>").appendTo(_buy_left);
        var _buy_middle=$("<div class='buy_middle'></div>").appendTo(_buy_left_middle);
        var _doublebuy=$("<div class='doublebuy'></div>").appendTo(_buy_middle);
        $("<span class='weixin_join'>微信扫码参与拼团</span>").appendTo(_doublebuy);
        $("<img src='img/doublebuy.png' class='doublebuy_weixin'>").appendTo(_doublebuy);
        $("<img src='img/close_02.jpg' class='close'>").appendTo(_doublebuy);
        $("<a href='javascript:;'><p>"+obj.unit+obj.doubles.toFixed(2)+"</p><span>2人拼团</span></a>").appendTo(_buy_middle);
        var _buy_right=$("<div class='buy_right'></div>").appendTo(_buy);
        $("<a href='#'><img src='img/love.png'><span>2人拼团</span></a>").appendTo(_buy_right);
        var _coding=$("<div class='coding'></div>").appendTo(_select);
        $("<span class='word'>编码:</span>").appendTo(_coding);
        $("<span class='code'>"+obj.code+"</span>").appendTo(_coding);
        var _other=$("<div class='other'></div>").appendTo(_select);
        var ul=$("<ul></ul>").appendTo(_other);
        $("<li><img src='img/dian.png' />&nbsp;&nbsp;&nbsp;满88包邮</li>").appendTo(ul);
        $("<li><img src='img/dian.png' />&nbsp;&nbsp;&nbsp;商家</li>").appendTo(ul);
        $("<li class='_return_commodity'><img src='img/dian.png' />&nbsp;&nbsp;<i class='iconfont icon-wenhao'></i>&nbsp;&nbsp;本商品支持7天内无理由退货服务</li>").appendTo(ul);
	    $("<li class='_pay'><img src='img/dian.png' />&nbsp;&nbsp;<i class='iconfont icon-wenhao'></i>&nbsp;&nbsp;假一赔十</li>").appendTo(ul);
	    $("<div class='return_commodity'>本商品支持7天内无理由退货服务</div>").appendTo(ul);
	    $("<div class='pay'>蜜芽为您选购的每一件商品，都通过严格的品质把关，保证正品。特作出“假一赔十”的正品保证承诺，杜绝一切假货，请放心购买</div>").appendTo(ul);
	}
	
	$(".commodity_show").on("click", ".right .select .buy .buy_left_middle .buy_left .singlebuy", function(){
		addcookies(obj1,Cnum);
		var arr=$.cookie("cart");
		var total_number=0;
		arr = JSON.parse(arr);
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				total_number+=obj.num;
			    $("#search .right_r  span .many").show();
				$("#search .right_r  span .many").html(total_number);
			}
	})
	
	function addcookies(obj,Cnum){//点击单独购买，将商品存入cookie
		//将当前的商品数据加入购物车（cookie）
		var arr2 = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
		//判断原来的购物车中是否有相同商品
		var isExist = false;
		for (var i=0; i<arr2.length; i++) {
			if (arr2[i].id == obj.id) {
				arr2[i].num+=Cnum;
				isExist = true;
				break;
			}
		}
		if (isExist ==  false) {
			obj.num = Cnum;
			obj.checked = true; //是否选中， 默认选中 
			arr2.push(obj);
		}
		//将arr2添加到cookie中
		$.cookie("cart", JSON.stringify(arr2), {expires:30, path:"/"});
//			console.log( $.cookie("cart") );
			//addcookies(obj,Cnum);
			
	  	$(".right .select .buy .buy_left_middle .buy_left_none").css({left:0,top:0});
	  	var n=0;
	  	$(".right .select .buy .buy_left_middle .buy_left_none").show().stop().animate({left:350,top:-500,width:222,height:76},400,"swing").fadeOut();
	  	var timer=setInterval(function(){
	  		n++;
	  		if(n==3){
	  			clearInterval(timer);
	  			$(".right .select .buy .buy_left_middle .buy_left_none").hide();
	  		}
	  	},100)
		
		
	}
    
    //移上小图变换大图
    $(".commodity_show").on("mouseenter", ".left .smallpic img", function(){
    	$(this).addClass("current").siblings().removeClass("current");
    	$(this).parent().siblings(".bigpic").find(".main_pic").attr("src",$(this).attr("src"));
    	str=$(this).attr("src");
    })
    //放大镜功能
	//在小图中移动
	$(".commodity_show").on("mousemove",".bigpic",function(e){
		$(".magnifying").hide();
		$(".smallarea").show(); 
		$(".bigarea").show(); 
		$(".bigimg").attr("src",str);
		var x = e.pageX - $(".bigpic").offset().left - $(".smallarea").width()/2;
		var y = e.pageY - $(".bigpic").offset().top - $(".smallarea").height()/2;
		//控制不超出左右边界
		if (x < 0){
			x = 0;
		}
		else if (x > $(".bigpic").width()-$(".smallarea").width()){
			x = $(".bigpic").width()-$(".smallarea").width();
		}
		//控制不超出上下边界
		if (y < 0){
			y = 0
		}
		else if (y > $(".bigpic").height()-$(".smallarea").height()) {
			y = $(".bigpic").height()-$(".smallarea").height();
		}
		//小区域移动
		$(".smallarea").css({left:x, top:y});
		//大图移动
		$(".bigimg").css({left: -4*x,top: -4*y});
	})
	//移除小图
	$(".commodity_show").on("mouseleave",".bigpic",function(){
		$(".smallarea").hide(); //隐藏小区域
		$(".magnifying").show();
		$(".bigarea").hide(); //隐藏大区域
	})
		
    var Cnum=1;
	//数量
	 $(".commodity_show").on("click", ".counter_left",function(){
	 	var num = $("._con").html();
	 	if(num<=2){
	 		$(this).css({background:"#eeeeee"});
	 		num=1;
	 	}
     	else{
     		num--;
     		$(this).css({background:"#e0e0e0"});
     	};
	 	$("._con").html(num);
	 	Cnum=num;
//	 	console.log(Cnum);
	 })
	 
	  $(".commodity_show").on("click", ".right .select .count .counter .counter_right",function(){
        var num = $("._con").html();
       if(num>=1){
       	$(this). siblings(".counter_left").css({background:"#e0e0e0"});
       }
     	num++;
	 	$("._con").html(num);
	 	Cnum=num;
//	 	console.log(Cnum);
	 })
	 //提示框移动
	 $(".commodity_show").on("mouseenter",".right .select .other ul ._return_commodity",function(){
	 	$(this).siblings(".return_commodity").show().stop().animate({top:20},1000,"swing");
	 })
	 $(".commodity_show").on("mouseleave",".right .select .other ul ._return_commodity",function(){
	 	$(this).siblings(".return_commodity").hide().stop();
	 	$(this).siblings(".return_commodity").css({top:96});
	 })
	  $(".commodity_show").on("mouseenter",".right .select .other ul ._pay",function(){
	 	$(this).siblings(".pay").show().stop().animate({top:20},1000,"swing");
	 })
	  $(".commodity_show").on("mouseleave",".right .select .other ul ._pay",function(){
	 	$(this).siblings(".pay").hide().stop();
	 	$(this).siblings(".pay").css({top:56});
	 })
	 // 移入2人拼团购买
	  $(".commodity_show").on("mouseenter",".right .select .buy .buy_left_middle .buy_middle a",function(){
	  	$(".right .select .buy .buy_left_middle .buy_middle .doublebuy").show();
	  })
	  $(".commodity_show").on("click",".right .select .buy .buy_left_middle .buy_middle .doublebuy .close",function(){
	  	$(".right .select .buy .buy_left_middle .buy_middle .doublebuy").hide();
	  })
	  //点击单独购买，飞入购物车内,
//	  $(".commodity_show").on("click", ".right .select .buy .buy_left_middle .buy_left .singlebuy", function(){
//	  	addcookies(obj,Cnum);
//	  	$(".right .select .buy .buy_left_middle .buy_left_none").css({left:0,top:0});
//	  	var n=0;
//	  	$(".right .select .buy .buy_left_middle .buy_left_none").show().stop().animate({left:350,top:-500,width:180,height:120},300,"swing").fadeOut();
//	  	var timer=setInterval(function(){
//	  		n++;
//	  		if(n==3){
//	  			clearInterval(timer);
//	  			$(".right .select .buy .buy_left_middle .buy_left_none").hide();
//	  		}
//	  	},100)
////	  	addcookies(obj,Cnum);
//	  })
	  
	 

})