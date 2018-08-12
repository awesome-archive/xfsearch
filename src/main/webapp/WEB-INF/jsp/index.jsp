<%@page import="com.xuyuanfeng.utlis.HTMLUtils"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%
	String searchValue = request.getParameter("text");
	if (searchValue == null) {
		searchValue = "";
	} else {
		searchValue = HTMLUtils.htmlescape(searchValue);
	}
%>
<%@include file="/WEB-INF/jsp/header.jsp"%>
</head>
<link rel="stylesheet" type="text/css"
	href="<%=ctxPath%>/bootstrap/css/bootstrap.css" />
<title>帮搜</title>
</head>
<%@include file="/WEB-INF/jsp/nav.jsp"%>
<body>
	<!-- 顶部导航 -->
	<!-- 顶部导航 -->
	<br />
	<br />
	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation"
		id="menu-nav">

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
					<li><a href="./" style="color: #fff;" href="">首页</a></li>

					<li><a style="color: #fff;" href="">关于我们</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						id="dropdownMenu1" data-toggle="dropdown" style="color: #fff;">捐助我们
							<span class="caret"></span>
					</a>
						<ul class="dropdown-menu pay-menu" role="menu">
							<div class="pay">
								<div>
									<img src="<%=ctxPath%>/images/wechat.jpg" class="pay_img" />
								</div>
								<p>微信支付</p>
							</div>
							<div class="pay">
								<div>
									<img src="<%=ctxPath%>/images/payjpg.jpg" class="pay_img" />
								</div>
								<p>支付宝</p>
							</div>
						</ul></li>

					<!-- <div class="dropdown">
						<li><a style="color: #fff;" href="">捐助我们</a></li>
						<div class="dropdown-content">
							<div class="pay">
								<div>
									<img src="lyqlogo.jpg" class="pay_img" />
								</div>
								<p>微信支付</p>
							</div>
							<div class="pay">
								<div>
									<img src="lyqlogo.jpg" class="pay_img" />
								</div>
								<p>支付宝</p>
							</div>
						</div>
					</div> -->


					<li><a style="color: #fff;" href="">登录</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="top">
		<div class="col-md-6 col-md-offset-2">

			<div class="form-group">
				<div class="col-lg-11 col-xs-10" style="padding: 0;">

					<input type="text" id="input" name="text" value="<%=searchValue%>"
						placeholder="你想要的?" class="form-control"
						onkeypress="EnterPress(event,value)"
						onkeydown="EnterPress(event,value)" style="border-radius: 0px;" />
				</div>
				<button type="submit" class="btn btn-info col-lg-1 col-xs-2"
					onclick="ruSearch()" style="border-radius: 0px;">搜索</button>
			</div>
			<div class="search_keyword">
				<p class="text-muted">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热搜关键词: <a
						href="./search.do?text=西虹市首富">西虹市首富&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=肖申克救赎">肖申克救赎&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=超时空同居">超时空同居&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=与神同行">与神同行&nbsp;&nbsp;&nbsp;</a> <a
						href="./search.do?text=死侍2">死侍2&nbsp;&nbsp;&nbsp;</a>
				</p>
			</div>
			<br />
		</div>
		<div class="col-md-8 col-md-offset-2">
			<ul class="nav nav-tabs col-md-12" role="tablist" id="feature-tab">
				<li class="active"><a href="javascript:void(0)" role="tab"
					onclick="ruSearch()" data-toggle="tab">全站</a></li>
			</ul>
			<div class="tab-content col-md-9">
				<div class="tab-pane active Hhhhhh" id="tab-all">
					<div class="row text-list" style="padding-left: 10px;">
						<div id="divChat">
							<span>${msg.took}</span> <span>${msg.message}</span>
							<c:forEach items="${msg.itemsList}" var="item">

								<h4>
									<u> <a href="<%=ctxPath%>/get.do?id=${item.id}">
											<p>${item.title}&nbsp;&nbsp;
									</a> <a href="${item.download_url}" target="_blank">
											<button class="label label-success">点击下载</button>
									</a>
										</p>
									</u>
								</h4>
								<p>
									<a href=""><img class="img-thumbnail img-responsive"
										src="${item.img_url}"> </a>
								<p>${item.introduce}</p>
								<br />
							</c:forEach>
							<!-- 							分页代码 -->
							<c:if test="${msg.message==null}">
								<c:if test='${msg.itemsList!=null}'>
									<ul class="pagination">
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