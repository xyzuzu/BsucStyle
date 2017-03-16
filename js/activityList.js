$(function(){
	/*<ul id="con_detail">
		<li>
			<dl class="clearfix">
				<dt class="l">
					<a href="" target="_blank" title="百院"> <img src="../img/actList/20170118sn.jpg"/></a>
				</dt>
				<dd class="l">
					<h3><a href="" target="_blank">百色学院2016年十大新闻评选结果出炉</a></h3>
					<h5>新闻评选|结果</h5>
					<p class="pingjia">
						<span class="fenlei"><i class="ion-compose"></i> 要闻 · 百院</span>
						<span class="time"><i class="ion-calendar"></i> 2017-02-07</span>
					</p>
				</dd>
			</dl>
		</li>*/
	$.ajax({
		type:"get",
		url:"../data/activities.json",
		dataType:"json",
		async:true,
		success:function(data){
			var len = data.activities.length-1;
			console.log(len);
			for(var i=len;i>len-10;i--){
				console.log(data.activities[i].id);
				$li = $("<li></li>");
				//$dl = $("<dl class='clearfix'></dl>");
				$li.append("<dl class='clearfix'><dt class='l'><a href=activityDetail.html?id="+data.activities[i].id+" target='_blank' title='百院'> <img src="+data.activities[i].img+"/></a></dt>"
				    +"<dd class='l'><h3><a href=activityDetail.html?id="+data.activities[i].id+" target='_blank'>"+data.activities[i].title+"</a></h3>"
					+"<h5>"+data.activities[i].content+"</h5><p class='pingjia'><span class='fenlei'><i class='ion-compose'></i>"+data.activities[i].type+"</span>"
					+"<span class='time'><i class='ion-calendar'></i>"+ data.activities[i].time+"</span></p></dd></dl>")
				.appendTo($(".con_detail"));
			}
		}
	});
})
