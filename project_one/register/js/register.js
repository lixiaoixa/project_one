$(function(){
	    //验证码更新
	    update();
		function update(){
			var str ="";
			for (var i=0; i<4; i++){
				str += parseInt(Math.random()*10);
			}
			$("#register .right form .ck .verify").html(str);
	    }
		$("#register .right .top .r a").mouseenter(function(){
       		$(this).css({color:"#f450a2"});
       })
       $("#register .right .top .r a").mouseleave(function(){
       		$(this).css({color:""});
       })
       //刷新页面，清空输入框
	    $("input").val("");
	    var flag1=false;
     	var flag2=false;
     	var flag3=false;
     	var flag4=false;
     	var flag5=true;
		$("#register .right form .number input").blur(function(){
         	var number_con=$(this).val();
//       	console.log(number_con);
         	if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test(number_con)){
         		$("#register .right form .number .number_tip").hide();
         		flag1=true;
         		
         	}
         	else{
         		$("#register .right form .number .number_tip").show();
         		flag1=false;
         	}
     	})
		$("#register .right form .ck .verify").click(function(){
			var str ="";
			for (var i=0; i<4; i++){
				str += parseInt(Math.random()*10);
			}
			$(this).html(str);
			fn();
		})
		$("#register .right form .ck input").blur(function(){			
     		fn();
        })
        function fn(){
			if ($("#register .right form .ck .verify").html()==$("#register .right form .ck input").val()){
         	   $("#register .right form .ck .ck_tip").hide();
         	   flag2=true;
				
			}
			else {
			   $("#register .right form .ck .ck_tip").show();
         	   flag2=false;
			}
		}
        $("#register .right form .password input").blur(function(){	
        	var password_con=$(this).val();
     		if(/^[a-zA-Z_]\w{5,13}$/.test(password_con)){
     			$("#register .right form .password .password_tip").hide();
     			flag3=true;
     		}
     		else{
     			$("#register .right form .password .password_tip").show();
     			flag3=false;
     		}	
        })
         $("#register .right form .repassword input").blur(function(){	
        	var repassword_con=$(this).val();
     		if(repassword_con== $("#register .right form .password input").val()){
     			$("#register .right form .repassword .repassword_tip").hide();
     			flag4=true;
     		}
     		else{
     			$("#register .right form .repassword .repassword_tip").show();
     			flag4=false;
     		}	
        })
        $("#register .right form .check input").click(function(){
	        if($("#register .right form .check input").prop("checked")){
	        	$("#register .right form .check .check_tip").hide();
	        	flag5=true;
	        }
	        else{
	        	$("#register .right form .check .check_tip").show();
	        	flag5=false;
	        }
        }) 
        $("#register .right form .btn").click(function(){
        	if(flag1&&flag2&&flag3&&flag4&&flag5){
        		$("#register .right form .tip").hide();
        		$.ajax({
        			type:"post",
        			url:"http://localhost/second_learning/project_one/register/php/register.php",
        			//url:"http://localhost/project_one/second_learning/project_one/register/php/register.php",
        			async:true,
        			data:{
        				"num":$("#register .right form .number input").val(),
        				"ver":$("#register .right form .ck input").val(),
        				"pwd":$("#register .right form .password input").val(),
        				"repwd":$("#register .right form .repassword input").val()
        			},
        			success:function(data){
        				//console.log(data);
        				var obj=JSON.parse(data);
        				if(obj.status==1){
	        				var n=1;
	        				var timer=setInterval(function(){
	        					n++;
	        					//注册成功
	        					$("#register .right form .btn").html(obj.msg+",即将进入登录页面！");
		                        $("#register .right form .btn").css({"font-size":14});
	        					if(n==5){
	        						//跳到登录页面
	        						clearInterval(timer);
									window.location.href="../login/login.html";
	        					}
								
	        				},300)
        				}
        				else{
        					var m=1;
        					var timer=setInterval(function(){
        						m++;
        						$("#register .right form .btn").html(obj.msg+",请直接登录！");
		                    	$("#register .right form .btn").css({"font-size":14});
        						if(m==5){
        							clearInterval(timer);
        							$("#register .right form .btn").html("注册");
		                    		$("#register .right form .btn").css({"font-size":20});
        						}
        					},700)
        					
        				}
        			},
        			error:function(error){
        				console.log(error);
        					//注册失败
							$("#register .right form .btn").html("注册失败，请重新注册!");
							$("#register .right form  .btn").css({"font-size":14});
        			}
        		});
//				var xhr=new XMLHttpRequest();
//				xhr.open("post","http://localhost/second_learning/project_one/register/php/register.php",true);
//				//http://127.0.0.1:8020/www/second_learning/project_one/register/php/register.php                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//              var str="num="+$("#register .right form .number input").val()+"&ver="+$("#register .right form .ck input").val()+"&pwd="+$("#register .right form .password input").val()+"&repwd="+$("#register .right form .repassword input").val();
//              xhr.send(str);
//              console.log(str);
//      	    xhr.onreadystatechange = function () {
//      	    	//console.log(xhr.readyState );console.log(xhr.status );
//	                if (xhr.readyState==4 && xhr.status==200) {
//	                	//console.log(xhr.responseText);
//	                    var obj = JSON.parse(xhr.responseText);
//	                    console.log(obj.status);
//	                       if (obj.status == 1) {
//	                       		console.log(111)
//									//注册成功
//									$("#register .right form .tip p").html(obj.msg);
//									$("#register .right form .tip").show();
//									//跳到登录页面
//									window.location.href="../login/login.html";
//							}
//							else {
//								console.log(222)
//									//注册失败
//									$("#register .right form .tip p").html(obj.msg);
//									$("#register .right form .tip").show();
//							}    
//	            	}
//	                
//              }
        	
        	}

        })
       
})
