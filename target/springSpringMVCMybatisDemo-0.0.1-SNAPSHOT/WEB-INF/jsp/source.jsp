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
<link rel="stylesheet" type="text/css"
	href="<%=ctxPath%>/bootstrap/css/bootstrap.css" />
<title>搜搜影库</title>
</head>
<%@include file="/WEB-INF/jsp/nav.jsp"%>
<link href="<%=ctxPath%>/css/style.css" rel="stylesheet">

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
	<div id="wrapper">
		<div id="BaikeCommon__baike_container___5xAtS">
			<div id="BaikeCommon__container___2End6">
				<div id="BaikeCommon__before_container___39Eop">
					<div id="BaikeCommon__bg_wapper___niSvx"></div>
					<div id="BaikeCommon__content_wrapper___1t7FZ">
						<div id="BaikeCommon__summary_wrapper___5T2oW">
							<div class="BaikeCommon__summary_content___1XNU1">
								<h1 style="width:720px;float:left">${movie.title}</h1>
								<div style="float:left;width:730px;">
								<div class="BaikeCommon__basic_info___1AP4H" style="width:790px;">
									<dl class="BaikeCommon__basic_info_left___Gu5JP">
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">导&nbsp;&nbsp;&nbsp;演</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">
												<span>
													<!-- react-text: 46 -->
													<!-- /react-text -->未知
												</span>
											</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">语&nbsp;&nbsp;&nbsp;言</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">
												<span>
													${movie.lan}
												</span>
													<!-- /react-text --> </span>
											</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">主&nbsp;&nbsp;&nbsp;演</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">
												<span><span>
														<!-- react-text: 62 -->
														<!-- /react-text --> <a href="/baike/celebrity/em1WazgMOW"></a>
												</span><span>未知 </span>
											</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">评&nbsp;&nbsp;&nbsp;分</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">
												<a target="_blank"
													href="${movie.douban_link}"
													class="Movie__douban___14-R2"> <!-- react-text: 90 -->豆瓣
													<!-- /react-text --> <!-- react-text: 91 --> <!-- /react-text -->
												</a>
											</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">片长</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">未知</dd>
										</div>
									</dl>
									<dl class="BaikeCommon__basic_info_right___23t8H">
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">原&nbsp;&nbsp;&nbsp;名</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">
												<a
													href="./search.do?text=${movie.title}">${movie.title}</a>
											</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">上映日期</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">${movie.year}</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">地区/国家</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">${movie.country}</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">别&nbsp;&nbsp;&nbsp;名</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">
												<span>
														${movie.title}
												<!-- react-text: 111 -->
													<!-- /react-text --></span>
											</dd>
										</div>
										<div>
											<dt
												class="BaikeCommon__basic_info_name___5sKn3 BaikeCommon__basic_info_item___3Z1ar">类&nbsp;&nbsp;&nbsp;型</dt>
											<dd
												class="BaikeCommon__basic_info_value___eKa79 BaikeCommon__basic_info_item___3Z1ar">未知</dd>
										</div>
									</dl>
									<div class="clearfix"></div>
								</div>
								<div class="BaikeCommon__summary___1SPO3" style="
    margin-bottom: 20px;
								">   简介：${movie.introduce}</div>
								</div>
								<div class="BaikeCommon__summary_side___jkT1I" style="margin-top:0;">
									<img
										src="${movie.img_url}" style="max-width:285px;">
								</div>
								
							
						</div>
						<div class="clearfix"></div>
						<div class="Movie__resources_wrapper___2cMax">
							<div></div>
							<p class="Movie__title___3dNCD">推荐资源</p>
							<div class="ResoucesTab__sources_tab_wrapper___uFEEg">
								<div class="ResoucesTab__sources_tab___3EvS2">
									<span class="hidden">在线播放</span><span class="hidden">第三方匹配</span><span
										class="ResoucesTab__sources_tab_highlight___3R-Q9">
										<!-- react-text: 132 -->智能匹配<!-- /react-text -->
										<em class="ResoucesTab__new_tips___1bOj1">new</em>
									</span>
									
								</div>
								<ul id="ResoucesTab__episode___1DGW0" class="hidden">
									<!-- react-text: 138 -->
									<!-- /react-text -->
									<!-- react-text: 139 -->
									<!-- /react-text -->
									<li class="hidden"><a href="#"> <!-- react-text: 142 -->全部
											<!-- /react-text -->
											<i class="iconfont icon-xiasanjiao-copy"></i></a></li>
									<div class="clearfix"></div>
								</ul>
								<div class="hidden">
									<div id="MovieResources__self_sources_list_wrapper___1nrBp"
										class="hidden">
										<div class="MovieResources__download_tips___2fS0o">
											<ul>
												<li>第三方匹配是第三方站点整理的下载资源</li>
												<li>当标题含<b>TS、TC、CAM</b>字样时，说明是<b>非高清/枪版</b></li>
												<li>下载、资源不对问题可查看 <a target="_blank"
													href="/download_tips">下载问题解疑</a>
												</li>
											</ul>
										</div>
										
										
										
										<table cellspacing="0" cellpadding="0">
											<tbody>
												<tr class="MovieResources__tr_title___3A6gk">
													<td class="MovieResources__td_name___6sZLk">名字</td>
													<td class="MovieResources__td_download___1h3hy">资源下载</td>
													<td class="MovieResources__td_size___25o1K">大小</td>
													<td class="MovieResources__td_resolution___3bXJB">清晰度</td>
													<td class="MovieResources__td_subtitle___2XU3H">字幕</td>
													<td class="MovieResources__td_time___2LfqO">发布时间</td>
												</tr>
											</tbody>
											<tbody id="MovieResources__self_sources_list___34aby"></tbody>
										</table>
										<div class="MovieResources__show_more___3MNHE hidden">展示更多结果</div>
									</div>
								</div>
								<div class="">
									<div id="MovieResources__self_sources_list_wrapper___1nrBp"
										class="">
										<div class="MovieResources__download_tips___2fS0o">
											<ul>
												<li>智能匹配是Python通过深度挖掘和智能算法匹配到的资源</li>
												<li><b>通常越靠前的资源可信度越高</b>，但并不保证所有结果都正确可用</li>
												<li>当标题含<b>TS、TC、CAM</b>字样时，说明是<b>非高清/枪版</b></li>
												<li>下载、资源不对问题可查看 <a target="_blank"
													href="/download_tips">下载问题解疑</a>
												</li>
											</ul>
										</div>
				
										<table cellspacing="0" cellpadding="0">
											<tbody>
												<tr class="MovieResources__tr_title___3A6gk">
													<td class="MovieResources__td_name___6sZLk">名字</td>
													<td class="MovieResources__td_download___1h3hy">资源下载</td>
													<td class="MovieResources__td_size___25o1K">大小</td>
													<td class="MovieResources__td_resolution___3bXJB">清晰度</td>
													<td class="MovieResources__td_subtitle___2XU3H">字幕</td>
													<td class="MovieResources__td_time___2LfqO">发布时间</td>
												</tr>
											</tbody>
											<tbody id="MovieResources__self_sources_list___34aby">
												<tr>
													<td class="MovieResources__td_name___6sZLk"><span></span>
														<!-- react-text: 185 -->${movie.title} <!-- /react-text --></td>
													<td class="MovieResources__td_download___1h3hy">
														<ul class="MovieResources__self_resouces_icon___17W30">
															<li class="MovieResources__ci_icon___1J-At"><a
																target="_blank"
																href="${movie.download_url}"><i
																	class="iconfont icon-xiazai"></i> <!-- react-text: 191 -->磁链
																	<!-- /react-text --> </a></li>
														</ul>
													</td>
													<td>4GB</td>
													<td>未知</td>
													<td class="MovieResources__td_subtitle___2XU3H">未知</td>
													<td>${move.year }</td>
												</tr>
												<tr>
													<td class="MovieResources__td_name___6sZLk"><span></span>
														<!-- react-text: 185 -->${movie.title} <!-- /react-text --></td>
													<td class="MovieResources__td_download___1h3hy">
														<ul class="MovieResources__self_resouces_icon___17W30">
															<li class="MovieResources__ci_icon___1J-At"><a
																target="_blank"
																href="${movie.download_url}"><i
																	class="iconfont icon-xiazai"></i> <!-- react-text: 191 -->磁链
																	<!-- /react-text --> </a></li>
														</ul>
													</td>
													<td>4GB</td>
													<td>未知</td>
													<td class="MovieResources__td_subtitle___2XU3H">未知</td>
													<td>${move.year }</td>
												</tr>
											</tbody>
										</table>
										<div class="MovieResources__show_more___3MNHE hidden">展示更多结果</div>
									</div>
								</div>
								<div style="display: none;"
									class="ResoucesTab__feedback_wrapper___22R0S">
									<div class="ResoucesTab__feedback___1GVLI">
										<div class="ResoucesTab__feedback_title___1LzTg">资源问题反馈</div>
										<div class="ResoucesTab__select_question___2ryeU">
											<div class="ResoucesTab__feedback_list_t___V_uJT">请选择问题类型</div>
											<ul>
												<li>求资源</li>
												<li>在线播放有误</li>
												<li>资源含不当内容</li>
											</ul>
										</div>
										<div class="ResoucesTab__feedback_remark___1e_Pn">
											<div class="ResoucesTab__feedback_list_t___V_uJT">备注说明</div>
											<textarea name="remark" placeholder="如有需要，可以在备注里把问题进行简要的描述"></textarea>
										</div>
										<div class="ResoucesTab__feedback_submit_btn___18Og2">确定</div>
										<span class="ResoucesTab__feedback_close_btn___XzoMd"><i
											class="iconfont icon-guanbi1"></i></span>
									</div>
								</div>
							</div>
						</div>
						<footer style="text-align: center;margin-top: 20px;">免责声明<br>
						<span>
						本网站所收集的部分公开资料来源于互联网，转载的目的在于传递更多信息及用于网络分享，并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议。本站部分作品是由网友自主投稿和发布、编辑整理上传，对此类作品本站仅提供交流平台，不为其版权负责。如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时修改或删除。
							本网站所提供的信息，只供参考之用。本网站不保证信息的准确性、有效性、及时性和完整性。本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误，对用户或任何其他人士负任何直接或间接责任。在法律允许的范围内，本网站在此声明，不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿。
						</span>
						</footer>
					</div>
				</div>

			</div>
		</div>
	</div>
</body>
</html>