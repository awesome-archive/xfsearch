<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<!-- 顶部导航 -->
		<br/>
		<br/>
		<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="menu-nav">
			<div class="container col-md-offset-2">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">切换导航</span> <span class="icon-bar"></span> <span class="icon-bar"></span><span class="icon-bar"></span>
					</button>
				</div>
				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li class="">
							<a href="./" class="">首页</a>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">关于我们
								<span class="caret"></span>
							</a>
							<div class="dropdown-menu about-menu" role="menu">
								<p><img src="./images/lyqlogo.jpg" alt="图片找不到了"/></p>
								<p class="about-introduce">
									<span>
									我们是一个团队，名为聚源工作室，此项目为开源项目，Github地址为:
									<a href="https://github.com/RAOE/xfsearch" target="_blank">
										开源地址
									</a>
									,如果你对此网站有什么建议或者意见，请联系
									<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=986771570&site=qq&menu=yes">QQ:986771570</a>
									</span>
								</p>
							</div>
						</li>
						
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown">捐助我们
								<span class="caret"></span>
							</a>
							<ul class="dropdown-menu pay-menu" role="menu">
								<div class="pay">
									<div>
										<img src="./images/wechat.jpg" class="pay_img">
									</div>
									<p>微信支付</p>
								</div>
								<div class="pay">
									<div>
										<img src="./images/payjpg.jpg" class="pay_img">
									</div>
									<p>支付宝</p>
								</div>
								<table class="table text-center">
									<caption class="text-center">鸣谢名单</caption>
									<tr>
										<td>用户名</td>
										<td>捐助金额</td>
										<td>支付方式</td>
									</tr>

									<tr>
										<td>虚伪的世界</td>
										<td>1.00元</td>
										<td>微信支付</td>
									</tr>
									<tr>
										<td>好大王</td>
										<td>5.00元</td>
										<td>微信支付</td>
									</tr>
									<tr>
										<td>风中雪</td>
										<td>2.00元</td>
										<td>支付宝支付</td>
									</tr>
								</table>
							</ul>
						</li>
						<li>
							<a href="">登录</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	