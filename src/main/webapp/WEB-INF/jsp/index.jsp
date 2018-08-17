<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="com.xuyuanfeng.utlis.HTMLUtils"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

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
<link rel="stylesheet" type="text/css" href="<%=ctxPath%>/css/style.css">
<link rel="icon" href="<%=ctxPath%>/images/" type="image/x-icon" />
<title>搜搜影库</title>
</head>
<body>
<%@include file="/WEB-INF/jsp/nav.jsp"%>
		<div class="top">
			<div class="col-md-6 col-md-offset-2">
				<div class="form-group">
					<div class="col-lg-11 col-xs-10" style="padding-left: 0px;">
						<input type="text" id="input" name="text"   value="<%=searchValue%>"
						 placeholder="你想要的? " class="form-control" onkeypress="EnterPress(event,value)" onkeydown="EnterPress(event,value)">
					</div>
					<button type="submit" class="btn btn-info col-lg-1 col-xs-2" onclick="ruSearch()">搜索</button>
				</div>
					<div class="search_keyword">
				<p class="text-muted">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热搜关键词:
					<c:forEach items="${lsh}" var="hot">

						<c:set var="key" value="${hot.text}"></c:set>
						<c:choose>
							<c:when test="${fn:length(key) > 5}">
								<c:set var="string" value="${fn:substring(key, 0, 5)}" />
								<a href="javascript:void(0)" onclick="hotSearch('${hot.text}')">${string}&nbsp;&nbsp;&nbsp;</a>
							</c:when>
							<c:otherwise>
								<a href="javascript:void(0)" onclick="hotSearch('${hot.text}')">${hot.text}&nbsp;&nbsp;&nbsp;</a>
							</c:otherwise>
						</c:choose>

					</c:forEach>
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
									<u> <p><a href="<%=ctxPath%>/get.do?id=${item.id}">
										${item.title}&nbsp;&nbsp;
										</a> 
											<c:if test="${item.download_url!=null}">
												<a href="${item.download_url}" target="_blank">
													<button class="label label-success">点击下载</button>
												</a>
											</c:if> 
											<c:if test="${item.download_url==null}">
												<a href="${item.download_url}" target="_blank">
													<button class="label label-error">暂未上线</button>
												</a>
											</c:if>
										</p>
									</u>
								</h4>
								
									<p>
										<a href=""><img class="img-thumbnail img-responsive" style="width: 160px;height:200px;display: block;"
											src="${item.img_url}"/> </a>
									</p>
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
				<!--
                	作者：1162091199@qq.com
                	时间：2018-08-17
                	描述：
                -->
				<div class="col-md-3">
					<table class="table">
						<thead>
							<tr>
								<th>排名</th>
								<th>搜索指数</th>
							</tr>
						</thead>
						<tbody>
						<c:forEach items="${rank}" var="item">
							<tr>
								<td>
									<!--<span class="">1</span>  -->
									<a target="_blank" title="" href="./search.do?text=${item.text}">${item.text}</a>
								</td>
								<td class="">${item.sum*13}<i class="glyphicon glyphicon-upload"></i></td>
							</tr>
						</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
			
		</div>
</body>
</html>