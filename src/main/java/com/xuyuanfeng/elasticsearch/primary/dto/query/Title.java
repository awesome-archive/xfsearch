package com.xuyuanfeng.elasticsearch.primary.dto.query;

public class Title {
	/// <summary>
	///
	/// </summary>
	public String pre_tags;
	///
	/// </summary>
	public String post_tags;

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
		return "Titile [pre_tags=" + pre_tags + ", post_tags=" + post_tags + "]";
	}

}
