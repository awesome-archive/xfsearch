package com.xyf.pojo;

public class HotKeys {

	private Long id;
	private String sum;
	private String text;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSum() {
		return sum;
	}
	public void setSum(String sum) {
		this.sum = sum;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	@Override
	public String toString() {
		return "HotKeys [id=" + id + ", sum=" + sum + ", text=" + text + "]";
	}

	
	
}
