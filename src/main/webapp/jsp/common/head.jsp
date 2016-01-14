<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<h3 class="navbar navbar-default text-muted" style="color:#377BB5;font-weight:bold;padding-top:5px;margin-top:10px;margin-bottom:10px;padding-left:23.5%;">电影数据采集分析系统</h3>
<div class="blog-masthead">
 <div class="container">
    <nav class="blog-nav">
     <a class="blog-nav-item active" href="index.action">首页</a>
     <a class="blog-nav-item" href="category.action">影片实时数据</a>
     <a class="blog-nav-item" href="actors.action">影人实时数据</a>
     <a class="blog-nav-item" href="keydata.action">Keydata资料库</a>
     <a class="blog-nav-item" href="report.action">报告生成</a>
     <a class="blog-nav-item" href="userdata.action">用户数据源配置</a>
     <a class="blog-nav-item" href="connectus.action">联系keydata</a>
   </nav>
 </div>
</div>
