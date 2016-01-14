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
							<a data-toggle="tab" href="#panel-1"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影片资料&nbsp;&nbsp;</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-2"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影人资料&nbsp;&nbsp;</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1">
							<ul class="nav nav-pills">
								<li role="presentation" class="active"><a href="#">全部</a></li>
								<li role="presentation"><a href="#">A</a></li>
								<li role="presentation"><a href="#">B</a></li>
								<li role="presentation"><a href="#">C</a></li>
								<li role="presentation"><a href="#">D</a></li>
								<li role="presentation"><a href="#">E</a></li>
								<li role="presentation"><a href="#">F</a></li>
								<li role="presentation"><a href="#">G</a></li>
								<li role="presentation"><a href="#">H</a></li>
								<li role="presentation"><a href="#">I</a></li>
								<li role="presentation"><a href="#">J</a></li>
								<li role="presentation"><a href="#">K</a></li>
								<li role="presentation"><a href="#">L</a></li>
								<li role="presentation"><a href="#">M</a></li>
								<li role="presentation"><a href="#">N</a></li>
								<li role="presentation"><a href="#">O</a></li>
								<li role="presentation"><a href="#">P</a></li>
								<li role="presentation"><a href="#">Q</a></li>
								<li role="presentation"><a href="#">R</a></li>
								<li role="presentation"><a href="#">S</a></li>
								<li role="presentation"><a href="#">T</a></li>
								<li role="presentation"><a href="#">U</a></li>
								<li role="presentation"><a href="#">V</a></li>
								<li role="presentation"><a href="#">W</a></li>
								<li role="presentation"><a href="#">X</a></li>
								<li role="presentation"><a href="#">Y</a></li>
								<li role="presentation"><a href="#">Z</a></li>
							</ul>
							<h4 style="margin-top: 20px"><strong>影片基本属性</strong></h4>
							<h4 style="margin-top: 20px"><strong>概述</strong></h4>
							<h4 style="margin-top: 20px"><strong>票房曲线图</strong></h4>
							<h4 style="margin-top: 20px"><strong>排片曲线图</strong></h4>
							<h4 style="margin-top: 20px"><strong>观众属性特征</strong></h4>
							<h4 style="margin-top: 20px"><strong>观众评论热点</strong></h4>
							<h4 style="margin-top: 20px"><strong>营销事件</strong></h4>
						</div>
						<div class="tab-pane" id="panel-2">
							<ul class="nav nav-pills">
								<li role="presentation" class="active"><a href="#">全部</a></li>
								<li role="presentation"><a href="#">A</a></li>
								<li role="presentation"><a href="#">B</a></li>
								<li role="presentation"><a href="#">C</a></li>
								<li role="presentation"><a href="#">D</a></li>
								<li role="presentation"><a href="#">E</a></li>
								<li role="presentation"><a href="#">F</a></li>
								<li role="presentation"><a href="#">G</a></li>
								<li role="presentation"><a href="#">H</a></li>
								<li role="presentation"><a href="#">I</a></li>
								<li role="presentation"><a href="#">J</a></li>
								<li role="presentation"><a href="#">K</a></li>
								<li role="presentation"><a href="#">L</a></li>
								<li role="presentation"><a href="#">M</a></li>
								<li role="presentation"><a href="#">N</a></li>
								<li role="presentation"><a href="#">O</a></li>
								<li role="presentation"><a href="#">P</a></li>
								<li role="presentation"><a href="#">Q</a></li>
								<li role="presentation"><a href="#">R</a></li>
								<li role="presentation"><a href="#">S</a></li>
								<li role="presentation"><a href="#">T</a></li>
								<li role="presentation"><a href="#">U</a></li>
								<li role="presentation"><a href="#">V</a></li>
								<li role="presentation"><a href="#">W</a></li>
								<li role="presentation"><a href="#">X</a></li>
								<li role="presentation"><a href="#">Y</a></li>
								<li role="presentation"><a href="#">Z</a></li>
							</ul>
							<h4 style="margin-top: 20px"><strong>影人基本属性</strong></h4>
							<h4 style="margin-top: 20px"><strong>概述</strong></h4>
							<h4 style="margin-top: 20px"><strong>作品</strong></h4>
							<h4 style="margin-top: 20px"><strong>关联度较高的影人</strong></h4>
							<h4 style="margin-top: 20px"><strong>影人粉丝特征</strong></h4>
							<h4 style="margin-top: 20px"><strong>影人动态追踪</strong></h4>
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

  </body>
</html>