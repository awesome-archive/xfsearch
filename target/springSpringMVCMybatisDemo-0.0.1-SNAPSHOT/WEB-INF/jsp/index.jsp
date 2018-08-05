<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>

<%@include file="/WEB-INF/jsp/header.jsp"%>
</head>
<title>如鹏网搜索引擎</title>
<link rel="stylesheet" type="text/css"
	href="<%=ctxPath%>/bootstrap/css/bootstrap.css" />
<title>如鹏网搜索引擎</title>
</head>
<%@include file="/WEB-INF/jsp/nav.jsp"%>
<body>
<!-- 顶部导航 --><!-- 顶部导航 --><br/><br/>
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="menu-nav">

          <div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-collapse">
					<span class="sr-only">切换导航</span> <span class="icon-bar"></span> <span
						class="icon-bar"></span> <span class="icon-bar"></span>
				</button>
			</div>
			<!-- 
            -->
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav nav-right">
					<li class="dropdown"><a href="#" style="color: #fff;"
						class="dropdown-toggle" data-toggle="dropdown">中国站 <span
							class="caret"></span></a></li>
					<li><a style="color: #fff;"
						href="http://www.rupeng.com/navigation.shtml">免费课程</a></li>
					<li><a style="color: #fff;"
						href="http://www.rupeng.com/News/10/165.shtml">助学计划</a></li>
					<li><a style="color: #fff;"
						href="http://www.rupeng.com/xlyhow.shtml">学习计划</a></li>
					<li><a style="color: #fff;"
						href="http://www.rupeng.com/Login/Login">登录</a></li>
				</ul>
			</div>
		</div>
	</div>
	<br />
	<br />
	<div class="col-xs-12 img-left" ><a href="http://www.rupeng.com"><img
		src="./images/rupeng.png" class="img-responsive" ></a></div>
	
	<br />
	<br />
	<div class="top">
		<div class="col-md-6 col-md-offset-2">

				<div class="form-group">
					<div class="col-lg-11 col-xs-10" style="padding: 0;">
					
						<input type="text" id="input" name="text"
							value="<%=request.getParameter("text") == null ? "如鹏网" : request.getParameter("text")%>"
							class="form-control" 
							onkeypress="EnterPress(event,value)" 
							onkeydown="EnterPress(event,value)"
							style="border-radius: 0px;" />
					</div>
					<button type="submit" class="btn btn-info col-lg-1 col-xs-2"
						onclick="ruSearch()" style="border-radius: 0px;">搜索</button>
				</div>
			<div class="search_keyword">
				<p class="text-muted">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热搜关键词: <a
						href="./search.do?text=Python">Python&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=微信小程序">微信小程序&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=C语言">C语言&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=.Net">.Net&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=Java">Java&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=前端">前端&nbsp;&nbsp;&nbsp;</a>
				</p>
			</div>
			<br />
		</div>		<div class="col-md-8 col-md-offset-2">
			<ul class="nav nav-tabs col-md-12" role="tablist" id="feature-tab">
				<li class="active"><a href="javascript:void(0)" role="tab" onclick="ruSearch()"
					data-toggle="tab">全站</a></li>
				<li name="courses"><a href="javascript:void(0)" onclick="btnType('courses')"
					role="tab" data-toggle="tab">课程</a></li>
				<li name="questions"><a href="javascript:void(0)" onclick="btnType('questions')"
					role="tab" data-toggle="tab">问题</a></li>
				<li name="msQuestions"><a href="javascript:void(0)" onclick="btnType('msQuestions')"
					role="tab" data-toggle="tab">面试题库</a></li>
				<li name="bbsPosts"><a href="javascript:void(0)" onclick="btnType('bbsPosts')"
					role="tab" data-toggle="tab">论坛</a></li>
				<li name="news"><a href="javascript:void(0)" onclick="btnType('news')" role="tab"
					data-toggle="tab">新闻</a></li>
			</ul>
			<div class="tab-content col-md-9">
				<div class="tab-pane active Hhhhhh" id="tab-all">
					<div class="row text-list" style="padding-left: 10px;">
						<div id="divChat">
							<span>${msg.took}</span> 
							<span>${msg.message}</span>
							<c:forEach items="${msg.itemsList}" var="item">
								<a href="${item.url}" target="_blank"><h4>
										<u>
											<p>${item.title}</p>
										</u></h4></a>
								<p>
								<p>${item.body}</p>
								<br />
							</c:forEach>
<!-- 							分页代码 -->
							<c:if test="${msg.message==null}">
							<c:if test='${msg.itemsList!=null}'>
								<ul class="pagination" >
									<li onclick="gotoA(1)"><a href="#">首页</a></li>
									<c:if test='${msg.cur!=1}'>
									<li onclick="gotoA(${msg.cur-1})"><a href="#">上一页</a></li>
									<c:if test='${msg.cur!=2&&msg.cur!=1}'>
									<li onclick="gotoA(${msg.cur-2})"><a href="#">${msg.cur-2}</a></li>
									</c:if>
									<li onclick="gotoA(${msg.cur-1})"><a href="#">${msg.cur-1}</a></li>
									</c:if>
									<li class="active"><a href="#">${msg.cur}</a></li>
									<c:if test="${msg.cur+1<=msg.totalPages}">
									<li onclick="gotoA(${msg.cur+1})"><a href="#">${msg.cur+1}</a></li>
									</c:if>
									<c:if test="${msg.cur+2<=msg.totalPages}">
									<li onclick="gotoA(${msg.cur+2})"><a href="#">${msg.cur+2}</a></li>
									</c:if>
									<c:if test="${msg.cur+3<=msg.totalPages}">
									<li onclick="gotoA(${msg.cur+3})"><a href="#">${msg.cur+3}</a></li>
									</c:if>
									<c:if test="${msg.cur+1<=msg.totalPages}">
									<li onclick="gotoA(${msg.cur+1})"><a href="#">下一页</a></li>
									</c:if>
									<li onclick="gotoA(${msg.totalPages})"><a href="#">尾页</a></li>
								</ul>
							</c:if>
							</c:if>
						</div>
					</div>

				</div>

			</div>
	<c:if test="${msg.itemsList!=null}">
    </c:if>
     
			
</body>
</html>