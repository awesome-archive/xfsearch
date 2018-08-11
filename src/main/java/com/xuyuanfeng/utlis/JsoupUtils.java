package com.xuyuanfeng.utlis;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

/**
 * 用于过滤html 标签获取html的文本文档
 * 
 * @author 2016wlw2 徐塬峰 创建时间：2018年7月22日 下午9:15:55
 */
public class JsoupUtils {

	/*
	 * 使用jsoup解析 html标签 拿到 文本文档
	 */
	public static String getHtmlInnerText(String html) {
		if (html != null) {
			Document doc = Jsoup.parse(html);
			return doc.text();
		} else {// 如果html为null则不参与解析
			return null;
		}
	}

}
