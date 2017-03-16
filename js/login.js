$(function(){
	
	 /*加密*/
    function encrypt(password) {

        var c = String.fromCharCode(password.charCodeAt(0) + password.length);
		console.log(c);
        for(var i = 1; i < password.length; i++) {
            c += String.fromCharCode(password.charCodeAt(i) + password.charCodeAt(i - 1));
        }
        return c;
    }
    
	$("#userName").blur(function(){
		var str = $(this).val();
		//用户名必须是数字和字母组合
		var reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{5,10}$/;
		if (!reg.test(str)){
			$(".prompt").html("用户名格式不对") ;
			return ;
		}else{
			$(".prompt").html("");
		}
		console.log(str);
	});
	
	var pswReg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
	$("#userPwd").blur(function(){
		var psw = $(this).val();
		console.log(psw);
		if(!pswReg.test(psw)){
			$(".prompt").html("密码需为6-20位数字和字母的组合");
			
		}else{
			$(".prompt").html("");
		}
	});
	
	$("#userLogin").click(function(){
		
		var $userName = $("#userName").val();
		var $psw =encrypt( $("#userPwd").val() );
		console.log($psw);
		
		//判断用户名和密码是否为空
		if($userName != "" && $psw != ""){
			
			var userList = localStorage.getItem("regList");
			console.log(userList);
			//如果字符串为空，则跳转注册页面
			if(userList == "" || userList == undefined){
				
				console.log("注册页面跳转");
				location.href = "register.html";
				var obj = {type:false};
				
			}else{//有注册信息
				var userList = JSON.parse(userList);
				console.log(userList);
				var inReg = true;
				
				$.each(userList,function(){
					var self = this;
					if( this.userName == $userName && this.password == $psw){
						
						console.log("登录成功");
						$(".shadeBox").removeClass("hideIt");
						$(".warning").removeClass("hideIt");
						$(".que").html($userName+"登录成功！")
						$(".Ok").click(function(){
							location.href = "personalInfo.html?userId="+self.id;
						});
						$(".no").click(function(){
							$(".shadeBox").addClass("hideIt");
							$(".warning").addClass("hideIt");
							location.href ="index.html";
						});
						
						//已注册
						inReg = false;
						
					}else if( this.userName == $userName && this.password != $psw){
						
						$(".prompt").html("用户名与密码不符,请查证后再输入");
						//已注册
						inReg = true;	
						
					}else{
						Location.href = "register.html";
						return true;
					}
				});
				if(inReg){//未注册
					
					var obj ={type:false};
					Location.href = "register.html";
					
				}else{
					var obj = {type:true,name:$userName};
				}
			}
			localStorage.setItem("login",JSON.stringify(obj));
		}else{
			Location.href = "register.html";
		}
		console.log(localStorage.getItem("login"));
	});
})
