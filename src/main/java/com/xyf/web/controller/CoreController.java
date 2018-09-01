package com.xyf.web.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.xuyuanfeng.utlis.AjaxResult;
import com.xuyuanfeng.utlis.CommonUtils;
import com.xuyuanfeng.utlis.DownloadImage;
import com.xuyuanfeng.utlis.RecordUtils;
import com.xuyuanfeng.utlis.RedisUtils;
import com.xyf.dao.MagnetDao;
import com.xyf.dao.MovieDao;
import com.xyf.pojo.HotKeys;
import com.xyf.pojo.Magnet;
import com.xyf.pojo.Movies;
import com.xyf.service.ElasticSearchRestFullService;

@Controller
@RequestMapping("")
public class CoreController {

	@Autowired
	private ElasticSearchRestFullService restService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView index() {
		ModelAndView modelAndView = new ModelAndView("index");
		List<HotKeys> lsh=RedisUtils.getHotKeyList();//获取热搜字段
		List<HotKeys> rank=RedisUtils.getHotRank();//获取排行
		modelAndView.addObject("lsh",lsh);
		modelAndView.addObject("rank",rank);
		return modelAndView;
	}
	@RequestMapping(value = "/search.do", method = RequestMethod.GET)
	public ModelAndView search(String text,HttpServletRequest req) {
		if ( CommonUtils.isEmpty(text) ) {
			return new ModelAndView("500");
		}
		RecordUtils.record(req, text);
		List<HotKeys> lsh=RedisUtils.getHotKeyList();//获取热搜字段
		List<HotKeys> rank=RedisUtils.getHotRank();//获取排行
		ModelAndView modelAndView = new ModelAndView("index");
		Map<String, Object> msg=restService.search(text, 1, "moviesdb");
		modelAndView.addObject("msg",msg);
		modelAndView.addObject("lsh",lsh);
		modelAndView.addObject("rank",rank);
		return modelAndView;
	}
	@RequestMapping(value = "/pageSearch.do", method = RequestMethod.GET)
	public ModelAndView search(String text,Long cur,HttpServletRequest req) 
	{
		if (CommonUtils.isEmpty(cur) || CommonUtils.isEmpty(text)) {
			return new ModelAndView("500");
		}
		RecordUtils.record(req, text);
		List<HotKeys> lsh=RedisUtils.getHotKeyList();//获取热搜字段
		List<HotKeys> rank=RedisUtils.getHotRank();//获取排行
		ModelAndView modelAndView = new ModelAndView("index");
		int current=cur.intValue();
		Map<String, Object> msg=restService.search(text, current, "moviesdb");
		modelAndView.addObject("msg",msg);
		modelAndView.addObject("lsh",lsh);
		modelAndView.addObject("rank",rank);
		return modelAndView;
	}
	/**
	 * ok 创建所有索引 删除整个库 管理
	 */
	
	@RequestMapping("/deleteAll.do")
	public ModelAndView deleteAll() {

		restService.deleteIndex("xuanfengsearch");
		ModelAndView modelAndView = new ModelAndView("Success");
		return modelAndView;
	}
	/**
	 * 创建
	 */
	@RequestMapping(value = "/createAll.do", method = RequestMethod.GET)
	public ModelAndView create() {
		ModelAndView modelAndView = new ModelAndView("success");
		restService.createIndex("moviesdb");
		return modelAndView;
	}
	/**
	 * //將圖片下載
	 */
	@RequestMapping("/download.do")
	public ModelAndView download() {
		ModelAndView modelAndView = new ModelAndView("success");
		DownloadImage.Download();
		return modelAndView;
	}
	/**
	 * 根据传入的id 去mysql moviedb中读取资料的详细细节
	 * @param id
	 * @return
	 */
	@RequestMapping("/get.do")
	public ModelAndView getSource(Long id) {
		ModelAndView modelAndView = new ModelAndView("source");
		if (CommonUtils.isEmpty(id)) {
			return new ModelAndView("500");
		}
		MovieDao md=new MovieDao();
        Movies m=md.getOne(id);
        if (m==null) {
			return new ModelAndView("500");
		}
        MagnetDao mgd=new MagnetDao();
        List<Magnet> lsm=mgd.getAll(id);
        //獲取當前磁力鏈接所有的id
        
        modelAndView.addObject("lsm",lsm);      
        modelAndView.addObject("movie",m);      
		return modelAndView;
	}
/**
 * 系统启动后需要先设置热搜 否则无法启动
 * @return
 */
	@RequestMapping("/setHotKey.do")
	public ModelAndView setHotKey() {
		ModelAndView modelAndView = new ModelAndView("success");
		RedisUtils.setHotKeyList();//设置热搜  
		RedisUtils.setHotRank();//设置排行榜
		//设置热度排行榜
		return modelAndView;
	}
	@RequestMapping("/setPriase.do")
	public @ResponseBody AjaxResult setPriase(String id) {
		
		RedisUtils.setPriase(id);
		String count=RedisUtils.getValue(id);
		//設置完成之後需要更新字段
		return AjaxResult.successInstance(count);

	
	}
	
	@RequestMapping("/test.do")
	public ModelAndView test() {
		ModelAndView modelAndView = new ModelAndView("test");
		return modelAndView;
	}
	
	
}
