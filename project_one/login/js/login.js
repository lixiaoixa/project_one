$(function(){
	$("input").val("");
	$("#login .right .top .r a").mouseenter(function(){
       		$(this).css({color:"#f450a2"});
       })
       $("#login .right .top .r a").mouseleave(function(){
       		$(this).css({color:""});
       })
    $("#login .right form .btn").click(function(){
    	$.ajax({
        			type:"post",
        			url:"http://localhost/second_learning/project_one/login/php/login.php",
        			//url:"http://localhost/project_one/second_learning/project_one/login/php/login.php",
        			async:true,
        			data:{
        				"num":$("#login .right form .number input").val(),
        				"pwd":$("#login .right form .password input").val(),
        			},
        			success:function(data){
          				console.log(data);
        				var obj=JSON.parse(data);
        				if(obj.status==1){
	        				var n=1;
	        				var timer=setInterval(function(){
	        					n++;
	        					//登录成功
	        					$("#login .right form .btn").html(obj.msg+"即将进入首页！");
		                        $("#login .right form .btn").css({"font-size":14});
	        					if(n==5){
	        						//跳到首页
	        						clearInterval(timer);
									window.location.href="../index/index.html";
	        					}
	        				},300)
        				}
        				else{
        					var m=1;
        					var timer=setInterval(function(){
        						m++;
        						$("#login .right form .btn").html(obj.msg);
		                    	$("#login .right form .btn").css({"font-size":14});
        						if(m==5){
        							clearInterval(timer);
        							$("#login .right form .btn").html("登录");
		                    		$("#login .right form .btn").css({"font-size":20});
        						}
        					},500)
        					
        				}
        			},
        			error:function(error){
        				console.log(error);
        				//登录失败
						$("#login .right form .tip p ").html("登录失败，请重新登录！");
						$("#login .right form .tip").show();
        			}
        		});
//  	var xhr=new XMLHttpRequest();
//			xhr.open("POST","http://localhost/second_learning/project_one/login/php/login.php",true);
//          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//          xhr.send("num="+$("#login .right form .number input").val()+"&pwd="+$("#login .right form .password input").val());
//  	    xhr.onreadystatechange = function () {
//              if (xhr.readyState==4 && xhr.status==200) {
//                  var obj = JSON.parse(xhr.responseText);
//                     if (obj.status == 1) {
//								//登录成功
//								$("#login .right form .tip p").html("登录成功，即将进入首页！");
//								$("#login .right form .tip").show();
//								//跳到首页
//								window.location.href="../index/index.html";
//						}
//						else {
//								//登录失败
//								$("#login .right form .tip p ").html("登录失败，请重新登录！");
//								$("#login .right form .tip").show();
//						}    
//          	}
//          }
    })
})
