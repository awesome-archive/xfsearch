package com.rupeng.elasticsearch.primary.dto.result;

/**
 * Copyright 2018 bejson.com 
 */
import java.util.List;

import org.elasticsearch.search.SearchHits;

/**
 * Auto-generated: 2018-08-02 10:43:30
 *
 * @author bejson.com (i@bejson.com)
 * @website http://www.bejson.com/java2pojo/
 */
public class Hits {

	private int total;
	private double max_score;
	private List<Hit> hits;
    
	
	
	
	public List<Hit> getHits() {
		return hits;
	}

	public void setHits(List<Hit> hits) {
		this.hits = hits;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getTotal() {
		return total;
	}

	public void setMax_score(double max_score) {
		this.max_score = max_score;
	}

	public double getMax_score() {
		return max_score;
	}

	@Override
	public String toString() {
		return "Hits [total=" + total + ", max_score=" + max_score + ", hits=" + hits + "]";
	}

}