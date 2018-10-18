package com.xyf.service;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.StatusLine;
import org.apache.http.entity.ContentType;
import org.apache.http.nio.entity.NStringEntity;
import org.apache.http.util.EntityUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.common.recycler.Recycler.C;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Body;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Fields;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Highlight;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Multi_match;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Query;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Root;
import com.xuyuanfeng.elasticsearch.primary.dto.query.Title;
import com.xuyuanfeng.elasticsearch.primary.dto.result.Hit;
import com.xuyuanfeng.elasticsearch.primary.dto.result.JsonRootBean;
import com.xuyuanfeng.utlis.CommonUtils;
import com.xuyuanfeng.utlis.EsUtils;
import com.xuyuanfeng.utlis.HTMLUtils;
import com.xuyuanfeng.utlis.JDBCUtils;
import com.xuyuanfeng.utlis.JsoupUtils;
import com.xyf.pojo.Movies;

/**
 * 由于官方已经不再维护es transport客户端 那么，就应该使用 Rest客户端来进行开发
 * 
 * @author 2016wlw2 徐塬峰 创建时间：2018年8月1日 上午9:22:47
 */
@Service
public class ElasticSearchRestFullService {

	private static final Logger logger = LogManager.getLogger(ElasticSearchRestFullService.class);

	
	/**
	 * rest client 基础查询 翻页查询 ---徐塬峰---
	 */
	public Map<String, Object> search(String text, int current, String type) {

	
		if (CommonUtils.isEmpty(text) || CommonUtils.isEmpty(String.valueOf(current)) || current == 0) {
			logger.debug("参数错误");
			return null;
		}
		
		Gson gson = new Gson();
		String method = "POST";
		String endpoint = null;
		endpoint = "/" + "xuanfengsearch" + "/" + type + "/_search?pretty";// 如果type不為null
		/**
		 * 构建原生的json对象
		 */
		List<String> fields = new ArrayList<String>();
		fields.add("title");// 设置索引的字段身体

		Multi_match mul = new Multi_match();
		mul.setFields(fields);
		mul.setQuery(text);
		Query query = new Query();
		query.setMulti_match(mul);

		/**
		 * 構建高亮查詢title boyd
		 */
		Title title = new Title();
		title.setPre_tags("<span style=\"color:red\">");
		title.setPost_tags("</span>");// 結束
		Fields field = new Fields();
		field.setTitle(title);

		Highlight highlight = new Highlight();
		highlight.setFields(field);

		// 需要構建返回高亮的字段
		Root root = new Root();
		root.setQuery(query);
		root.setHighlight(highlight);
		int pageSize = 10;
		int startSize = (current - 1) * 10;// 起点
		root.setFrom(startSize);// 分页代码 设置起始位置
		root.setSize(pageSize);// 设置返回的size 大小
		Map<String, Object> msgMap = new HashMap<String, Object>();// 用于返回数据

		RestClient restClient = EsUtils.getRestClient();
		try {
			HttpEntity entity = new NStringEntity(gson.toJson(root), ContentType.APPLICATION_JSON);
			Response response;
			response = restClient.performRequest(method, endpoint, Collections.<String, String> emptyMap(), entity);

			JsonRootBean result = gson.fromJson(EntityUtils.toString(response.getEntity()), JsonRootBean.class);

			List<Movies> data = new ArrayList<>();
			for (Hit hit : result.getHits().getHits()) {
				// 在这里将Project,添加
				Movies p = new Movies();
				// 有可能出现 搜索的时候title 是高亮字段 但是相应的body并不是的情况，反之亦然，所以要进行判断
				p.setTitle(hit.getHighlight().returnTitle());
				p.setIntroduce(hit.get_source().getIntroduce());
				p.setDownload_url(hit.get_source().getDownload_url());
				p.setImg_url(hit.get_source().getImg_url());
                
				p.setDouban_link(hit.get_source().getDouban_link());
                p.setYear(hit.get_source().getYear());
                p.setCountry(hit.get_source().getCountry());
                p.setLan(hit.get_source().getLan());
                p.setMain_actor(hit.get_source().getMain_actor());
                
				int id=hit.get_source().getId();
				Long pid=new Long(id);
				p.setId(pid);
				data.add(p);
			}
			// 如果当前返回的内容为空 则返回找不到相关的内容
			if (startSize > result.getHits().getTotal() || result.getHits().getTotal() == 0) // 如果当前页面的起点大于了数据的总条数或者当前页的总条数为0
			{
				msgMap.put("message",
						"<br/><br/><font size='5' color='#ff7300'>没有找到    </font><font size='3' colr='#999'>关于“" + HTMLUtils.htmlescape(text)
								+ "”的内容</font>");
				return msgMap;
			}

			long totalPages = result.getHits().getTotal() / pageSize;// 总页数
			if (result.getHits().getTotal() % pageSize == 0) {
				totalPages = result.getHits().getTotal() / pageSize;// 总页数
			} else {
				totalPages = result.getHits().getTotal() / pageSize + 1;// 总页数
			}
			msgMap.put("itemsList", data); // 搜索结果
			msgMap.put("cur", current); // 分页
			msgMap.put("totalPages", totalPages); // 分页
			float took = result.getTook();// 多少毫秒
			took = took / 1000;
			msgMap.put("took", "为您找到" + result.getHits().getTotal() + "个结果,耗时" + took + "秒"); // 获取响应需要的时间
			return msgMap;

		} catch (IOException e) {
			logger.error(e);
			throw new RuntimeException(e);
		} finally {
			try {
				if (restClient != null) {
					restClient.close();
				}
			} catch (IOException e) {
				logger.error(e);// 安靜的關閉
			}
		}

	}
	/**
	 * 创建一个分类索引库批量的插入
	 */
	public boolean createIndex(String indexType) {
		long start = System.currentTimeMillis();
		RestClient restClient = EsUtils.getRestClient();
		ResultSet rs = null;
		try {
			rs = JDBCUtils.executeQuery("select * from t_movies");
			List<Movies> list = new ArrayList<Movies>();

			while (rs.next()) {
				Movies pl = new Movies();
				pl.setId(rs.getLong("id"));
				String body = JsoupUtils.getHtmlInnerText(rs.getString("introduce"));
				body = HTMLUtils.delHTMLTag(body);
				body = HTMLUtils.stripHtml(body);
				String title = JsoupUtils.getHtmlInnerText(rs.getString("title"));
				title = HTMLUtils.delHTMLTag(title);
				title = HTMLUtils.stripHtml(title);
				//插入所有结果
				String year =rs.getString("year");
				String country=rs.getString("country");
				String lan =rs.getString("lan");
				String douban_linl=rs.getString("douban_link");
				String main_actor=rs.getString("main_actor");
				pl.setMain_actor(main_actor);
				pl.setContry(country);
				pl.setLan(lan);
				pl.setDouban_link(douban_linl);
				pl.setYear(year);
				
				pl.setDownload_url(rs.getString("download_url"));
				if(CommonUtils.isEmail(rs.getString("download_url")))
				{
					continue;
				}
				pl.setImg_url(rs.getString("img_url"));
				if (CommonUtils.isEmpty(title))// 如果標題為空或為null 則無法進行索引
				{
					continue;
				}
				// 為了保證界面美觀
				if (body != null) {
					if (body.length() > 200)// 如果正文長度大於100 則切割
					{
						pl.setIntroduce(body.substring(0, 150) + "......");
					} else {
						pl.setIntroduce(body + "......");
					}
				} else {
					pl.setIntroduce(body + "......");
				}
				if (title.length() > 40)// 如果標題長度大於40 則切割
				{
					pl.setTitle(title.substring(0, 40));
				} else {
					pl.setTitle(title);
				}
				list.add(pl);
				if (list.size() >= 100) {
					bulk(list, "xuanfengsearch", indexType, "create", restClient);// 当数据量为5000的时候提交一次
					// 然后刷新list
					list.clear();
					logger.debug("已提交100条数据");
				}
			}
			// 最後剩下的再提交一次
			if (list.size() > 0) {
				bulk(list, "xuanfengsearch", indexType, "create", restClient);
				logger.debug("最後一次提交完成");
				list.clear();
			}

			long end = System.currentTimeMillis();
			logger.debug(indexType + "耗时" + (end - start) / 1000 + "秒");
			return true;

		} catch (SQLException e) {

			logger.error(e);
			throw new RuntimeException("数据库异常" + e);

		} catch (Exception e) {
			logger.error(e);
			throw new RuntimeException("连接失败" + e);
		} finally {
			JDBCUtils.closeAll(rs);// 关闭结果数据库的链接
			try {
				restClient.close();
			} catch (IOException e) {
				logger.error(e);
			}
		}
	}

	public void bulk(List<Movies> list, String indexName, String indexType, String operate, RestClient restClient) {

		Gson gson = new Gson();
		String endpoint = "http://" + "localhost" + ":" + 9200 + "/_bulk";
		gson.toJson(list);
		String json = EsUtils.toBatchJSon(list, indexName, indexType, operate);// 構造json
		try {
			EsUtils.httpPostWithJSON(endpoint, json);
		} catch (Exception e) {
			logger.error(e);// 安靜的關閉
		}

	}
	/**
	 * rest 刪除一個索引庫 ！！！
	 * 直接刪除 
	 * 
	 * @param esMixedDataDto
	 * @return
	 */
	public boolean deleteIndex(String indexName) {
		// 1.创建client
		RestClient restClient = EsUtils.getRestClient();
		HttpEntity entity = new NStringEntity("{\n" + "  \"query\": {\n" + "    \"match_all\": {}\n" + "  }\n" + "}",
				ContentType.APPLICATION_JSON);
		String endpoint = indexName + "/";
		// 2.删除单个分类索引
		try {
			Response response = restClient.performRequest("DELETE", endpoint, Collections.<String, String> emptyMap(),
					entity);
			StatusLine statusLine = response.getStatusLine();
			logger.debug("索引執行" + statusLine);
			return true;
		} catch (IOException e) {
			logger.error(e);
			throw new RuntimeException(e);
		} finally {
			try {
				restClient.close();
			} catch (IOException e) {
				logger.error(e);
			}
		}

	}
}
