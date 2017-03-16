$(function(){
	
	var btnSave = document.getElementById("userRegister");
	var num =0;  
	//加密
	function encrypt(password) {
        var c = String.fromCharCode(password.charCodeAt(0) + password.length);
		console.log(c);
        for(var i = 1; i < password.length; i++) {
            c += String.fromCharCode(password.charCodeAt(i) + password.charCodeAt(i - 1));
        }

        //console.log(c);
        return c;
    }
	/*jiemi*/
    /*function decrypt(password) {
        var c = String.fromCharCode(password.charCodeAt(0) - password.length);
		console.log(c);
        for(var i = 1; i < password.length; i++) {
            c += String.fromCharCode(password.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        return c;

    }*/
	//封装判断
	function judgeReg(userName,identCode,showIdent,userPwd,userPwdag,userProm,identPromt,prom){
		//userName
		$(userName).blur(function(){
			var str = $(this).val();
			//用户名必须是数字和字母组合
			var reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{5,10}$/;
			if (!reg.test(str)){
				$(userProm).html("请输入正确的用户名") ;
				return ;
			}else{
				$(userProm).html("");
			}
			console.log(str);
		});
		//identCode
		$(identCode).click(function(){
			var codeStr = "";
			for(var i=0;i<4;i++){
				var a = parseInt(Math.random() * 10);
				codeStr = codeStr.concat(a);
			}
			$(showIdent).html(codeStr);
		});
		
		$(identCode).blur(function(){
			if($(identCode).val()!=$(showIdent).text()){
				$(identPromt).html("您输入的验证码不正确，请重新输入");
			}else{
				$(identPromt).html("");
			}
		});
		
		//密码校验
		var pswReg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
		$(userPwd).blur(function(){
			
			var psw1 = $(this).val();
			console.log(psw1);
			if(!pswReg.test(psw1)){
				$(prom).html("密码需为6-20位数字和字母的组合");
				
			}else{
				$(prom).html("");
			}
		});
		//密码再次校验
		$(userPwdag).blur(function(){
			//失去焦点恢复
			$(this).attr("placeholder","确认密码要与设置密码一致");
			var psw2 = $(this).val()
			if(!pswReg.test(psw2)){
				$(prom).html("设置密码为6-20位必须包含字母和数字");
				//return true;	
			}else{
				$(prom).html("");
			}
			if($(userPwd).val()!= psw2){
				$(prom).html("确认密码与设置密码不一致");
			}else{
				return true;
			}
		});
	}
	//调用
	judgeReg("#userName","#identCode",".showIdent","#userPwd","#userPwdag",".userProm",".identPromt",".prom");
	
	//注册
	btnSave.onclick = function(){
		if(!$("#agree").is(":checked")){
			$(".prom").html("请勾选用户服务协议");
		}else{
			$(".prom").html("");
			judgeReg("#userName","#identCode",".showIdent","#userPwd","#userPwdag",".userProm",".identPromt",".prom");
			//默认未注册
			var userName = $("#userName").val();
			var psw = $("#userPwd").val();
			var stateType =false;
			var regList = localStorage.getItem("regList");
			console.log(regList);
			
			//这里得到的有可能为null
			if(regList == undefined || regList ==""){
				regList =  [];
				stateType = false;
				
			}else{
				//提取用户信息
				var regList = JSON.parse(regList);
				num =regList.length;
				$.each(regList, function() {
					if(this.userName==$('#userName').val()){
						//若遍历到符合条件的则为已注册
						stateType=true;
						console.log("已经注册了");
					}	
				});
			}
			if(stateType){
				$(".userProm").html($('#userName').val()+"该用户名已经注册，请更换");
			}
			else{
				num++;
				dataList={"id":num,"userName":userName,"password":encrypt(psw)};
				regList.push(dataList);
				// 存入本地存储
				localStorage.setItem('regList',JSON.stringify(regList));
				console.log(regList);
				$(".shadeBox").removeClass("hideIt");
				$(".warning").removeClass("hideIt");
				$(".Ok").click(function(){
					location.href = "login.html";
				});
				$(".no").click(function(){
					$(".shadeBox").addClass("hideIt");
					$(".warning").addClass("hideIt");
				});
			}
			
			
		}
	}	

});