package com.xuyuanfeng.elasticsearch.primary.dto.result;

public class JsonRootBean {
	   private int took;
	    private boolean timed_out;
	    private _shards _shards;
	    private Hits hits;
	    public void setTook(int took) {
	         this.took = took;
	     }
	     public int getTook() {
	         return took;
	     }

	    public void setTimed_out(boolean timed_out) {
	         this.timed_out = timed_out;
	     }
	     public boolean getTimed_out() {
	         return timed_out;
	     }

	    @Override
		public String toString() {
			return "JsonRootBean [took=" + took + ", timed_out=" + timed_out + ", _shards=" + _shards + ", hits=" + hits
					+ "]";
		}
		public void set_shards(_shards _shards) {
	         this._shards = _shards;
	     }
	     public _shards get_shards() {
	         return _shards;
	     }

	    public void setHits(Hits hits) {
	         this.hits = hits;
	     }
	     public Hits getHits() {
	         return hits;
	     }
}
