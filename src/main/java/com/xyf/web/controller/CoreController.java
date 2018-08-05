package com.xyf.web.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.rupeng.utlis.CommonUtils;
import com.xyf.service.ElasticSearchRestFullService;

@Controller
@RequestMapping("")
public class CoreController {

	@Autowired
	private ElasticSearchRestFullService restService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView index() {
		ModelAndView modelAndView = new ModelAndView("index");
		return modelAndView;
	}
	@RequestMapping(value = "/search.do", method = RequestMethod.GET)
	public ModelAndView search(String text) {
		if ( CommonUtils.isEmpty(text) ) {
			return new ModelAndView("500");
		}
		ModelAndView modelAndView = new ModelAndView("index");
		Map<String, Object> msg=restService.search(text, 1, "moviesdb");
		System.out.println(msg.toString());
		modelAndView.addObject("msg",msg);
		return modelAndView;
	}
	@RequestMapping(value = "/pageSearch.do", method = RequestMethod.GET)
	public ModelAndView search(String text,Long cur) 
	{
		if (CommonUtils.isEmpty(cur) || CommonUtils.isEmpty(text)) {
			return new ModelAndView("500");
		}
		ModelAndView modelAndView = new ModelAndView("index");
		int current=cur.intValue();
		Map<String, Object> msg=restService.search(text, current, "moviesdb");
		System.out.println(msg.toString());
		modelAndView.addObject("msg",msg);
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
	 * ok 创建所有索引 删除整个库 管理
	 */
	@RequestMapping("/download.do")
	public ModelAndView download() {

		ModelAndView modelAndView = new ModelAndView("download");
		return modelAndView;
	}
	
	

}
