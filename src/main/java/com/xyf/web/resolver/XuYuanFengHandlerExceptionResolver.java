package com.xyf.web.resolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

@Component
public class XuYuanFengHandlerExceptionResolver implements HandlerExceptionResolver {
	private static final Logger logger = LogManager.getLogger(XuYuanFengHandlerExceptionResolver.class);

	// 错误配置
	@Override
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception ex) {

		logger.error("服务器出错", ex);
		return new ModelAndView("500");
	}
}
