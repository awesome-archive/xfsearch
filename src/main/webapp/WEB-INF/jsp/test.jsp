<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="icon" href="/images/" type="image/x-icon">
		<!-- axios和vue的依赖包 -->
		<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
		<link rel="Shortcut Icon" href="./images/logo-icon.ico">
		<script src="./bootstrap/js/jquery-3.2.0.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="./bootstrap/js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="./css/style.css">
	</head>

	<body>
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
								<p><img src="./images/lyqlogo.jpg" alt="图片找不到了" /></p>
								<p class="about-introduce">
									<span>
									我们是一个团队，名为狗狗联盟工作室，此项目为开源项目，Github地址为:
									<a href="https://github.com/IAMJACKLiNOTBRUCELi/spider-to-bttt.la" target="_blank">
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
										<img src="./lyqlogo.jpg" class="pay_img">
									</div>
									<p>微信支付</p>
								</div>
								<div class="pay">
									<div>
										<img src="./lyqlogo.jpg" class="pay_img">
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
										<td>gadget</td>
										<td>1.00元</td>
										<td>微信支付</td>
									</tr>
									<tr>
										<td>发的萨芬</td>
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
		<div class="top">
			<div class="col-md-6 col-md-offset-2">
				<div class="form-group">
					<div class="col-lg-11 col-xs-10" style="padding-left: 0px;">
						<input type="text" id="input" name="text" value="死侍2" placeholder="你想要的? " class="form-control" onkeypress="EnterPress(event,value)" onkeydown="EnterPress(event,value)">
					</div>
					<button type="submit" class="btn btn-info col-lg-1 col-xs-2" onclick="ruSearch()">搜索</button>
				</div>
				<div class="search_keyword">
					<p class="text-muted">
						&nbsp;&nbsp;&nbsp;热搜关键词:
						<a href="javascript:void(0) " onclick="hotSearch( '死侍2')">死侍2&nbsp;&nbsp;&nbsp;</a>
						<a href="javascript:void(0) " onclick="hotSearch( '西虹市首富')">西虹市首富&nbsp;&nbsp;&nbsp;</a>
						<a href="javascript:void(0) " onclick="hotSearch( '超时空同居')">超时空同居&nbsp;&nbsp;&nbsp;</a>
						<a href="javascript:void(0) " onclick="hotSearch( '一出好戏')">一出好戏&nbsp;&nbsp;&nbsp;</a>
						<a href="javascript:void(0) " onclick="hotSearch( '肖申克救赎')">肖申克救赎&nbsp;&nbsp;&nbsp;</a>
						<a href="javascript:void(0) " onclick="hotSearch( '与神同行')">与神同行&nbsp;&nbsp;&nbsp;</a>
					</p>
				</div>
				<br>
			</div>
			<div class="col-md-8 col-md-offset-2">
				<ul class="nav nav-tabs col-md-12" role="tablist" id="feature-tab">
					<li class="active">
						<a href="javascript:void(0)" role="tab" onclick="ruSearch()" data-toggle="tab">全站</a>
					</li>
				</ul>
				<div class="tab-content col-md-8 col-lg-9">
					<div class="tab-pane active content-media" id="tab-all">
						<div class="row text-list">
							<div id="divChat">
								<span>为您找到38个结果,耗时0.001秒</span> <span></span>
								<h4>
									<u> 
										<p>
											<a href="/get.do?id=534">颤栗汪洋
												<span style="color:red ">2</span> Open Water 
												<span style="color:red ">2</span>: Adrift(2006)&nbsp;&nbsp;
											</a> 
											<button class="btn btn-success btn-xs" href="#" target="blank">点击下载</button>
										</p>
									</u>
								</h4>
								<p>
									<a href=""><img class="img-style img-responsive img-media" src="https://t1.bttiantangs.com//d/file/movie/tpic/1905634.jpg" alt="图片找不到了"> </a>
								</p>
								<p>一帮老友驾驶一艘豪华游艇出海为好友庆生，酒足饭饱之后，大家开始一个个跳入海中游泳。患有恐水症的艾米（苏珊·梅·普拉特 Susan May Pratt 饰）被抛入海水之后引起一阵恐怖，大家想赶紧把她送回船上，可是这才发现居然没人记得放下梯子。船身太高，一伙人想尽办法都不能爬上船去。此时，留在船上的只有......</p>
								<br>

								<h4>
									<u> 
										<p>
											<a href="/get.do?id=534">颤栗汪洋
												<span style="color:red ">2</span> Open Water 
												<span style="color:red ">2</span>: Adrift(2006)&nbsp;&nbsp;
											</a> 
											<button class="btn btn-success btn-xs" href="#" target="blank">点击下载</button>
										</p>
									</u>
								</h4>
								<p>
									<a href=""><img class="img-style img-responsive img-media" src="https://t1.bttiantangs.com//d/file/movie/tpic/1905634.jpg" alt="图片找不到了"> </a>
								</p>
								<p>一帮老友驾驶一艘豪华游艇出海为好友庆生，酒足饭饱之后，大家开始一个个跳入海中游泳。患有恐水症的艾米（苏珊·梅·普拉特 Susan May Pratt 饰）被抛入海水之后引起一阵恐怖，大家想赶紧把她送回船上，可是这才发现居然没人记得放下梯子。船身太高，一伙人想尽办法都不能爬上船去。此时，留在船上的只有......</p>
								<br>

								<!-- 							分页代码 -->
								<ul class="pagination">
									<li onclick="gotoA(1) ">
										<a href="# ">首页</a>
									</li>
									<li class="active ">
										<a href="# ">1</a>
									</li>
									<li onclick="gotoA(2) ">
										<a href="# ">2</a>
									</li>
									<li onclick="gotoA(3) ">
										<a href="# ">3</a>
									</li>
									<li onclick="gotoA(4) ">
										<a href="# ">4</a>
									</li>
									<li onclick="gotoA(2) ">
										<a href="# ">下一页</a>
									</li>
									<li onclick="gotoA(4) ">
										<a href="# ">尾页</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4 col-lg-3 ranking">
					<table class="table">
						<thead>
							<tr>
								<th>排名</th>
								<th>搜索量</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span class="">1</span>
									<a target="_blank" title="" href="">医学泰斗被撞身亡</a>
								</td>
								<td class="">428161<i class="glyphicon glyphicon-upload"></i></td>
							</tr>
							<tr>
								<td>
									<span class="">2</span>
									<a target="_blank" title="" href="">啊哈哈哈</a>
								</td>
								<td class="">388161<i class="glyphicon glyphicon-download"></i></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<footer class="col-md-12">
			<div>
				<p>© 2018 啊哈哈哈哈哈~~~</p>
				<p>
					<a rel="" href="http//www.baidu.com" class="" target="_blank">龟谷工作室</a> by
					<a rel="" href="http//www.baidu.com" class="" target="_blank">啊哈~~~~</a>
				</p>
			</div>
		</footer>
		<script type="text/javascript ">
			$(document).ready(function() {
				$("#dropdownMenu1,.about-menu").mouseover(function() {
					$("#dropdownMenu1").click();
				});
				$("#dropdownMenu1,.about-menu").mouseout(function() {
					$(this).click();
				});

				$("#dropdownMenu2,.pay-menu").mouseover(function() {
					$("#dropdownMenu2").click();
				});
				$("#dropdownMenu2,.pay-menu").mouseout(function() {
					$(this).click();
				});
			})

			function btnType(type) {
				var text = document.getElementById("input ").value;
				if(text == null || type == null || text == " " || type == " ") {
					return;
				}
				text = encodeURIComponent(text);

				window.location.href = "./index.do?type=" + type + " &text=" + text;
				return false;
			}

			function gotoA(cur) {
				var text = document.getElementById(" input ").value;
				if(text == null || cur == null || text == " " || cur == 0) {
					return;
				}
				text = encodeURIComponent(text);
				window.location.href = "./pageSearch.do?text=" + text + " &cur=" + cur;

			}

			function gotoT(cur, type) {
				var text = document.getElementById(" input ").value;
				if(text == null || cur == null || text == " " || cur == 0) {
					return;
				}
				text = encodeURIComponent(text);
				window.location.href = "./pageIndex.do?text=" + text + " &cur=" + cur + " &type=" + type;
			}

			function ruSearch() {
				var text = document.getElementById(" input ").value;
				if(text == null || text == " ") {
					return;
				}
				text = encodeURIComponent(text);
				window.location.href = "./search.do?text=" + text;
			}

			function hotSearch(text) {

				if(text == null || text == " ") {
					return;
				}
				text = encodeURIComponent(text);
				window.location.href = "./search.do?text=" + text;
			}

			function EnterPress(e, value) { //传入 event 
				var e = e || window.event; //兼容ie
				if(e.keyCode == 13) {
					if(value == null || value == " ") {
						return;
					}
					value = encodeURIComponent(value);
					window.location.href = "./search.do?text=" + value;
				}
			}
		</script>
	</body>


</body>
</html>