package com.xuyuanfeng.elasticsearch.primary.dto.query;

public class Query {

	private Multi_match multi_match;
	private Match_all match_all;
	private Type type;
	   
	
    public void setMatch_all(Match_all match_all) {
         this.match_all = match_all;
     }
     public Match_all getMatch_all() {
         return match_all;
     }
	public Multi_match getMulti_match() {
		return multi_match;
	}

	public void setMulti_match(Multi_match multi_match) {
		this.multi_match = multi_match;
	}
	public void setType(Type type) {
         this.type = type;
     }
	 
	 
	 
	@Override
	public String toString() {
		return "Query [multi_match=" + multi_match + "]";
	}

}
