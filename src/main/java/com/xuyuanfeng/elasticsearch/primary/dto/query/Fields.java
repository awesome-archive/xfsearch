package com.xuyuanfeng.elasticsearch.primary.dto.query;
/**
 * 设置高亮字段
 * @author 2016wlw2 徐塬峰
 * 创建时间：2018年8月2日 下午2:53:30
 */
public class Fields {
	public Title title;
    public Body body;
    
	
	
	public Body getBody() {
		return body;
	}

	public void setBody(Body body) {
		this.body = body;
	}

	public Title getTitle() {
		return title;
	}

	public void setTitle(Title title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "Fields [title=" + title + "]";
	}

}
