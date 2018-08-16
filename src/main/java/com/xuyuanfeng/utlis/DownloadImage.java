package com.xuyuanfeng.utlis;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.UUID;
import com.xyf.dao.MovieDao;
import com.xyf.pojo.Movies;

public class DownloadImage {

	public String download(String url, String  name) {
		InputStream in = null;
		FileOutputStream outputstream = null;
		try {
			URL url1 = new URL(url);// 使用java.net.URL
			URLConnection connection;
			connection = url1.openConnection();
			connection.setRequestProperty("User-Agent",
					"Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");
			in = connection.getInputStream();// 获取输入流
			outputstream = new FileOutputStream("c://BT_Movies_Picture//"
					+ name+ ".jpg");
			IOUtils.copy(in, outputstream);
			outputstream.close();
			System.out.println(url);
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			IOUtils.closeQuietly(outputstream);
			try {
				if (in != null) {
					in.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return "c:/BT_Movies_Picture/" + name + ".jpg";
	}
	public static void Download() {

		MovieDao md = new MovieDao();
		List<Movies> lsm = md.getAll();
		for (Movies m : lsm) {
			DownloadImage downLoad = new DownloadImage();
			String name=UUID.randomUUID().toString();
			if (CommonUtils.isEmpty(m.getImg_url())) {
				continue;
			}
			String localpath=downLoad.download(m.getImg_url(), name);
			if(!CommonUtils.isEmpty(localpath)&&CommonUtils.isEmpty(m.getLocal_img_url()))
			{
			md.setLocalImage(localpath, m.getId());
			}
		}
	}

}
