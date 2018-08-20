package com.xyf.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.xuyuanfeng.utlis.JDBCUtils;
import com.xuyuanfeng.utlis.RedisUtils;
import com.xyf.pojo.Magnet;

public class MagnetDao {

	/**
	 * 获取所有磁力链接的信息
	 */
	public List<Magnet> getAll(Long movieId)
	{
		List<Magnet> lsMag=new ArrayList<Magnet>();
		ResultSet rs=null;
		try {
			rs=JDBCUtils.executeQuery("select * from t_movies_to_downloadurls where movieId =?", movieId);
            while(rs.next())
            {
            	Magnet mag=new Magnet();
            	mag.setId(rs.getLong("id"));
            	mag.setMovieId(rs.getLong("movieId"));
            	mag.setClear(rs.getString("clear"));
            	mag.setCreateTime(rs.getDate("createTime"));
            	mag.setDownloadUrl(rs.getString("downloadUrl"));
            	mag.setSize(rs.getString("size"));
            	mag.setIsDeleted(rs.getBoolean("isDeleted"));
            	if(RedisUtils.getValue(String.valueOf(mag.getId()))!=null)
            	{
            	mag.setPraise(RedisUtils.getValue(String.valueOf(mag.getId())));
            	}
            	else
            	{
            	mag.setPraise("0");
            	}
            	lsMag.add(mag);
            }
            
            return   lsMag;
		}
		catch (SQLException e) {
			throw new RuntimeException(e);
		}
		finally
		{
			JDBCUtils.closeAll(rs);
			
		}
		
		
	}
	
	
	
}
