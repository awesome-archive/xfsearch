package com.xyf.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.xuyuanfeng.utlis.JDBCUtils;
import com.xyf.pojo.Movies;

/**
 * 用于显示数据的详情页面
 * 
 * @author Ray
 */
public class MovieDao {

	/**
	 * 获取一条数据
	 */
	public Movies getOne(Long id) {
		ResultSet rs = null;
		Movies m = new Movies();
		try {

			rs = JDBCUtils.executeQuery("select * from t_movies where id =?", id);
			if (rs.next()) {
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
		} finally {
			JDBCUtils.closeAll(rs);
		}
		return null;

	}

	public void insert(String title, String year, String country, String lan, String douban_link, String introduce,
			String main_actor, String download_url, String img_url) {
		try {
			JDBCUtils.executeInsert(
					"insert into t_movies (title,year,country,lan,douban_link,introduce,main_actor,download_url,img_url) values(?,?,?,?,?,?,?,?,?)",
					title, year, country, lan, douban_link, introduce, main_actor, download_url, img_url);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public List<Movies> getAll() {
		List<Movies> ls = new ArrayList<Movies>();
		try {
			ResultSet rs = JDBCUtils.executeQuery("select * from t_movies ");// 查询
			while (rs.next()) {
				Movies m = new Movies();
				m.setImg_url(rs.getString("img_url"));
				m.setLocal_img_url(rs.getString("local_img_url"));
				m.setId(rs.getLong("id"));
				ls.add(m);
			}

		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return ls;
	}

	public void setLocalImage(String path, Long id) {

		try {
			JDBCUtils.executeNonQuery("update t_movies set local_img_url =? where id =?", path, id);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}

	}

}
