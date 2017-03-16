$(function(){
	//
	var actIds= location.search.replace("?id=","");
	var actId = parseInt(actIds) -1;
	console.log(actId);
	$.ajax({
		type:"get",
		url:"../data/activities.json",
		async:true,
		success:function(data){
			/*<h1 class="title">第八届全国高校校园文化建设优秀成果二等奖：以激发红色基因 培育爱学习品质</h1>
			<h4>
				<span class="time">2017-02-13 14:30</span>
				<span class="source">红岸网</span>
				<i class="ion-compose"></i>评论：<span class="cmts">21</span></h4>
			<section class="detailsContent">
				<p>
					2016年是百色学院升本10周年，学校各项事业取得了骄人成绩。为充分反映和梳理2016年学校具有重要影响的新闻事件，推动学校建设，激发广大师生知校、爱校、兴校热情，
					学校开展了“百色学院2016年十大新闻”评选活动。经广大师生、各界校友投票评选，“‘升本’10年，学校建设发展成就斐然”等10条新闻荣膺百色学院2016年十大新闻。
				</p>
				<p class="img"><img src="../img/10-01.jpg" alt="百院图片" title="第八届全国高校校园文化建设优秀成果二等奖" /></p>
					
			</section>*/
			$(".actTitle").html(data.activities[actId].title);
			$(".details").append("<h1 class='title'>"+data.activities[actId].title+"</h1><h4>"
				+"<span class='time'><i class='icon ion-clock'></i> "+data.activities[actId].time+"</span><span class='source'>From:&nbsp"+data.activities[actId].source+"</span>"
				+"<i class='ion-compose'></i>评论：<span class='cmts'>"+21+"</span></h4>"
			+"<section class='detailsContent'><p>"+data.activities[actId].content+"</p>"
			+"<p class='img'><img src="+data.activities[actId].img+" alt='百院图片' title='百色学院活动' /></p></section>");
		}
	});
	
})
