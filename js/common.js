onload = function(){
	//ewm
	var oWx = document.getElementById("wx");
	var oEwm = document.getElementById("ewm");
	
	oWx.onmouseover = function(){
		oEwm.style.display = "block";
	}
	
	oWx.onmouseout = function(){
		oEwm.style.display = "none";
	}
}
