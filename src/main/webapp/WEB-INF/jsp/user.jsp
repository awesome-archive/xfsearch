<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
	
<!DOCTYPE html>
<html>
<%
	String ctxPath = request.getContextPath();
%>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="" />
<meta charset="utf-8">
<title>搜搜影库个人页面</title>
<link rel="stylesheet" href="<%=ctxPath%>/css/public.css" />
<link rel="stylesheet" href="<%=ctxPath%>/css/uikit.css" />
<link rel="stylesheet"
	href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="<%=ctxPath%>/js/jquery2.0.0.js"></script>
<script src="<%=ctxPath%>/js/uikit.js"></script>
<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- <script src="http:////unpkg.com/wangeditor/release/wangEditor.min.js"></script> -->
</head>

<script type="text/javascript">
	function up() {

		var description = document.getElementById("content").value;
		console.log(description);
		if (description == null) {
			alert("评论信息不可为空");
		}
		alert("提交成功"+description);
		$.ajax({
			type : 'GET',
			dataType : "json",
			url : "./upMessage.do?description=" + description,
			success : function(result) {
    
				alert("提交成功");
			}
		})

	}
</script>

<body>
	<!-- PC端导航栏 -->
	<div class="index-nav uk-hidden-small">
		<div class="uk-container uk-container-center">
			<nav class="uk-navbar">
				<ul class="uk-navbar-nav">
					<a class="index-logo uk-navbar-brand" href="./"
						style="color: #9d9d9d;">搜影库~</a>
					<li class="active nav-height"><a href="./"><i
							class="fa fa-home font-color-white">首页</i></a></li>
					<li class="nav-height"><a href="#"><i
							class="fa fa-archive font-color-white" style="background: #red">正在开发中</i></a>
					</li>


				</ul>
			</nav>
		</div>
	</div>
	<!-- 手机端导航 -->
	<div class="mobile-nav uk-visible-small">
		<div class="uk-container uk-container-center">
			<a class="index-logo uk-navbar-brand" href="./"
				style="color: #9d9d9d;">搜影库~~</a>
			<button class="uk-button mobile-btn"
				data-uk-offcanvas="{target:'#my-id'}">
				<i class="fa fa-lg fa-reorder"></i>
			</button>
		</div>
		<div id="my-id" class="uk-offcanvas">
			<div class="uk-offcanvas-bar"></div>
		</div>
	</div>

	<!-- 容器 -->
	<div class="uk-container uk-container-center" style="margin-top: 15px;">
		<div class="uk-grid">
			<div id="on_click" class="uk-width-3-10 uk-hidden-small">
				<!-- 用户资料 -->
				<div class="user_info">
					<div style="text-align: center;">
						<div class="user_info_name">
							<i class="fa fa-quote-left"> 耗子 <i class="fa fa-quote-right"></i></i>
						</div>
						<div class="user_info_txt">
							<img class="uk-border-circle" src="./img/logo.png" alt=""
								width="110" height="110">
							<p class="user_info_signature">
							<p>
								我<strong><del>死肥宅</del></strong><strong>天下第一</strong>
							</p>
							</p>
						</div>
					</div>
				</div>
				<!-- 最新评论 -->
				<div id="menu" class="new_comments user_info">
					<div class="user_info_name">
						<i class="fa fa-comments">最新评论</i>
					</div>
					<div class="user_info_name">
						<i class="fa fa-comments">贡献你的URL</i>
					</div>

				</div>
			</div>
			<!-- 右侧栏目 -->
			<div id="menu_left" class="uk-width-large-7-10 uk-width-medium-1-1">
				<div id="menu_left_one" style="display: none">
					<div class="conmments">
						<!-- <div id="editor"><p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p></div> -->
						<div class="user_logo" style="width: 20%; float: left">
							<img class="uk-border-circle" src="./img/logo.png" alt="">
						</div>
						<div class="" style="width: 100%;">
							<textarea id="content" type="text"
								style="width: 100%; height: 150px;"></textarea>
						</div>
						<div style="width: 100%; height: 40px;">
							<button onclick="up()" style="float: right; display: block">发布</button>
						</div>
					</div>
					<!-- 最新评论 -->
					<p style="font-size: 18px;">
						<strong>评论留言</strong>
					</p>
					<hr style="height: 2px; border: none; border-top: 2px dotted red;">
					<c:forEach items="${lm}" var="item">
						<div
						style="width: 100%; height: 110px; border-bottom: 2px dotted rgb(190, 178, 178);">
						<div class="user_logo" style="width: 20%; float: left;">
							<img class="uk-border-circle uk-hidden-small"
								src="./img/logo.png" alt="" style="width: 110px; height: 110px;">
						</div>
						、
						<div style="width: 80%; float: left; height: 100%;">
							<div style="width: 100%; height: 50px;">
								<p style="float: left; display: block; color: red;">${item.name}</p>
								<p style="float: right; dispaly: block;">${item.createTime}</p>
							</div>
							<div style="width: 100%; font-size: 16px;">${item.description}</div>
						</div>
					</div>
					</c:forEach>
					
					
					
				
					<div id="menu_left_one"
						style="width: 100%; height: 110px; border-bottom: 2px dotted rgb(190, 178, 178);">
						<div class="user_logo" style="width: 20%; float: left">
							<img class="uk-border-circle uk-hidden-small"
								src="./img/logo.png" alt="" style="width: 110px; height: 110px;">
						</div>
						<div style="width: 80%; float: left; height: 100%;">
							<div style="width: 100%; height: 50px;">
								<p style="float: left; display: block; color: red;">萌萌哒的耗子</p>
								<p style="float: right; dispaly: block;">2018-08-22</p>
							</div>
							<div style="width: 100%; font-size: 16px;">这是留言</div>
						</div>
					</div>
				</div>
				<!-- 贡献你的url -->
				<div id="menu_left_one" style="display: none">
					<p class="uk-hidden-small index-logo uk-navbar-brand" href="#"
						style="width: 100%; color: #9d9d9d; text-align: center">感谢您为我们提供的磁力链接</p>
					<p class="uk-show-small   uk-navbar-brand" href="#"
						style="width: 100%; color: #9d9d9d; text-align: center; padding-top: 20px;">十分感谢~</p>
					<form action="">
						<form action="" method="" style="float: left; width: 80%;">
							<!--<div class="" style="width:100%;">
                        	<textarea id="content" type="text" style="width:100%;height:100px;font-size:28px;line-height: 100px;"></textarea>
                        </div>-->
							<div class="uk-panel uk-panel-header">
								<form class="uk-form uk-form-stacked">
									<div class="uk-form-row">
										<label class="uk-form-label">影片名称</label>
										<div class="uk-form-controls">
											<input type="text" placeholder="" class="uk-width-1-1"
												style="height: 30px;">
										</div>
									</div>

									<div class="uk-form-row">
										<label class="uk-form-label">磁力链接</label>
										<div class="uk-form-controls">
											<input type="text" placeholder="" class="uk-width-1-1"
												style="height: 30px;">
										</div>
									</div>
								</form>
							</div>
							<div style="width: 100%; height: 40px; margin-top: 20px;">
								<button type="submit" style="float: right; display: block;">提交</button>
							</div>
						</form>
					</form>
				</div>
			</div>
			<script type="text/javascript">
				// var E = window.wangEditor
				// var editor = new E('#editor')
				// editor.create()

				$()
						.ready(
								function() {
									// ($("#menu i").mouseover(()=>{
									//     var _index = $(this).index();
									//     console.log(_index)
									// )
									// })
									$("#menu div")
											.mousedown(
													function() {
														var _index = $(this)
																.index();
														console.log(_index)
														$(
																"#menu_left > #menu_left_one")
																.eq(_index)
																.show()
																.siblings()
																.hide();
														console
																.log($("#menu_left > #menu_left_one"))
													})
								})
			</script>
</body>

</html>