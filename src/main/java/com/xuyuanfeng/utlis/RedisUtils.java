package com.xuyuanfeng.utlis;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.xyf.dao.HotKeysDao;
import com.xyf.pojo.HotKeys;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * @author 2016wlw2 徐塬峰 创建时间：2018年7月20日 下午2:37:57
 */
public class RedisUtils {
	
	private static final Logger logger = LogManager.getLogger(
			RedisUtils.class);
	/**
	 * 从配置文件中获得redis 的信息 并且创建jedis实例 操作redis服务器
	 * 
	 */
	private static JedisPool jedisPool = null;
	static {
		try {
			JedisPoolConfig config = new JedisPoolConfig();
			config.setMaxTotal(100);// 最大的连接数
			config.setMaxIdle(10);// 最大的空闲连接
			config.setMaxWaitMillis(1000);// 获取连接最大的等待时间
			config.setTestOnBorrow(true);// 获取连接检查是否有效
			jedisPool = new JedisPool(config, "localhost",6379,1000);//ConfigInfo.redis_password 
		} catch (Exception e) {
			logger.warn(e);
		}
	}
	/**
	 * 获得jedis对象
	 */
	public synchronized static Jedis getJedis() {
		try {
			if (jedisPool != null) {
				Jedis resource = jedisPool.getResource();
				return resource;
			} else {
				return null;
			}
		} catch (Exception e) {
			logger.warn(e);
		}
		return null;
	}

	/**
	 * 获取redis键值-object 通过键来获取到值
	 * 
	 * @param key
	 * @return
	 */
	public static String getValue(String key) {
		if (CommonUtils.isEmpty(key)) {
			return null;
		}
		Jedis jedis = null;
		jedis = jedisPool.getResource();
		String value = jedis.get(key);
		jedis.close();// 释放jedis
		return value;
	}

	/**
	 * 该方法从数据库中读取出热门搜索 6个 并且 将这些热门搜索 存放到redis中 以json字符串的方式
	 */
	public static void setHotKeyList() {
		Gson gson =new Gson();
		Jedis jedis = null;
		jedis = jedisPool.getResource();
		HotKeysDao hst = new HotKeysDao();
		List<HotKeys> ls = hst.getHotKey();
	    jedis.set("xuanfengHotSearchKeyList", gson.toJson(ls));
		jedis.close();// 释放jedis
	}
	
	public static List<HotKeys> getHotKeyList() {
		Gson gson =new Gson();
		Jedis jedis = null;
		jedis = jedisPool.getResource();
	    String value=jedis.get("xuanfengHotSearchKeyList");
	    JsonParser parser = new JsonParser();
	    JsonArray Jarray = parser.parse(value).getAsJsonArray();
	    ArrayList<HotKeys> lcs = new ArrayList<HotKeys>();
	    for(JsonElement obj : Jarray ){
	    	HotKeys cse = gson.fromJson( obj , HotKeys.class);
	        lcs.add(cse);  
	    }
	    jedis.close();// 释放jedis
	    return lcs;
	}
	

	
	
	
}
