package com.xyf.pojo;

import java.util.Date;

public class Messages {

	
	private Long id;
	private String name;
	private String description;
	private String ip;
	private Date createTime;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public Boolean getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	@Override
	public String toString() {
		return "Messages [id=" + id + ", name=" + name + ", description=" + description + ", ip=" + ip + ", createTime="
				+ createTime + ", isDeleted=" + isDeleted + "]";
	}
	
	
}
