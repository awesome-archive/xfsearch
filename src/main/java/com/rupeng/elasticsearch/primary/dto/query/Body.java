package com.rupeng.elasticsearch.primary.dto.query;

public class Body {
	private String pre_tags;
    private String post_tags;
    
    
	public String getPre_tags() {
		return pre_tags;
	}
	public void setPre_tags(String pre_tags) {
		this.pre_tags = pre_tags;
	}
	public String getPost_tags() {
		return post_tags;
	}
	public void setPost_tags(String post_tags) {
		this.post_tags = post_tags;
	}
	@Override
	public String toString() {
		return "Body [pre_tags=" + pre_tags + ", post_tags=" + post_tags + "]";
	}
    
    
    
    
}
