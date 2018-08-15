package com.xyf.web.timetask;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import com.xuyuanfeng.utlis.RedisUtils;
/**
 * 每天凌晨 去设置热门搜索
 * @author 2016wlw2 徐塬峰 创建时间：2018年7月27日 上午9:27:26
 */
@Component
public class TimeTask {
	private static final Logger logger = LogManager.getLogger(TimeTask.class);

	public void doTask() {
		
		
       		RedisUtils.setHotKeyList();//设置热搜  
       		logger.debug("每日热搜设置成功");
		
	}

}
