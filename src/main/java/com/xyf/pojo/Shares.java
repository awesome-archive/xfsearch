package com.xyf.pojo;

public class Shares {

	
	private Long id;
	private String name;
	private String download_url;
	private Boolean isDeleted;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDownload_url() {
		return download_url;
	}
	public void setDownload_url(String download_url) {
		this.download_url = download_url;
	}
	public Boolean getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	@Override
	public String toString() {
		return "Shares [id=" + id + ", name=" + name + ", download_url=" + download_url + ", isDeleted=" + isDeleted
				+ "]";
	}
	
	
	
}
