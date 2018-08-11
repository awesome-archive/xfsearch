package com.xuyuanfeng.elasticsearch.primary.dto.result;

import java.util.List;

public class Highlight {

	
 private List<String> title;
 private List<String> body;
 
	@Override
	public String toString() {
		return "Highlight [title=" + title + ", body=" + body + "]";
	}
	public List<String> getTitle() {
		return title;
	}
	public void setTitle(List<String> title) {
		this.title = title;
	}
	public List<String> getBody() {
		return body;
	}
	public void setBody(List<String> body) {
		this.body = body;
	}
       
	public String returnBody()
	{
		if(body!=null&&body.size()!=0)
		{
			return body.get(0);
		}
		else
		{
			return null;
		}
		
	}
	public String returnTitle()
	{
		if(title!=null&&title.size()!=0)
		{
			return title.get(0);
		}
		else
		{
			return null;
		}
		
	}
	
	
	
	
}
