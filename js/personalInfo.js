$(function(){

	var userId =parseInt(location.search.replace("?userId=","")) ;	
	var user = localStorage.getItem(userId);
	console.log(user);
	var perBg = $(".perInfo").css("background").split('"')[1];
	console.log(perBg);
	//console.log(JSON.parse(user).userId);
	var userList = localStorage.getItem("regList");
	userList = JSON.parse(userList);
	console.log(userList);
	var userName = "";
	$.each(userList, function() {
		var self = this;
		console.log(self.userName);
		if(this.id == userId){
			return userName = self.userName;
		}
		
	});
	console.log(userName);
			
	
	//perContent perNav
	$(".perNav li").click(function(){
		var index = $(this).index();
		if(index == 2){
			index = parseInt(index)-1;
		}
		if(index == 4){
			index = parseInt(index)-2;
		}
		console.log("下标"+index)
		$(this).addClass("liColor").siblings().removeClass("liColor");
		$(this).find("i").addClass("ionColor").parent().siblings().find("i").removeClass("ionColor");
		$(".perModule").eq(index).removeClass("displayNone").siblings().addClass("displayNone");
	});
	
	var perImg = $(".perImg img").attr("src");
	
	console.log(perImg);
	console.log("背景："+perBg);
	if(user == undefined || user == ""){
		
		$(".perImg").html("<img src='../img/loginbg.jpg' alt='头像' title='个人头像' />"); 
		$(".perName").html(userName);
		$(".perExplain").html("<i class='ion-edit'></i>还没有设置心情");
		
		user = [];
		var userInf = {"userId":userId,"userName":userName,"perImg":$(".perImg img").attr("src"),"perMood":"未设置心情","perBg":perBg}
		localStorage.setItem(userId,JSON.stringify(userInf));
		console.log(user.perBg);
	}else{
		var user = JSON.parse(user);
		
		//changBg
		$(".changeBg").click(function(){
			
			$(".bgPic").toggleClass("hideImg");
			$(".changeBg").html("<i class='ion-navigate chBg' style='font-size: 1.6rem;'></i><sapn class='ok'>确定更换</span>");
			$("#bgPics li img").each(function(){
				$(this).click(function(){
					console.log(this);
					//var user = JSON.parse(user);
	
					//console.log($(this).attr("src"));
					$(".perInfo").css("background","url("+$(this).attr("src")+") no-repeat").css("background-size","100% 100%");
					var img = $(this).attr("src");
					console.log("img:"+img);
					perBg = img;
					console.log("perBg"+perBg);
					user.perBg = perBg;
					console.log(user.perBg);
					$(".changeBg .ok").click(function(){
						$(".changeBg").html("<i class='ion-navigate chBg' style='font-size: 1.6rem;'></i><sapn>更换背景</span>");
						console.log("dianji");
						console.log(user.userId);
						console.log(user.perBg);
						
						$(".bgPic").toggleClass("hideImg");
					});
					
				});		
			});
			
		});
		console.log(user);
		var userInf = {"userId":userId,"userName":userName,"perImg":$(".perImg img").attr("src"),"perMood":"未设置心情","perBg":user.perBg}
		localStorage.setItem(userId,JSON.stringify(userInf));
		$(".perInfo").css("background","url("+user.perBg+") no-repeat").css("background-size","100% 100%");
		$(".perImg").html("<img src="+user.perImg+" alt='头像' title='个人头像' />");
		$(".perName").html(userName);
		$("perExplain").html("<i class='ion-edit'></i>"+user.perMood);
		console.log(user.perMood);
		/*var userInf = {"userId":userId,"userName":userName,"perImg":$(".perImg img").attr("src"),"perMood":"未设置心情","perBg":user.perBg}
		localStorage.setItem(userId,JSON.stringify(userInf));
		*/
		
	}
	
	
	
});
