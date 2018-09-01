package com.xyf.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.xuyuanfeng.utlis.JDBCUtils;
import com.xyf.pojo.Messages;

public class MessagesDao {

	public Boolean insert(String description, String ip) {

		String name = UUID.randomUUID().toString();
		try {
			JDBCUtils.executeInsert("insert into t_messages (name,description,ip,createTime,isDeleted)"
					+ "values(?,?,?,?,?)", name,
					description, ip, new Date(), 0);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return null;
	}
	public List<Messages> getAll()
	{
		List<Messages> lm=new ArrayList<Messages>();
		ResultSet rs=null;
		try {
			rs = JDBCUtils.executeQuery("select * from t_messages");
			while(rs.next())
			{
                Messages m=new Messages();
                m.setCreateTime(rs.getDate("createTime"));
				m.setDescription(rs.getString("description"));
			    m.setId(rs.getLong("id"));
			    m.setIp(rs.getString("ip"));
			    m.setName(rs.getString("name"));
			    lm.add(m);
			}		
		} catch (SQLException e) {
           throw new RuntimeException(e);
		}
		finally
		{
			JDBCUtils.closeAll(rs);
		}
		return lm;
		
	}
}
