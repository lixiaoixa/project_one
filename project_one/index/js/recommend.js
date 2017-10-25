$(function(){
	//全局变量， 用来保存获取到json中的所有商品数据
	var arr = [];
	//先获取数据并创建节点，显示数据
	$.get("json/recommend.json", function(data){
//   	console.log(data);
		arr = data;
		
		//遍历json中的所有商品数据，并用节点显示
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];
			
			//创建li节点
			var li = $("<li></li>").appendTo(".commodity");
			$("<img src="+ obj.headImg +">").appendTo(li);
			$("<h4 class='name'>"+ obj.name +"</h4>").appendTo(li);
			$("<p class='description'>"+ obj.description +"</p>").appendTo(li);
			var left=$("<div class='left'></div>").appendTo(li);
			var _new=$("<p class='new'>拼团价:￥</p>").appendTo(left);
			$("<i>"+obj.new_price.toFixed(2)+"</i>").appendTo(_new);
			var _old=$("<p class='old'>市场价:</p>").appendTo(left);
			var _del=$("<del></del>").appendTo(_old);
			$("<i>"+obj.unit+obj.old_price.toFixed(2)+"</i>").appendTo(_del);
			var right=$("<div class='right'></div>").appendTo(li);
			$("<p class='right_1'>去拼团</p>").appendTo(right);
			$("<p class='right_2'>"+obj.num+"人已团</p>").appendTo(right);
		}
	});
	$(".commodity").on("click", "li", function(){
			//console.log("click");
			var index = $(this).index(); 
			var obj = arr[index];
			//console.log(obj.id);
			//进入详情页， 且将当前点击的商品的id传入
			location.href ="../commodity_details/commodity_details.html?id="+obj.id;
			
		});			

	$(".commodity").on("mouseenter", "li", function(){
			$(this).find("h4").css({color:"#fa4a97"});
			
		});		
	
	$(".commodity").on("mouseleave", "li", function(){
			$(this). find("h4").css({color:""});
			
		});		
})