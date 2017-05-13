onload = function(){
	//判断是否已经登陆
	var type =JSON.parse( window.localStorage.getItem('login'));
	console.log("dengl"+type.type)
	$("#isLoginBtn").click(function(){
		if(type == true){
			location.href = ""
		}else{
			location.href = "login.html"
		}
	})
	//ewm
	var oWx = document.getElementById("wx");
	var oEwm = document.getElementById("ewm");
	
	$("#wx").hover(function(){
		oEwm.style.display = "block";
		console.log("进入")
	},function(){
		oEwm.style.display = "none";
		console.log("chu")
	})
	// oWx.onmouseover = function(){
	// 	oEwm.style.display = "block";
	// }
	
	// oWx.onmouseout = function(){
	// 	oEwm.style.display = "none";
	// }
}
