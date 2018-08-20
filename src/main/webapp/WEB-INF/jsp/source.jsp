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
<title>搜搜影库</title>
</head>
<link href="<%=ctxPath%>/css/style2.css" rel="stylesheet">
<body>
	<%@include file="/WEB-INF/jsp/nav.jsp"%>
	<div id="wrapper">
		<div id="BaikeCommon__baike_container">
			<div id="BaikeCommon__container">
				<div id="BaikeCommon__before_container">
					<div id="BaikeCommon__bg_wapper"></div>
					<div id="BaikeCommon__content_wrapper">
						<div id="BaikeCommon__summary_wrapper">
							<div class="BaikeCommon__summary_content">
								<h1>${movie.title}</h1>
								<div class="content">
									<div class="BaikeCommon__basic_info">
										<dl class="BaikeCommon__basic_info_left">
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">导&nbsp;&nbsp;&nbsp;演</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">
													<span> <!-- react-text: 46 --> <!-- /react-text -->&nbsp;未知
													</span>
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">语&nbsp;&nbsp;&nbsp;言</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">
													<span> &nbsp;${movie.lan} </span>
													<!-- /react-text -->
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">主&nbsp;&nbsp;&nbsp;演</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">
													<span><span> <!-- react-text: 62 --> <!-- /react-text -->
															<a href="/baike/celebrity/em1WazgMOW"></a>
													</span> <span>&nbsp;未知 </span> </span>
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">评&nbsp;&nbsp;&nbsp;分</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">
													<a target="_blank" href="${movie.douban_link}"
														class="Movie__douban___14-R2"> &nbsp;豆瓣 </a>
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">片长</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">&nbsp;未知</dd>
											</div>
										</dl>
										<dl class="BaikeCommon__basic_info_right">
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">原&nbsp;&nbsp;&nbsp;名</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">
												<a 	href="./search.do?text=${movie.title}">${movie.title}</a>
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">上映日期</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">&nbsp;${movie.year}
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">地区/国家</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">&nbsp;${movie.country}
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">别&nbsp;&nbsp;&nbsp;名</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">
													<span> &nbsp; ${movie.title} <!-- react-text: 111 -->
														<!-- /react-text --></span>
												</dd>
											</div>
											<div>
												<dt
													class="BaikeCommon__basic_info_name BaikeCommon__basic_info_item">类&nbsp;&nbsp;&nbsp;型</dt>
												<dd
													class="BaikeCommon__basic_info_value BaikeCommon__basic_info_item">&nbsp;未知</dd>
											</div>
										</dl>
										<div class="clearfix"></div>
									</div>
									<div class="BaikeCommon__summary">
									简介:：${movie.introduce}
									</div>
								</div>
								<div class="BaikeCommon__summary_side">
									<img src="${movie.img_url}"
										style="max-width: 285px; width: 260px;">
								</div>

							</div>
							<div class="clearfix"></div>
							<div class="Movie__resources_wrapper">
								<div></div>
								<p class="Movie__title">推荐资源</p>
								<div class="ResoucesTab__sources_tab_wrapper">
									<div class="ResoucesTab__sources_tab">
										<span class="hidden">在线播放</span> <span class="hidden">第三方匹配</span>
										<span class="ResoucesTab__sources_tab_highlight"> <!-- react-text: 132 -->智能匹配<!-- /react-text -->
											<em class="ResoucesTab__new_tips">new</em>
										</span>

									</div>
									<ul id="ResoucesTab__episode" class="hidden">
										<!-- react-text: 138 -->
										<!-- /react-text -->
										<!-- react-text: 139 -->
										<!-- /react-text -->
										<li class="hidden"><a href="#"> <!-- react-text: 142 -->全部
												<!-- /react-text --> <i
												class="iconfont icon-xiasanjiao-copy"></i></a></li>
										<div class="clearfix"></div>
									</ul>
									<div class="hidden">
										<div id="MovieResources" class="hidden">
											<div class="MovieResources__download">
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
													<tr class="MovieResources__tr_title">
														<td class="MovieResources__td_name">名字</td>
														<td class="MovieResources__td_download">资源下载</td>
														<td class="MovieResources__td_size">大小</td>
														<td class="MovieResources__td_resolution">清晰度</td>
														<td class="MovieResources__td_subtitle">字幕</td>
														<td class="MovieResources__td_time">发布时间</td>
													</tr>
												</tbody>
												<tbody id="MovieResources__self_sources_list"></tbody>
											</table>
											<div class="MovieResources__show_more hidden">展示更多结果</div>
										</div>
									</div>
									<div class="">
										<div id="MovieResources" class="">
											<div class="MovieResources__download">
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
													<tr class="MovieResources__tr_title">
														<td class="MovieResources__td_name">名字</td>
														<td class="MovieResources__td_download">资源下载</td>
														<td class="MovieResources__td_size">大小</td>
														<td class="MovieResources__td_likes">赞</td>
														<td class="MovieResources__td_resolution">清晰度</td>
														<td class="MovieResources__td_subtitle">字幕</td>
														<td class="MovieResources__td_time">发布时间</td>
													</tr>
												</tbody>
												<tbody id="MovieResources">
														<c:if test="${movie.download_url!=null}">
														<tr>
															<td class="MovieResources__td_name"><span>
																<!-- react-text: 185 -->${movie.title}</span>
																<!-- /react-text -->
															</td>
															<td class="MovieResources__td_download">
																<ul class="MovieResources__self_resouces_icon">
																	<li class="MovieResources__ci_icon">
																		<a target="_blank" href="${movie.download_url}"><i class="iconfont icon-xiazai"></i>
																			<!-- react-text: 191 -->磁链
																			<!-- /react-text -->
																		</a>
																	</li>
																</ul>
															</td>
															<td>4GB</td>
															<td></td>
															<td class="MovieResources__td_subtitle">未知</td>
															<td>未知</td>
														</tr>
														</c:if>
														<c:forEach items="${lsm}" var="item"    varStatus="status">
															<tr>
															<td class="MovieResources__td_name"><span>
																<!-- react-text: 185 -->${movie.title}</span>
																<!-- /react-text -->
															</td>
															<td class="MovieResources__td_download">
																<ul class="MovieResources__self_resouces_icon">
																	<li class="MovieResources__ci_icon">
																		<a target="_blank" href="${item.downloadUrl}"><i class="iconfont icon-xiazai"></i>
																			<!-- react-text: 191 -->磁链${ status.index + 1}
																			<!-- /react-text -->
																		</a>
																	</li>
																</ul>
															</td>
															<td>${item.size}</td>
															<td ><a href="javascript:void(0)" onclick="send('${item.id}','praise${ status.index + 1}')" id="praise${ status.index + 1}">${item.praise} <!--{{likes}}--></a><i class="glyphicon 	glyphicon-thumbs-up"></i></td>
															<td>${item.clear}</td>
															<td class="MovieResources__td_subtitle">未知</td>
															<td>${item.createTime}</td>
														</tr>
														</c:forEach>
														
														
														
													</tbody>
												</table>
												<div class="MovieResources__show_more hidden">展示更多结果</div>
											</div>
										</div>
									</div>
								</div>

							<footer>免责声明<br>
							<span>
								本网站所收集的部分公开资料来源于互联网，转载的目的在于传递更多信息及用于网络分享，并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议。本站部分作品是由网友自主投稿和发布、编辑整理上传，对此类作品本站仅提供交流平台，不为其版权负责。如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时修改或删除。
								本网站所提供的信息，只供参考之用。本网站不保证信息的准确性、有效性、及时性和完整性。本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误，对用户或任何其他人士负任何直接或间接责任。在法律允许的范围内，本网站在此声明，不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿。
							</span> </footer>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

</body>
</html>