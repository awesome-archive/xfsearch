<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>404页面</title>
<%@include file="/WEB-INF/jsp/header.jsp"%>
</head>
<body>
		<div class="error-page">
			<div class="error-page-container">
				<div class="error-page-main">
					<h3>
                <strong>404</strong>无法打开页面
            </h3>
					<div class="error-page-actions">
						<div>
							<h4>可能原因：</h4>
							<ol>
								<li>网络信号差</li>
								<li>找不到请求的页面</li>
								<li>输入的网址不正确</li>
							</ol>
						</div>
						<div>
							<h4>可以尝试：</h4>
							<ul>
								<li>
									<a href="./">返回首页</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>