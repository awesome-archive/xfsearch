package com.rupeng.elasticsearch.primary.dto.query;

import java.util.List;

public class Multi_match {
	public String query;

	public List<String> fields;

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public List<String> getFields() {
		return fields;
	}

	public void setFields(List<String> fields) {
		this.fields = fields;
	}

	@Override
	public String toString() {
		return "Multi_match [query=" + query + ", fields=" + fields + "]";
	}

}
