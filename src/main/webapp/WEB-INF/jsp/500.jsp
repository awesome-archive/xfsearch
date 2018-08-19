<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <title>无法找到资源。</title>
        <%@include file="/WEB-INF/jsp/header.jsp"%>
    </head>

   <body>
		<div class="error-page">
			<div class="error-page-container">
				<div class="error-page-main">
					<h3>
		                <strong>500</strong>服务器异常
		            </h3>
					<div class="error-page-actions">
						<div>
							<h4>可能原因：</h4>
							<ol>
								<li>网络信号差</li>
								<li>服务器受到攻击</li>
								<li>太多用户同时访问</li>
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
