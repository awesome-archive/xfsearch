package com.rupeng.elasticsearch.primary.dto.query;

/**
 * 
 * @author 2016wlw2 徐塬峰 创建时间：2018年8月2日 上午11:51:43
 */
public class Root {
	public Query query;
	public Highlight highlight;
	public int from = 0;// 默认值
	public int size = 10000;// 默认值

	public Query getQuery() {
		return query;
	}

	public void setQuery(Query query) {
		this.query = query;
	}

	public int getFrom() {
		return from;
	}

	public void setFrom(int from) {
		this.from = from;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public Highlight getHighlight() {
		return highlight;
	}

	public void setHighlight(Highlight highlight) {
		this.highlight = highlight;
	}

	@Override
	public String toString() {
		return "Root [query=" + query + ", from=" + from + ", size=" + size + "]";
	}

}