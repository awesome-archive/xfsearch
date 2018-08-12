package com.xyf.pojo;

import java.util.Date;

public class Keys {

	
	private Long id;
	private String ip;
	private String key;
	private Date createTime;
	private Boolean isDeleted;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
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
		return "Keys [id=" + id + ", ip=" + ip + ", key=" + key + ", createTime=" + createTime + ", isDeleted="
				+ isDeleted + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
