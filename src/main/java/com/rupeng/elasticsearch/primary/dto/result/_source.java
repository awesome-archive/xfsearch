/**
  * Copyright 2018 bejson.com 
  */
package com.rupeng.elasticsearch.primary.dto.result;

/**
 * Auto-generated: 2018-08-02 10:43:30
 *
 * @author bejson.com (i@bejson.com)
 * @website http://www.bejson.com/java2pojo/
 */
public class _source {

    private int id;
    private String title;
    private String body;
    private String url;
    private String download_url;
    private String img_url;
    private String introduce;
    
    
    
    
    
    
    
    
	public String getDownload_url() {
		return download_url;
	}
	public void setDownload_url(String download_url) {
		this.download_url = download_url;
	}
	public String getImg_url() {
		return img_url;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public String getIntroduce() {
		return introduce;
	}
	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}
	public void setId(int id) {
         this.id = id;
     }
     public int getId() {
         return id;
     }

    public void setTitle(String title) {
         this.title = title;
     }
     public String getTitle() {
         return title;
     }

    public void setBody(String body) {
         this.body = body;
     }
     public String getBody() {
         return body;
     }

    public void setUrl(String url) {
         this.url = url;
     }
     public String getUrl() {
         return url;
     }
	@Override
	public String toString() {
		return "_source [id=" + id + ", title=" + title + ", body=" + body + ", url=" + url + ", download_url="
				+ download_url + ", img_url=" + img_url + ", introduce=" + introduce + "]";
	}

}