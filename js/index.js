$(function() {
	$.ajax({
		type:"get",
		dataType:"json",
		url:"../data/activities.json",
		async:true,
		success:function(data){
			/*banner*/
			/*<a href="#" link="">
								<img src="../img/10-01.jpg">
							</a>
							<a href="#" link="">
								<img src="../img/index/tu1.jpg">
							</a>
							<a href="#" link="">
								<img src="../img/changeBg/3.jpg">
							</a>
							<a href="#" link="">
								<img src="../img/changeBg/4.jpeg">
							</a>
							<a href="#" link="">
								<img src="../img/changeBg/5.jpg">
							</a>
							<li index="0"></li>
					<li index="1"></li>
					<li index="2"></li>
					<li index="3"></li>
					<li index="4"></li>
			*/
			for(var i=0;i<5;i++){
				$(".dg-wrapper").append("<a href='#' link=activityDetail.html?id="+data.activities[i].id+" ><img src="+data.activities[i].img+" alt='百色学院风采' title='百色学院风采'></a>");
				$("#lightButton").append("<li index="+i+"></li>");
				console.log(i);
			}
			
			$("#dg-container").carrousel({
				current: 0,
				autoplay: true,
				interval: 3000
			});
	
	
			
			/*actList*/
			/*<div class="latestList">
					<a href="">
						<div class="img"><img src="../img/byp1.png" alt="" /></div>
						<div class="titleShade">
							<h4 class="latestListTitle">我校举办2016年安全教育“精彩一课”决赛</h4>
							<p><span class="latestListAuthor">张小燕  |</span><span class="latestListFrom">信息工程学院</span></p>
						</div>
					</a>
				</div>*/
			var len = data.activities.length-1;
			for(var i=len ;i>len-8;i--){
				var $lat = $("<div class='latestList'></div>");
				$lat.append("<a href=activityDetail.html?id="+data.activities[i].id+"><div class='img'><img src="+data.activities[i].img+" alt='' /></div>"
						+"<div class='titleShade'><h4 class='latestListTitle'>"+data.activities[i].title+"</h4>"
						+	"<p><span class='latestListAuthor'>"+data.activities[i].author +" |</span><span class='latestListFrom'>"+data.activities[i].source+"</span></p>"
						+"</div></a>").appendTo($(".actList"));
				
			}
			console.log(data);
			
			// 移入效果
			$('.latestList a').hover(function(){
			    var x=event.pageX-$(this).offset().left,//得到鼠标在块中的坐标
			        y=event.pageY-$(this).offset().top,//得到鼠标在块中的坐标
			        h=$(this).outerHeight(), //用于获得包括内边界(padding)和边框(border)的元素高度
			        w=$(this).outerWidth(), ///用于获得包括内边界(padding)和边框(border)的元素宽度
			        k=Math.floor(h/w);//为了防止不能整除
			
			//上方进入
			    if((k * x) >= y && (h - k * x) >= y){
			        //初始悬浮块位置，下同
			        $(this).children().css({
			            "top":"-100%",
			            "left": 0
			        })
			        //设置出现动画，下同
			        $(this).children().stop(true,true).animate({
			            "top": "0"
			        });
			    }
			    
			// 从下方进入
			    if((k * x) < y && (h - k * x) < y){
			        $(this).children().css({
			            "top": "100%",
			            "left": "0"
			        })
			        $(this).children().stop(true,true).animate({
			            "top": "0"
			        });
			    }
			
			// 从左边进入
			    if((k * x) < y && (h - k * x) > y){
			        $(this).children().css({
			            "top": "0",
			            "left": "-100%"
			        })
			        $(this).children().stop(true,true).animate({
			            "left": "0"
			        });
			    }
			
			// 从右边进入
			    if(( k * x ) > y && (h - k * x) < y){
			        $(this).children().css({
			            "top": "0",
			            "left": "100%"
			        })
			        $(this).children().stop(true,true).animate({
			            "left": "0"
			        });
			    }
			
			// 移出效果
			},function() { 
			    var x=event.pageX-$(this).offset().left,//得到鼠标在块中的坐标
			        y=event.pageY-$(this).offset().top,//得到鼠标在块中的坐标
			        h=$(this).outerHeight(),            
			        w=$(this).outerWidth(),
			        k=Math.floor(h / w);//为了防止不能整除
			        
			    if((k * x) >= y && (h - k * x) >= y){ //从上方移出
			        //移出动画，下同
			        $(this).children().stop(true,true).animate({
			            "top": "-100%",
			            "left":0
			        });
			    }
			
			    if((k * x) < y && (h - k * x) < y){ //从下方移出
			        $(this).children().stop(true,true).animate({
			            "top": "100%",
			            "left":0
			        });
			    }
			
			    if((k * x ) < y && (h - k * x) > y){ //从左边移出
			        $(this).children().stop().animate({
			            "left": "-100%",
			            "top":0
			        });
			    }
			    if((k * x) > y && (h - k * x) < y){ //右边移出
			        $(this).children().stop().animate({
			            "left": "100%",
			            "top":0
			        });
			    }
			});
		},
		error:function(data){
			console.log("ERROR!");
		}
	});
	
	/*forenotice*/
	$.ajax({
		type:"get",
		dataType:"json",
		url:"../data/foren.json",
		async:true,
		success:function(data){
			$.each(data.foren, function() {
				var $content = $("<div class='col-md-4 col-sm-6'></div>");
			    $($content) .append($("<div class='foren'></div>").html("<div class='foren-img'><img src="+this.fimg+" alt=''></div><div class='for-content'>"
								+"<h4 class='title'>"+this.ftitle+"</h4><p class='description'>"+this.descri+"</p>"
								+"<p>"+this.sponsor+"<i class='ion-ios-heart' style='color: white;'></i></p></div>"))
			    .appendTo($(".row"));
			    
			});
		},
		error:function(data){
			console.log("ERROR!");
		}
	});
});


