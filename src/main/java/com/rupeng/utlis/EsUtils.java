package com.rupeng.utlis;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

import com.google.gson.Gson;
import com.xyf.pojo.Movies;

/**
 * 用来创建关闭es客户端
 * 
 * @author 2016wlw2 徐塬峰 创建时间：2018年7月24日 上午10:32:28
 */
public class EsUtils {

	/**
	 * 用于关闭elasticSearch
	 */
	public static void closeClient(Client client) {
		if (null != client) {
			try {
				client.close();
			} catch (Exception e) {
				throw new RuntimeException("连接关闭失败");
			}
		}
	}

	/**
	 * 
	 * 
	 * create
	 * 
	 * 如果文档不存在，那么就创建它。详情请见 [create-doc]。 index
	 * 
	 * 创建一个新文档或者替换一个现有的文档。详情请见 [index-doc] 和 [update-doc]。 update
	 * 
	 * 部分更新一个文档。详情请见 [partial-updates]。 delete
	 * 
	 * 删除一个文档。详情请见 [delete-doc]。
	 * 
	 */

	/**
	 * 語法 //删除 { "delete": { "_index": "test_index", "_type": "test_type",
	 * "_id": "3" }} //强制创建 { "create": { "_index": "test_index", "_type":
	 * "test_type", "_id": "12" }} {"test_field1": "test1", "test_field2":
	 * "test2"} //一般创建 { "index": { "_index": "test_index", "_type":
	 * "test_type", "_id": "2" }} {"test_field1": "test1", "test_field2":
	 * "test2"} //partial update操作 { "update": { "_index": "test_index",
	 * "_type": "test_type", "_id": "1", "_retry_on_conflict" : 3} } { "doc" :
	 * {"test_field2" : "bulk test1"} }
	 * 
	 * 
	 */
	public static String toBatchJSon(List<Movies> list, String indexname, String indexType, String operate) {

		StringBuffer sb = new StringBuffer();

		Gson gson = new Gson();
		for (Movies pi : list) {

			String json = gson.toJson(pi);

			String str = "{ \"" + operate + "\" : { \"_index\" : \"" + indexname + "\", \"_type\" : \"" + indexType
					+ "\", \"_id\" : \"" + pi.getId() + "\" } }";
			sb.append(str).append("\n");
			sb.append(json).append("\n");
//			System.out.println(sb.toString());
		}

		return sb.toString();

	}

	public static RestClient getRestClient() {
		RestClientBuilder builder = RestClient.builder(new HttpHost("127.0.0.1", 9200, "http"));
		RestClient restClient = builder.build();
		return restClient;
	}

	/**
	 * 用於批量提交工具類
	 * 
	 */
	public static String httpPostWithJSON(String url, String json) throws Exception {

		HttpPost httpPost = new HttpPost(url);

		CloseableHttpClient client = HttpClients.createDefault();
		
		String respContent = null;

		StringEntity entity = new StringEntity(json, "utf-8");// 解决中文乱码问题

		entity.setContentEncoding("UTF-8");

		entity.setContentType("application/json");

		httpPost.setEntity(entity);

		System.out.println();

		HttpResponse resp = client.execute(httpPost);

		if (resp.getStatusLine().getStatusCode() == 200) {

			HttpEntity he = resp.getEntity();

			respContent = EntityUtils.toString(he, "UTF-8");

		}

		return respContent;

	}
}
