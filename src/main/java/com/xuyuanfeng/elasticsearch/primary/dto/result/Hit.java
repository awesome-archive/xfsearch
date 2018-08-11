package com.xuyuanfeng.elasticsearch.primary.dto.result;

public class Hit {
	private String _index;
    private String _type;
    private String _id;
    private double _score;
    private _source _source;
    private Highlight highlight;
    
    
    
    public Highlight getHighlight() {
		return highlight;
	}
	public void setHighlight(Highlight highlight) {
		this.highlight = highlight;
	}
	public void set_index(String _index) {
         this._index = _index;
     }
     public String get_index() {
         return _index;
     }

    public void set_type(String _type) {
         this._type = _type;
     }
     public String get_type() {
         return _type;
     }

    public void set_id(String _id) {
         this._id = _id;
     }
     public String get_id() {
         return _id;
     }

    public void set_score(double _score) {
         this._score = _score;
     }
     public double get_score() {
         return _score;
     }

    public void set_source(_source _source) {
         this._source = _source;
     }
     public _source get_source() {
         return _source;
     }
	@Override
	public String toString() {
		return "Hit [_index=" + _index + ", _type=" + _type + ", _id=" + _id + ", _score=" + _score + ", _source="
				+ _source + "]";
	}
}
