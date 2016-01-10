<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>电影数据采集分析系统</title>
    <!-- Bootstrap -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
	<link href="css/global.css" rel="stylesheet">
	 
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script> 
    <script src="highcharts/js/highcharts.js"></script> 
 <!--    <script src="highcharts/js/modules/exporting.js" type="text/javascript"></script>  
     -->
<!--     <script src="https://code.highcharts.com/maps/highmaps.js"></script> -->
    <script src="//code.highcharts.com/maps/modules/map.js"></script>
	<script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/mapdata/countries/cn/cn-all.js"></script>

    <script type="text/javascript" src="js/index.js"></script>
  </head>
  <body>
  
	 <%@ include file="common/head.jsp" %>
     <div class="container" style="margin-top:10px;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-left" id="tabs-42902">
					<ul class="nav nav-tabs" style="border:1px solid #ddd;">
						<li class="active">
							<a data-toggle="tab" href="#panel-1"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;历史票房排行榜</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-2"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;票房趋势</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-3"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;排片详情</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-4" onclick="time_pie()"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影片档期与类型关系</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-5"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片观众特征</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-6"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片评论分析</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-7"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片微博扩散特征</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-8"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片票房强度量化</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#ticket-1">历史票房</a></li>
								<li><a data-toggle="tab" href="#ticket-2">当月票房</a></li>
								<li><a data-toggle="tab" href="#ticket-3">本周票房</a></li>
							</ul>
							<div class="tab-content">
								<div id="ticket-1" class="tab-pane active">
									<table class="table table-hover">
										<thead>
											<tr>
												<td>
													<strong>年度排名</strong>
												</td>
												<td>
													<strong>历史排名</strong>
												</td>
												<td>
													<strong>电影名称</strong>
												</td>
												<td>
													<strong>总票房（亿）</strong>
												</td>
												<td>
													<strong>总人次（万）</strong>
												</td>
												<td>
													<strong>总场次（万）</strong>
												</td>
												<td>
													<strong>上映年份</strong>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													1
												</td>
												<td>
													1
												</td>
												<td>
													捉妖记
												</td>
												<td>
													24.38
												</td>
												<td>
													4742.92
												</td>
												<td>
													93.03
												</td>
												<td>
													2014
												</td>
											</tr>
											
										</tbody>
									</table>
								</div>
								<div id="ticket-2" class="tab-pane">
									<table class="table table-hover">
										<thead>
											<tr>
												<td>
													<strong>年度排名</strong>
												</td>
												<td>
													<strong>历史排名</strong>
												</td>
												<td>
													<strong>电影名称</strong>
												</td>
												<td>
													<strong>总票房（亿）</strong>
												</td>
												<td>
													<strong>总人次（万）</strong>
												</td>
												<td>
													<strong>总场次（万）</strong>
												</td>
												<td>
													<strong>上映年份</strong>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													1
												</td>
												<td>
													1
												</td>
												<td>
													速度与激情
												</td>
												<td>
													24.38
												</td>
												<td>
													4742.92
												</td>
												<td>
													93.03
												</td>
												<td>
													2014
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div id="ticket-3" class="tab-pane">
									<table class="table table-hover">
										<thead>
											<tr>
												<td>
													<strong>年度排名</strong>
												</td>
												<td>
													<strong>历史排名</strong>
												</td>
												<td>
													<strong>电影名称</strong>
												</td>
												<td>
													<strong>总票房（亿）</strong>
												</td>
												<td>
													<strong>总人次（万）</strong>
												</td>
												<td>
													<strong>总场次（万）</strong>
												</td>
												<td>
													<strong>上映年份</strong>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													1
												</td>
												<td>
													1
												</td>
												<td>
													变形金刚
												</td>
												<td>
													24.38
												</td>
												<td>
													4742.92
												</td>
												<td>
													93.03
												</td>
												<td>
													2014
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-2">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#trend-1">历史票房趋势</a></li>
								<li><a data-toggle="tab" href="#trend-2" onclick="trend_month()">月票房趋势</a></li>
								<li><a data-toggle="tab" href="#trend-3" onclick="trend_week()">本周票房趋势</a></li>
								<li><a data-toggle="tab" href="#trend-4" onclick="trend_hot()">热映票房趋势</a></li>
							</ul>
							<div class="tab-content">
								<div id="trend-1" class="tab-pane active" style="width: 900px; height:500px">
								</div>
								<div id="trend-2" class="tab-pane" style="width: 900px; height:500px">
								</div>
								<div id="trend-3" class="tab-pane" style="width: 900px; height:500px">
								</div>
								<div id="trend-4" class="tab-pane" style="width: 900px; height:500px">
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-3">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#info-1">实时排片详情</a></li>
								<li><a data-toggle="tab" href="#info-2" onclick="trend_analysis()">排片趋势</a></li>
							</ul>
							<div class="tab-content">
								<div id="info-1" class="tab-pane active">
									<div id="info-pie" style="width: 900px; height:500px"></div>
									<table class="table table-hover">
										<thead>
											<tr>
												<td>
													
												</td>
												<td>
													<strong>总场次</strong>
												</td>
												<td>
													<strong>神探夏洛克</strong>
												</td>
												<td>
													<strong>唐人街探案</strong>
												</td>
												<td>
													<strong>老炮儿</strong>
												</td>
												<td>
													<strong>寻龙诀</strong>
												</td>
												<td>
													<strong>恶棍天使</strong>
												</td>
												<td>
													<strong>一念天堂</strong>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													全国
												</td>
												<td>
													148495
												</td>
												<td>
													39301
												</td>
												<td>
													36112
												</td>
												<td>
													27451
												</td>
												<td>
													23346
												</td>
												<td>
													7758
												</td>
												<td>
													6584
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div id="info-2" class="tab-pane">
									<div id="info-line" style="width: 900px; height:500px"></div>
									<table class="table table-hover">
										<thead>
											<tr>
												<td>
													
												</td>
												<td>
													<strong>总场次</strong>
												</td>
												<td>
													<strong>神探夏洛克</strong>
												</td>
												<td>
													<strong>唐人街探案</strong>
												</td>
												<td>
													<strong>老炮儿</strong>
												</td>
												<td>
													<strong>寻龙诀</strong>
												</td>
												<td>
													<strong>恶棍天使</strong>
												</td>
												<td>
													<strong>一念天堂</strong>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													全国
												</td>
												<td>
													148495
												</td>
												<td>
													39301
												</td>
												<td>
													36112
												</td>
												<td>
													27451
												</td>
												<td>
													23346
												</td>
												<td>
													7758
												</td>
												<td>
													6584
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-4">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#">2016</a></li>
								<li><a data-toggle="tab" href="#">2015</a></li>
								<li><a data-toggle="tab" href="#">2014</a></li>
								<li><a data-toggle="tab" href="#">2013</a></li>
								<li><a data-toggle="tab" href="#">2012</a></li>
								<li><a data-toggle="tab" href="#">2011</a></li>
							</ul>
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#">贺岁档</a></li>
								<li><a data-toggle="tab" href="#">劳动节档</a></li>
								<li><a data-toggle="tab" href="#">暑期档</a></li>
								<li><a data-toggle="tab" href="#">国庆档</a></li>
								<li><a data-toggle="tab" href="#">其他档</a></li>
							</ul>
							<div class="tab-content">
								<div id="time-style" class="tab-pane active" style="width: 900px; height: 500px">
								</div>
								<div id="time-line1" class="tab-pane active" style="width: 900px; height: 500px">
								</div>
								<div id="time-line2" class="tab-pane active" style="width: 900px; height: 500px">
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-5">
							<div class="panel panel-default" style="border:1px solid #ddd;">
								<h4><strong>地域分布</strong></h4>
								<div id="area" style="width: 900px; height: 500px"></div>
							</div>
							<div style="margin-top: 20px; border:1px solid #ddd;">
								<h4><strong>人群属性</strong></h4>
								<div class="row-fluid">
									<div id="age" class="col-md-6" style="width: 450px; height: 250px"></div>
									<div id="sex" class="col-md-6" style="width: 450px; height: 250px"></div>
								</div>
							</div>
							<div id="business" style="width: 900px; height: 500px; margin-top: 20px">
							</div>
						</div>
						<div class="tab-pane" id="panel-6">
							<div id="comment-num" style="width: 900px; height: 500px; border:1px solid #ddd;">
							</div>
							<div id="network-people" style="width: 900px; height: 500px; margin-top: 20px;">
							</div>
							<div id="comment-level" style="width: 900px; height: 500px;">
							</div>
							<div>
								<h4><strong>评论内容</strong></h4>
								<p>主要展现：网友觉得影片好的方面的描述</p>
							</div>
						</div>
						<div class="tab-pane" id="panel-7">
							<div id="blog" style="width: 900px; height: 500px; border:1px solid #ddd; overflow:hidden"></div>
						</div>
						<div class="tab-pane" id="panel-8">
							<table class="table table-hover">
								<tr>
									<td>
										<strong>网络口碑值</strong>
									</td>
									<td>
										
									</td>
								</tr>
								<tr>
									<td>
										<strong>主创团队影响力值</strong>
									</td>
									<td>
										
									</td>
								</tr>
								<tr>
									<td>
										<strong>影片类型与档期的量化值</strong>
									</td>
									<td>
										
									</td>
								</tr>
								<tr>
									<td>
										<strong>影片排名的量化值</strong>
									</td>
									<td>
										
									</td>
								</tr>
								<tr>
									<td>
										<strong>宣传效果的量化</strong>
									</td>
									<td>
										
									</td>
								</tr>
								<tr>
									<td>
										<strong>最终量化值</strong>
									</td>
									<td>
										
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

     


	<%@ include file="common/foot.jsp" %>
	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 
	<script src="echarts/build/dist/echarts.js"></script>

    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/category/category.js"></script>
    <script type="text/javascript" src="js/category/info.js"></script>
    <script type="text/javascript" src="js/category/time_style.js"></script>
    <script type="text/javascript" src="js/category/audience.js"></script>
	<script type="text/javascript" src="js/category/comment.js"></script>
	<script type="text/javascript" src="js/category/blog.js"></script>

  </body>
</html>