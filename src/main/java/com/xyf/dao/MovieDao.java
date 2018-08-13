package com.xyf.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.xuyuanfeng.utlis.JDBCUtils;
import com.xyf.pojo.Movies;

/**
 * 用于显示数据的详情页面
 * @author Ray
 */
public class MovieDao {

	
	/**
	 * 获取一条数据
	 */
	 public  Movies getOne(Long id)
	 {
        ResultSet rs=null;
		Movies m =new Movies();  
        try {
			  
			rs=JDBCUtils.executeQuery("select * from t_movies where id =?", id);
		    if(rs.next())
		    {
		    	m.setCountry(rs.getString("country"));
		    	m.setDownload_url(rs.getString("download_url"));
		    	m.setImg_url(rs.getString("img_url"));
                m.setDouban_link(rs.getString("douban_link"));
                m.setIntroduce(rs.getString("introduce"));
                m.setYear(rs.getString("year"));
                m.setMain_actor(rs.getString("main_actor"));
                m.setLan(rs.getString("lan"));
                m.setTitle(rs.getString("title"));
		    	m.setId(rs.getLong("id"));
		    }
			return m;
        } catch (SQLException e) {
			e.printStackTrace();
		}
        finally
        {
        	JDBCUtils.closeAll(rs);
        }
		return null;
        
	 }
	
	
	
	
	
	
	
	
	
	
	
	
}
