package com.rupeng.elasticsearch.primary.dto.query;

public class Highlight {

	public Fields fields;

	@Override
	public String toString() {
		return "Highlight [fields=" + fields + "]";
	}

	public Fields getFields() {
		return fields;
	}

	public void setFields(Fields fields) {
		this.fields = fields;
	}

}
