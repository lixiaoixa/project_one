$(function(){		
	//获取购物车的cookie数据,并用节点显示
	refresh();
	function refresh() {
		var arr = $.cookie("cart");
		console.log(arr);
		if (arr) {
			$(".allselect").show();
			arr = JSON.parse(arr);
			//清除原来
			$(".mycart_detail").empty();
			//创建有商品时的页面
			var totalPrice = 0; //总价
			var totalNum=0;//总的数量
			var _have_goods=$("<div class='have_goods'></div>").appendTo(".mycart_detail");
			var _title=$("<div class='title'></div>").appendTo(_have_goods);
			$("<h2>我的购物车</h2>").appendTo(_title);
			$("<div class='top_line'></div>").appendTo(_title);
			var _menu=$("<div class='menu'></div>").appendTo(_have_goods);
//			var _allselect=$("<div class='allselect'></div>").appendTo(_menu);
//			$("<input type='checkbox' class='allselect_img'  checked='checked'>").appendTo(_allselect);
//			$("<span class='allselect_word'>全选</span>").appendTo(_allselect);
			$("<div class='goods_name'>商品</div>").appendTo(_menu);
			$("<div class='scale'>规格</div>").appendTo(_menu);
			$("<div class='single_price'>单价</div>").appendTo(_menu);
			$("<div class='goods_num'>数量</div>").appendTo(_menu);
			$("<div class='pre_count'>小计</div>").appendTo(_menu);
			$("<div class='option'>操作</div>").appendTo(_menu);
			//遍历数组
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				//创建商品详情信息
				var  _addgoods= $("<div class='addgoods'></div>").appendTo(_have_goods);
				var  _addgoods_top= $("<div class='addgoods_top'></div>").appendTo(_addgoods);
				var  _addgoods_bottom= $("<div class='addgoods_bottom'></div>").appendTo(_addgoods);
				//是否选中
				if (obj.checked) {
					$("<input type='checkbox' class='isselect' checked='checked'>").appendTo(_addgoods_bottom);
				}
				else {
					$("<input class='isselect' type='checkbox'>").appendTo(_addgoods_bottom);
				}
				$('<img src='+obj.bigImg+' class="goods_pic">').appendTo(_addgoods_bottom);
				$('<img src='+obj.bigImg+' class="goods_pic_none">').appendTo(_addgoods_bottom);
				var _goods_word=$("<div class='goods_word'></div>").appendTo(_addgoods_bottom);
				$("<div class='goods_detail'>"+obj.name+obj.description+"</div>").appendTo(_goods_word);
				$("<div class='aleady'>已选:80片装X3包x2组+25片装X</div>").appendTo(_goods_word);
				var _new_old=$("<div class='new_old'></div>").appendTo(_addgoods_bottom);
				$("<div class='new'>"+obj.unit+ obj.new_price.toFixed(2)+"</div>").appendTo(_new_old);
				$("<div class='old'><del>"+obj.unit+ obj.old_price.toFixed(2)+"</del></div>").appendTo(_new_old);
				var _add_red=$("<div class='add_red'></div>").appendTo(_addgoods_bottom);
				$("<input class='reduce' type='button' value='-' >").appendTo(_add_red);
				$("<input class='goods_number' type='button' value="+obj.num+">").appendTo(_add_red);
				$("<input class='add' type='button' value='+' >").appendTo(_add_red);
				$("<div class='small_counter'>"+obj.unit+(obj.new_price*obj.num).toFixed(2)+"</div>").appendTo(_addgoods_bottom);
				$("<div class='remove'>删除</div>").appendTo(_addgoods_bottom);			
				//计算总价
				if (obj.checked) {
					totalPrice += obj.new_price*obj.num;
					totalNum+=obj.num;
				}
				
			}
			var _totally=$("<div class='totally'></div>").appendTo(_have_goods);
			$("<div class='remove_ck'>删除选中商品</div>").appendTo(_totally);
			$("<div class='select_num'>已选择商品<span>"+totalNum+"</span>件</div>").appendTo(_totally);
			$("<div class='total_price'>合计(不含运费和进口税):<span>￥"+totalPrice.toFixed(2)+"</span></div>").appendTo(_totally);
			$("<input type='button' class='tocount' value='去结算'>").appendTo(_totally);
		}
		else{
			var _nothing=$("<div class='nothing'></div>").appendTo(".mycart_detail");
			var _empty=$("<div class='empty'></div>").appendTo(_nothing);
			$("<img src='img/empty.jpg' class='empty_img'>").appendTo(_empty);
			var _tipword=$("<div class='tipword'></div>").appendTo(_nothing);
			$("<p class='word_one'>您还没有为您可爱的宝宝挑选任何商品哦~</p>").appendTo(_tipword);
			$("<p class='word_two'>您可以去<a href='../index/index.html'>首页</a>挑选宝宝喜欢的商品</p>").appendTo(_tipword);
			$("#big").css({background:"#f2f2f0"});
            $(".allselect").hide();
		}
	}
	//+
	$(".mycart_detail").on("click", ".add", function(){
		var index = $(this).index(".mycart_detail .add");
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num++;
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		//刷新节点数据
		refresh();
	})
	
	//-
	$(".mycart_detail").on("click", ".reduce", function(){
		var index = $(this).index(".mycart_detail .reduce");
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num--;
		if (arr[index].num < 1) {
			arr[index].num = 1;
		}
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		//刷新节点数据
		refresh();
	})	
	
	//删除
	$(".mycart_detail").on("click", ".remove", function(){
		var index = $(this).index(".mycart_detail .remove");
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr.splice(index, 1); //删除数组arr的第index个
		if(arr.length==0){
			$.cookie("cart", "", {expires:-1, path:"/"});
			$(".mycart_detail").empty();
			refresh();
		}
		else{
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		isAllSelect();
		//刷新节点数据
		refresh();
		}
	})
	
	
	//勾选
	$(".mycart_detail").on("click", ".isselect", function(){
		var index = $(this).index(".mycart_detail .isselect");
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].checked = !arr[index].checked;
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		//判断是否全选了
		isAllSelect();
		//刷新节点数据
		refresh();
	})
	
	//判断是否全部勾选了
	isAllSelect();
	function isAllSelect(){
		//判断是否为undefined
		var arr = $.cookie("cart");
		if (!arr) {
			return;
		}
		var arr = JSON.parse($.cookie("cart"));
		var sum = 0;
		for (var i=0; i<arr.length; i++) {
			sum += arr[i].checked;
		}
		//全选了
		if (arr.length!=0 && sum==arr.length) {
			$("#allselect_img").prop("checked", true);
		}
		//未全选
		else {
			$("#allselect_img").prop("checked", false);
		}
	}
	
	//全选
	$("#allselect_img").click(function(){
		//判断是否为undefined
		var arr = $.cookie("cart");
		if (!arr) {
			return;
		}
		var arr = JSON.parse($.cookie("cart"));
		for (var i=0; i<arr.length; i++) {
			//全选
			if ($(this).prop("checked")){
				arr[i].checked = true;
			}
			//全不选
			else {
				arr[i].checked = false;
			}
		}
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		//刷新
		refresh();
	})
	
	//删除选中
	$(".mycart_detail").on("click",".remove_ck",function(){
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		//将未选中的商品添加到新数组newArr中，再将newArr保存到cookie
		var newArr = [];
		for (var i=0; i<arr.length; i++) {
			if (!arr[i].checked) {
				newArr.push(arr[i]);
			}
		}
		if(newArr.length==0){
			$.cookie("cart", "", {expires:-1, path:"/"});
			//清除原来
			$(".mycart_detail").empty();
			refresh();
		}
		else{
			$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
			isAllSelect();
			//刷新节点数据
			refresh();
		}
		
	})
    //移入图片变大
    $(".mycart_detail").on("mouseenter"," .have_goods .addgoods .addgoods_bottom .goods_pic",function(){
    	$(this).siblings(".goods_pic_none").show();
    })
	 $(".mycart_detail").on("mouseleave",".have_goods .addgoods .addgoods_bottom .goods_pic",function(){
    	$(this).siblings(".goods_pic_none").hide();
    })
	$(".mycart_detail").on("mouseenter",".have_goods .addgoods .addgoods_bottom .goods_word .goods_detail",function(){
    	$(this).css({color:"#ff69b4"});
    })
	 $(".mycart_detail").on("mouseleave",".have_goods .addgoods .addgoods_bottom .goods_word .goods_detail",function(){
    	$(this).css({color:""});
    })
})