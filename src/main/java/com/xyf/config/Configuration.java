package com.xyf.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


//通用配置文件
@Component
public class Configuration {
	    public static String redis_addr;//redis服務器的地址
	    public static String redis_port;//redis 端口号
	    public static String redis_max_active;//redis最大的活跃连接
	    public static String redis_max_idle;//redis最大的空闲连接
	    public static String redis_max_wait;//redis最大的等待时间
	    public static String redis_password;//redis的密码
	    public static String redis_timeout;//redis的超时时间
	    public static String redis_testonborrow;//redis
	    
	    @Value("${redis_max_active}")
		public  void setRedis_max_active(String redis_max_active) {
	    	Configuration.redis_max_active = redis_max_active;
		}
	    @Value("${redis_max_idle}")
		public  void setRedis_max_idle(String redis_max_idle) {
	    	Configuration.redis_max_idle = redis_max_idle;
		}
	    @Value("${redis_password}")
	   	public  void setRedis_password(String redis_password) {
	    	Configuration.redis_password = redis_password;
	   	}
		@Value("${redis_max_wait}")
		public  void setRedis_max_wait(String redis_max_wait) {
			Configuration.redis_max_wait = redis_max_wait;
		}
		@Value("${redis_timeout}")
		public  void setRedis_timeout(String redis_timeout) {
			Configuration.redis_timeout = redis_timeout;
		}
		@Value("${redis_port}")
		public  void setRedis_port(String redis_port) {
			Configuration.redis_port = redis_port;
		}
		@Value("${redis_addr}")
		public  void setRedis_addr(String redis_addr) {
			Configuration.redis_addr = redis_addr;
		}
}
