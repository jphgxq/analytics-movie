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
							<a data-toggle="tab" href="#content-1"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影人相关信息</a>
						</li>
						<li>
							<a data-toggle="tab" href="#content-2"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影人动态追踪</a>
						</li>
						<li>
							<a data-toggle="tab" href="#content-3"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影人粉丝特征</a>
						</li>
						<li>
							<a data-toggle="tab" href="#content-4"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影人微博扩散特征</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="content-1">
							<p>1</p>
						</div>
						<div class="tab-pane" id="panel-2">
							<p>2</p>
						</div>
						<div class="tab-pane" id="panel-3">
							<p>3</p>
						</div>
						<div class="tab-pane" id="panel-4">
							<p>4</p>
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