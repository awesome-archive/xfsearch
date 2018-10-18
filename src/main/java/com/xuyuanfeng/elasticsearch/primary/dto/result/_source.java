/**
  * Copyright 2018 bejson.com 
  */
package com.xuyuanfeng.elasticsearch.primary.dto.result;

/**
 * Auto-generated: 2018-08-02 10:43:30
 *
 * @author bejson.com (i@bejson.com)
 * @website http://www.bejson.com/java2pojo/
 */
public class _source {

    private int id; //id
    private String title;//标题
    private String body;//内容
    private String url;//url
    private String download_url;//下载地址
    private String img_url;//图片地址
    private String introduce;//介绍
    private String year;//年份
    private String lan; //首演
    private String main_actor;//主演
    private String country;//城市
    private String douban_link;//豆瓣连接
    
    
    
     
    
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getLan() {
		return lan;
	}
	public void setLan(String lan) {
		this.lan = lan;
	}
	public String getMain_actor() {
		return main_actor;
	}
	public void setMain_actor(String main_actor) {
		this.main_actor = main_actor;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getDouban_link() {
		return douban_link;
	}
	public void setDouban_link(String douban_link) {
		this.douban_link = douban_link;
	}
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