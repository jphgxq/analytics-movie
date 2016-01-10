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
	<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
	<link href="css/global.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  	
	 <%@ include file="common/head.jsp" %>
     
     <div class="container">
	     <div id="table-container" style="min-width: 310px; margin-top:10px">
	     	<h4 id="landingpage-title" style="text-align:center">Keydata实时票房	2016年1月5日</h4>
	     	<table class="table table-hover">
	     		<thead>
	     			<tr>
	     				<td>
	     					
	     				</td>
	     				<td>
	     					<strong>影片名称</strong>
	     				</td>
	     				<td>
	     					<strong>实时票房（万）</strong>
	     				</td>
	     				<td>
	     					<strong>票房占比</strong>
	     				</td>
	     				<td>
	     					<strong>累计票房（万）</strong>
	     				</td>
	     				<td>
	     					<strong>排名占比</strong>
	     				</td>
	     				<td>
	     					<strong>上映天数</strong>
	     				</td>
	     				<td>
	     					
	     				</td>
	     			</tr>
	     		<tbody style="text-align:center">
	     			<tr>
	     				<td style="color:red">
	     					1
	     				</td>
	     				<td>
	     					神探夏洛克
	     				</td>
	     				<td>
	     					1764.9
	     				</td>
	     				<td>
	     					32.66%
	     				</td>
	     				<td>
	     					5277.3
	     				</td>
	     				<td>
	     					26.50%
	     				</td>
	     				<td>
	     					2
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     			<tr>
	     				<td style="color:red">
	     					2
	     				</td>
	     				<td>
	     					唐人街探案
	     				</td>
	     				<td>
	     					1406.4
	     				</td>
	     				<td>
	     					26.02%
	     				</td>
	     				<td>
	     					47188.6
	     				</td>
	     				<td>
	     					23.69%
	     				</td>
	     				<td>
	     					7
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     			<tr>
	     				<td style="color:red">
	     					3
	     				</td>
	     				<td>
	     					老炮儿
	     				</td>
	     				<td>
	     					946.8
	     				</td>
	     				<td>
	     					17.52%
	     				</td>
	     				<td>
	     					72416.9
	     				</td>
	     				<td>
	     					18.36%
	     				</td>
	     				<td>
	     					13
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     			<tr>
	     				<td>
	     					4
	     				</td>
	     				<td>
	     					寻龙诀
	     				</td>
	     				<td>
	     					817.6
	     				</td>
	     				<td>
	     					15.13%
	     				</td>
	     				<td>
	     					157242.1
	     				</td>
	     				<td>
	     					14.30%
	     				</td>
	     				<td>
	     					19
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     			<tr>
	     				<td>
	     					5
	     				</td>
	     				<td>
	     					恶棍天使
	     				</td>
	     				<td>
	     					141.1
	     				</td>
	     				<td>
	     					2.61%
	     				</td>
	     				<td>
	     					63775.7
	     				</td>
	     				<td>
	     					5.25%
	     				</td>
	     				<td>
	     					13
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     			<tr>
	     				<td>
	     					6
	     				</td>
	     				<td>
	     					一念天堂
	     				</td>
	     				<td>
	     					128.7
	     				</td>
	     				<td>
	     					2.38%
	     				</td>
	     				<td>
	     					7779.2
	     				</td>
	     				<td>
	     					4.78%
	     				</td>
	     				<td>
	     					6
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     			<tr>
	     				<td>
	     					7
	     				</td>
	     				<td>
	     					小门神
	     				</td>
	     				<td>
	     					92.0
	     				</td>
	     				<td>
	     					1.70%
	     				</td>
	     				<td>
	     					6961.8
	     				</td>
	     				<td>
	     					3.13%
	     				</td>
	     				<td>
	     					5
	     				</td>
	     				<td style="color:red">
	     					NEW
	     				</td>
	     			</tr>
	     		</tbody>
	     	</table>
	     </div>
	     
	     <div class="container-fluid" style="margin-top:50px">

			<div class="row-fluid">
				<div class="col-md-6">
						<div>
							<h4><strong>排片统计</strong></h4>
						</div>
						<ol>
							<li>
								新闻资讯
							</li>
							<li>
								体育竞技
							</li>
							<li>
								娱乐八卦
							</li>
							<li>
								前沿科技
							</li>
							<li>
								环球财经
							</li>
							<li>
								天气预报
							</li>
							<li>
								房产家居
							</li>
							<li>
								网络游戏
							</li>
						</ol>
					</div>
				<div id="movie-statistic" class="col-md-6" style="height: 300px"></div>
			</div>
			<div class="row-fluid">
				<div class="col-md-6">
					<div>
						<h4><strong>目前影片票房强度量化结果</strong></h4>
					</div>
					<ol>
						<li>
							新闻资讯
						</li>
						<li>
							体育竞技
						</li>
						<li>
							娱乐八卦
						</li>
						<li>
							前沿科技
						</li>
						<li>
							环球财经
						</li>
						<li>
							天气预报
						</li>
						<li>
							房产家居
						</li>
						<li>
							网络游戏
						</li>
					</ol>
				</div>

				<div class="col-md-6">
					<h4><strong>影讯动态</strong></h4>
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