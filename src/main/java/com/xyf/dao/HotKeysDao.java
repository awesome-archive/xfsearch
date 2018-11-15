package com.xyf.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.xuyuanfeng.utlis.JDBCUtils;
import com.xyf.pojo.HotKeys;

/**
 * 
 * select text,sum(c) from ( select ip,text,count(distinct ip) c from
 * t_searchkey where createtime>=DATE_SUB(NOW(),INTERVAL 30 DAY) GROUP BY
 * ip,text ORDER BY ip DESC )t GROUP BY t.text order by SUM(c) desc
 * 从数据库中提取热搜词
 * @author Ray
 *
 */
public class HotKeysDao {

	public List<HotKeys> getHotKey() {
		ResultSet rs = null;
		try {
			rs = JDBCUtils.executeQuery(" select text,sum(c) as sum  from ( select ip,text,count(distinct ip) c from "+
       "t_searchkey where createtime>=DATE_SUB(NOW(),INTERVAL 365 DAY)"+
       " GROUP BY ip,text  ORDER BY ip DESC )t"+
       " GROUP BY t.text order by SUM(c) desc limit 0,6");
			List<HotKeys> ls = new ArrayList<HotKeys>();
			while (rs.next()) {	
				HotKeys hk = new HotKeys();
				hk.setText(rs.getString("text"));
				hk.setSum(rs.getString("sum"));
				ls.add(hk);
			}
			return ls;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}

		finally {
			JDBCUtils.closeAll(rs);

		}

	}
	

	/**
	 * select text,sum(c) as sum  from ( select ip,text,count(distinct ip) c from 
       t_searchkey where createtime>=DATE_SUB(NOW(),INTERVAL 1 DAY)
        GROUP BY ip,text  ORDER BY ip DESC )t
        GROUP BY t.text order by SUM(c) desc limit 0,10
	 * @return
	 */
	public List<HotKeys> getHotRank() {
		ResultSet rs = null;
		try {
			rs = JDBCUtils.executeQuery(" select id,text,sum(c) as sum  from ( select id,ip,text,count(ip) c from" 
      +" t_searchkey where createtime>=DATE_SUB(NOW(),INTERVAL 365 DAY)"
      + " GROUP BY ip,text  ORDER BY ip DESC )t"
      + " GROUP BY t.text order by SUM(c) desc limit 0,10");
			List<HotKeys> ls = new ArrayList<HotKeys>();
			while (rs.next()) {	
				HotKeys hk = new HotKeys();
				hk.setId(rs.getLong("id"));
				hk.setText(rs.getString("text"));
				hk.setSum(rs.getString("sum"));
				ls.add(hk);
			}
			return ls;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}

		finally {
			JDBCUtils.closeAll(rs);
		}

	}
	
	
	
	

	
}
