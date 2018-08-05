function initFastSection() {
	function e() {
		if ("desktop" == deviceType) {
			var e = window.innerHeight - 210,
				t = $(".J_fastSectionList .wrap").height();
			!$(".J_fastSectionList .wrap").data("origin") && $(".J_fastSectionList .wrap").data("origin", t), $(".J_fastSectionList .wrap").data("origin") >= e && $(".J_fastSectionList .wrap").height(e), $(".J_fastSection").trigger("sticky_kit:detach"), $(".J_fastSection").stick_in_parent({
				parent: ".main-section"
			}), $(window).trigger("scroll")
		} else $(".J_fastSectionList .wrap").height("auto"), $(".J_fastSection").trigger("sticky_kit:detach");
		$(".J_fastSectionList .wrap").perfectScrollbar("update")
	}

	function t() {
		var e = window.location.hash;
		(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) && -1 != e.lastIndexOf("sideActiveTab=fast") ? $(".header-fast-news").addClass("show") : $(".header-fast-news").removeClass("show")
	}

	function n(e) {
		countedStaticsItem.indexOf(e) > -1 || (countedStaticsItem.push(e), window._hmt && _hmt.push(["_trackPageview", "/clipped/" + e]), $.post(KR_CONFIG_OBJECT.trackClipPage.replace("{id}", e), {
			id: e
		}))
	}

	function i() {
		$(".J_fastSectionList .wrap").bind("scroll", function() {
			if (!$(".next-panel").is(":visible")) {
				var e = ($(this).scrollTop(), $(this).find(".panel:visible .load-more")),
					t = e.offset().top - $(this).offset().top - $(this).height();
				if (0 > t) {
					var n = e,
						i = n.attr("href");
					if (n.attr("href", "javascript:void(0)"), n.hasClass("no-data")) return;
					if (n.hasClass("loading")) return;
					if (n.addClass("loading"), n.parents().is(".feed")) {
						if (a > r.data.totalPages - 1 || r.data.totalCount < 30) return void $(".J_fastSectionList .feed").find(".load-more").removeClass("loading").addClass("no-data");
						a++, $.ajax({
							url: KR_CONFIG_OBJECT.fetchFeed,
							data: {
								page: a,
								pageSize: 30
							},
							xhrFields: {
								withCredentials: !0
							}
						}).done(function(e) {
							r = e, setTimeout(function() {
								if (a == r.data.totalPages) var e = '{@each data.data as item, k}<section class="feed" data-stat-click="neirong.click"><header><a href="${item.innerImgLink}" class="figure"><img src="${item.mainImgUrl}" alt="${item|data_img_alt}" width="25" onerror="nofind()"></a><a href="${item.innerImgLink}" class="name">${item.mainName}</a><i></i><span>${item.feedTime}</span></header><div class="penel-body"><p>$${item.content}</p></div></section>{@/each}<a href="#" class="load-more no-data"></a>';
								else var e = '{@each data.data as item, k}<section class="feed" data-stat-click="neirong.click"><header><a href="${item.innerImgLink}" class="figure"><img src="${item.mainImgUrl}" alt="${item|data_img_alt}" width="25" onerror="nofind()"></a><a href="${item.innerImgLink}" class="name">${item.mainName}</a><i></i><span>${item.feedTime}</span></header><div class="penel-body"><p>$${item.content}</p></div></section>{@/each}<a href="#" class="load-more"></a>';
								var t = function(e) {
									switch (e.miniFeedInnerImg) {
										case "COMPANY":
											return "\u521b\u4e1a\u516c\u53f8" + e.mainName;
										case "USER":
											return "\u521b\u4e1a\u8005" + e.mainName;
										default:
											return e.mainName
									}
								};
								juicer.register("data_img_alt", t), juicer.set("cache", !0), juicer.set("errorhandling", !1), juicer.set("strip", !0), juicer.set("detection", !1);
								var i = juicer(e),
									o = i.render(r);
								$(".feed-panel").append(o), n.remove(), $(".J_fastSectionList .wrap").perfectScrollbar("update")
							}, 0)
						})
					} else $.get(i, function(e) {
						setTimeout(function() {
							n.parent();
							$(e).insertAfter(n), n.remove(), $(".timeago").length >= 1 && $(".timeago").timeago(), $(".J_fastSectionList .wrap").perfectScrollbar("update")
						}, 0)
					}, "html")
				}
			}
		}).delegate(".panel:visible .load-more", "click", function(e) {
			if (e.preventDefault(), "desktop" != deviceType) {
				var t = $(this),
					n = t.attr("href");
				if (t.attr("href", "javascript:void(0)"), !t.hasClass("no-data") && !t.hasClass("loading"))
					if (t.addClass("loading"), t.parents().is(".feed")) {
						if (a > r.data.totalPages - 1 || r.data.totalCount < 30) return void $(".J_fastSectionList .feed").find(".load-more").removeClass("loading").addClass("no-data");
						a++, $.ajax({
							url: KR_CONFIG_OBJECT.fetchFeed,
							data: {
								page: a,
								pageSize: 30
							},
							xhrFields: {
								withCredentials: !0
							}
						}).done(function(e) {
							r = e, setTimeout(function() {
								if (a == r.data.totalPages) var e = '{@each data.data as item, k}<section class="feed" data-stat-click="neirong.click"><header><a href="${item.innerImgLink}" class="figure"><img src="${item.mainImgUrl}" alt="${item|data_img_alt}" width="25" onerror="nofind()"></a><a href="${item.innerImgLink}" class="name">${item.mainName}</a><i></i><span>${item.feedTime}</span></header><div class="penel-body"><p>$${item.content}</p></div></section>{@/each}<a href="#" class="load-more no-data"></a>';
								else var e = '{@each data.data as item, k}<section class="feed" data-stat-click="neirong.click"><header><a href="${item.innerImgLink}" class="figure"><img src="${item.mainImgUrl}" alt="${item|data_img_alt}" width="25" onerror="nofind()"></a><a href="${item.innerImgLink}" class="name">${item.mainName}</a><i></i><span>${item.feedTime}</span></header><div class="penel-body"><p>$${item.content}</p></div></section>{@/each}<a href="#" class="load-more"></a>';
								var n = function(e) {
									switch (e.miniFeedInnerImg) {
										case "COMPANY":
											return "\u521b\u4e1a\u516c\u53f8" + e.mainName;
										case "USER":
											return "\u521b\u4e1a\u8005" + e.mainName;
										default:
											return e.mainName
									}
								};
								juicer.register("data_img_alt", n), juicer.set("cache", !0), juicer.set("errorhandling", !1), juicer.set("strip", !0), juicer.set("detection", !1);
								var i = juicer(e),
									o = i.render(r);
								$(".feed-panel").append(o), t.remove(), $(".J_fastSectionList .wrap").perfectScrollbar("update")
							}, 0)
						})
					} else $.get(n, function(e) {
						setTimeout(function() {
							t.parent();
							$(e).insertAfter(t), t.remove(), $(".timeago").length >= 1 && $(".timeago").timeago(), $(".J_fastSectionList .wrap").perfectScrollbar("update")
						}, 0)
					}, "html")
			}
		})
	}
	$(".J_fastSectionList .wrap").perfectScrollbar({
		wheelPropagation: !0
	}), e(), $(window).resize(e), $(".J_fastSectionList .tabs a").each(function(t) {
		$(this).click(function(n) {
			if (n.preventDefault(), $(this).addClass("active").siblings().removeClass("active"), $(".fast-section .list .wrap").scrollTop(0), $(".J_fastSectionList .panel").eq(t).show().siblings().hide(), $(".J_fastSectionList .wrap").perfectScrollbar("update"), e(), $(window).trigger("resize"), $(this).attr("name")) {
				"fast" == $(this).attr("name") ? (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) && $(".header-fast-news").addClass("show") : $(".header-fast-news").removeClass("show");
				var i = ("sideActiveTab=" + $(this).attr("name"), new RegExp("(&|\\?)sideActiveTab=.+(&|$)")),
					o = location.hash.replace(i, "");
				location.hash = o + (o.indexOf("?") > -1 ? "&sideActiveTab=" + $(this).attr("name") : "?sideActiveTab=" + $(this).attr("name"))
			}
		})
	}), t(), $(window).resize(function() {
		t()
	});
	var o = function() {
		$(this).hasClass("active") ? $(this).removeClass("active") : ($(this).data("id") && n($(this).data("id")), $(this).addClass("active").siblings().removeClass("active")), $(".J_fastSectionList .wrap").perfectScrollbar("update"), $(this).parents().is(".fast-news-panel") && $(".fast-news-panel").find(".weixin").removeClass("ac").find(".panel-weixin").remove()
	};
	$("body").delegate(".J_fastSectionList .fast-news-panel section", "click", o), $("body").on("click", ".J_fastSection .weibo", function(e) {
		e.stopPropagation()
	}), $("body").on("click", ".J_fastSection .weixin", function(e) {
		e.preventDefault(), e.stopPropagation();
		var t = $(this).data("url"),
			n = '<div class="panel-weixin"><section class="weixin-section"><p><img alt="533066" src="http://s.jiathis.com/qrcode.php?url=' + t + '"></p></section><h3>\u6253\u5f00\u5fae\u4fe1\u201c\u626b\u4e00\u626b\u201d\uff0c\u6253\u5f00\u7f51\u9875\u540e\u70b9\u51fb\u5c4f\u5e55\u53f3\u4e0a\u89d2\u5206\u4eab\u6309\u94ae</h3></div>';
		if ($(this).toggleClass("ac"), $(this).hasClass("ac")) {
			if ($(this).append(n), $(".fast-news-panel").is(":visible") && 0 == $(this).parents(".active").index()) {
				var i = $(this).find(".panel-weixin").outerHeight(),
					o = $(this).parents(".share").offset().top - $(this).parents(".fast-news-panel").offset().top - 10;
				i > o ? $(this).parents(".share").addClass("bottom") : $(this).parents(".share").removeClass("bottom")
			}
		} else $(this).find(".panel-weixin").remove()
	}), window.countedStaticsItem = window.countedStaticsItem || [], $(".J_fastSectionList .wrap").bind("scroll", function() {
		if ($('.J_fastSectionNavBar a[name="product"]').hasClass("active")) {
			var e = $(this);
			$(this).find(".panel:visible section").each(function() {
				var t = $(this),
					i = t.offset().top - e.offset().top - e.height() + t.height() / 2;
				0 > i && t.data("id") && n(t.data("id"))
			})
		}
	});
	var r = {},
		a = 1;
	i();
	var s = location.hash.match(/\?(.+)$/),
		l = {};
	s && (s[1].split("&").forEach(function(e) {
		if (e.split) {
			var t = e.split("=");
			2 == t.length && (l[t[0]] = t[1])
		}
	}), l.sideActiveTab && setTimeout(function() {
		$('.J_mobileNav a[name="' + l.sideActiveTab + '"]').trigger("click")
	}, 0)), $.ajax({
		url: KR_CONFIG_OBJECT.fetchFeed,
		data: {
			page: a,
			pageSize: 30
		},
		xhrFields: {
			withCredentials: !0
		}
	}).done(function(e) {
		r = e;
		var t = '<script>function nofind(){var img = event.srcElement;img.src="https://krplus-pic.b0.upaiyun.com/default_avatar.png";img.onerror=null;}</script>{@each data.data as item, k}<section class="feed" data-stat-click="neirong.click"><header><a href="${item.innerImgLink}" class="figure"><img src="${item.mainImgUrl}" alt="${item|data_img_alt}" width="25" onerror="nofind()"></a><a href="${item.innerImgLink}" class="name">${item.mainName}</a><i></i><span>${item.feedTime}</span></header><div class="penel-body"><p>$${item.content}</p></div></section>{@/each}',
			n = function(e) {
				switch (e.miniFeedInnerImg) {
					case "COMPANY":
						return "\u521b\u4e1a\u516c\u53f8" + e.mainName;
					case "USER":
						return "\u521b\u4e1a\u8005" + e.mainName;
					default:
						return e.mainName
				}
			};
		juicer.register("data_img_alt", n), juicer.set("cache", !0), juicer.set("errorhandling", !1), juicer.set("strip", !0), juicer.set("detection", !1);
		var i = juicer(t),
			o = i.render(r);
		$(".feed-inner").append(o), $(".J_fastSectionList .wrap").perfectScrollbar("update")
	});
	var c = {};
	$.get(KR_CONFIG_OBJECT.fetchNext, {
		per: KR_CONFIG_OBJECT.nextPageSize
	}).done(function(e) {
		c.data = e;
		var t = '{@each data as item, k}<section class="next" data-id="22" data-stat-click="neirong.click"><a href="${item.url}" target="_blank"><div class="next-box clearfix"><div class="tags"><span></span><i>${item.score}</i></div><div class="con"><div class="clearfix"><h3>${item.title}</h3><time class="timeago" datetime="${item.published_at}"></time></div><p>$${item.summary}</p></div></div></a></section>{@/each}';
		juicer.set("cache", !0), juicer.set("errorhandling", !1), juicer.set("strip", !0), juicer.set("detection", !1);
		var n = juicer(t),
			i = n.render(c);
		$(".next-panel .next-inner").append(i), $(".next-panel time.timeago").timeago(), $(".J_fastSectionList .wrap").perfectScrollbar("update")
	})
}

function initMobileNav(e) {
	$(".J_mobileNav a").each(function(t) {
		$(this).click(function(n) {
			n.preventDefault(), $(this).addClass("active").siblings().removeClass("active");
			var i = $(".J_fastSection").add(e);
			switch (i.addClass("mobile-hide"), t) {
				case 0:
					$(e).removeClass("mobile-hide");
					var o = $(".J_mobileNav a.tab").eq(0).attr("href");
					/^[^(#|javascript)]/.test(o) && (window.location.href = o);
					break;
				case 1:
					$(".J_fastSection").removeClass("mobile-hide"), $(".J_fastSectionList .tabs a").eq(0).trigger("click");
					break;
				case 2:
					$(".J_fastSection").removeClass("mobile-hide"), $(".J_fastSectionList .tabs a").eq(1).trigger("click");
					break;
				case 3:
					$(".J_fastSection").removeClass("mobile-hide"), $(".J_fastSectionList .tabs a").eq(2).trigger("click")
			}
		})
	})
}

function initLazyLoad() {
	function e() {
		var e = $(window).scrollTop() + $(window).height();
		$("[data-lazyload]").each(function() {
			var t = $(this).offset().top,
				n = $(this);
			if ($(this).data("lazyload") && (n.addClass("before-fade-in"), e > t && $(this).data("lazyload"))) {
				var i = $(this).data("lazyload"),
					o = new Image;
				1 == n.data("fitMobile") && "desktop" != deviceType && (i = i.replace(/\!.+$|$/, "!appfeed2x")), n.data("lazyload", null).removeAttr("data-lazyload"), o.onload = function() {
					"img" == n[0].tagName.toLowerCase() ? n[0].src = i : n.css({
						"background-image": "url(" + i + ")"
					}), n.addClass("after-fade-in")
				}, o.src = i
			}
		})
	}
	$(document).ready(function() {
		e(), $(window).scroll(function() {
			e()
		})
	})
}
window.KR_CONFIG_OBJECT = {
		fetchFeed: "//rong.36kr.com/api/hostsite/fetchFeeds",
		trackClipPage: "/clipped/{id}/touch_view?authenticity_token=" + window._token,
		trackClipPageList: "/clipped/touch_views?authenticity_token=" + window._token,
		fetchNext: "//next.36kr.com/posts/latest.json",
		nextPageSize: 20,
		crowdFunding: "//rong.36kr.com/api/p/donate/qr",
		getSsoid: "//36kr.com/asynces/posts/author_info",
		getRongHost: "//rong.36kr.com/",
		getZhongChouHost: "//z.36kr.com/",
		defaultLogo: "https://krplus-pic.b0.upaiyun.com/default_logo.png",
		defaultAvatar: "https://krplus-pic.b0.upaiyun.com/default_avatar.png"
	}, ! function(e, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function(e, t) {
		function n(e) {
			var t = "length" in e && e.length,
				n = Z.type(e);
			return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
		}

		function i(e, t, n) {
			if (Z.isFunction(t)) return Z.grep(e, function(e, i) {
				return !!t.call(e, i, e) !== n
			});
			if (t.nodeType) return Z.grep(e, function(e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (st.test(t)) return Z.filter(t, e, n);
				t = Z.filter(t, e)
			}
			return Z.grep(e, function(e) {
				return q.call(t, e) >= 0 !== n
			})
		}

		function o(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function r(e) {
			var t = ht[e] = {};
			return Z.each(e.match(pt) || [], function(e, n) {
				t[n] = !0
			}), t
		}

		function a() {
			K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
		}

		function s() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function() {
					return {}
				}
			}), this.expando = Z.expando + s.uid++
		}

		function l(e, t, n) {
			var i;
			if (void 0 === n && 1 === e.nodeType)
				if (i = "data-" + t.replace(wt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
					} catch (o) {}
					yt.set(e, t, n)
				} else n = void 0;
			return n
		}

		function c() {
			return !0
		}

		function d() {
			return !1
		}

		function u() {
			try {
				return K.activeElement
			} catch (e) {}
		}

		function f(e, t) {
			return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function p(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function h(e) {
			var t = Pt.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function m(e, t) {
			for (var n = 0, i = e.length; i > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
		}

		function g(e, t) {
			var n, i, o, r, a, s, l, c;
			if (1 === t.nodeType) {
				if (vt.hasData(e) && (r = vt.access(e), a = vt.set(t, r), c = r.events)) {
					delete a.handle, a.events = {};
					for (o in c)
						for (n = 0, i = c[o].length; i > n; n++) Z.event.add(t, o, c[o][n])
				}
				yt.hasData(e) && (s = yt.access(e), l = Z.extend({}, s), yt.set(t, l))
			}
		}

		function v(e, t) {
			var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
			return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
		}

		function y(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && St.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}

		function b(t, n) {
			var i, o = Z(n.createElement(t)).appendTo(n.body),
				r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : Z.css(o[0], "display");
			return o.detach(), r
		}

		function w(e) {
			var t = K,
				n = Ht[e];
			return n || (n = b(e, t), "none" !== n && n || (Bt = (Bt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Bt[0].contentDocument, t.write(), t.close(), n = b(e, t), Bt.detach()), Ht[e] = n), n
		}

		function x(e, t, n) {
			var i, o, r, a, s = e.style;
			return n = n || zt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ft.test(a) && Wt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
		}

		function _(e, t) {
			return {
				get: function() {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function C(e, t) {
			if (t in e) return t;
			for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Gt.length; o--;)
				if (t = Gt[o] + n, t in e) return t;
			return i
		}

		function S(e, t, n) {
			var i = Xt.exec(t);
			return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
		}

		function T(e, t, n, i, o) {
			for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += Z.css(e, n + _t[r], !0, o)), i ? ("content" === n && (a -= Z.css(e, "padding" + _t[r], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + _t[r] + "Width", !0, o))) : (a += Z.css(e, "padding" + _t[r], !0, o), "padding" !== n && (a += Z.css(e, "border" + _t[r] + "Width", !0, o)));
			return a
		}

		function k(e, t, n) {
			var i = !0,
				o = "width" === t ? e.offsetWidth : e.offsetHeight,
				r = zt(e),
				a = "border-box" === Z.css(e, "boxSizing", !1, r);
			if (0 >= o || null == o) {
				if (o = x(e, t, r), (0 > o || null == o) && (o = e.style[t]), Ft.test(o)) return o;
				i = a && (V.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
			}
			return o + T(e, t, n || (a ? "border" : "content"), i, r) + "px"
		}

		function E(e, t) {
			for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = vt.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ct(i) && (r[a] = vt.access(i, "olddisplay", w(i.nodeName)))) : (o = Ct(i), "none" === n && o || vt.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
			for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
			return e
		}

		function I(e, t, n, i, o) {
			return new I.prototype.init(e, t, n, i, o)
		}

		function A() {
			return setTimeout(function() {
				Vt = void 0
			}), Vt = Z.now()
		}

		function N(e, t) {
			var n, i = 0,
				o = {
					height: e
				};
			for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = _t[i], o["margin" + n] = o["padding" + n] = e;
			return t && (o.opacity = o.width = e), o
		}

		function $(e, t, n) {
			for (var i, o = (nn[t] || []).concat(nn["*"]), r = 0, a = o.length; a > r; r++)
				if (i = o[r].call(n, t, e)) return i
		}

		function O(e, t, n) {
			var i, o, r, a, s, l, c, d, u = this,
				f = {},
				p = e.style,
				h = e.nodeType && Ct(e),
				m = vt.get(e, "fxshow");
			n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
				s.unqueued || l()
			}), s.unqueued++, u.always(function() {
				u.always(function() {
					s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Z.css(e, "display"), d = "none" === c ? vt.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === d && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (i in t)
				if (o = t[i], Qt.exec(o)) {
					if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
						if ("show" !== o || !m || void 0 === m[i]) continue;
						h = !0
					}
					f[i] = m && m[i] || Z.style(e, i)
				} else c = void 0;
			if (Z.isEmptyObject(f)) "inline" === ("none" === c ? w(e.nodeName) : c) && (p.display = c);
			else {
				m ? "hidden" in m && (h = m.hidden) : m = vt.access(e, "fxshow", {}), r && (m.hidden = !h), h ? Z(e).show() : u.done(function() {
					Z(e).hide()
				}), u.done(function() {
					var t;
					vt.remove(e, "fxshow");
					for (t in f) Z.style(e, t, f[t])
				});
				for (i in f) a = $(h ? m[i] : 0, i, u), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
			}
		}

		function R(e, t) {
			var n, i, o, r, a;
			for (n in e)
				if (i = Z.camelCase(n), o = t[i], r = e[n], Z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = Z.cssHooks[i], a && "expand" in a) {
					r = a.expand(r), delete e[i];
					for (n in r) n in e || (e[n] = r[n], t[n] = o)
				} else t[i] = o
		}

		function L(e, t, n) {
			var i, o, r = 0,
				a = tn.length,
				s = Z.Deferred().always(function() {
					delete l.elem
				}),
				l = function() {
					if (o) return !1;
					for (var t = Vt || A(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
					return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
				},
				c = s.promise({
					elem: e,
					props: Z.extend({}, t),
					opts: Z.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: Vt || A(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var i = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
						return c.tweens.push(i), i
					},
					stop: function(t) {
						var n = 0,
							i = t ? c.tweens.length : 0;
						if (o) return this;
						for (o = !0; i > n; n++) c.tweens[n].run(1);
						return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
					}
				}),
				d = c.props;
			for (R(d, c.opts.specialEasing); a > r; r++)
				if (i = tn[r].call(c, e, d, c.opts)) return i;
			return Z.map(d, $, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(l, {
				elem: e,
				anim: c,
				queue: c.opts.queue
			})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
		}

		function D(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var i, o = 0,
					r = t.toLowerCase().match(pt) || [];
				if (Z.isFunction(n))
					for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		function P(e, t, n, i) {
			function o(s) {
				var l;
				return r[s] = !0, Z.each(e[s] || [], function(e, s) {
					var c = s(t, n, i);
					return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
				}), l
			}
			var r = {},
				a = e === wn;
			return o(t.dataTypes[0]) || !r["*"] && o("*")
		}

		function M(e, t) {
			var n, i, o = Z.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
			return i && Z.extend(!0, e, i), e
		}

		function j(e, t, n) {
			for (var i, o, r, a, s = e.contents, l = e.dataTypes;
				"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i)
				for (o in s)
					if (s[o] && s[o].test(i)) {
						l.unshift(o);
						break
					}
			if (l[0] in n) r = l[0];
			else {
				for (o in n) {
					if (!l[0] || e.converters[o + " " + l[0]]) {
						r = o;
						break
					}
					a || (a = o)
				}
				r = r || a
			}
			return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
		}

		function B(e, t, n, i) {
			var o, r, a, s, l, c = {},
				d = e.dataTypes.slice();
			if (d[1])
				for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
			for (r = d.shift(); r;)
				if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
					if ("*" === r) r = l;
					else if ("*" !== l && l !== r) {
				if (a = c[l + " " + r] || c["* " + r], !a)
					for (o in c)
						if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
							a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], d.unshift(s[1]));
							break
						}
				if (a !== !0)
					if (a && e["throws"]) t = a(t);
					else try {
						t = a(t)
					} catch (u) {
						return {
							state: "parsererror",
							error: a ? u : "No conversion from " + l + " to " + r
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function H(e, t, n, i) {
			var o;
			if (Z.isArray(t)) Z.each(t, function(t, o) {
				n || Tn.test(e) ? i(e, o) : H(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
			});
			else if (n || "object" !== Z.type(t)) i(e, t);
			else
				for (o in t) H(e + "[" + o + "]", t[o], n, i)
		}

		function W(e) {
			return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
		}
		var F = [],
			z = F.slice,
			Y = F.concat,
			X = F.push,
			q = F.indexOf,
			U = {},
			J = U.toString,
			G = U.hasOwnProperty,
			V = {},
			K = e.document,
			Q = "2.1.4",
			Z = function(e, t) {
				return new Z.fn.init(e, t)
			},
			et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			tt = /^-ms-/,
			nt = /-([\da-z])/gi,
			it = function(e, t) {
				return t.toUpperCase()
			};
		Z.fn = Z.prototype = {
			jquery: Q,
			constructor: Z,
			selector: "",
			length: 0,
			toArray: function() {
				return z.call(this)
			},
			get: function(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
			},
			pushStack: function(e) {
				var t = Z.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return Z.each(this, e, t)
			},
			map: function(e) {
				return this.pushStack(Z.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(z.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: X,
			sort: F.sort,
			splice: F.splice
		}, Z.extend = Z.fn.extend = function() {
			var e, t, n, i, o, r, a = arguments[0] || {},
				s = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
				if (null != (e = arguments[s]))
					for (t in e) n = a[t], i = e[t], a !== i && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, r, i)) : void 0 !== i && (a[t] = i));
			return a
		}, Z.extend({
			expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === Z.type(e)
			},
			isArray: Array.isArray,
			isWindow: function(e) {
				return null != e && e === e.window
			},
			isNumeric: function(e) {
				return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isPlainObject: function(e) {
				return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[J.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				var t, n = eval;
				e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function(e) {
				return e.replace(tt, "ms-").replace(nt, it)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, i) {
				var o, r = 0,
					a = e.length,
					s = n(e);
				if (i) {
					if (s)
						for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
					else
						for (r in e)
							if (o = t.apply(e[r], i), o === !1) break
				} else if (s)
					for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
				else
					for (r in e)
						if (o = t.call(e[r], r, e[r]), o === !1) break; return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(et, "")
			},
			makeArray: function(e, t) {
				var i = t || [];
				return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
			},
			inArray: function(e, t, n) {
				return null == t ? -1 : q.call(t, e, n)
			},
			merge: function(e, t) {
				for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
				return e.length = o, e
			},
			grep: function(e, t, n) {
				for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
				return o
			},
			map: function(e, t, i) {
				var o, r = 0,
					a = e.length,
					s = n(e),
					l = [];
				if (s)
					for (; a > r; r++) o = t(e[r], r, i), null != o && l.push(o);
				else
					for (r in e) o = t(e[r], r, i), null != o && l.push(o);
				return Y.apply([], l)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, i, o;
				return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = z.call(arguments, 2), o = function() {
					return e.apply(t || this, i.concat(z.call(arguments)))
				}, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
			},
			now: Date.now,
			support: V
		}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			U["[object " + t + "]"] = t.toLowerCase()
		});
		var ot = function(e) {
			function t(e, t, n, i) {
				var o, r, a, s, l, c, u, p, h, m;
				if ((t ? t.ownerDocument || t : H) !== O && $(t), t = t || O, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
				if (!i && L) {
					if (11 !== s && (o = yt.exec(e)))
						if (a = o[1]) {
							if (9 === s) {
								if (r = t.getElementById(a), !r || !r.parentNode) return n;
								if (r.id === a) return n.push(r), n
							} else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && j(t, r) && r.id === a) return n.push(r), n
						} else {
							if (o[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
							if ((a = o[3]) && x.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
						}
					if (x.qsa && (!D || !D.test(e))) {
						if (p = u = B, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (c = T(e), (u = t.getAttribute("id")) ? p = u.replace(wt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
							h = bt.test(e) && d(t.parentNode) || t, m = c.join(",")
						}
						if (m) try {
							return Q.apply(n, h.querySelectorAll(m)), n
						} catch (g) {} finally {
							u || t.removeAttribute("id")
						}
					}
				}
				return E(e.replace(lt, "$1"), t, n, i)
			}

			function n() {
				function e(n, i) {
					return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
				}
				var t = [];
				return e
			}

			function i(e) {
				return e[B] = !0, e
			}

			function o(e) {
				var t = O.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function r(e, t) {
				for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
			}

			function a(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function s(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function l(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function c(e) {
				return i(function(t) {
					return t = +t, i(function(n, i) {
						for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
					})
				})
			}

			function d(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function u() {}

			function f(e) {
				for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
				return i
			}

			function p(e, t, n) {
				var i = t.dir,
					o = n && "parentNode" === i,
					r = F++;
				return t.first ? function(t, n, r) {
					for (; t = t[i];)
						if (1 === t.nodeType || o) return e(t, n, r)
				} : function(t, n, a) {
					var s, l, c = [W, r];
					if (a) {
						for (; t = t[i];)
							if ((1 === t.nodeType || o) && e(t, n, a)) return !0
					} else
						for (; t = t[i];)
							if (1 === t.nodeType || o) {
								if (l = t[B] || (t[B] = {}), (s = l[i]) && s[0] === W && s[1] === r) return c[2] = s[2];
								if (l[i] = c, c[2] = e(t, n, a)) return !0
							}
				}
			}

			function h(e) {
				return e.length > 1 ? function(t, n, i) {
					for (var o = e.length; o--;)
						if (!e[o](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function m(e, n, i) {
				for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
				return i
			}

			function g(e, t, n, i, o) {
				for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
				return a
			}

			function v(e, t, n, o, r, a) {
				return o && !o[B] && (o = v(o)), r && !r[B] && (r = v(r, a)), i(function(i, a, s, l) {
					var c, d, u, f = [],
						p = [],
						h = a.length,
						v = i || m(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !i && t ? v : g(v, f, e, s, l),
						b = n ? r || (i ? e : h || o) ? [] : a : y;
					if (n && n(y, b, s, l), o)
						for (c = g(b, p), o(c, [], s, l), d = c.length; d--;)(u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
					if (i) {
						if (r || e) {
							if (r) {
								for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
								r(null, b = [], c, l)
							}
							for (d = b.length; d--;)(u = b[d]) && (c = r ? et(i, u) : f[d]) > -1 && (i[c] = !(a[c] = u))
						}
					} else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : Q.apply(a, b)
				})
			}

			function y(e) {
				for (var t, n, i, o = e.length, r = _.relative[e[0].type], a = r || _.relative[" "], s = r ? 1 : 0, l = p(function(e) {
						return e === t
					}, a, !0), c = p(function(e) {
						return et(t, e) > -1
					}, a, !0), d = [function(e, n, i) {
						var o = !r && (i || n !== I) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
						return t = null, o
					}]; o > s; s++)
					if (n = _.relative[e[s].type]) d = [p(h(d), n)];
					else {
						if (n = _.filter[e[s].type].apply(null, e[s].matches), n[B]) {
							for (i = ++s; o > i && !_.relative[e[i].type]; i++);
							return v(s > 1 && h(d), s > 1 && f(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && f(e))
						}
						d.push(n)
					}
				return h(d)
			}

			function b(e, n) {
				var o = n.length > 0,
					r = e.length > 0,
					a = function(i, a, s, l, c) {
						var d, u, f, p = 0,
							h = "0",
							m = i && [],
							v = [],
							y = I,
							b = i || r && _.find.TAG("*", c),
							w = W += null == y ? 1 : Math.random() || .1,
							x = b.length;
						for (c && (I = a !== O && a); h !== x && null != (d = b[h]); h++) {
							if (r && d) {
								for (u = 0; f = e[u++];)
									if (f(d, a, s)) {
										l.push(d);
										break
									}
								c && (W = w)
							}
							o && ((d = !f && d) && p--, i && m.push(d))
						}
						if (p += h, o && h !== p) {
							for (u = 0; f = n[u++];) f(m, v, a, s);
							if (i) {
								if (p > 0)
									for (; h--;) m[h] || v[h] || (v[h] = V.call(l));
								v = g(v)
							}
							Q.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
						}
						return c && (W = w, I = y), m
					};
				return o ? i(a) : a
			}
			var w, x, _, C, S, T, k, E, I, A, N, $, O, R, L, D, P, M, j, B = "sizzle" + 1 * new Date,
				H = e.document,
				W = 0,
				F = 0,
				z = n(),
				Y = n(),
				X = n(),
				q = function(e, t) {
					return e === t && (N = !0), 0
				},
				U = 1 << 31,
				J = {}.hasOwnProperty,
				G = [],
				V = G.pop,
				K = G.push,
				Q = G.push,
				Z = G.slice,
				et = function(e, t) {
					for (var n = 0, i = e.length; i > n; n++)
						if (e[n] === t) return n;
					return -1
				},
				tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				nt = "[\\x20\\t\\r\\n\\f]",
				it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ot = it.replace("w", "w#"),
				rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
				at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
				st = new RegExp(nt + "+", "g"),
				lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
				ct = new RegExp("^" + nt + "*," + nt + "*"),
				dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
				ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
				ft = new RegExp(at),
				pt = new RegExp("^" + ot + "$"),
				ht = {
					ID: new RegExp("^#(" + it + ")"),
					CLASS: new RegExp("^\\.(" + it + ")"),
					TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + rt),
					PSEUDO: new RegExp("^" + at),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + tt + ")$", "i"),
					needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
				},
				mt = /^(?:input|select|textarea|button)$/i,
				gt = /^h\d$/i,
				vt = /^[^{]+\{\s*\[native \w/,
				yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				bt = /[+~]/,
				wt = /'|\\/g,
				xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
				_t = function(e, t, n) {
					var i = "0x" + t - 65536;
					return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				Ct = function() {
					$()
				};
			try {
				Q.apply(G = Z.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
			} catch (St) {
				Q = {
					apply: G.length ? function(e, t) {
						K.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			x = t.support = {}, S = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, $ = t.setDocument = function(e) {
				var t, n, i = e ? e.ownerDocument || e : H;
				return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, R = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), L = !S(i), x.attributes = o(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), x.getElementsByTagName = o(function(e) {
					return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
				}), x.getElementsByClassName = vt.test(i.getElementsByClassName), x.getById = o(function(e) {
					return R.appendChild(e).id = B, !i.getElementsByName || !i.getElementsByName(B).length
				}), x.getById ? (_.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && L) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, _.filter.ID = function(e) {
					var t = e.replace(xt, _t);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete _.find.ID, _.filter.ID = function(e) {
					var t = e.replace(xt, _t);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), _.find.TAG = x.getElementsByTagName ? function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, i = [],
						o = 0,
						r = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = r[o++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return r
				}, _.find.CLASS = x.getElementsByClassName && function(e, t) {
					return L ? t.getElementsByClassName(e) : void 0
				}, P = [], D = [], (x.qsa = vt.test(i.querySelectorAll)) && (o(function(e) {
					R.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + B + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || D.push(".#.+[+~]")
				}), o(function(e) {
					var t = i.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
				})), (x.matchesSelector = vt.test(M = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && o(function(e) {
					x.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", at)
				}), D = D.length && new RegExp(D.join("|")), P = P.length && new RegExp(P.join("|")), t = vt.test(R.compareDocumentPosition), j = t || vt.test(R.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, q = t ? function(e, t) {
					if (e === t) return N = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && j(H, e) ? -1 : t === i || t.ownerDocument === H && j(H, t) ? 1 : A ? et(A, e) - et(A, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return N = !0, 0;
					var n, o = 0,
						r = e.parentNode,
						s = t.parentNode,
						l = [e],
						c = [t];
					if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : A ? et(A, e) - et(A, t) : 0;
					if (r === s) return a(e, t);
					for (n = e; n = n.parentNode;) l.unshift(n);
					for (n = t; n = n.parentNode;) c.unshift(n);
					for (; l[o] === c[o];) o++;
					return o ? a(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0
				}, i) : O
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if ((e.ownerDocument || e) !== O && $(e), n = n.replace(ut, "='$1']"), !(!x.matchesSelector || !L || P && P.test(n) || D && D.test(n))) try {
					var i = M.call(e, n);
					if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch (o) {}
				return t(n, O, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return (e.ownerDocument || e) !== O && $(e), j(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== O && $(e);
				var n = _.attrHandle[t.toLowerCase()],
					i = n && J.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
				return void 0 !== i ? i : x.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					o = 0;
				if (N = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(q), N) {
					for (; t = e[o++];) t === e[o] && (i = n.push(o));
					for (; i--;) e.splice(n[i], 1)
				}
				return A = null, e
			}, C = t.getText = function(e) {
				var t, n = "",
					i = 0,
					o = e.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
					} else if (3 === o || 4 === o) return e.nodeValue
				} else
					for (; t = e[i++];) n += C(t);
				return n
			}, _ = t.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: ht,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(xt, _t), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, _t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(xt, _t).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = z[e + " "];
						return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, i) {
						return function(o) {
							var r = t.attr(o, e);
							return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, i, o) {
						var r = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === i && 0 === o ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var c, d, u, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = s && t.nodeName.toLowerCase(),
								y = !l && !s;
							if (g) {
								if (r) {
									for (; m;) {
										for (u = t; u = u[m];)
											if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
										h = m = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? g.firstChild : g.lastChild], a && y) {
									for (d = g[B] || (g[B] = {}), c = d[e] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (f = p = 0) || h.pop();)
										if (1 === u.nodeType && ++f && u === t) {
											d[e] = [W, p, f];
											break
										}
								} else if (y && (c = (t[B] || (t[B] = {}))[e]) && c[0] === W) f = c[1];
								else
									for (;
										(u = ++p && u && u[m] || (f = p = 0) || h.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++f || (y && ((u[B] || (u[B] = {}))[e] = [W, f]), u !== t)););
								return f -= o, f === i || f % i === 0 && f / i >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var o, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return r[B] ? r(n) : r.length > 1 ? (o = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
							for (var i, o = r(e, n), a = o.length; a--;) i = et(e, o[a]), e[i] = !(t[i] = o[a])
						}) : function(e) {
							return r(e, 0, o)
						}) : r
					}
				},
				pseudos: {
					not: i(function(e) {
						var t = [],
							n = [],
							o = k(e.replace(lt, "$1"));
						return o[B] ? i(function(e, t, n, i) {
							for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
						}) : function(e, i, r) {
							return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
						}
					}),
					has: i(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: i(function(e) {
						return e = e.replace(xt, _t),
							function(t) {
								return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
							}
					}),
					lang: i(function(e) {
						return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, _t).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === R
					},
					focus: function(e) {
						return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !_.pseudos.empty(e)
					},
					header: function(e) {
						return gt.test(e.nodeName)
					},
					input: function(e) {
						return mt.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: c(function() {
						return [0]
					}),
					last: c(function(e, t) {
						return [t - 1]
					}),
					eq: c(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: c(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: c(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: c(function(e, t, n) {
						for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: c(function(e, t, n) {
						for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}, _.pseudos.nth = _.pseudos.eq;
			for (w in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) _.pseudos[w] = s(w);
			for (w in {
					submit: !0,
					reset: !0
				}) _.pseudos[w] = l(w);
			return u.prototype = _.filters = _.pseudos, _.setFilters = new u, T = t.tokenize = function(e, n) {
				var i, o, r, a, s, l, c, d = Y[e + " "];
				if (d) return n ? 0 : d.slice(0);
				for (s = e, l = [], c = _.preFilter; s;) {
					(!i || (o = ct.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = dt.exec(s)) && (i = o.shift(), r.push({
						value: i,
						type: o[0].replace(lt, " ")
					}), s = s.slice(i.length));
					for (a in _.filter) !(o = ht[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
						value: i,
						type: a,
						matches: o
					}), s = s.slice(i.length));
					if (!i) break
				}
				return n ? s.length : s ? t.error(e) : Y(e, l).slice(0)
			}, k = t.compile = function(e, t) {
				var n, i = [],
					o = [],
					r = X[e + " "];
				if (!r) {
					for (t || (t = T(e)), n = t.length; n--;) r = y(t[n]), r[B] ? i.push(r) : o.push(r);
					r = X(e, b(o, i)), r.selector = e
				}
				return r
			}, E = t.select = function(e, t, n, i) {
				var o, r, a, s, l, c = "function" == typeof e && e,
					u = !i && T(e = c.selector || e);
				if (n = n || [], 1 === u.length) {
					if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && L && _.relative[r[1].type]) {
						if (t = (_.find.ID(a.matches[0].replace(xt, _t), t) || [])[0], !t) return n;
						c && (t = t.parentNode), e = e.slice(r.shift().value.length)
					}
					for (o = ht.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !_.relative[s = a.type]);)
						if ((l = _.find[s]) && (i = l(a.matches[0].replace(xt, _t), bt.test(r[0].type) && d(t.parentNode) || t))) {
							if (r.splice(o, 1), e = i.length && f(r), !e) return Q.apply(n, i), n;
							break
						}
				}
				return (c || k(e, u))(i, t, !L, n, bt.test(e) && d(t.parentNode) || t), n
			}, x.sortStable = B.split("").sort(q).join("") === B, x.detectDuplicates = !!N, $(), x.sortDetached = o(function(e) {
				return 1 & e.compareDocumentPosition(O.createElement("div"))
			}), o(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || r("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), x.attributes && o(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || r("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), o(function(e) {
				return null == e.getAttribute("disabled")
			}) || r(tt, function(e, t, n) {
				var i;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), t
		}(e);
		Z.find = ot, Z.expr = ot.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ot.uniqueSort, Z.text = ot.getText, Z.isXMLDoc = ot.isXML, Z.contains = ot.contains;
		var rt = Z.expr.match.needsContext,
			at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			st = /^.[^:#\[\.,]*$/;
		Z.filter = function(e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, Z.fn.extend({
			find: function(e) {
				var t, n = this.length,
					i = [],
					o = this;
				if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
					for (t = 0; n > t; t++)
						if (Z.contains(o[t], this)) return !0
				}));
				for (t = 0; n > t; t++) Z.find(e, o[t], i);
				return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
			},
			filter: function(e) {
				return this.pushStack(i(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(i(this, e || [], !0))
			},
			is: function(e) {
				return !!i(this, "string" == typeof e && rt.test(e) ? Z(e) : e || [], !1).length
			}
		});
		var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			dt = Z.fn.init = function(e, t) {
				var n, i;
				if (!e) return this;
				if ("string" == typeof e) {
					if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ct.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
					if (n[1]) {
						if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), at.test(n[1]) && Z.isPlainObject(t))
							for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
			};
		dt.prototype = Z.fn, lt = Z(K);
		var ut = /^(?:parents|prev(?:Until|All))/,
			ft = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		Z.extend({
			dir: function(e, t, n) {
				for (var i = [], o = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (o && Z(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			sibling: function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), Z.fn.extend({
			has: function(e) {
				var t = Z(e, this),
					n = t.length;
				return this.filter(function() {
					for (var e = 0; n > e; e++)
						if (Z.contains(this, t[e])) return !0
				})
			},
			closest: function(e, t) {
				for (var n, i = 0, o = this.length, r = [], a = rt.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > i; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
							r.push(n);
							break
						}
				return this.pushStack(r.length > 1 ? Z.unique(r) : r)
			},
			index: function(e) {
				return e ? "string" == typeof e ? q.call(Z(e), this[0]) : q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), Z.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return Z.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return Z.dir(e, "parentNode", n)
			},
			next: function(e) {
				return o(e, "nextSibling")
			},
			prev: function(e) {
				return o(e, "previousSibling")
			},
			nextAll: function(e) {
				return Z.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return Z.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return Z.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return Z.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return Z.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return Z.sibling(e.firstChild)
			},
			contents: function(e) {
				return e.contentDocument || Z.merge([], e.childNodes)
			}
		}, function(e, t) {
			Z.fn[e] = function(n, i) {
				var o = Z.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = Z.filter(i, o)), this.length > 1 && (ft[e] || Z.unique(o), ut.test(e) && o.reverse()), this.pushStack(o)
			}
		});
		var pt = /\S+/g,
			ht = {};
		Z.Callbacks = function(e) {
			e = "string" == typeof e ? ht[e] || r(e) : Z.extend({}, e);
			var t, n, i, o, a, s, l = [],
				c = !e.once && [],
				d = function(r) {
					for (t = e.memory && r, n = !0, s = o || 0, o = 0, a = l.length, i = !0; l && a > s; s++)
						if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
							t = !1;
							break
						}
					i = !1, l && (c ? c.length && d(c.shift()) : t ? l = [] : u.disable())
				},
				u = {
					add: function() {
						if (l) {
							var n = l.length;
							! function r(t) {
								Z.each(t, function(t, n) {
									var i = Z.type(n);
									"function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
								})
							}(arguments), i ? a = l.length : t && (o = n, d(t))
						}
						return this
					},
					remove: function() {
						return l && Z.each(arguments, function(e, t) {
							for (var n;
								(n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
						}), this
					},
					has: function(e) {
						return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
					},
					empty: function() {
						return l = [], a = 0, this
					},
					disable: function() {
						return l = c = t = void 0, this
					},
					disabled: function() {
						return !l
					},
					lock: function() {
						return c = void 0, t || u.disable(), this
					},
					locked: function() {
						return !c
					},
					fireWith: function(e, t) {
						return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : d(t)), this
					},
					fire: function() {
						return u.fireWith(this, arguments), this
					},
					fired: function() {
						return !!n
					}
				};
			return u
		}, Z.extend({
			Deferred: function(e) {
				var t = [
						["resolve", "done", Z.Callbacks("once memory"), "resolved"],
						["reject", "fail", Z.Callbacks("once memory"), "rejected"],
						["notify", "progress", Z.Callbacks("memory")]
					],
					n = "pending",
					i = {
						state: function() {
							return n
						},
						always: function() {
							return o.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return Z.Deferred(function(n) {
								Z.each(t, function(t, r) {
									var a = Z.isFunction(e[t]) && e[t];
									o[r[1]](function() {
										var e = a && a.apply(this, arguments);
										e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? Z.extend(e, i) : i
						}
					},
					o = {};
				return i.pipe = i.then, Z.each(t, function(e, r) {
					var a = r[2],
						s = r[3];
					i[r[1]] = a.add, s && a.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
						return o[r[0] + "With"](this === o ? i : this, arguments), this
					}, o[r[0] + "With"] = a.fireWith
				}), i.promise(o), e && e.call(o, o), o
			},
			when: function(e) {
				var t, n, i, o = 0,
					r = z.call(arguments),
					a = r.length,
					s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
					l = 1 === s ? e : Z.Deferred(),
					c = function(e, n, i) {
						return function(o) {
							n[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
						}
					};
				if (a > 1)
					for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
				return s || l.resolveWith(i, r), l.promise()
			}
		});
		var mt;
		Z.fn.ready = function(e) {
			return Z.ready.promise().done(e), this
		}, Z.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? Z.readyWait++ : Z.ready(!0)
			},
			ready: function(e) {
				(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (mt.resolveWith(K, [Z]), Z.fn.triggerHandler && (Z(K).triggerHandler("ready"), Z(K).off("ready"))))
			}
		}), Z.ready.promise = function(t) {
			return mt || (mt = Z.Deferred(), "complete" === K.readyState ? setTimeout(Z.ready) : (K.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), mt.promise(t)
		}, Z.ready.promise();
		var gt = Z.access = function(e, t, n, i, o, r, a) {
			var s = 0,
				l = e.length,
				c = null == n;
			if ("object" === Z.type(n)) {
				o = !0;
				for (s in n) Z.access(e, t, s, n[s], !0, r, a)
			} else if (void 0 !== i && (o = !0, Z.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
					return c.call(Z(e), n)
				})), t))
				for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
		};
		Z.acceptData = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		}, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
			key: function(e) {
				if (!s.accepts(e)) return 0;
				var t = {},
					n = e[this.expando];
				if (!n) {
					n = s.uid++;
					try {
						t[this.expando] = {
							value: n
						}, Object.defineProperties(e, t)
					} catch (i) {
						t[this.expando] = n, Z.extend(e, t)
					}
				}
				return this.cache[n] || (this.cache[n] = {}), n
			},
			set: function(e, t, n) {
				var i, o = this.key(e),
					r = this.cache[o];
				if ("string" == typeof t) r[t] = n;
				else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], t);
				else
					for (i in t) r[i] = t[i];
				return r
			},
			get: function(e, t) {
				var n = this.cache[this.key(e)];
				return void 0 === t ? n : n[t]
			},
			access: function(e, t, n) {
				var i;
				return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function(e, t) {
				var n, i, o, r = this.key(e),
					a = this.cache[r];
				if (void 0 === t) this.cache[r] = {};
				else {
					Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? i = [t, o] : (i = o, i = i in a ? [i] : i.match(pt) || [])), n = i.length;
					for (; n--;) delete a[i[n]]
				}
			},
			hasData: function(e) {
				return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
			},
			discard: function(e) {
				e[this.expando] && delete this.cache[e[this.expando]]
			}
		};
		var vt = new s,
			yt = new s,
			bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			wt = /([A-Z])/g;
		Z.extend({
			hasData: function(e) {
				return yt.hasData(e) || vt.hasData(e)
			},
			data: function(e, t, n) {
				return yt.access(e, t, n)
			},
			removeData: function(e, t) {
				yt.remove(e, t)
			},
			_data: function(e, t, n) {
				return vt.access(e, t, n)
			},
			_removeData: function(e, t) {
				vt.remove(e, t)
			}
		}), Z.fn.extend({
			data: function(e, t) {
				var n, i, o, r = this[0],
					a = r && r.attributes;
				if (void 0 === e) {
					if (this.length && (o = yt.get(r), 1 === r.nodeType && !vt.get(r, "hasDataAttrs"))) {
						for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(r, i, o[i])));
						vt.set(r, "hasDataAttrs", !0)
					}
					return o
				}
				return "object" == typeof e ? this.each(function() {
					yt.set(this, e)
				}) : gt(this, function(t) {
					var n, i = Z.camelCase(e);
					if (r && void 0 === t) {
						if (n = yt.get(r, e), void 0 !== n) return n;
						if (n = yt.get(r, i), void 0 !== n) return n;
						if (n = l(r, i, void 0), void 0 !== n) return n
					} else this.each(function() {
						var n = yt.get(this, i);
						yt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function(e) {
				return this.each(function() {
					yt.remove(this, e)
				})
			}
		}), Z.extend({
			queue: function(e, t, n) {
				var i;
				return e ? (t = (t || "fx") + "queue", i = vt.get(e, t), n && (!i || Z.isArray(n) ? i = vt.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = Z.queue(e, t),
					i = n.length,
					o = n.shift(),
					r = Z._queueHooks(e, t),
					a = function() {
						Z.dequeue(e, t)
					};
				"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return vt.get(e, n) || vt.access(e, n, {
					empty: Z.Callbacks("once memory").add(function() {
						vt.remove(e, [t + "queue", n])
					})
				})
			}
		}), Z.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = Z.queue(this, e, t);
					Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					Z.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, i = 1,
					o = Z.Deferred(),
					r = this,
					a = this.length,
					s = function() {
						--i || o.resolveWith(r, [r])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = vt.get(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
				return s(), o.promise(t)
			}
		});
		var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			_t = ["Top", "Right", "Bottom", "Left"],
			Ct = function(e, t) {
				return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
			},
			St = /^(?:checkbox|radio)$/i;
		! function() {
			var e = K.createDocumentFragment(),
				t = e.appendChild(K.createElement("div")),
				n = K.createElement("input");
			n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), V.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", V.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}();
		var Tt = "undefined";
		V.focusinBubbles = "onfocusin" in e;
		var kt = /^key/,
			Et = /^(?:mouse|pointer|contextmenu)|click/,
			It = /^(?:focusinfocus|focusoutblur)$/,
			At = /^([^.]*)(?:\.(.+)|)$/;
		Z.event = {
			global: {},
			add: function(e, t, n, i, o) {
				var r, a, s, l, c, d, u, f, p, h, m, g = vt.get(e);
				if (g)
					for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
							return typeof Z !== Tt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
						}), t = (t || "").match(pt) || [""], c = t.length; c--;) s = At.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (u = Z.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = Z.event.special[p] || {}, d = Z.extend({
						type: p,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: o,
						needsContext: o && Z.expr.match.needsContext.test(o),
						namespace: h.join(".")
					}, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), Z.event.global[p] = !0)
			},
			remove: function(e, t, n, i, o) {
				var r, a, s, l, c, d, u, f, p, h, m, g = vt.hasData(e) && vt.get(e);
				if (g && (l = g.events)) {
					for (t = (t || "").match(pt) || [""], c = t.length; c--;)
						if (s = At.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
							for (u = Z.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) d = f[r], !o && m !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (f.splice(r, 1), d.selector && f.delegateCount--, u.remove && u.remove.call(e, d));
							a && !f.length && (u.teardown && u.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete l[p])
						} else
							for (p in l) Z.event.remove(e, p + t[c], n, i, !0);
					Z.isEmptyObject(l) && (delete g.handle, vt.remove(e, "events"))
				}
			},
			trigger: function(t, n, i, o) {
				var r, a, s, l, c, d, u, f = [i || K],
					p = G.call(t, "type") ? t.type : t,
					h = G.call(t, "namespace") ? t.namespace.split(".") : [];
				if (a = s = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !It.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), u = Z.event.special[p] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
					if (!o && !u.noBubble && !Z.isWindow(i)) {
						for (l = u.delegateType || p, It.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
						s === (i.ownerDocument || K) && f.push(s.defaultView || s.parentWindow || e)
					}
					for (r = 0;
						(a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || p, d = (vt.get(a, "events") || {})[t.type] && vt.get(a, "handle"), d && d.apply(a, n), d = c && a[c], d && d.apply && Z.acceptData(a) && (t.result = d.apply(a, n), t.result === !1 && t.preventDefault());
					return t.type = p, o || t.isDefaultPrevented() || u._default && u._default.apply(f.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[p]) && !Z.isWindow(i) && (s = i[c], s && (i[c] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, s && (i[c] = s)), t.result
				}
			},
			dispatch: function(e) {
				e = Z.event.fix(e);
				var t, n, i, o, r, a = [],
					s = z.call(arguments),
					l = (vt.get(this, "events") || {})[e.type] || [],
					c = Z.event.special[e.type] || {};
				if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
					for (a = Z.event.handlers.call(this, e, l), t = 0;
						(o = a[t++]) && !e.isPropagationStopped();)
						for (e.currentTarget = o.elem, n = 0;
							(r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
					return c.postDispatch && c.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, i, o, r, a = [],
					s = t.delegateCount,
					l = e.target;
				if (s && l.nodeType && (!e.button || "click" !== e.type))
					for (; l !== this; l = l.parentNode || this)
						if (l.disabled !== !0 || "click" !== e.type) {
							for (i = [], n = 0; s > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), i[o] && i.push(r);
							i.length && a.push({
								elem: l,
								handlers: i
							})
						}
				return s < t.length && a.push({
					elem: this,
					handlers: t.slice(s)
				}), a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, i, o, r = t.button;
					return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
				}
			},
			fix: function(e) {
				if (e[Z.expando]) return e;
				var t, n, i, o = e.type,
					r = e,
					a = this.fixHooks[o];
				for (a || (this.fixHooks[o] = a = Et.test(o) ? this.mouseHooks : kt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
				return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						return this !== u() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === u() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function(e) {
						return Z.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, i) {
				var o = Z.extend(new Z.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
			}
		}, Z.removeEvent = function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		}, Z.Event = function(e, t) {
			return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : d) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
		}, Z.Event.prototype = {
			isDefaultPrevented: d,
			isPropagationStopped: d,
			isImmediatePropagationStopped: d,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, Z.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			Z.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, i = this,
						o = e.relatedTarget,
						r = e.handleObj;
					return (!o || o !== i && !Z.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), V.focusinBubbles || Z.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
				Z.event.simulate(t, e.target, Z.event.fix(e), !0)
			};
			Z.event.special[t] = {
				setup: function() {
					var i = this.ownerDocument || this,
						o = vt.access(i, t);
					o || i.addEventListener(e, n, !0), vt.access(i, t, (o || 0) + 1)
				},
				teardown: function() {
					var i = this.ownerDocument || this,
						o = vt.access(i, t) - 1;
					o ? vt.access(i, t, o) : (i.removeEventListener(e, n, !0), vt.remove(i, t))
				}
			}
		}), Z.fn.extend({
			on: function(e, t, n, i, o) {
				var r, a;
				if ("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for (a in e) this.on(a, t, n, e[a], o);
					return this
				}
				if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = d;
				else if (!i) return this;
				return 1 === o && (r = i, i = function(e) {
					return Z().off(e), r.apply(this, arguments)
				}, i.guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
					Z.event.add(this, e, i, n, t)
				})
			},
			one: function(e, t, n, i) {
				return this.on(e, t, n, i, 1)
			},
			off: function(e, t, n) {
				var i, o;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e) {
					for (o in e) this.off(o, t, e[o]);
					return this
				}
				return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = d), this.each(function() {
					Z.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					Z.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				return n ? Z.event.trigger(e, t, n, !0) : void 0
			}
		});
		var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			$t = /<([\w:]+)/,
			Ot = /<|&#?\w+;/,
			Rt = /<(?:script|style|link)/i,
			Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Dt = /^$|\/(?:java|ecma)script/i,
			Pt = /^true\/(.*)/,
			Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			jt = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		jt.optgroup = jt.option, jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead, jt.th = jt.td, Z.extend({
			clone: function(e, t, n) {
				var i, o, r, a, s = e.cloneNode(!0),
					l = Z.contains(e.ownerDocument, e);
				if (!(V.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
					for (a = v(s), r = v(e), i = 0, o = r.length; o > i; i++) y(r[i], a[i]);
				if (t)
					if (n)
						for (r = r || v(e), a = a || v(s), i = 0, o = r.length; o > i; i++) g(r[i], a[i]);
					else g(e, s);
				return a = v(s, "script"), a.length > 0 && m(a, !l && v(e, "script")), s
			},
			buildFragment: function(e, t, n, i) {
				for (var o, r, a, s, l, c, d = t.createDocumentFragment(), u = [], f = 0, p = e.length; p > f; f++)
					if (o = e[f], o || 0 === o)
						if ("object" === Z.type(o)) Z.merge(u, o.nodeType ? [o] : o);
						else if (Ot.test(o)) {
					for (r = r || d.appendChild(t.createElement("div")), a = ($t.exec(o) || ["", ""])[1].toLowerCase(), s = jt[a] || jt._default, r.innerHTML = s[1] + o.replace(Nt, "<$1></$2>") + s[2], c = s[0]; c--;) r = r.lastChild;
					Z.merge(u, r.childNodes), r = d.firstChild, r.textContent = ""
				} else u.push(t.createTextNode(o));
				for (d.textContent = "", f = 0; o = u[f++];)
					if ((!i || -1 === Z.inArray(o, i)) && (l = Z.contains(o.ownerDocument, o), r = v(d.appendChild(o), "script"), l && m(r), n))
						for (c = 0; o = r[c++];) Dt.test(o.type || "") && n.push(o);
				return d
			},
			cleanData: function(e) {
				for (var t, n, i, o, r = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
					if (Z.acceptData(n) && (o = n[vt.expando], o && (t = vt.cache[o]))) {
						if (t.events)
							for (i in t.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
						vt.cache[o] && delete vt.cache[o]
					}
					delete yt.cache[n[yt.expando]]
				}
			}
		}), Z.fn.extend({
			text: function(e) {
				return gt(this, function(e) {
					return void 0 === e ? Z.text(this) : this.empty().each(function() {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = f(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = f(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for (var n, i = e ? Z.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
				return this
			},
			clone: function(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
					return Z.clone(this, e, t)
				})
			},
			html: function(e) {
				return gt(this, function(e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Rt.test(e) && !jt[($t.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(Nt, "<$1></$2>");
						try {
							for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
							t = 0
						} catch (o) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				return this.domManip(arguments, function(t) {
					e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, t) {
				e = Y.apply([], e);
				var n, i, o, r, a, s, l = 0,
					c = this.length,
					d = this,
					u = c - 1,
					f = e[0],
					m = Z.isFunction(f);
				if (m || c > 1 && "string" == typeof f && !V.checkClone && Lt.test(f)) return this.each(function(n) {
					var i = d.eq(n);
					m && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
				});
				if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
					for (o = Z.map(v(n, "script"), p), r = o.length; c > l; l++) a = n, l !== u && (a = Z.clone(a, !0, !0), r && Z.merge(o, v(a, "script"))), t.call(this[l], a, l);
					if (r)
						for (s = o[o.length - 1].ownerDocument, Z.map(o, h), l = 0; r > l; l++) a = o[l], Dt.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Mt, "")))
				}
				return this
			}
		}), Z.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			Z.fn[e] = function(e) {
				for (var n, i = [], o = Z(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), Z(o[a])[t](n), X.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Bt, Ht = {},
			Wt = /^margin/,
			Ft = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
			zt = function(t) {
				return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
			};
		! function() {
			function t() {
				a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(r);
				var t = e.getComputedStyle(a, null);
				n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
			}
			var n, i, o = K.documentElement,
				r = K.createElement("div"),
				a = K.createElement("div");
			a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", V.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), e.getComputedStyle && Z.extend(V, {
				pixelPosition: function() {
					return t(), n
				},
				boxSizingReliable: function() {
					return null == i && t(), i
				},
				reliableMarginRight: function() {
					var t, n = a.appendChild(K.createElement("div"));
					return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), a.removeChild(n), t
				}
			}))
		}(), Z.swap = function(e, t, n, i) {
			var o, r, a = {};
			for (r in t) a[r] = e.style[r], e.style[r] = t[r];
			o = n.apply(e, i || []);
			for (r in t) e.style[r] = a[r];
			return o
		};
		var Yt = /^(none|table(?!-c[ea]).+)/,
			Xt = new RegExp("^(" + xt + ")(.*)$", "i"),
			qt = new RegExp("^([+-])=(" + xt + ")", "i"),
			Ut = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Jt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Gt = ["Webkit", "O", "Moz", "ms"];
		Z.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var n = x(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": "cssFloat"
			},
			style: function(e, t, n, i) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var o, r, a, s = Z.camelCase(t),
						l = e.style;
					return t = Z.cssProps[s] || (Z.cssProps[s] = C(l, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = qt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[s] || (n += "px"), V.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
				}
			},
			css: function(e, t, n, i) {
				var o, r, a, s = Z.camelCase(t);
				return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = x(e, t, i)), "normal" === o && t in Jt && (o = Jt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
			}
		}), Z.each(["height", "width"], function(e, t) {
			Z.cssHooks[t] = {
				get: function(e, n, i) {
					return n ? Yt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ut, function() {
						return k(e, t, i)
					}) : k(e, t, i) : void 0
				},
				set: function(e, n, i) {
					var o = i && zt(e);
					return S(e, n, i ? T(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
				}
			}
		}), Z.cssHooks.marginRight = _(V.reliableMarginRight, function(e, t) {
			return t ? Z.swap(e, {
				display: "inline-block"
			}, x, [e, "marginRight"]) : void 0
		}), Z.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			Z.cssHooks[e + t] = {
				expand: function(n) {
					for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + _t[i] + t] = r[i] || r[i - 2] || r[0];
					return o
				}
			}, Wt.test(e) || (Z.cssHooks[e + t].set = S)
		}), Z.fn.extend({
			css: function(e, t) {
				return gt(this, function(e, t, n) {
					var i, o, r = {},
						a = 0;
					if (Z.isArray(t)) {
						for (i = zt(e), o = t.length; o > a; a++) r[t[a]] = Z.css(e, t[a], !1, i);
						return r
					}
					return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return E(this, !0)
			},
			hide: function() {
				return E(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					Ct(this) ? Z(this).show() : Z(this).hide()
				})
			}
		}), Z.Tween = I, I.prototype = {
			constructor: I,
			init: function(e, t, n, i, o, r) {
				this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Z.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = I.propHooks[this.prop];
				return e && e.get ? e.get(this) : I.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = I.propHooks[this.prop];
				return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
			}
		}, I.prototype.init.prototype = I.prototype, I.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, Z.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, Z.fx = I.prototype.init, Z.fx.step = {};
		var Vt, Kt, Qt = /^(?:toggle|show|hide)$/,
			Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
			en = /queueHooks$/,
			tn = [O],
			nn = {
				"*": [function(e, t) {
					var n = this.createTween(e, t),
						i = n.cur(),
						o = Zt.exec(t),
						r = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
						a = (Z.cssNumber[e] || "px" !== r && +i) && Zt.exec(Z.css(n.elem, e)),
						s = 1,
						l = 20;
					if (a && a[3] !== r) {
						r = r || a[3], o = o || [], a = +i || 1;
						do s = s || ".5", a /= s, Z.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
					}
					return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
				}]
			};
		Z.Animation = Z.extend(L, {
				tweener: function(e, t) {
					Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for (var n, i = 0, o = e.length; o > i; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
				},
				prefilter: function(e, t) {
					t ? tn.unshift(e) : tn.push(e)
				}
			}), Z.speed = function(e, t, n) {
				var i = e && "object" == typeof e ? Z.extend({}, e) : {
					complete: n || !n && t || Z.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !Z.isFunction(t) && t
				};
				return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
					Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
				}, i
			}, Z.fn.extend({
				fadeTo: function(e, t, n, i) {
					return this.filter(Ct).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, i)
				},
				animate: function(e, t, n, i) {
					var o = Z.isEmptyObject(e),
						r = Z.speed(t, n, i),
						a = function() {
							var t = L(this, Z.extend({}, e), r);
							(o || vt.get(this, "finish")) && t.stop(!0)
						};
					return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
				},
				stop: function(e, t, n) {
					var i = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							o = null != e && e + "queueHooks",
							r = Z.timers,
							a = vt.get(this);
						if (o) a[o] && a[o].stop && i(a[o]);
						else
							for (o in a) a[o] && a[o].stop && en.test(o) && i(a[o]);
						for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
						(t || !n) && Z.dequeue(this, e)
					})
				},
				finish: function(e) {
					return e !== !1 && (e = e || "fx"), this.each(function() {
						var t, n = vt.get(this),
							i = n[e + "queue"],
							o = n[e + "queueHooks"],
							r = Z.timers,
							a = i ? i.length : 0;
						for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
						for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), Z.each(["toggle", "show", "hide"], function(e, t) {
				var n = Z.fn[t];
				Z.fn[t] = function(e, i, o) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, i, o)
				}
			}), Z.each({
				slideDown: N("show"),
				slideUp: N("hide"),
				slideToggle: N("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				Z.fn[e] = function(e, n, i) {
					return this.animate(t, e, n, i)
				}
			}), Z.timers = [], Z.fx.tick = function() {
				var e, t = 0,
					n = Z.timers;
				for (Vt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
				n.length || Z.fx.stop(), Vt = void 0
			}, Z.fx.timer = function(e) {
				Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
			}, Z.fx.interval = 13, Z.fx.start = function() {
				Kt || (Kt = setInterval(Z.fx.tick, Z.fx.interval))
			}, Z.fx.stop = function() {
				clearInterval(Kt), Kt = null
			}, Z.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, Z.fn.delay = function(e, t) {
				return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
					var i = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(i)
					}
				})
			},
			function() {
				var e = K.createElement("input"),
					t = K.createElement("select"),
					n = t.appendChild(K.createElement("option"));
				e.type = "checkbox", V.checkOn = "" !== e.value, V.optSelected = n.selected, t.disabled = !0, V.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", V.radioValue = "t" === e.value
			}();
		var on, rn, an = Z.expr.attrHandle;
		Z.fn.extend({
			attr: function(e, t) {
				return gt(this, Z.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					Z.removeAttr(this, e)
				})
			}
		}), Z.extend({
			attr: function(e, t, n) {
				var i, o, r = e.nodeType;
				return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Tt ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? rn : on)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
			},
			removeAttr: function(e, t) {
				var n, i, o = 0,
					r = t && t.match(pt);
				if (r && 1 === e.nodeType)
					for (; n = r[o++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!V.radioValue && "radio" === t && Z.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), rn = {
			set: function(e, t, n) {
				return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = an[t] || Z.find.attr;
			an[t] = function(e, t, i) {
				var o, r;
				return i || (r = an[t], an[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, an[t] = r), o
			}
		});
		var sn = /^(?:input|select|textarea|button)$/i;
		Z.fn.extend({
			prop: function(e, t) {
				return gt(this, Z.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[Z.propFix[e] || e]
				})
			}
		}), Z.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(e, t, n) {
				var i, o, r, a = e.nodeType;
				return e && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !Z.isXMLDoc(e), r && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
					}
				}
			}
		}), V.optSelected || (Z.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			}
		}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			Z.propFix[this.toLowerCase()] = this
		});
		var ln = /[\t\r\n\f]/g;
		Z.fn.extend({
			addClass: function(e) {
				var t, n, i, o, r, a, s = "string" == typeof e && e,
					l = 0,
					c = this.length;
				if (Z.isFunction(e)) return this.each(function(t) {
					Z(this).addClass(e.call(this, t, this.className))
				});
				if (s)
					for (t = (e || "").match(pt) || []; c > l; l++)
						if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
							for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
							a = Z.trim(i), n.className !== a && (n.className = a)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, i, o, r, a, s = 0 === arguments.length || "string" == typeof e && e,
					l = 0,
					c = this.length;
				if (Z.isFunction(e)) return this.each(function(t) {
					Z(this).removeClass(e.call(this, t, this.className))
				});
				if (s)
					for (t = (e || "").match(pt) || []; c > l; l++)
						if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
							for (r = 0; o = t[r++];)
								for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
							a = e ? Z.trim(i) : "", n.className !== a && (n.className = a)
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
					Z(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function() {
					if ("string" === n)
						for (var t, i = 0, o = Z(this), r = e.match(pt) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
					else(n === Tt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
					if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
				return !1
			}
		});
		var cn = /\r/g;
		Z.fn.extend({
			val: function(e) {
				var t, n, i, o = this[0];
				return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(e) {
						return null == e ? "" : e + ""
					})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
				})) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)) : void 0
			}
		}), Z.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = Z.find.attr(e, "value");
						return null != t ? t : Z.trim(Z.text(e))
					}
				},
				select: {
					get: function(e) {
						for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
							if (n = i[l], !(!n.selected && l !== o || (V.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
								if (t = Z(n).val(), r) return t;
								a.push(t)
							}
						return a
					},
					set: function(e, t) {
						for (var n, i, o = e.options, r = Z.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
						return n || (e.selectedIndex = -1), r
					}
				}
			}
		}), Z.each(["radio", "checkbox"], function() {
			Z.valHooks[this] = {
				set: function(e, t) {
					return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
				}
			}, V.checkOn || (Z.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			Z.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), Z.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var dn = Z.now(),
			un = /\?/;
		Z.parseJSON = function(e) {
			return JSON.parse(e + "")
		}, Z.parseXML = function(e) {
			var t, n;
			if (!e || "string" != typeof e) return null;
			try {
				n = new DOMParser, t = n.parseFromString(e, "text/xml")
			} catch (i) {
				t = void 0
			}
			return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
		};
		var fn = /#.*$/,
			pn = /([?&])_=[^&]*/,
			hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			gn = /^(?:GET|HEAD)$/,
			vn = /^\/\//,
			yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			bn = {},
			wn = {},
			xn = "*/".concat("*"),
			_n = e.location.href,
			Cn = yn.exec(_n.toLowerCase()) || [];
		Z.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: _n,
				type: "GET",
				isLocal: mn.test(Cn[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": xn,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": Z.parseJSON,
					"text xml": Z.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
			},
			ajaxPrefilter: D(bn),
			ajaxTransport: D(wn),
			ajax: function(e, t) {
				function n(e, t, n, a) {
					var l, d, v, y, w, _ = t;
					2 !== b && (b = 2, s && clearTimeout(s), i = void 0, r = a || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = j(u, x, n)), y = B(u, y, x, l), l ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Z.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (Z.etag[o] = w)), 204 === e || "HEAD" === u.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, d = y.data, v = y.error, l = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || _) + "", l ? h.resolveWith(f, [d, _, x]) : h.rejectWith(f, [x, _, v]), x.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, u, l ? d : v]), m.fireWith(f, [x, _]), c && (p.trigger("ajaxComplete", [x, u]), --Z.active || Z.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var i, o, r, a, s, l, c, d, u = Z.ajaxSetup({}, t),
					f = u.context || u,
					p = u.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
					h = Z.Deferred(),
					m = Z.Callbacks("once memory"),
					g = u.statusCode || {},
					v = {},
					y = {},
					b = 0,
					w = "canceled",
					x = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (2 === b) {
								if (!a)
									for (a = {}; t = hn.exec(r);) a[t[1].toLowerCase()] = t[2];
								t = a[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === b ? r : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return b || (e = y[n] = y[n] || e, v[e] = t), this
						},
						overrideMimeType: function(e) {
							return b || (u.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if (e)
								if (2 > b)
									for (t in e) g[t] = [g[t], e[t]];
								else x.always(e[x.status]);
							return this
						},
						abort: function(e) {
							var t = e || w;
							return i && i.abort(t), n(0, t), this
						}
					};
				if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || _n) + "").replace(fn, "").replace(vn, Cn[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(pt) || [""], null == u.crossDomain && (l = yn.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === Cn[1] && l[2] === Cn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), P(bn, u, t, x), 2 === b) return x;
				c = Z.event && u.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !gn.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (un.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pn.test(o) ? o.replace(pn, "$1_=" + dn++) : o + (un.test(o) ? "&" : "?") + "_=" + dn++)), u.ifModified && (Z.lastModified[o] && x.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : u.accepts["*"]);
				for (d in u.headers) x.setRequestHeader(d, u.headers[d]);
				if (u.beforeSend && (u.beforeSend.call(f, x, u) === !1 || 2 === b)) return x.abort();
				w = "abort";
				for (d in {
						success: 1,
						error: 1,
						complete: 1
					}) x[d](u[d]);
				if (i = P(wn, u, t, x)) {
					x.readyState = 1, c && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
						x.abort("timeout")
					}, u.timeout));
					try {
						b = 1, i.send(v, n)
					} catch (_) {
						if (!(2 > b)) throw _;
						n(-1, _)
					}
				} else n(-1, "No Transport");
				return x
			},
			getJSON: function(e, t, n) {
				return Z.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return Z.get(e, void 0, t, "script")
			}
		}), Z.each(["get", "post"], function(e, t) {
			Z[t] = function(e, n, i, o) {
				return Z.isFunction(n) && (o = o || i, i = n, n = void 0), Z.ajax({
					url: e,
					type: t,
					dataType: o,
					data: n,
					success: i
				})
			}
		}), Z._evalUrl = function(e) {
			return Z.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, Z.fn.extend({
			wrapAll: function(e) {
				var t;
				return Z.isFunction(e) ? this.each(function(t) {
					Z(this).wrapAll(e.call(this, t))
				}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this)
			},
			wrapInner: function(e) {
				return this.each(Z.isFunction(e) ? function(t) {
					Z(this).wrapInner(e.call(this, t))
				} : function() {
					var t = Z(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = Z.isFunction(e);
				return this.each(function(n) {
					Z(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
				}).end()
			}
		}), Z.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0
		}, Z.expr.filters.visible = function(e) {
			return !Z.expr.filters.hidden(e)
		};
		var Sn = /%20/g,
			Tn = /\[\]$/,
			kn = /\r?\n/g,
			En = /^(?:submit|button|image|reset|file)$/i,
			In = /^(?:input|select|textarea|keygen)/i;
		Z.param = function(e, t) {
			var n, i = [],
				o = function(e, t) {
					t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
				o(this.name, this.value)
			});
			else
				for (n in e) H(n, e[n], t, o);
			return i.join("&").replace(Sn, "+")
		}, Z.fn.extend({
			serialize: function() {
				return Z.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = Z.prop(this, "elements");
					return e ? Z.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !Z(this).is(":disabled") && In.test(this.nodeName) && !En.test(e) && (this.checked || !St.test(e))
				}).map(function(e, t) {
					var n = Z(this).val();
					return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(kn, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(kn, "\r\n")
					}
				}).get()
			}
		}), Z.ajaxSettings.xhr = function() {
			try {
				return new XMLHttpRequest
			} catch (e) {}
		};
		var An = 0,
			Nn = {},
			$n = {
				0: 200,
				1223: 204
			},
			On = Z.ajaxSettings.xhr();
		e.attachEvent && e.attachEvent("onunload", function() {
			for (var e in Nn) Nn[e]()
		}), V.cors = !!On && "withCredentials" in On, V.ajax = On = !!On, Z.ajaxTransport(function(e) {
			var t;
			return V.cors || On && !e.crossDomain ? {
				send: function(n, i) {
					var o, r = e.xhr(),
						a = ++An;
					if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (o in e.xhrFields) r[o] = e.xhrFields[o];
					e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (o in n) r.setRequestHeader(o, n[o]);
					t = function(e) {
						return function() {
							t && (delete Nn[a], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i($n[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
								text: r.responseText
							} : void 0, r.getAllResponseHeaders()))
						}
					}, r.onload = t(), r.onerror = t("error"), t = Nn[a] = t("abort");
					try {
						r.send(e.hasContent && e.data || null)
					} catch (s) {
						if (t) throw s
					}
				},
				abort: function() {
					t && t()
				}
			} : void 0
		}), Z.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return Z.globalEval(e), e
				}
			}
		}), Z.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), Z.ajaxTransport("script", function(e) {
			if (e.crossDomain) {
				var t, n;
				return {
					send: function(i, o) {
						t = Z("<script>").prop({
							async: !0,
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
						}), K.head.appendChild(t[0])
					},
					abort: function() {
						n && n()
					}
				}
			}
		});
		var Rn = [],
			Ln = /(=)\?(?=&|$)|\?\?/;
		Z.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Rn.pop() || Z.expando + "_" + dn++;
				return this[e] = !0, e
			}
		}), Z.ajaxPrefilter("json jsonp", function(t, n, i) {
			var o, r, a, s = t.jsonp !== !1 && (Ln.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ln.test(t.data) && "data");
			return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ln, "$1" + o) : t.jsonp !== !1 && (t.url += (un.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
				return a || Z.error(o + " was not called"), a[0]
			}, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
				a = arguments
			}, i.always(function() {
				e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Rn.push(o)), a && Z.isFunction(r) && r(a[0]), a = r = void 0
			}), "script") : void 0
		}), Z.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || K;
			var i = at.exec(e),
				o = !n && [];
			return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
		};
		var Dn = Z.fn.load;
		Z.fn.load = function(e, t, n) {
			if ("string" != typeof e && Dn) return Dn.apply(this, arguments);
			var i, o, r, a = this,
				s = e.indexOf(" ");
			return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Z.ajax({
				url: e,
				type: o,
				dataType: "html",
				data: t
			}).done(function(e) {
				r = arguments, a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
			}).complete(n && function(e, t) {
				a.each(n, r || [e.responseText, t, e])
			}), this
		}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			Z.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), Z.expr.filters.animated = function(e) {
			return Z.grep(Z.timers, function(t) {
				return e === t.elem
			}).length
		};
		var Pn = e.document.documentElement;
		Z.offset = {
			setOffset: function(e, t, n) {
				var i, o, r, a, s, l, c, d = Z.css(e, "position"),
					u = Z(e),
					f = {};
				"static" === d && (e.style.position = "relative"), s = u.offset(), r = Z.css(e, "top"), l = Z.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (i = u.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : u.css(f)
			}
		}, Z.fn.extend({
			offset: function(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function(t) {
					Z.offset.setOffset(this, e, t)
				});
				var t, n, i = this[0],
					o = {
						top: 0,
						left: 0
					},
					r = i && i.ownerDocument;
				return r ? (t = r.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== Tt && (o = i.getBoundingClientRect()), n = W(r), {
					top: o.top + n.pageYOffset - t.clientTop,
					left: o.left + n.pageXOffset - t.clientLeft
				}) : o) : void 0
			},
			position: function() {
				if (this[0]) {
					var e, t, n = this[0],
						i = {
							top: 0,
							left: 0
						};
					return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - i.top - Z.css(n, "marginTop", !0),
						left: t.left - i.left - Z.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent || Pn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
					return e || Pn
				})
			}
		}), Z.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, n) {
			var i = "pageYOffset" === n;
			Z.fn[t] = function(o) {
				return gt(this, function(t, o, r) {
					var a = W(t);
					return void 0 === r ? a ? a[n] : t[o] : void(a ? a.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
				}, t, o, arguments.length, null)
			}
		}), Z.each(["top", "left"], function(e, t) {
			Z.cssHooks[t] = _(V.pixelPosition, function(e, n) {
				return n ? (n = x(e, t), Ft.test(n) ? Z(e).position()[t] + "px" : n) : void 0
			})
		}), Z.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			Z.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, i) {
				Z.fn[i] = function(i, o) {
					var r = arguments.length && (n || "boolean" != typeof i),
						a = n || (i === !0 || o === !0 ? "margin" : "border");
					return gt(this, function(t, n, i) {
						var o;
						return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
					}, t, r ? i : void 0, r, null)
				}
			})
		}), Z.fn.size = function() {
			return this.length
		}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return Z
		});
		var Mn = e.jQuery,
			jn = e.$;
		return Z.noConflict = function(t) {
			return e.$ === Z && (e.$ = jn), t && e.jQuery === Z && (e.jQuery = Mn), Z
		}, typeof t === Tt && (e.jQuery = e.$ = Z), Z
	}),
	function() {
		var e, t;
		e = this.jQuery || window.jQuery, t = e(window), e.fn.stick_in_parent = function(n) {
			var i, o, r, a, s, l, c, d, u, f, p;
			for (null == n && (n = {}), p = n.sticky_class, s = n.inner_scrolling, f = n.recalc_every, u = n.parent, d = n.offset_top, c = n.spacer, o = n.bottoming, null == d && (d = 0), null == u && (u = void 0), null == s && (s = !0), null == p && (p = "is_stuck"), i = e(document), null == o && (o = !0), r = function(n, r, a, l, h, m, g, v) {
					var y, b, w, x, _, C, S, T, k, E, I, A;
					if (!n.data("sticky_kit")) {
						if (n.data("sticky_kit", !0), _ = i.height(), S = n.parent(), null != u && (S = S.closest(u)), !S.length) throw "failed to find stick parent";
						if (y = w = !1, (I = null != c ? c && n.closest(c) : e("<div />")) && I.css("position", n.css("position")), T = function() {
								var e, t, o;
								return !v && (_ = i.height(), e = parseInt(S.css("border-top-width"), 10), t = parseInt(S.css("padding-top"), 10), r = parseInt(S.css("padding-bottom"), 10), a = S.offset().top + e + t, l = S.height(), w && (y = w = !1, null == c && (n.insertAfter(I), I.detach()), n.css({
									position: "",
									top: "",
									width: "",
									bottom: ""
								}).removeClass(p), o = !0), h = n.offset().top - (parseInt(n.css("margin-top"), 10) || 0) - d, m = n.outerHeight(!0), g = n.css("float"), I && I.css({
									width: n.outerWidth(!0),
									height: m,
									display: n.css("display"),
									"vertical-align": n.css("vertical-align"),
									"float": g
								}), o) ? A() : void 0
							}, T(), m !== l) return x = void 0, C = d, E = f, A = function() {
							var e, u, b, k;
							return !v && (b = !1, null != E && (--E, 0 >= E && (E = f, T(), b = !0)), b || i.height() === _ || T(), b = t.scrollTop(), null != x && (u = b - x), x = b, w ? (o && (k = b + m + C > l + a, y && !k && (y = !1, n.css({
								position: "fixed",
								bottom: "",
								top: C
							}).trigger("sticky_kit:unbottom"))), h > b && (w = !1, C = d, null == c && ("left" !== g && "right" !== g || n.insertAfter(I), I.detach()), e = {
								position: "",
								width: "",
								top: ""
							}, n.css(e).removeClass(p).trigger("sticky_kit:unstick")), s && (e = t.height(), m + d > e && !y && (C -= u, C = Math.max(e - m, C), C = Math.min(d, C), w && n.css({
								top: C + "px"
							})))) : b > h && (w = !0, e = {
								position: "fixed",
								top: C
							}, e.width = "border-box" === n.css("box-sizing") ? n.outerWidth() + "px" : n.width() + "px", n.css(e).addClass(p), null == c && (n.after(I), "left" !== g && "right" !== g || I.append(n)), n.trigger("sticky_kit:stick")), w && o && (null == k && (k = b + m + C > l + a), !y && k)) ? (y = !0, "static" === S.css("position") && S.css({
								position: "relative"
							}), n.css({
								position: "absolute",
								bottom: r,
								top: "auto"
							}).trigger("sticky_kit:bottom")) : void 0
						}, k = function() {
							return T(), A()
						}, b = function() {
							return v = !0, t.off("touchmove", A), t.off("scroll", A), t.off("resize", k), e(document.body).off("sticky_kit:recalc", k), n.off("sticky_kit:detach", b), n.removeData("sticky_kit"), n.css({
								position: "",
								bottom: "",
								top: "",
								width: ""
							}), S.position("position", ""), w ? (null == c && ("left" !== g && "right" !== g || n.insertAfter(I), I.remove()), n.removeClass(p)) : void 0
						}, t.on("touchmove", A), t.on("scroll", A), t.on("resize", k), e(document.body).on("sticky_kit:recalc", k), n.on("sticky_kit:detach", b), setTimeout(A, 0)
					}
				}, a = 0, l = this.length; l > a; a++) n = this[a], r(e(n));
			return this
		}
	}.call(this), ! function e(t, n, i) {
		function o(a, s) {
			if (!n[a]) {
				if (!t[a]) {
					var l = "function" == typeof require && require;
					if (!s && l) return l(a, !0);
					if (r) return r(a, !0);
					var c = new Error("Cannot find module '" + a + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var d = n[a] = {
					exports: {}
				};
				t[a][0].call(d.exports, function(e) {
					var n = t[a][1][e];
					return o(n ? n : e)
				}, d, d.exports, e, t, n, i)
			}
			return n[a].exports
		}
		for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
		return o
	}({
		1: [function(e, t) {
			"use strict";

			function n(e) {
				e.fn.perfectScrollbar = function(t) {
					return this.each(function() {
						if ("object" == typeof t || "undefined" == typeof t) {
							var n = t;
							o.get(this) || i.initialize(this, n)
						} else {
							var r = t;
							"update" === r ? i.update(this) : "destroy" === r && i.destroy(this)
						}
						return e(this)
					})
				}
			}
			var i = e("../main"),
				o = e("../plugin/instances");
			if ("function" == typeof define && define.amd) define(["jquery"], n);
			else {
				var r = window.jQuery ? window.jQuery : window.$;
				"undefined" != typeof r && n(r)
			}
			t.exports = n
		}, {
			"../main": 7,
			"../plugin/instances": 18
		}],
		2: [function(e, t, n) {
			"use strict";

			function i(e, t) {
				var n = e.className.split(" ");
				n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
			}

			function o(e, t) {
				var n = e.className.split(" "),
					i = n.indexOf(t);
				i >= 0 && n.splice(i, 1), e.className = n.join(" ")
			}
			n.add = function(e, t) {
				e.classList ? e.classList.add(t) : i(e, t)
			}, n.remove = function(e, t) {
				e.classList ? e.classList.remove(t) : o(e, t)
			}, n.list = function(e) {
				return e.classList ? e.classList : e.className.split(" ")
			}
		}, {}],
		3: [function(e, t) {
			"use strict";

			function n(e, t) {
				return window.getComputedStyle(e)[t]
			}

			function i(e, t, n) {
				return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
			}

			function o(e, t) {
				for (var n in t) {
					var i = t[n];
					"number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
				}
				return e
			}
			var r = {};
			r.e = function(e, t) {
				var n = document.createElement(e);
				return n.className = t, n
			}, r.appendTo = function(e, t) {
				return t.appendChild(e), e
			}, r.css = function(e, t, r) {
				return "object" == typeof t ? o(e, t) : "undefined" == typeof r ? n(e, t) : i(e, t, r)
			}, r.matches = function(e, t) {
				return "undefined" != typeof e.matches ? e.matches(t) : "undefined" != typeof e.matchesSelector ? e.matchesSelector(t) : "undefined" != typeof e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : "undefined" != typeof e.mozMatchesSelector ? e.mozMatchesSelector(t) : "undefined" != typeof e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
			}, r.remove = function(e) {
				"undefined" != typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
			}, r.queryChildren = function(e, t) {
				return Array.prototype.filter.call(e.childNodes, function(e) {
					return r.matches(e, t)
				})
			}, t.exports = r
		}, {}],
		4: [function(e, t) {
			"use strict";
			var n = function(e) {
				this.element = e, this.events = {}
			};
			n.prototype.bind = function(e, t) {
				"undefined" == typeof this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
			}, n.prototype.unbind = function(e, t) {
				var n = "undefined" != typeof t;
				this.events[e] = this.events[e].filter(function(i) {
					return n && i !== t ? !0 : (this.element.removeEventListener(e, i, !1), !1)
				}, this)
			}, n.prototype.unbindAll = function() {
				for (var e in this.events) this.unbind(e)
			};
			var i = function() {
				this.eventElements = []
			};
			i.prototype.eventElement = function(e) {
				var t = this.eventElements.filter(function(t) {
					return t.element === e
				})[0];
				return "undefined" == typeof t && (t = new n(e), this.eventElements.push(t)), t
			}, i.prototype.bind = function(e, t, n) {
				this.eventElement(e).bind(t, n)
			}, i.prototype.unbind = function(e, t, n) {
				this.eventElement(e).unbind(t, n)
			}, i.prototype.unbindAll = function() {
				for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
			}, i.prototype.once = function(e, t, n) {
				var i = this.eventElement(e),
					o = function(e) {
						i.unbind(t, o), n(e)
					};
				i.bind(t, o)
			}, t.exports = i
		}, {}],
		5: [function(e, t) {
			"use strict";
			t.exports = function() {
				function e() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}
				return function() {
					return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
				}
			}()
		}, {}],
		6: [function(e, t, n) {
			"use strict";
			var i = e("./class"),
				o = e("./dom");
			n.toInt = function(e) {
				return parseInt(e, 10) || 0
			}, n.clone = function(e) {
				if (null === e) return null;
				if ("object" == typeof e) {
					var t = {};
					for (var n in e) t[n] = this.clone(e[n]);
					return t
				}
				return e
			}, n.extend = function(e, t) {
				var n = this.clone(e);
				for (var i in t) n[i] = this.clone(t[i]);
				return n
			}, n.isEditable = function(e) {
				return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
			}, n.removePsClasses = function(e) {
				for (var t = i.list(e), n = 0; n < t.length; n++) {
					var o = t[n];
					0 === o.indexOf("ps-") && i.remove(e, o)
				}
			}, n.outerWidth = function(e) {
				return this.toInt(o.css(e, "width")) + this.toInt(o.css(e, "paddingLeft")) + this.toInt(o.css(e, "paddingRight")) + this.toInt(o.css(e, "borderLeftWidth")) + this.toInt(o.css(e, "borderRightWidth"))
			}, n.startScrolling = function(e, t) {
				i.add(e, "ps-in-scrolling"), "undefined" != typeof t ? i.add(e, "ps-" + t) : (i.add(e, "ps-x"), i.add(e, "ps-y"))
			}, n.stopScrolling = function(e, t) {
				i.remove(e, "ps-in-scrolling"), "undefined" != typeof t ? i.remove(e, "ps-" + t) : (i.remove(e, "ps-x"), i.remove(e, "ps-y"))
			}, n.env = {
				isWebKit: "WebkitAppearance" in document.documentElement.style,
				supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
				supportsIePointer: null !== window.navigator.msMaxTouchPoints
			}
		}, {
			"./class": 2,
			"./dom": 3
		}],
		7: [function(e, t) {
			"use strict";
			var n = e("./plugin/destroy"),
				i = e("./plugin/initialize"),
				o = e("./plugin/update");
			t.exports = {
				initialize: i,
				update: o,
				destroy: n
			}
		}, {
			"./plugin/destroy": 9,
			"./plugin/initialize": 17,
			"./plugin/update": 20
		}],
		8: [function(e, t) {
			"use strict";
			t.exports = {
				wheelSpeed: 1,
				wheelPropagation: !1,
				swipePropagation: !0,
				minScrollbarLength: null,
				maxScrollbarLength: null,
				useBothWheelAxes: !1,
				useKeyboard: !0,
				suppressScrollX: !1,
				suppressScrollY: !1,
				scrollXMarginOffset: 0,
				scrollYMarginOffset: 0,
				stopPropagationOnClick: !0
			}
		}, {}],
		9: [function(e, t) {
			"use strict";
			var n = e("../lib/dom"),
				i = e("../lib/helper"),
				o = e("./instances");
			t.exports = function(e) {
				var t = o.get(e);
				t && (t.event.unbindAll(), n.remove(t.scrollbarX), n.remove(t.scrollbarY), n.remove(t.scrollbarXRail), n.remove(t.scrollbarYRail), i.removePsClasses(e), o.remove(e))
			}
		}, {
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18
		}],
		10: [function(e, t) {
			"use strict";

			function n(e, t) {
				function n(e) {
					return e.getBoundingClientRect()
				}
				var o = window.Event.prototype.stopPropagation.bind;
				t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarY, "click", o), t.event.bind(t.scrollbarYRail, "click", function(o) {
					var a = i.toInt(t.scrollbarYHeight / 2),
						s = t.railYRatio * (o.pageY - window.scrollY - n(t.scrollbarYRail).top - a),
						l = t.railYRatio * (t.railYHeight - t.scrollbarYHeight),
						c = s / l;
					0 > c ? c = 0 : c > 1 && (c = 1), e.scrollTop = (t.contentHeight - t.containerHeight) * c, r(e), o.stopPropagation()
				}), t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarX, "click", o), t.event.bind(t.scrollbarXRail, "click", function(o) {
					var a = i.toInt(t.scrollbarXWidth / 2),
						s = t.railXRatio * (o.pageX - window.scrollX - n(t.scrollbarXRail).left - a),
						l = t.railXRatio * (t.railXWidth - t.scrollbarXWidth),
						c = s / l;
					0 > c ? c = 0 : c > 1 && (c = 1), e.scrollLeft = (t.contentWidth - t.containerWidth) * c - t.negativeScrollAdjustment, r(e), o.stopPropagation()
				})
			}
			var i = e("../../lib/helper"),
				o = e("../instances"),
				r = e("../update-geometry");
			t.exports = function(e) {
				var t = o.get(e);
				n(e, t)
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19
		}],
		11: [function(e, t) {
			"use strict";

			function n(e, t) {
				function n(n) {
					var o = i + n * t.railXRatio,
						a = t.scrollbarXRail.getBoundingClientRect().left + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
					t.scrollbarXLeft = 0 > o ? 0 : o > a ? a : o;
					var s = r.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
					e.scrollLeft = s
				}
				var i = null,
					a = null,
					l = function(t) {
						n(t.pageX - a), s(e), t.stopPropagation(), t.preventDefault()
					},
					c = function() {
						r.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", l)
					};
				t.event.bind(t.scrollbarX, "mousedown", function(n) {
					a = n.pageX, i = r.toInt(o.css(t.scrollbarX, "left")) * t.railXRatio, r.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", l), t.event.once(t.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
				})
			}

			function i(e, t) {
				function n(n) {
					var o = i + n * t.railYRatio,
						a = t.scrollbarYRail.getBoundingClientRect().top + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
					t.scrollbarYTop = 0 > o ? 0 : o > a ? a : o;
					var s = r.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
					e.scrollTop = s
				}
				var i = null,
					a = null,
					l = function(t) {
						n(t.pageY - a), s(e), t.stopPropagation(), t.preventDefault()
					},
					c = function() {
						r.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", l)
					};
				t.event.bind(t.scrollbarY, "mousedown", function(n) {
					a = n.pageY, i = r.toInt(o.css(t.scrollbarY, "top")) * t.railYRatio, r.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", l), t.event.once(t.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
				})
			}
			var o = e("../../lib/dom"),
				r = e("../../lib/helper"),
				a = e("../instances"),
				s = e("../update-geometry");
			t.exports = function(e) {
				var t = a.get(e);
				n(e, t), i(e, t)
			}
		}, {
			"../../lib/dom": 3,
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19
		}],
		12: [function(e, t) {
			"use strict";

			function n(e, t) {
				function n(n, i) {
					var o = e.scrollTop;
					if (0 === n) {
						if (!t.scrollbarYActive) return !1;
						if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && 0 > i) return !t.settings.wheelPropagation
					}
					var r = e.scrollLeft;
					if (0 === i) {
						if (!t.scrollbarXActive) return !1;
						if (0 === r && 0 > n || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
					}
					return !0
				}
				var o = !1;
				t.event.bind(e, "mouseenter", function() {
					o = !0
				}), t.event.bind(e, "mouseleave", function() {
					o = !1
				});
				var a = !1;
				t.event.bind(t.ownerDocument, "keydown", function(s) {
					if ((!s.isDefaultPrevented || !s.isDefaultPrevented()) && o) {
						var l = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
						if (l) {
							for (; l.shadowRoot;) l = l.shadowRoot.activeElement;
							if (i.isEditable(l)) return
						}
						var c = 0,
							d = 0;
						switch (s.which) {
							case 37:
								c = -30;
								break;
							case 38:
								d = 30;
								break;
							case 39:
								c = 30;
								break;
							case 40:
								d = -30;
								break;
							case 33:
								d = 90;
								break;
							case 32:
								d = s.shiftKey ? 90 : -90;
								break;
							case 34:
								d = -90;
								break;
							case 35:
								d = s.ctrlKey ? -t.contentHeight : -t.containerHeight;
								break;
							case 36:
								d = s.ctrlKey ? e.scrollTop : t.containerHeight;
								break;
							default:
								return
						}
						e.scrollTop = e.scrollTop - d, e.scrollLeft = e.scrollLeft + c, r(e), a = n(c, d), a && s.preventDefault()
					}
				})
			}
			var i = e("../../lib/helper"),
				o = e("../instances"),
				r = e("../update-geometry");
			t.exports = function(e) {
				var t = o.get(e);
				n(e, t)
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19
		}],
		13: [function(e, t) {
			"use strict";

			function n(e, t) {
				function n(n, i) {
					var o = e.scrollTop;
					if (0 === n) {
						if (!t.scrollbarYActive) return !1;
						if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && 0 > i) return !t.settings.wheelPropagation
					}
					var r = e.scrollLeft;
					if (0 === i) {
						if (!t.scrollbarXActive) return !1;
						if (0 === r && 0 > n || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
					}
					return !0
				}

				function o(e) {
					var t = e.deltaX,
						n = -1 * e.deltaY;
					return ("undefined" == typeof t || "undefined" == typeof n) && (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), [t, n]
				}

				function a(t, n) {
					var i = e.querySelector("textarea:hover");
					if (i) {
						var o = i.scrollHeight - i.clientHeight;
						if (o > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === o && 0 > n)) return !0;
						var r = i.scrollLeft - i.clientWidth;
						if (r > 0 && !(0 === i.scrollLeft && 0 > t || i.scrollLeft === r && t > 0)) return !0
					}
					return !1
				}

				function s(s) {
					if (i.env.isWebKit || !e.querySelector("select:focus")) {
						var c = o(s),
							d = c[0],
							u = c[1];
						a(d, u) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (e.scrollTop = u ? e.scrollTop - u * t.settings.wheelSpeed : e.scrollTop + d * t.settings.wheelSpeed, l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (e.scrollLeft = d ? e.scrollLeft + d * t.settings.wheelSpeed : e.scrollLeft - u * t.settings.wheelSpeed, l = !0) : (e.scrollTop = e.scrollTop - u * t.settings.wheelSpeed, e.scrollLeft = e.scrollLeft + d * t.settings.wheelSpeed), r(e), l = l || n(d, u), l && (s.stopPropagation(), s.preventDefault()))
					}
				}
				var l = !1;
				"undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", s) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", s)
			}
			var i = e("../../lib/helper"),
				o = e("../instances"),
				r = e("../update-geometry");
			t.exports = function(e) {
				var t = o.get(e);
				n(e, t)
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19
		}],
		14: [function(e, t) {
			"use strict";

			function n(e, t) {
				t.event.bind(e, "scroll", function() {
					o(e)
				})
			}
			var i = e("../instances"),
				o = e("../update-geometry");
			t.exports = function(e) {
				var t = i.get(e);
				n(e, t)
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19
		}],
		15: [function(e, t) {
			"use strict";

			function n(e, t) {
				function n() {
					var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
					return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
				}

				function a() {
					l || (l = setInterval(function() {
						return o.get(e) ? (e.scrollTop = e.scrollTop + c.top, e.scrollLeft = e.scrollLeft + c.left, void r(e)) : void clearInterval(l)
					}, 50))
				}

				function s() {
					l && (clearInterval(l), l = null), i.stopScrolling(e)
				}
				var l = null,
					c = {
						top: 0,
						left: 0
					},
					d = !1;
				t.event.bind(t.ownerDocument, "selectionchange", function() {
					e.contains(n()) ? d = !0 : (d = !1, s())
				}), t.event.bind(window, "mouseup", function() {
					d && (d = !1, s())
				}), t.event.bind(window, "mousemove", function(t) {
					if (d) {
						var n = {
								x: t.pageX,
								y: t.pageY
							},
							o = {
								left: e.offsetLeft,
								right: e.offsetLeft + e.offsetWidth,
								top: e.offsetTop,
								bottom: e.offsetTop + e.offsetHeight
							};
						n.x < o.left + 3 ? (c.left = -5, i.startScrolling(e, "x")) : n.x > o.right - 3 ? (c.left = 5, i.startScrolling(e, "x")) : c.left = 0, n.y < o.top + 3 ? (c.top = o.top + 3 - n.y < 5 ? -5 : -20, i.startScrolling(e, "y")) : n.y > o.bottom - 3 ? (c.top = n.y - o.bottom + 3 < 5 ? 5 : 20, i.startScrolling(e, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? s() : a()
					}
				})
			}
			var i = e("../../lib/helper"),
				o = e("../instances"),
				r = e("../update-geometry");
			t.exports = function(e) {
				var t = o.get(e);
				n(e, t)
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19
		}],
		16: [function(e, t) {
			"use strict";

			function n(e, t, n, r) {
				function a(n, i) {
					var o = e.scrollTop,
						r = e.scrollLeft,
						a = Math.abs(n),
						s = Math.abs(i);
					if (s > a) {
						if (0 > i && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return !t.settings.swipePropagation
					} else if (a > s && (0 > n && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !t.settings.swipePropagation;
					return !0
				}

				function s(t, n) {
					e.scrollTop = e.scrollTop - n, e.scrollLeft = e.scrollLeft - t, o(e)
				}

				function l() {
					b = !0
				}

				function c() {
					b = !1
				}

				function d(e) {
					return e.targetTouches ? e.targetTouches[0] : e
				}

				function u(e) {
					return e.targetTouches && 1 === e.targetTouches.length ? !0 : e.pointerType && "mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE ? !0 : !1
				}

				function f(e) {
					if (u(e)) {
						w = !0;
						var t = d(e);
						m.pageX = t.pageX, m.pageY = t.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), e.stopPropagation()
					}
				}

				function p(e) {
					if (!b && w && u(e)) {
						var t = d(e),
							n = {
								pageX: t.pageX,
								pageY: t.pageY
							},
							i = n.pageX - m.pageX,
							o = n.pageY - m.pageY;
						s(i, o), m = n;
						var r = (new Date).getTime(),
							l = r - g;
						l > 0 && (v.x = i / l, v.y = o / l, g = r), a(i, o) && (e.stopPropagation(), e.preventDefault())
					}
				}

				function h() {
					!b && w && (w = !1, clearInterval(y), y = setInterval(function() {
						return i.get(e) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(y) : (s(30 * v.x, 30 * v.y), v.x *= .8, void(v.y *= .8)) : void clearInterval(y)
					}, 10))
				}
				var m = {},
					g = 0,
					v = {},
					y = null,
					b = !1,
					w = !1;
				n && (t.event.bind(window, "touchstart", l), t.event.bind(window, "touchend", c), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", h)), r && (window.PointerEvent ? (t.event.bind(window, "pointerdown", l), t.event.bind(window, "pointerup", c), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", h)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", l), t.event.bind(window, "MSPointerUp", c), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", h)))
			}
			var i = e("../instances"),
				o = e("../update-geometry");
			t.exports = function(e, t, o) {
				var r = i.get(e);
				n(e, r, t, o)
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19
		}],
		17: [function(e, t) {
			"use strict";
			var n = e("../lib/class"),
				i = e("../lib/helper"),
				o = e("./instances"),
				r = e("./update-geometry"),
				a = e("./handler/click-rail"),
				s = e("./handler/drag-scrollbar"),
				l = e("./handler/keyboard"),
				c = e("./handler/mouse-wheel"),
				d = e("./handler/native-scroll"),
				u = e("./handler/selection"),
				f = e("./handler/touch");
			t.exports = function(e, t) {
				t = "object" == typeof t ? t : {}, n.add(e, "ps-container");
				var p = o.add(e);
				p.settings = i.extend(p.settings, t), a(e), s(e), c(e), d(e), u(e), (i.env.supportsTouch || i.env.supportsIePointer) && f(e, i.env.supportsTouch, i.env.supportsIePointer), p.settings.useKeyboard && l(e), r(e)
			}
		}, {
			"../lib/class": 2,
			"../lib/helper": 6,
			"./handler/click-rail": 10,
			"./handler/drag-scrollbar": 11,
			"./handler/keyboard": 12,
			"./handler/mouse-wheel": 13,
			"./handler/native-scroll": 14,
			"./handler/selection": 15,
			"./handler/touch": 16,
			"./instances": 18,
			"./update-geometry": 19
		}],
		18: [function(e, t, n) {
			"use strict";

			function i(e) {
				var t = this;
				t.settings = u.clone(l), t.containerWidth = null, t.containerHeight = null, t.contentWidth = null, t.contentHeight = null, t.isRtl = "rtl" === s.css(e, "direction"), t.isNegativeScroll = function() {
					var t = e.scrollLeft,
						n = null;
					return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
				}(), t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, t.event = new c, t.ownerDocument = e.ownerDocument || document, t.scrollbarXRail = s.appendTo(s.e("div", "ps-scrollbar-x-rail"), e), t.scrollbarX = s.appendTo(s.e("div", "ps-scrollbar-x"), t.scrollbarXRail), t.scrollbarXActive = null, t.scrollbarXWidth = null, t.scrollbarXLeft = null, t.scrollbarXBottom = u.toInt(s.css(t.scrollbarXRail, "bottom")), t.isScrollbarXUsingBottom = t.scrollbarXBottom === t.scrollbarXBottom, t.scrollbarXTop = t.isScrollbarXUsingBottom ? null : u.toInt(s.css(t.scrollbarXRail, "top")), t.railBorderXWidth = u.toInt(s.css(t.scrollbarXRail, "borderLeftWidth")) + u.toInt(s.css(t.scrollbarXRail, "borderRightWidth")), s.css(t.scrollbarXRail, "display", "block"), t.railXMarginWidth = u.toInt(s.css(t.scrollbarXRail, "marginLeft")) + u.toInt(s.css(t.scrollbarXRail, "marginRight")), s.css(t.scrollbarXRail, "display", ""), t.railXWidth = null, t.railXRatio = null, t.scrollbarYRail = s.appendTo(s.e("div", "ps-scrollbar-y-rail"), e), t.scrollbarY = s.appendTo(s.e("div", "ps-scrollbar-y"), t.scrollbarYRail), t.scrollbarYActive = null, t.scrollbarYHeight = null, t.scrollbarYTop = null, t.scrollbarYRight = u.toInt(s.css(t.scrollbarYRail, "right")), t.isScrollbarYUsingRight = t.scrollbarYRight === t.scrollbarYRight, t.scrollbarYLeft = t.isScrollbarYUsingRight ? null : u.toInt(s.css(t.scrollbarYRail, "left")), t.scrollbarYOuterWidth = t.isRtl ? u.outerWidth(t.scrollbarY) : null, t.railBorderYWidth = u.toInt(s.css(t.scrollbarYRail, "borderTopWidth")) + u.toInt(s.css(t.scrollbarYRail, "borderBottomWidth")), s.css(t.scrollbarYRail, "display", "block"), t.railYMarginHeight = u.toInt(s.css(t.scrollbarYRail, "marginTop")) + u.toInt(s.css(t.scrollbarYRail, "marginBottom")), s.css(t.scrollbarYRail, "display", ""), t.railYHeight = null, t.railYRatio = null
			}

			function o(e) {
				return "undefined" == typeof e.dataset ? e.getAttribute("data-ps-id") : e.dataset.psId
			}

			function r(e, t) {
				"undefined" == typeof e.dataset ? e.setAttribute("data-ps-id", t) : e.dataset.psId = t
			}

			function a(e) {
				"undefined" == typeof e.dataset ? e.removeAttribute("data-ps-id") : delete e.dataset.psId
			}
			var s = e("../lib/dom"),
				l = e("./default-setting"),
				c = e("../lib/event-manager"),
				d = e("../lib/guid"),
				u = e("../lib/helper"),
				f = {};
			n.add = function(e) {
				var t = d();
				return r(e, t), f[t] = new i(e), f[t]
			}, n.remove = function(e) {
				delete f[o(e)], a(e)
			}, n.get = function(e) {
				return f[o(e)]
			}
		}, {
			"../lib/dom": 3,
			"../lib/event-manager": 4,
			"../lib/guid": 5,
			"../lib/helper": 6,
			"./default-setting": 8
		}],
		19: [function(e, t) {
			"use strict";

			function n(e, t) {
				return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
			}

			function i(e, t) {
				var n = {
					width: t.railXWidth
				};
				n.left = t.isRtl ? t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, r.css(t.scrollbarXRail, n);
				var i = {
					top: e.scrollTop,
					height: t.railYHeight
				};
				t.isScrollbarYUsingRight ? i.right = t.isRtl ? t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : t.scrollbarYRight - e.scrollLeft : i.left = t.isRtl ? t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : t.scrollbarYLeft + e.scrollLeft, r.css(t.scrollbarYRail, i), r.css(t.scrollbarX, {
					left: t.scrollbarXLeft,
					width: t.scrollbarXWidth - t.railBorderXWidth
				}), r.css(t.scrollbarY, {
					top: t.scrollbarYTop,
					height: t.scrollbarYHeight - t.railBorderYWidth
				})
			}
			var o = e("../lib/class"),
				r = e("../lib/dom"),
				a = e("../lib/helper"),
				s = e("./instances");
			t.exports = function(e) {
				var t = s.get(e);
				t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
				var l;
				e.contains(t.scrollbarXRail) || (l = r.queryChildren(e, ".ps-scrollbar-x-rail"), l.length > 0 && l.forEach(function(e) {
					r.remove(e)
				}), r.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (l = r.queryChildren(e, ".ps-scrollbar-y-rail"), l.length > 0 && l.forEach(function(e) {
					r.remove(e)
				}), r.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = n(t, a.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = a.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : (t.scrollbarXActive = !1, t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = n(t, a.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = a.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : (t.scrollbarYActive = !1, t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0), t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), i(e, t), o[t.scrollbarXActive ? "add" : "remove"](e, "ps-active-x"), o[t.scrollbarYActive ? "add" : "remove"](e, "ps-active-y")
			}
		}, {
			"../lib/class": 2,
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18
		}],
		20: [function(e, t) {
			"use strict";
			var n = e("../lib/dom"),
				i = e("../lib/helper"),
				o = e("./instances"),
				r = e("./update-geometry");
			t.exports = function(e) {
				var t = o.get(e);
				t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.css(t.scrollbarXRail, "display", "block"), n.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(n.css(t.scrollbarXRail, "marginLeft")) + i.toInt(n.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(n.css(t.scrollbarYRail, "marginTop")) + i.toInt(n.css(t.scrollbarYRail, "marginBottom")), n.css(t.scrollbarXRail, "display", "none"), n.css(t.scrollbarYRail, "display", "none"), r(e), n.css(t.scrollbarXRail, "display", ""), n.css(t.scrollbarYRail, "display", ""))
			}
		}, {
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18,
			"./update-geometry": 19
		}]
	}, {}, [1]),
	function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
	}(function(e) {
		var t, n, i, o, r, a, s, l = "Close",
			c = "BeforeClose",
			d = "AfterClose",
			u = "BeforeAppend",
			f = "MarkupParse",
			p = "Open",
			h = "Change",
			m = "mfp",
			g = "." + m,
			v = "mfp-ready",
			y = "mfp-removing",
			b = "mfp-prevent-close",
			w = function() {},
			x = !!window.jQuery,
			_ = e(window),
			C = function(e, n) {
				t.ev.on(m + e + g, n)
			},
			S = function(t, n, i, o) {
				var r = document.createElement("div");
				return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
			},
			T = function(n, i) {
				t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
			},
			k = function(n) {
				return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
			},
			E = function() {
				e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
			},
			I = function() {
				var e = document.createElement("p").style,
					t = ["ms", "O", "Moz", "Webkit"];
				if (void 0 !== e.transition) return !0;
				for (; t.length;)
					if (t.pop() + "Transition" in e) return !0;
				return !1
			};
		w.prototype = {
			constructor: w,
			init: function() {
				var n = navigator.appVersion;
				t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = I(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
			},
			open: function(n) {
				i || (i = e(document.body));
				var r;
				if (n.isObj === !1) {
					t.items = n.items.toArray(), t.index = 0;
					var s, l = n.items;
					for (r = 0; l.length > r; r++)
						if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
							t.index = r;
							break
						}
				} else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
				if (t.isOpen) return void t.updateItemHTML();
				t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = S("bg").on("click" + g, function() {
					t.close()
				}), t.wrap = S("wrap").attr("tabindex", -1).on("click" + g, function(e) {
					t._checkIfClose(e.target) && t.close()
				}), t.container = S("container", t.wrap)), t.contentContainer = S("content"), t.st.preloader && (t.preloader = S("preloader", t.container, t.st.tLoading));
				var c = e.magnificPopup.modules;
				for (r = 0; c.length > r; r++) {
					var d = c[r];
					d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
				}
				T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (C(f, function(e, t, n, i) {
					n.close_replaceWith = k(i.type)
				}), a += " mfp-close-btn-in") : t.wrap.append(k())), t.st.alignTop && (a += " mfp-align-top"), t.wrap.css(t.fixedContentPos ? {
					overflow: t.st.overflowY,
					overflowX: "hidden",
					overflowY: t.st.overflowY
				} : {
					top: _.scrollTop(),
					position: "absolute"
				}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
					height: o.height(),
					position: "absolute"
				}), t.st.enableEscapeKey && o.on("keyup" + g, function(e) {
					27 === e.keyCode && t.close()
				}), _.on("resize" + g, function() {
					t.updateSize()
				}), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
				var u = t.wH = _.height(),
					h = {};
				if (t.fixedContentPos && t._hasScrollBar(u)) {
					var m = t._getScrollbarSize();
					m && (h.marginRight = m)
				}
				t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
				var y = t.st.mainClass;
				return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), T("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
					t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + g, t._onFocusIn)
				}, 16), t.isOpen = !0, t.updateSize(u), T(p), n
			},
			close: function() {
				t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() {
					t._close()
				}, t.st.removalDelay)) : t._close())
			},
			_close: function() {
				T(l);
				var n = y + " " + v + " ";
				if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
					var i = {
						marginRight: ""
					};
					t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
				}
				o.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
			},
			updateSize: function(e) {
				if (t.isIOS) {
					var n = document.documentElement.clientWidth / window.innerWidth,
						i = window.innerHeight * n;
					t.wrap.css("height", i), t.wH = i
				} else t.wH = e || _.height();
				t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
			},
			updateItemHTML: function() {
				var n = t.items[t.index];
				t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
				var i = n.type;
				if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
					var o = t.st[i] ? t.st[i].markup : !1;
					T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
				}
				r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
				var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
				t.appendContent(a, i), n.preloaded = !0, T(h, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
			},
			appendContent: function(e, n) {
				t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(k()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
			},
			parseEl: function(n) {
				var i, o = t.items[n];
				if (o.tagName ? o = {
						el: e(o)
					} : (i = o.type, o = {
						data: o,
						src: o.src
					}), o.el) {
					for (var r = t.types, a = 0; r.length > a; a++)
						if (o.el.hasClass("mfp-" + r[a])) {
							i = r[a];
							break
						}
					o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
				}
				return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
			},
			addGroup: function(e, n) {
				var i = function(i) {
					i.mfpEl = this, t._openClick(i, e, n)
				};
				n || (n = {});
				var o = "click.magnificPopup";
				n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
			},
			_openClick: function(n, i, o) {
				var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
				if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
					var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
					if (a)
						if (e.isFunction(a)) {
							if (!a.call(t)) return !0
						} else if (a > _.width()) return !0;
					n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
				}
			},
			updateStatus: function(e, i) {
				if (t.preloader) {
					n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
					var o = {
						status: e,
						text: i
					};
					T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
						e.stopImmediatePropagation()
					}), t.container.addClass("mfp-s-" + e), n = e
				}
			},
			_checkIfClose: function(n) {
				if (!e(n).hasClass(b)) {
					var i = t.st.closeOnContentClick,
						o = t.st.closeOnBgClick;
					if (i && o) return !0;
					if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
					if (n === t.content[0] || e.contains(t.content[0], n)) {
						if (i) return !0
					} else if (o && e.contains(document, n)) return !0;
					return !1
				}
			},
			_addClassToMFP: function(e) {
				t.bgOverlay.addClass(e), t.wrap.addClass(e)
			},
			_removeClassFromMFP: function(e) {
				this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
			},
			_hasScrollBar: function(e) {
				return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || _.height())
			},
			_setFocus: function() {
				(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
			},
			_onFocusIn: function(n) {
				return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
			},
			_parseMarkup: function(t, n, i) {
				var o;
				i.data && (n = e.extend(i.data, n)), T(f, [t, n, i]), e.each(n, function(e, n) {
					if (void 0 === n || n === !1) return !0;
					if (o = e.split("_"), o.length > 1) {
						var i = t.find(g + "-" + o[0]);
						if (i.length > 0) {
							var r = o[1];
							"replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
						}
					} else t.find(g + "-" + e).html(n)
				})
			},
			_getScrollbarSize: function() {
				if (void 0 === t.scrollbarSize) {
					var e = document.createElement("div");
					e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
				}
				return t.scrollbarSize
			}
		}, e.magnificPopup = {
			instance: null,
			proto: w.prototype,
			modules: [],
			open: function(t, n) {
				return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
			},
			close: function() {
				return e.magnificPopup.instance && e.magnificPopup.instance.close()
			},
			registerModule: function(t, n) {
				n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading..."
			}
		}, e.fn.magnificPopup = function(n) {
			E();
			var i = e(this);
			if ("string" == typeof n)
				if ("open" === n) {
					var o, r = x ? i.data("magnificPopup") : i[0].magnificPopup,
						a = parseInt(arguments[1], 10) || 0;
					r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
						mfpEl: o
					}, i, r)
				} else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
			else n = e.extend(!0, {}, n), x ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
			return i
		};
		var A, N, $, O = "inline",
			R = function() {
				$ && (N.after($.addClass(A)).detach(), $ = null)
			};
		e.magnificPopup.registerModule(O, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto: {
				initInline: function() {
					t.types.push(O), C(l + "." + O, function() {
						R()
					})
				},
				getInline: function(n, i) {
					if (R(), n.src) {
						var o = t.st.inline,
							r = e(n.src);
						if (r.length) {
							var a = r[0].parentNode;
							a && a.tagName && (N || (A = o.hiddenClass, N = S(A), A = "mfp-" + A), $ = r.after(N).detach().removeClass(A)), t.updateStatus("ready")
						} else t.updateStatus("error", o.tNotFound), r = e("<div>");
						return n.inlineElement = r, r
					}
					return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
				}
			}
		});
		var L, D = "ajax",
			P = function() {
				L && i.removeClass(L)
			},
			M = function() {
				P(), t.req && t.req.abort()
			};
		e.magnificPopup.registerModule(D, {
			options: {
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			proto: {
				initAjax: function() {
					t.types.push(D), L = t.st.ajax.cursor, C(l + "." + D, M), C("BeforeChange." + D, M)
				},
				getAjax: function(n) {
					L && i.addClass(L), t.updateStatus("loading");
					var o = e.extend({
						url: n.src,
						success: function(i, o, r) {
							var a = {
								data: i,
								xhr: r
							};
							T("ParseAjax", a), t.appendContent(e(a.data), D), n.finished = !0, P(), t._setFocus(), setTimeout(function() {
								t.wrap.addClass(v)
							}, 16), t.updateStatus("ready"), T("AjaxContentAdded")
						},
						error: function() {
							P(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
						}
					}, t.st.ajax.settings);
					return t.req = e.ajax(o), ""
				}
			}
		});
		var j, B = function(n) {
			if (n.data && void 0 !== n.data.title) return n.data.title;
			var i = t.st.image.titleSrc;
			if (i) {
				if (e.isFunction(i)) return i.call(t, n);
				if (n.el) return n.el.attr(i) || ""
			}
			return ""
		};
		e.magnificPopup.registerModule("image", {
			options: {
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto: {
				initImage: function() {
					var e = t.st.image,
						n = ".image";
					t.types.push("image"), C(p + n, function() {
						"image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
					}), C(l + n, function() {
						e.cursor && i.removeClass(e.cursor), _.off("resize" + g)
					}), C("Resize" + n, t.resizeImage), t.isLowIE && C("AfterChange", t.resizeImage)
				},
				resizeImage: function() {
					var e = t.currItem;
					if (e && e.img && t.st.image.verticalFit) {
						var n = 0;
						t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
					}
				},
				_onImageHasSize: function(e) {
					e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
				},
				findImageSize: function(e) {
					var n = 0,
						i = e.img[0],
						o = function(r) {
							j && clearInterval(j), j = setInterval(function() {
								return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(j), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
							}, r)
						};
					o(1)
				},
				getImage: function(n, i) {
					var o = 0,
						r = function() {
							n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
						},
						a = function() {
							n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
						},
						s = t.st.image,
						l = i.find(".mfp-img");
					if (l.length) {
						var c = document.createElement("img");
						c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
					}
					return t._parseMarkup(i, {
						title: B(n),
						img_replaceWith: n.img
					}, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
				}
			}
		});
		var H, W = function() {
			return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
		};
		e.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function(e) {
					return e.is("img") ? e : e.find("img")
				}
			},
			proto: {
				initZoom: function() {
					var e, n = t.st.zoom,
						i = ".zoom";
					if (n.enabled && t.supportsTransition) {
						var o, r, a = n.duration,
							s = function(e) {
								var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									i = "all " + n.duration / 1e3 + "s " + n.easing,
									o = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									r = "transition";
								return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
							},
							d = function() {
								t.content.css("visibility", "visible")
							};
						C("BuildControls" + i, function() {
							if (t._allowZoom()) {
								if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void d();
								r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
									r.css(t._getOffset(!0)), o = setTimeout(function() {
										d(), setTimeout(function() {
											r.remove(), e = r = null, T("ZoomAnimationEnded")
										}, 16)
									}, a)
								}, 16)
							}
						}), C(c + i, function() {
							if (t._allowZoom()) {
								if (clearTimeout(o), t.st.removalDelay = a, !e) {
									if (e = t._getItemToZoom(), !e) return;
									r = s(e)
								}
								r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
									r.css(t._getOffset())
								}, 16)
							}
						}), C(l + i, function() {
							t._allowZoom() && (d(), r && r.remove(), e = null)
						})
					}
				},
				_allowZoom: function() {
					return "image" === t.currItem.type
				},
				_getItemToZoom: function() {
					return t.currItem.hasSize ? t.currItem.img : !1
				},
				_getOffset: function(n) {
					var i;
					i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
					var o = i.offset(),
						r = parseInt(i.css("padding-top"), 10),
						a = parseInt(i.css("padding-bottom"), 10);
					o.top -= e(window).scrollTop() - r;
					var s = {
						width: i.width(),
						height: (x ? i.innerHeight() : i[0].offsetHeight) - a - r
					};
					return W() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
				}
			}
		});
		var F = "iframe",
			z = "//about:blank",
			Y = function(e) {
				if (t.currTemplate[F]) {
					var n = t.currTemplate[F].find("iframe");
					n.length && (e || (n[0].src = z), t.isIE8 && n.css("display", e ? "block" : "none"))
				}
			};
		e.magnificPopup.registerModule(F, {
			options: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
				srcAction: "iframe_src",
				patterns: {
					youtube: {
						index: "youtube.com",
						id: "v=",
						src: "//www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				}
			},
			proto: {
				initIframe: function() {
					t.types.push(F), C("BeforeChange", function(e, t, n) {
						t !== n && (t === F ? Y() : n === F && Y(!0))
					}), C(l + "." + F, function() {
						Y()
					})
				},
				getIframe: function(n, i) {
					var o = n.src,
						r = t.st.iframe;
					e.each(r.patterns, function() {
						return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
					});
					var a = {};
					return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
				}
			}
		});
		var X = function(e) {
				var n = t.items.length;
				return e > n - 1 ? e - n : 0 > e ? n + e : e
			},
			q = function(e, t, n) {
				return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
			};
		e.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto: {
				initGallery: function() {
					var n = t.st.gallery,
						i = ".mfp-gallery",
						r = Boolean(e.fn.mfpFastClick);
					return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", C(p + i, function() {
						n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
							return t.items.length > 1 ? (t.next(), !1) : void 0
						}), o.on("keydown" + i, function(e) {
							37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
						})
					}), C("UpdateStatus" + i, function(e, n) {
						n.text && (n.text = q(n.text, t.currItem.index, t.items.length))
					}), C(f + i, function(e, i, o, r) {
						var a = t.items.length;
						o.counter = a > 1 ? q(n.tCounter, r.index, a) : ""
					}), C("BuildControls" + i, function() {
						if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
							var i = n.arrowMarkup,
								o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(b),
								a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(b),
								s = r ? "mfpFastClick" : "click";
							o[s](function() {
								t.prev()
							}), a[s](function() {
								t.next()
							}), t.isIE7 && (S("b", o[0], !1, !0), S("a", o[0], !1, !0), S("b", a[0], !1, !0), S("a", a[0], !1, !0)), t.container.append(o.add(a))
						}
					}), C(h + i, function() {
						t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
							t.preloadNearbyImages(), t._preloadTimeout = null
						}, 16)
					}), void C(l + i, function() {
						o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
					})) : !1
				},
				next: function() {
					t.direction = !0, t.index = X(t.index + 1), t.updateItemHTML()
				},
				prev: function() {
					t.direction = !1, t.index = X(t.index - 1), t.updateItemHTML()
				},
				goTo: function(e) {
					t.direction = e >= t.index, t.index = e, t.updateItemHTML()
				},
				preloadNearbyImages: function() {
					var e, n = t.st.gallery.preload,
						i = Math.min(n[0], t.items.length),
						o = Math.min(n[1], t.items.length);
					for (e = 1;
						(t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
					for (e = 1;
						(t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
				},
				_preloadItem: function(n) {
					if (n = X(n), !t.items[n].preloaded) {
						var i = t.items[n];
						i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
							i.hasSize = !0
						}).on("error.mfploader", function() {
							i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
						}).attr("src", i.src)), i.preloaded = !0
					}
				}
			}
		});
		var U = "retina";
		e.magnificPopup.registerModule(U, {
				options: {
					replaceSrc: function(e) {
						return e.src.replace(/\.\w+$/, function(e) {
							return "@2x" + e
						})
					},
					ratio: 1
				},
				proto: {
					initRetina: function() {
						if (window.devicePixelRatio > 1) {
							var e = t.st.retina,
								n = e.ratio;
							n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + U, function(e, t) {
								t.img.css({
									"max-width": t.img[0].naturalWidth / n,
									width: "100%"
								})
							}), C("ElementParse." + U, function(t, i) {
								i.src = e.replaceSrc(i, n)
							}))
						}
					}
				}
			}),
			function() {
				var t = 1e3,
					n = "ontouchstart" in window,
					i = function() {
						_.off("touchmove" + r + " touchend" + r)
					},
					o = "mfpFastClick",
					r = "." + o;
				e.fn.mfpFastClick = function(o) {
					return e(this).each(function() {
						var a, s = e(this);
						if (n) {
							var l, c, d, u, f, p;
							s.on("touchstart" + r, function(e) {
								u = !1, p = 1, f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = f.clientX, d = f.clientY, _.on("touchmove" + r, function(e) {
									f = e.originalEvent ? e.originalEvent.touches : e.touches, p = f.length, f = f[0], (Math.abs(f.clientX - c) > 10 || Math.abs(f.clientY - d) > 10) && (u = !0, i())
								}).on("touchend" + r, function(e) {
									i(), u || p > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
										a = !1
									}, t), o())
								})
							})
						}
						s.on("click" + r, function() {
							a || o()
						})
					})
				}, e.fn.destroyMfpFastClick = function() {
					e(this).off("touchstart" + r + " click" + r), n && _.off("touchmove" + r + " touchend" + r)
				}
			}(), E()
	}), window.deviceType = $(window).width() >= 800 ? "desktop" : "mobile", $(window).resize(function() {
		window.deviceType = $(window).width() >= 800 ? "desktop" : "mobile"
	}), $(document).ready(function() {
		var e = $(".J_fixedTools");
		$(window).scrollTop() > 200 && !e.hasClass("show") ? e.addClass("show") : $(window).scrollTop() <= 200 && e.hasClass("show") && e.removeClass("show"), $(window).scroll(function() {
			$(window).scrollTop() > 200 && !e.hasClass("show") ? e.addClass("show") : $(window).scrollTop() <= 200 && e.hasClass("show") && e.removeClass("show")
		}), e.find(".J_up").click(function(e) {
			e.preventDefault(), $("html, body").animate({
				scrollTop: 0
			}, 300)
		});
		var t = $(".J_qrWrapper");
		t.mouseleave(function() {
			setTimeout(function() {
				t.removeClass("extend")
			}, 500)
		}), $(".qr-min a", t).click(function() {
			t.addClass("extend")
		}), t.find(".tab").each(function(e) {
			$(this).click(function() {
				t.find(".qr-group .active").removeClass("active"), $(this).addClass("active"), t.find(".panel").eq(e).addClass("active")
			})
		})
	}), initLazyLoad(),
	function() {
		var e = function() {
				var t = [].slice.call(arguments);
				return t.push(e.options), 1 == arguments.length ? e.compile.apply(e, t) : arguments.length >= 2 ? e.to_html.apply(e, t) : void 0
			},
			t = {
				escapehash: {
					"<": "&lt;",
					">": "&gt;",
					"&": "&amp;",
					'"': "&quot;",
					"'": "&#x27;",
					"/": "&#x2f;"
				},
				escapereplace: function(e) {
					return t.escapehash[e]
				},
				escaping: function(e) {
					return "string" != typeof e ? e : e.replace(/[&<>"]/gim, this.escapereplace)
				},
				detection: function(e) {
					return "undefined" == typeof e ? "" : e
				}
			},
			n = function(e) {
				if (console) {
					if (console.warn) return void console.warn(e);
					if (console.log) return void console.log(e)
				}
				throw e
			},
			i = function(e, t) {
				if (e = e !== Object(e) ? {} : e, e.__proto__) return e.__proto__ = t, e;
				var n = function() {},
					i = new(n.prototype = t, n);
				for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o]);
				return i
			};
		e.__cache = {}, e.version = "0.4.0-dev", e.settings = {
			forstart: /{@each\s*([\w\.]*?)\s*as\s*(\w*?)\s*(,\s*\w*?)?}/gim,
			forend: /{@\/each}/gim,
			ifstart: /{@if\s*([^}]*?)}/gim,
			ifend: /{@\/if}/gim,
			elsestart: /{@else}/gim,
			elseifstart: /{@else if\s*([^}]*?)}/gim,
			interpolate: /\${([\s\S]+?)}/gim,
			noneencode: /\$\${([\s\S]+?)}/gim,
			inlinecomment: /{#[^}]*?}/gim,
			rangestart: /{@each\s*(\w*?)\s*in\s*range\((\d+?),(\d+?)\)}/gim
		}, e.options = {
			cache: !0,
			strip: !0,
			errorhandling: !0,
			detection: !0,
			_method: i({
				__escapehtml: t,
				__throw: n
			}, this)
		}, e.set = function(e, t) {
			if (2 === arguments.length) return void(this.options[e] = t);
			if (e === Object(e))
				for (var n in e) e.hasOwnProperty(n) && (this.options[n] = e[n])
		}, e.register = function(e, t) {
			var n = this.options._method;
			return n.hasOwnProperty(e) ? !1 : n[e] = t
		}, e.unregister = function(e) {
			var t = this.options._method;
			return t.hasOwnProperty(e) ? delete t[e] : void 0
		}, e.template = function(t) {
			var n = this;
			this.options = t, this.__interpolate = function(e, t, n) {
				var i = e.split("|"),
					o = "";
				return i.length > 1 && (e = i.shift(), o = "_method." + i.shift()), "<%= " + (t ? "_method.__escapehtml.escaping" : "") + "(" + (n && n.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + o + "(" + e + "))) %>"
			}, this.__removeShell = function(t, i) {
				var o = 0;
				return t = t.replace(e.settings.forstart, function(e, t, n, i) {
					var n = n || "value",
						i = i && i.substr(1),
						r = "i" + o++;
					return "<% for(var " + r + "=0, l" + r + "=" + t + ".length;" + r + "<l" + r + ";" + r + "++) {var " + n + "=" + t + "[" + r + "];" + (i ? "var " + i + "=" + r + ";" : "") + " %>"
				}).replace(e.settings.forend, "<% } %>").replace(e.settings.ifstart, function(e, t) {
					return "<% if(" + t + ") { %>"
				}).replace(e.settings.ifend, "<% } %>").replace(e.settings.elsestart, function() {
					return "<% } else { %>"
				}).replace(e.settings.elseifstart, function(e, t) {
					return "<% } else if(" + t + ") { %>"
				}).replace(e.settings.noneencode, function(e, t) {
					return n.__interpolate(t, !1, i)
				}).replace(e.settings.interpolate, function(e, t) {
					return n.__interpolate(t, !0, i)
				}).replace(e.settings.inlinecomment, "").replace(e.settings.rangestart, function(e, t, n, i) {
					var r = "j" + o++;
					return "<% for(var " + r + "=0;" + r + "<" + (i - n) + ";" + r + "++) {var " + t + "=" + r + "; %>"
				}), i && i.errorhandling === !1 || (t = "<% try { %>" + t, t += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), t
			}, this.__toNative = function(e, t) {
				return this.__convert(e, !t || t.strip)
			}, this.__lexicalAnalyze = function(t) {
				var n = [],
					i = "",
					o = function(e, t) {
						if (Array.prototype.indexOf && e.indexOf === Array.prototype.indexOf) return e.indexOf(t);
						for (var n = 0; n < e.length; n++)
							if (e[n] === t) return n;
						return -1
					},
					r = function(e, t) {
						t = t.match(/\w+/gim)[0], -1 === o(n, t) && n.push(t)
					};
				t.replace(e.settings.forstart, r).replace(e.settings.interpolate, r).replace(e.settings.ifstart, r);
				for (var a = 0; a < n.length; a++) i += "var " + n[a] + "=_." + n[a] + ";";
				return "<% " + i + " %>"
			}, this.__convert = function(e, t) {
				var n = [].join("");
				return n += "'use strict';", n += "var _=_||{};", n += "var _out='';_out+='", n += t !== !1 ? e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : e.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
			}, this.parse = function(e, t) {
				var o = this;
				return t && t.loose === !1 || (e = this.__lexicalAnalyze(e) + e), e = this.__removeShell(e, t), e = this.__toNative(e, t), this._render = new Function("_, _method", e), this.render = function(e, t) {
					return t && t === n.options._method || (t = i(t, n.options._method)), o._render.call(this, e, t)
				}, this
			}
		}, e.compile = function(e, t) {
			t && t === this.options || (t = i(t, this.options));
			try {
				var o = this.__cache[e] ? this.__cache[e] : new this.template(this.options).parse(e, t);
				return t && t.cache === !1 || (this.__cache[e] = o), o
			} catch (r) {
				return n("Juicer Compile Exception: " + r.message), {
					render: function() {}
				}
			}
		}, e.to_html = function(e, t, n) {
			return n && n === this.options || (n = i(n, this.options)), this.compile(e, n).render(t, n._method)
		}, "undefined" != typeof module && module.exports ? module.exports = e : this.juicer = e
	}(), $(function() {
		window.InitWeixinShare = function(e) {
			var t = "xcvdsjlk$klsc",
				n = parseInt((new Date).getTime() / 1e3);
			$.get("//rong.36kr.com/api/weixin/token?_=" + $.now(), {
				url: location.href.replace(/#.*$/, ""),
				timestamp: n,
				noncestr: t
			}, function(i) {
				wx.config({
					debug: !1,
					appId: "wxd3ea1a9a22815a8c",
					timestamp: n,
					nonceStr: t,
					signature: i.data.token,
					jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
				}), wx.ready(function() {
					wx.onMenuShareTimeline({
						title: e.shareTitle,
						link: location.href,
						imgUrl: e.shareImg || "https://krplus-pic.b0.upaiyun.com/36kr_new_logo.jpg",
						success: function() {},
						cancel: function() {}
					}), wx.onMenuShareAppMessage({
						title: e.shareTitle,
						desc: e.shareDesc,
						link: location.href,
						imgUrl: e.shareImg || "https://krplus-pic.b0.upaiyun.com/36kr_new_logo.jpg",
						type: "link",
						dataUrl: "",
						success: function() {},
						cancel: function() {}
					})
				}), wx.error(function() {})
			}, "jsonp")
		}
	}),
	function() {
		window.reply_comment = function(e, t) {
			var n, i, o;
			return n = $(t).parents(".comment_details").attr("data-comment-id"), o = $(t).parents(".comment_details").find(".avatar img").attr("alt"), o = o.replace("36\u6c2a\u7528\u6237", ""), i = "\u56de\u590d\uff1a" + o + "<span onclick='delete_reply_comment(this)'>X</span>", e.find("form.comment_form input.re_comment_id").remove(), e.find("form.comment_form").append("<input class='re_comment_id' type='hidden' name='comment[parent_id]' value='" + n + "'>"), e.find("form.comment_form span.reply_message").attr("class", "reply_message reply_msg"), e.find("form.comment_form span.reply_message").html(i), e.find("textarea#post").focus()
		}, window.delete_reply_comment = function(e) {
			return $(e).parent().html(""), $("form.comment_form input.re_comment_id").remove(), $("form.comment_form span.reply_message").attr("class", "reply_message")
		}, window.bind_comment = function() {
			return $("body").delegate(".comment-submit-btn", "click", function(e) {
				var t, n, i, o, r;
				o = $(this).data("post-id"), i = $("#article-section-" + o), t = i.find("form.comment_form #post").val(), n = i.find("form.comment_form"), r = i.find(".single-post-comment__form").data("uid"), r && "" !== t && $.ajax({
					type: n.attr("method"),
					url: n.attr("action"),
					data: n.serialize() + "&current_maxid=" + (i.find(".comment_details").data("comment-id") || 0),
					beforeSend: function() {
						$(e).attr("diabled", "true"), i.find("span.ladda-label").html("\u63d0\u4ea4\u8bc4\u8bba...")
					},
					success: function(e) {
						i.find(".single-post-comment__comments").prepend(e), i.find(".comment_total_count").text(i.find(".comments_total_count").data("total-count") || 0), i.find(".comment_form_count").text(i.find(".comments_total_count").data("total-count") || 0), i.find("#error_msg").text(i.find(".comments_total_count").data("message")), "" === i.find(".comments_total_count").data("message") && n[0].reset(), i.find("span.reply_message span").trigger("click"), i.find(".timeago").timeago(), initLazyLoad()
					},
					complete: function() {
						i.find(e).removeAttr("diabled"), i.find("span.ladda-label").html("\u63d0\u4ea4\u8bc4\u8bba")
					}
				})
			})
		}, window.commentsLoadComplete = function(e) {
			var t;
			e.find(".timeago").timeago(), e.find(".comment_total_count").text(e.find(".comments_total_count").data("total-count") || 0), e.find(".comment_form_count").text(e.find(".comments_total_count").data("total-count") || 0), t = $('a[name="' + window.location.hash + '"]'), t.length > 0 && e.find("body").animate({
				scrollTop: e.find('a[name="' + window.location.hash + '"]').offset().top
			}, 600)
		}, window.check_comment_submit_btn = function(e) {
			var t;
			t = e.find(".single-post-comment__form").data("uid"), t || $("textarea#post.textarea, button.ladda-button.comment-submit-btn").attr("disabled", "disabled")
		}
	}.call(this),
	function() {
		jQuery(function() {
			return window.ga ? (ga("send", "pageview"), $("#headline_top").click(function() {
				return ga("send", "event", "link", "headline#top", ga_user_id)
			}), $("#headline_one").click(function() {
				return ga("send", "event", "link", "headline#one", ga_user_id)
			}), $("#headline_two").click(function() {
				return ga("send", "event", "link", "headline#two", ga_user_id)
			}), $("#headline_three").click(function() {
				return ga("send", "event", "link", "headline#three", ga_user_id)
			}), $("#headline_four").click(function() {
				return ga("send", "event", "link", "headline#four", ga_user_id)
			}), $("#headline_five").click(function() {
				return ga("send", "event", "link", "headline#five", ga_user_id)
			}), $("a[id^=column_header_]").click(function() {
				return ga("send", "event", "link", $(this).attr("id").replace("header_", "header#"), ga_user_id)
			}), $(".J_login").click(function() {
				return ga("send", "event", "link", "login#top_nav", ga_user_id)
			}), $(".login_before_comment").click(function() {
				return ga("send", "event", "link", "login#comment", ga_user_id)
			}), $(".J_searchForm input").focus(function() {
				return ga("send", "event", "link", "search#focus", ga_user_id)
			}), $("#info_flows_next_link").click(function() {
				return ga("send", "event", "link", "paginate#info_flows#next", ga_user_id)
			}), $("#columns_next_link").click(function() {
				return ga("send", "event", "link", "paginate#columns#next", ga_user_id)
			}), $("#search_next_link").click(function() {
				return ga("send", "event", "link", "paginate#search#next", ga_user_id)
			}), $("#user_domain_next_link").click(function() {
				return ga("send", "event", "link", "paginate#newsflashes#next", ga_user_id)
			}), $(".newsflashes_next_link").click(function() {
				return ga("send", "event", "link", "paginate#product_notes#next", ga_user_id)
			}), $(".product_notes_next_link").click(function() {
				return ga("send", "event", "link", "paginate#user_domain#next", ga_user_id)
			}), $("#tag_next_link").click(function() {
				return ga("send", "event", "link", "paginate#tag#next", ga_user_id)
			}), $(".info_flow_news_title").click(function() {
				return ga("send", "event", "link", "news#info_flows#title", ga_user_id)
			}), $(".info_flow_news_image").click(function() {
				return ga("send", "event", "link", "news#info_flows#image", ga_user_id)
			}), $(".J_logout").click(function() {
				return ga("send", "event", "link", "logout#top_nav", ga_user_id)
			}), $(".app-download").hover(function() {
				return ga("send", "event", "link", "app_download#top_nav", ga_user_id)
			}), $(".app_download_footer").click(function() {
				return ga("send", "event", "link", "app_download#footer", ga_user_id)
			}), $(".compiled.rong-company-link").click(function() {
				return ga("send", "event", "link", "rong-company-link#click", ga_user_id)
			}), $(".compiled.rong-company-link").hover(function() {
				return ga("send", "event", "hover", "rong-company-link#hover", ga_user_id)
			}), $(".newsflashes_nav").click(function() {
				return ga("send", "event", "link", "aside-nav#newsflashes", ga_user_id)
			}), $(".next_nav").click(function() {
				return ga("send", "event", "link", "aside-nav#product_notes", ga_user_id)
			}), $(".J_up").click(function() {
				return ga("send", "event", "link", "common#arrow-up", ga_user_id)
			})) : void 0
		})
	}.call(this),
	function() {
		var AsymcRender;
		AsymcRender = function() {
			function AsymcRender(e) {
				this.stack = e, this.stack = this.stack ? this.stack.find("div[async]") : $("div[async]")
			}
			return AsymcRender.prototype.render = function() {
				return $.each(this.stack, function(key, obj) {
					return $.get($(obj).attr("async-url"), {}, function(data) {
						return $(obj).hide().html(data).fadeIn(1500), $(obj).attr("async-callback") ? eval($(obj).attr("async-callback")) : void 0
					})
				})
			}, AsymcRender
		}(), window.async_render = function(e) {
			var t;
			return null == e && (e = null), t = null, t = null === e ? new AsymcRender : new AsymcRender(e), t.render()
		}, jQuery(function() {
			return window.async_render()
		})
	}.call(this),
	function() {
		var e;
		e = function() {
			function e(e, t) {
				this.startInterval = 6e4, this.init(e, t)
			}
			return e.prototype.init = function(e, t) {
				return this.$element = $(e), this.options = $.extend({}, $.fn.timeago.defaults, t), this.updateTime(), this.startTimer()
			}, e.prototype.startTimer = function() {
				var e;
				return e = this, this.interval = setInterval(function() {
					return e.refresh()
				}, this.startInterval)
			}, e.prototype.stopTimer = function() {
				return clearInterval(this.interval)
			}, e.prototype.restartTimer = function() {
				return this.stopTimer(), this.startTimer()
			}, e.prototype.refresh = function() {
				return this.updateTime(), this.updateInterval()
			}, e.prototype.updateTime = function() {
				var e;
				return e = this, this.$element.findAndSelf(this.options.selector).each(function() {
					var t;
					return t = e.timeAgoInWords($(this).attr(e.options.attr)), $(this).html(t)
				})
			}, e.prototype.updateInterval = function() {
				var e, t, n, i;
				if (this.$element.findAndSelf(this.options.selector).length > 0) {
					if ("up" === this.options.dir ? e = ":first" : "down" === this.options.dir && (e = ":last"), i = this.$element.findAndSelf(this.options.selector).filter(e).attr(this.options.attr), t = this.parse(i), n = this.getTimeDistanceInMinutes(t), n >= 0 && 44 >= n && 6e4 !== this.startInterval) return this.startInterval = 6e4, this.restartTimer();
					if (n >= 45 && 89 >= n && 132e4 !== this.startInterval) return this.startInterval = 132e4, this.restartTimer();
					if (n >= 90 && 2519 >= n && 18e5 !== this.startInterval) return this.startInterval = 18e5, this.restartTimer();
					if (n >= 2520 && 432e5 !== this.startInterval) return this.startInterval = 432e5, this.restartTimer()
				}
			}, e.prototype.timeAgoInWords = function(e) {
				var t;
				return t = this.parse(e), "" + this.options.lang.prefixes.ago + this.distanceOfTimeInWords(t) + this.options.lang.suffix
			}, e.prototype.parse = function(e) {
				var t;
				return t = $.trim(e), t = t.replace(/\.\d\d\d+/, ""), t = t.replace(/-/, "/").replace(/-/, "/"), t = t.replace(/T/, " ").replace(/Z/, " UTC"), t = t.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(t)
			}, e.prototype.getTimeDistanceInMinutes = function(e) {
				var t;
				return t = (new Date).getTime() - e.getTime(), Math.round(Math.abs(t) / 1e3 / 60)
			}, e.prototype.distanceOfTimeInWords = function(e) {
				var t;
				return t = this.getTimeDistanceInMinutes(e), 0 === t ? "" + this.options.lang.prefixes.lt + " " + this.options.lang.units.minute : 1 === t ? "1 " + this.options.lang.units.minute : t >= 2 && 44 >= t ? "" + t + " " + this.options.lang.units.minutes : t >= 45 && 89 >= t ? "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.hour : t >= 90 && 1439 >= t ? "" + this.options.lang.prefixes.about + " " + Math.round(t / 60) + " " + this.options.lang.units.hours : t >= 1440 && 2519 >= t ? "1 " + this.options.lang.units.day : t >= 2520 && 43199 >= t ? "" + Math.round(t / 1440) + " " + this.options.lang.units.days : t >= 43200 && 86399 >= t ? "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.month : t >= 86400 && 525599 >= t ? "" + Math.round(t / 43200) + " " + this.options.lang.units.months : t >= 525600 && 655199 >= t ? "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.year : t >= 655200 && 914399 >= t ? "" + this.options.lang.prefixes.over + " 1 " + this.options.lang.units.year : t >= 914400 && 1051199 >= t ? "" + this.options.lang.prefixes.almost + " 2 " + this.options.lang.units.years : "" + this.options.lang.prefixes.about + " " + Math.round(t / 525600) + " " + this.options.lang.units.years
			}, e
		}(), $.fn.timeago = function(t) {
			return null == t && (t = {}), this.each(function() {
				var n, i;
				return n = $(this), i = n.data("timeago"), i ? "string" == typeof t ? i[t]() : void 0 : n.data("timeago", new e(this, t))
			})
		}, $.fn.findAndSelf = function(e) {
			return this.find(e).add(this.filter(e))
		}, $.fn.timeago.Constructor = e, $.fn.timeago.defaults = {
			selector: "time.timeago",
			attr: "datetime",
			dir: "up",
			lang: {
				units: {
					second: "second",
					seconds: "seconds",
					minute: "minute",
					minutes: "minutes",
					hour: "hour",
					hours: "hours",
					day: "day",
					days: "days",
					month: "month",
					months: "months",
					year: "year",
					years: "years"
				},
				prefixes: {
					lt: "less than a",
					about: "about",
					over: "over",
					almost: "almost",
					ago: ""
				},
				suffix: " ago"
			}
		}
	}.call(this),
	function() {
		$.fn.timeago.defaults.lang = {
			units: {
				second: "\u79d2",
				seconds: "\u79d2",
				minute: "\u5206\u949f",
				minutes: "\u5206\u949f",
				hour: "\u5c0f\u65f6",
				hours: "\u5c0f\u65f6",
				day: "\u5929",
				days: "\u5929",
				month: "\u6708",
				months: "\u6708",
				year: "\u5e74",
				years: "\u5e74"
			},
			prefixes: {
				lt: "1",
				about: "",
				over: "",
				almost: "",
				ago: ""
			},
			suffix: "\u524d"
		}
	}.call(this), ! function(e, t) {
		"object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
	}(this, function(e) {
		var t = function(e, t) {
				var n, i = document.createElement("canvas");
				e.appendChild(i), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
				var o = i.getContext("2d");
				i.width = i.height = t.size;
				var r = 1;
				window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((-.5 + t.rotate / 180) * Math.PI);
				var a = (t.size - t.lineWidth) / 2;
				t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function() {
					return +new Date
				};
				var s = function(e, t, n) {
						n = Math.min(Math.max(-1, n || 0), 1);
						var i = 0 >= n ? !0 : !1;
						o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * n, i), o.strokeStyle = e, o.lineWidth = t, o.stroke()
					},
					l = function() {
						var e, n;
						o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
						for (var i = 24; i > 0; --i) i % 6 === 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), o.fillRect(-t.size / 2 + e, 0, n, 1), o.rotate(Math.PI / 12);
						o.restore()
					},
					c = function() {
						return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
							window.setTimeout(e, 1e3 / 60)
						}
					}(),
					d = function() {
						t.scaleColor && l(), t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
					};
				this.getCanvas = function() {
					return i
				}, this.getCtx = function() {
					return o
				}, this.clear = function() {
					o.clearRect(t.size / -2, t.size / -2, t.size, t.size)
				}, this.draw = function(e) {
					t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (d(), n = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), d()) : this.clear(), o.lineCap = t.lineCap;
					var i;
					i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(i, t.lineWidth, e / 100)
				}.bind(this), this.animate = function(e, n) {
					var i = Date.now();
					t.onStart(e, n);
					var o = function() {
						var r = Math.min(Date.now() - i, t.animate.duration),
							a = t.easing(this, r, e, n - e, t.animate.duration);
						this.draw(a), t.onStep(e, n, a), r >= t.animate.duration ? t.onStop(e, n) : c(o)
					}.bind(this);
					c(o)
				}.bind(this)
			},
			n = function(e, n) {
				var i = {
					barColor: "#ef1e25",
					trackColor: "#f9f9f9",
					scaleColor: "#dfe0e0",
					scaleLength: 5,
					lineCap: "round",
					lineWidth: 3,
					trackWidth: void 0,
					size: 110,
					rotate: 0,
					animate: {
						duration: 1e3,
						enabled: !0
					},
					easing: function(e, t, n, i, o) {
						return t /= o / 2, 1 > t ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
					},
					onStart: function() {},
					onStep: function() {},
					onStop: function() {}
				};
				if ("undefined" != typeof t) i.renderer = t;
				else {
					if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
					i.renderer = SVGRenderer
				}
				var o = {},
					r = 0,
					a = function() {
						this.el = e, this.options = o;
						for (var t in i) i.hasOwnProperty(t) && (o[t] = n && "undefined" != typeof n[t] ? n[t] : i[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
						o.easing = "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? jQuery.easing[o.easing] : i.easing, "number" == typeof o.animate && (o.animate = {
							duration: o.animate,
							enabled: !0
						}), "boolean" != typeof o.animate || o.animate || (o.animate = {
							duration: 1e3,
							enabled: o.animate
						}), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
					}.bind(this);
				this.update = function(e) {
					return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
				}.bind(this), this.disableAnimation = function() {
					return o.animate.enabled = !1, this
				}, this.enableAnimation = function() {
					return o.animate.enabled = !0, this
				}, a()
			};
		e.fn.easyPieChart = function(t) {
			return this.each(function() {
				var i;
				e.data(this, "easyPieChart") || (i = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, i)))
			})
		}
	}), ! function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
	}(function(e) {
		function t(t) {
			var a = t || window.event,
				s = l.call(arguments, 1),
				c = 0,
				u = 0,
				f = 0,
				p = 0,
				h = 0,
				m = 0;
			if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (f = -1 * a.detail), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * f, f = 0), c = 0 === f ? u : f, "deltaY" in a && (f = -1 * a.deltaY, c = f), "deltaX" in a && (u = a.deltaX, 0 === f && (c = -1 * u)), 0 !== f || 0 !== u) {
				if (1 === a.deltaMode) {
					var g = e.data(this, "mousewheel-line-height");
					c *= g, f *= g, u *= g
				} else if (2 === a.deltaMode) {
					var v = e.data(this, "mousewheel-page-height");
					c *= v, f *= v, u *= v
				}
				if (p = Math.max(Math.abs(f), Math.abs(u)), (!r || r > p) && (r = p, i(a, p) && (r /= 40)), i(a, p) && (c /= 40, u /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), d.settings.normalizeOffset && this.getBoundingClientRect) {
					var y = this.getBoundingClientRect();
					h = t.clientX - y.left, m = t.clientY - y.top
				}
				return t.deltaX = u, t.deltaY = f, t.deltaFactor = r, t.offsetX = h, t.offsetY = m, t.deltaMode = 0, s.unshift(t, c, u, f), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
			}
		}

		function n() {
			r = null
		}

		function i(e, t) {
			return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
		}
		var o, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			l = Array.prototype.slice;
		if (e.event.fixHooks)
			for (var c = a.length; c;) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
		var d = e.event.special.mousewheel = {
			version: "3.1.12",
			setup: function() {
				if (this.addEventListener)
					for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
				else this.onmousewheel = t;
				e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
			},
			teardown: function() {
				if (this.removeEventListener)
					for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
				else this.onmousewheel = null;
				e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
			},
			getLineHeight: function(t) {
				var n = e(t),
					i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
				return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
			},
			getPageHeight: function(t) {
				return e(t).height()
			},
			settings: {
				adjustOldDeltas: !0,
				normalizeOffset: !0
			}
		};
		e.fn.extend({
			mousewheel: function(e) {
				return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
			},
			unmousewheel: function(e) {
				return this.unbind("mousewheel", e)
			}
		})
	}), ! function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
	}(function(e) {
		function t(t) {
			var a = t || window.event,
				s = l.call(arguments, 1),
				c = 0,
				u = 0,
				f = 0,
				p = 0,
				h = 0,
				m = 0;
			if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (f = -1 * a.detail), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * f, f = 0), c = 0 === f ? u : f, "deltaY" in a && (f = -1 * a.deltaY, c = f), "deltaX" in a && (u = a.deltaX, 0 === f && (c = -1 * u)), 0 !== f || 0 !== u) {
				if (1 === a.deltaMode) {
					var g = e.data(this, "mousewheel-line-height");
					c *= g, f *= g, u *= g
				} else if (2 === a.deltaMode) {
					var v = e.data(this, "mousewheel-page-height");
					c *= v, f *= v, u *= v
				}
				if (p = Math.max(Math.abs(f), Math.abs(u)), (!r || r > p) && (r = p, i(a, p) && (r /= 40)), i(a, p) && (c /= 40, u /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), d.settings.normalizeOffset && this.getBoundingClientRect) {
					var y = this.getBoundingClientRect();
					h = t.clientX - y.left, m = t.clientY - y.top
				}
				return t.deltaX = u, t.deltaY = f, t.deltaFactor = r, t.offsetX = h, t.offsetY = m, t.deltaMode = 0, s.unshift(t, c, u, f), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
			}
		}

		function n() {
			r = null
		}

		function i(e, t) {
			return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
		}
		var o, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			l = Array.prototype.slice;
		if (e.event.fixHooks)
			for (var c = a.length; c;) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
		var d = e.event.special.mousewheel = {
			version: "3.1.12",
			setup: function() {
				if (this.addEventListener)
					for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
				else this.onmousewheel = t;
				e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
			},
			teardown: function() {
				if (this.removeEventListener)
					for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
				else this.onmousewheel = null;
				e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
			},
			getLineHeight: function(t) {
				var n = e(t),
					i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
				return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
			},
			getPageHeight: function(t) {
				return e(t).height()
			},
			settings: {
				adjustOldDeltas: !0,
				normalizeOffset: !0
			}
		};
		e.fn.extend({
			mousewheel: function(e) {
				return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
			},
			unmousewheel: function(e) {
				return this.unbind("mousewheel", e)
			}
		})
	}), ! function(e) {
		"undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
	}(function(e) {
		! function(t) {
			var n = "function" == typeof define && define.amd,
				i = "undefined" != typeof module && module.exports,
				o = "https:" == document.location.protocol ? "https:" : "http:",
				r = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
			n || (i ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + o + "//" + r + "%3E%3C/script%3E"))), t()
		}(function() {
			var t, n = "mCustomScrollbar",
				i = "mCS",
				o = ".mCustomScrollbar",
				r = {
					setTop: 0,
					setLeft: 0,
					axis: "y",
					scrollbarPosition: "inside",
					scrollInertia: 950,
					autoDraggerLength: !0,
					alwaysShowScrollbar: 0,
					snapOffset: 0,
					mouseWheel: {
						enable: !0,
						scrollAmount: "auto",
						axis: "y",
						deltaFactor: "auto",
						disableOver: ["select", "option", "keygen", "datalist", "textarea"]
					},
					scrollButtons: {
						scrollType: "stepless",
						scrollAmount: "auto"
					},
					keyboard: {
						enable: !0,
						scrollType: "stepless",
						scrollAmount: "auto"
					},
					contentTouchScroll: 25,
					documentTouchScroll: !0,
					advanced: {
						autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
						updateOnContentResize: !0,
						updateOnImageLoad: "auto",
						autoUpdateTimeout: 60
					},
					theme: "light",
					callbacks: {
						onTotalScrollOffset: 0,
						onTotalScrollBackOffset: 0,
						alwaysTriggerOffsets: !0
					}
				},
				a = 0,
				s = {},
				l = window.attachEvent && !window.addEventListener ? 1 : 0,
				c = !1,
				d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
				u = {
					init: function(t) {
						var t = e.extend(!0, {}, r, t),
							n = f.call(this);
						if (t.live) {
							var l = t.liveSelector || this.selector || o,
								c = e(l);
							if ("off" === t.live) return void h(l);
							s[l] = setTimeout(function() {
								c.mCustomScrollbar(t), "once" === t.live && c.length && h(l)
							}, 500)
						} else h(l);
						return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
							enable: !0,
							scrollAmount: "auto",
							axis: "y",
							preventDefault: !1,
							deltaFactor: "auto",
							normalizeDelta: !1,
							invert: !1
						}), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), p(t), e(n).each(function() {
							var n = e(this);
							if (!n.data(i)) {
								n.data(i, {
									idx: ++a,
									opt: t,
									scrollRatio: {
										y: null,
										x: null
									},
									overflowed: null,
									contentReset: {
										y: null,
										x: null
									},
									bindEvents: !1,
									tweenRunning: !1,
									sequential: {},
									langDir: n.css("direction"),
									cbOffsets: null,
									trigger: null,
									poll: {
										size: {
											o: 0,
											n: 0
										},
										img: {
											o: 0,
											n: 0
										},
										change: {
											o: 0,
											n: 0
										}
									}
								});
								var o = n.data(i),
									r = o.opt,
									s = n.data("mcs-axis"),
									l = n.data("mcs-scrollbar-position"),
									c = n.data("mcs-theme");
								s && (r.axis = s), l && (r.scrollbarPosition = l), c && (r.theme = c, p(r)), v.call(this), o && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), e("#mCSB_" + o.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, n)
							}
						})
					},
					update: function(t, n) {
						var o = t || f.call(this);
						return e(o).each(function() {
							var t = e(this);
							if (t.data(i)) {
								var o = t.data(i),
									r = o.opt,
									a = e("#mCSB_" + o.idx + "_container"),
									s = e("#mCSB_" + o.idx),
									l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
								if (!a.length) return;
								o.tweenRunning && q(t), n && o && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), s.css("max-height", "none"), s.height() !== t.height() && s.css("max-height", t.height()), b.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || a.css("width", y(a)), o.overflowed = S.call(this), I.call(this), r.autoDraggerLength && x.call(this), _.call(this), k.call(this);
								var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
								"x" !== r.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (U(t, c[0].toString(), {
									dir: "y",
									dur: 0,
									overwrite: "none"
								}), o.contentReset.y = null) : (T.call(this), "y" === r.axis ? E.call(this) : "yx" === r.axis && o.overflowed[1] && U(t, c[1].toString(), {
									dir: "x",
									dur: 0,
									overwrite: "none"
								}))), "y" !== r.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (U(t, c[1].toString(), {
									dir: "x",
									dur: 0,
									overwrite: "none"
								}), o.contentReset.x = null) : (T.call(this), "x" === r.axis ? E.call(this) : "yx" === r.axis && o.overflowed[0] && U(t, c[0].toString(), {
									dir: "y",
									dur: 0,
									overwrite: "none"
								}))), n && o && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), Y.call(this)
							}
						})
					},
					scrollTo: function(t, n) {
						if ("undefined" != typeof t && null != t) {
							var o = f.call(this);
							return e(o).each(function() {
								var o = e(this);
								if (o.data(i)) {
									var r = o.data(i),
										a = r.opt,
										s = {
											trigger: "external",
											scrollInertia: a.scrollInertia,
											scrollEasing: "mcsEaseInOut",
											moveDragger: !1,
											timeout: 60,
											callbacks: !0,
											onStart: !0,
											onUpdate: !0,
											onComplete: !0
										},
										l = e.extend(!0, {}, s, n),
										c = F.call(this, t),
										d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
									c[0] = z.call(this, c[0], "y"), c[1] = z.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = nt() ? 0 : d, setTimeout(function() {
										null !== c[0] && "undefined" != typeof c[0] && "x" !== a.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", U(o, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== a.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", U(o, c[1].toString(), l))
									}, l.timeout)
								}
							})
						}
					},
					stop: function() {
						var t = f.call(this);
						return e(t).each(function() {
							var t = e(this);
							t.data(i) && q(t)
						})
					},
					disable: function(t) {
						var n = f.call(this);
						return e(n).each(function() {
							var n = e(this);
							n.data(i) && (n.data(i), Y.call(this, "remove"), E.call(this), t && T.call(this), I.call(this, !0), n.addClass(d[3]))
						})
					},
					destroy: function() {
						var t = f.call(this);
						return e(t).each(function() {
							var o = e(this);
							if (o.data(i)) {
								var r = o.data(i),
									a = r.opt,
									s = e("#mCSB_" + r.idx),
									l = e("#mCSB_" + r.idx + "_container"),
									c = e(".mCSB_" + r.idx + "_scrollbar");
								a.live && h(a.liveSelector || e(t).selector), Y.call(this, "remove"), E.call(this), T.call(this), o.removeData(i), K(this, "mcs"), c.remove(), l.find("img." + d[2]).removeClass(d[2]), s.replaceWith(l.contents()), o.removeClass(n + " _" + i + "_" + r.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
							}
						})
					}
				},
				f = function() {
					return "object" != typeof e(this) || e(this).length < 1 ? o : this
				},
				p = function(t) {
					var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
						i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
						o = ["minimal", "minimal-dark"],
						r = ["minimal", "minimal-dark"],
						a = ["minimal", "minimal-dark"];
					t.autoDraggerLength = e.inArray(t.theme, n) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, i) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, o) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, r) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, a) > -1 ? "outside" : t.scrollbarPosition
				},
				h = function(e) {
					s[e] && (clearTimeout(s[e]), K(s, e))
				},
				m = function(e) {
					return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
				},
				g = function(e) {
					return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
				},
				v = function() {
					var t = e(this),
						o = t.data(i),
						r = o.opt,
						a = r.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
						s = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
						l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
						c = "yx" === r.axis ? s[0] + s[1] : "x" === r.axis ? s[1] : s[0],
						u = "yx" === r.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
						f = r.autoHideScrollbar ? " " + d[6] : "",
						p = "x" !== r.axis && "rtl" === o.langDir ? " " + d[7] : "";
					r.setWidth && t.css("width", r.setWidth), r.setHeight && t.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === o.langDir ? "989999px" : r.setLeft, t.addClass(n + " _" + i + "_" + o.idx + f + p).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir=" + o.langDir + " /></div>");
					var h = e("#mCSB_" + o.idx),
						m = e("#mCSB_" + o.idx + "_container");
					"y" === r.axis || r.advanced.autoExpandHorizontalScroll || m.css("width", y(m)), "outside" === r.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), h.addClass("mCSB_outside").after(c)) : (h.addClass("mCSB_inside").append(c), m.wrap(u)), w.call(this);
					var g = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
					g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
				},
				y = function(t) {
					var n = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
							return e(this).outerWidth(!0)
						}).get())],
						i = t.parent().width();
					return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
				},
				b = function() {
					var t = e(this),
						n = t.data(i),
						o = n.opt,
						r = e("#mCSB_" + n.idx + "_container");
					if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
						r.css({
							width: "auto",
							"min-width": 0,
							"overflow-x": "scroll"
						});
						var a = Math.ceil(r[0].scrollWidth);
						3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && a > r.parent().width() ? r.css({
							width: a,
							"min-width": "100%",
							"overflow-x": "inherit"
						}) : r.css({
							"overflow-x": "inherit",
							position: "absolute"
						}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
							width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
							"min-width": "100%",
							position: "relative"
						}).unwrap()
					}
				},
				w = function() {
					var t = e(this),
						n = t.data(i),
						o = n.opt,
						r = e(".mCSB_" + n.idx + "_scrollbar:first"),
						a = et(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
						s = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + a + " />"],
						l = ["x" === o.axis ? s[2] : s[0], "x" === o.axis ? s[3] : s[1], s[2], s[3]];
					o.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
				},
				x = function() {
					var t = e(this),
						n = t.data(i),
						o = e("#mCSB_" + n.idx),
						r = e("#mCSB_" + n.idx + "_container"),
						a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
						s = [o.height() / r.outerHeight(!1), o.width() / r.outerWidth(!1)],
						c = [parseInt(a[0].css("min-height")), Math.round(s[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(s[1] * a[1].parent().width())],
						d = l && c[1] < c[0] ? c[0] : c[1],
						u = l && c[3] < c[2] ? c[2] : c[3];
					a[0].css({
						height: d,
						"max-height": a[0].parent().height() - 10
					}).find(".mCSB_dragger_bar").css({
						"line-height": c[0] + "px"
					}), a[1].css({
						width: u,
						"max-width": a[1].parent().width() - 10
					})
				},
				_ = function() {
					var t = e(this),
						n = t.data(i),
						o = e("#mCSB_" + n.idx),
						r = e("#mCSB_" + n.idx + "_container"),
						a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
						s = [r.outerHeight(!1) - o.height(), r.outerWidth(!1) - o.width()],
						l = [s[0] / (a[0].parent().height() - a[0].height()), s[1] / (a[1].parent().width() - a[1].width())];
					n.scrollRatio = {
						y: l[0],
						x: l[1]
					}
				},
				C = function(e, t, n) {
					var i = n ? d[0] + "_expanded" : "",
						o = e.closest(".mCSB_scrollTools");
					"active" === t ? (e.toggleClass(d[0] + " " + i), o.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), o.removeClass(d[1])) : (e.addClass(d[0]), o.addClass(d[1])))
				},
				S = function() {
					var t = e(this),
						n = t.data(i),
						o = e("#mCSB_" + n.idx),
						r = e("#mCSB_" + n.idx + "_container"),
						a = null == n.overflowed ? r.height() : r.outerHeight(!1),
						s = null == n.overflowed ? r.width() : r.outerWidth(!1),
						l = r[0].scrollHeight,
						c = r[0].scrollWidth;
					return l > a && (a = l), c > s && (s = c), [a > o.height(), s > o.width()]
				},
				T = function() {
					var t = e(this),
						n = t.data(i),
						o = n.opt,
						r = e("#mCSB_" + n.idx),
						a = e("#mCSB_" + n.idx + "_container"),
						s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
					if (q(t), ("x" !== o.axis && !n.overflowed[0] || "y" === o.axis && n.overflowed[0]) && (s[0].add(a).css("top", 0), U(t, "_resetY")), "y" !== o.axis && !n.overflowed[1] || "x" === o.axis && n.overflowed[1]) {
						var l = dx = 0;
						"rtl" === n.langDir && (l = r.width() - a.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), a.css("left", l), s[1].css("left", dx), U(t, "_resetX")
					}
				},
				k = function() {
					function t() {
						a = setTimeout(function() {
							e.event.special.mousewheel ? (clearTimeout(a), R.call(n[0])) : t()
						}, 100)
					}
					var n = e(this),
						o = n.data(i),
						r = o.opt;
					if (!o.bindEvents) {
						if (N.call(this), r.contentTouchScroll && $.call(this), O.call(this), r.mouseWheel.enable) {
							var a;
							t()
						}
						P.call(this), j.call(this), r.advanced.autoScrollOnFocus && M.call(this), r.scrollButtons.enable && B.call(this), r.keyboard.enable && H.call(this), o.bindEvents = !0
					}
				},
				E = function() {
					var t = e(this),
						n = t.data(i),
						o = n.opt,
						r = i + "_" + n.idx,
						a = ".mCSB_" + n.idx + "_scrollbar",
						s = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + a + " ." + d[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + a + ">a"),
						l = e("#mCSB_" + n.idx + "_container");
					o.advanced.releaseDraggableSelectors && s.add(e(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && s.add(e(o.advanced.extraDraggableSelectors)), n.bindEvents && (e(document).add(e(!L() || top.document)).unbind("." + r), s.each(function() {
						e(this).unbind("." + r)
					}), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(n.sequential.step), K(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), K(l[0], "onCompleteTimeout"), n.bindEvents = !1)
				},
				I = function(t) {
					var n = e(this),
						o = n.data(i),
						r = o.opt,
						a = e("#mCSB_" + o.idx + "_container_wrapper"),
						s = a.length ? a : e("#mCSB_" + o.idx + "_container"),
						l = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
						c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
					"x" !== r.axis && (o.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(d[8] + " " + d[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), s.removeClass(d[10])) : (l[0].css("display", "none"), s.addClass(d[10])), s.addClass(d[8]))), "y" !== r.axis && (o.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(d[9] + " " + d[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), s.removeClass(d[11])) : (l[1].css("display", "none"), s.addClass(d[11])), s.addClass(d[9]))), o.overflowed[0] || o.overflowed[1] ? n.removeClass(d[5]) : n.addClass(d[5])
				},
				A = function(t) {
					var n = t.type,
						i = t.target.ownerDocument !== document ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
						o = L() && t.target.ownerDocument !== top.document ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
					switch (n) {
						case "pointerdown":
						case "MSPointerDown":
						case "pointermove":
						case "MSPointerMove":
						case "pointerup":
						case "MSPointerUp":
							return i ? [t.originalEvent.pageY - i[0] + o[0], t.originalEvent.pageX - i[1] + o[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
						case "touchstart":
						case "touchmove":
						case "touchend":
							var r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
								a = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
							return t.target.ownerDocument !== document ? [r.screenY, r.screenX, a > 1] : [r.pageY, r.pageX, a > 1];
						default:
							return i ? [t.pageY - i[0] + o[0], t.pageX - i[1] + o[1], !1] : [t.pageY, t.pageX, !1]
					}
				},
				N = function() {
					function t(e) {
						var t = h.find("iframe");
						if (t.length) {
							var n = e ? "auto" : "none";
							t.css("pointer-events", n)
						}
					}

					function n(e, t, n, i) {
						if (h[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, o.attr("id") === p[1]) var r = "x",
							a = (o[0].offsetLeft - t + i) * d.scrollRatio.x;
						else var r = "y",
							a = (o[0].offsetTop - e + n) * d.scrollRatio.y;
						U(s, a.toString(), {
							dir: r,
							drag: !0
						})
					}
					var o, r, a, s = e(this),
						d = s.data(i),
						u = d.opt,
						f = i + "_" + d.idx,
						p = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
						h = e("#mCSB_" + d.idx + "_container"),
						m = e("#" + p[0] + ",#" + p[1]),
						g = u.advanced.releaseDraggableSelectors ? m.add(e(u.advanced.releaseDraggableSelectors)) : m,
						v = u.advanced.extraDraggableSelectors ? e(!L() || top.document).add(e(u.advanced.extraDraggableSelectors)) : e(!L() || top.document);
					m.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(n) {
						if (n.stopImmediatePropagation(), n.preventDefault(), Q(n)) {
							c = !0, l && (document.onselectstart = function() {
								return !1
							}), t(!1), q(s), o = e(this);
							var i = o.offset(),
								d = A(n)[0] - i.top,
								f = A(n)[1] - i.left,
								p = o.height() + i.top,
								h = o.width() + i.left;
							p > d && d > 0 && h > f && f > 0 && (r = d, a = f), C(o, "active", u.autoExpandScrollbar)
						}
					}).bind("touchmove." + f, function(e) {
						e.stopImmediatePropagation(), e.preventDefault();
						var t = o.offset(),
							i = A(e)[0] - t.top,
							s = A(e)[1] - t.left;
						n(r, a, i, s)
					}), e(document).add(v).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(e) {
						if (o) {
							var t = o.offset(),
								i = A(e)[0] - t.top,
								s = A(e)[1] - t.left;
							if (r === i && a === s) return;
							n(r, a, i, s)
						}
					}).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function() {
						o && (C(o, "active", u.autoExpandScrollbar), o = null), c = !1, l && (document.onselectstart = null), t(!0)
					})
				},
				$ = function() {
					function n(e) {
						if (!Z(e) || c || A(e)[2]) return void(t = 0);
						t = 1, _ = 0, C = 0, d = 1, S.removeClass("mCS_touch_action");
						var n = N.offset();
						u = A(e)[0] - n.top, f = A(e)[1] - n.left, M = [A(e)[0], A(e)[1]]
					}

					function o(e) {
						if (Z(e) && !c && !A(e)[2] && (k.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || _) && d)) {
							g = G();
							var t = I.offset(),
								n = A(e)[0] - t.top,
								i = A(e)[1] - t.left,
								o = "mcsLinearOut";
							if (O.push(n), R.push(i), M[2] = Math.abs(A(e)[0] - M[0]), M[3] = Math.abs(A(e)[1] - M[1]), T.overflowed[0]) var r = $[0].parent().height() - $[0].height(),
								a = u - n > 0 && n - u > -(r * T.scrollRatio.y) && (2 * M[3] < M[2] || "yx" === k.axis);
							if (T.overflowed[1]) var s = $[1].parent().width() - $[1].width(),
								p = f - i > 0 && i - f > -(s * T.scrollRatio.x) && (2 * M[2] < M[3] || "yx" === k.axis);
							a || p ? (H || e.preventDefault(), _ = 1) : (C = 1, S.addClass("mCS_touch_action")), H && e.preventDefault(), w = "yx" === k.axis ? [u - n, f - i] : "x" === k.axis ? [null, f - i] : [u - n, null], N[0].idleTimer = 250, T.overflowed[0] && l(w[0], D, o, "y", "all", !0), T.overflowed[1] && l(w[1], D, o, "x", P, !0)
						}
					}

					function r(e) {
						if (!Z(e) || c || A(e)[2]) return void(t = 0);
						t = 1, e.stopImmediatePropagation(), q(S), m = G();
						var n = I.offset();
						p = A(e)[0] - n.top, h = A(e)[1] - n.left, O = [], R = []
					}

					function a(e) {
						if (Z(e) && !c && !A(e)[2]) {
							d = 0, e.stopImmediatePropagation(), _ = 0, C = 0, v = G();
							var t = I.offset(),
								n = A(e)[0] - t.top,
								i = A(e)[1] - t.left;
							if (!(v - g > 30)) {
								b = 1e3 / (v - m);
								var o = "mcsEaseOut",
									r = 2.5 > b,
									a = r ? [O[O.length - 2], R[R.length - 2]] : [0, 0];
								y = r ? [n - a[0], i - a[1]] : [n - p, i - h];
								var u = [Math.abs(y[0]), Math.abs(y[1])];
								b = r ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [b, b];
								var f = [Math.abs(N[0].offsetTop) - y[0] * s(u[0] / b[0], b[0]), Math.abs(N[0].offsetLeft) - y[1] * s(u[1] / b[1], b[1])];
								w = "yx" === k.axis ? [f[0], f[1]] : "x" === k.axis ? [null, f[1]] : [f[0], null], x = [4 * u[0] + k.scrollInertia, 4 * u[1] + k.scrollInertia];
								var S = parseInt(k.contentTouchScroll) || 0;
								w[0] = u[0] > S ? w[0] : 0, w[1] = u[1] > S ? w[1] : 0, T.overflowed[0] && l(w[0], x[0], o, "y", P, !1), T.overflowed[1] && l(w[1], x[1], o, "x", P, !1)
							}
						}
					}

					function s(e, t) {
						var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
						return e > 90 ? t > 4 ? n[0] : n[3] : e > 60 ? t > 3 ? n[3] : n[2] : e > 30 ? t > 8 ? n[1] : t > 6 ? n[0] : t > 4 ? t : n[2] : t > 8 ? t : n[3]
					}

					function l(e, t, n, i, o, r) {
						e && U(S, e.toString(), {
							dur: t,
							scrollEasing: n,
							dir: i,
							overwrite: o,
							drag: r
						})
					}
					var d, u, f, p, h, m, g, v, y, b, w, x, _, C, S = e(this),
						T = S.data(i),
						k = T.opt,
						E = i + "_" + T.idx,
						I = e("#mCSB_" + T.idx),
						N = e("#mCSB_" + T.idx + "_container"),
						$ = [e("#mCSB_" + T.idx + "_dragger_vertical"), e("#mCSB_" + T.idx + "_dragger_horizontal")],
						O = [],
						R = [],
						D = 0,
						P = "yx" === k.axis ? "none" : "all",
						M = [],
						j = N.find("iframe"),
						B = ["touchstart." + E + " pointerdown." + E + " MSPointerDown." + E, "touchmove." + E + " pointermove." + E + " MSPointerMove." + E, "touchend." + E + " pointerup." + E + " MSPointerUp." + E],
						H = void 0 !== document.body.style.touchAction;
					N.bind(B[0], function(e) {
						n(e)
					}).bind(B[1], function(e) {
						o(e)
					}), I.bind(B[0], function(e) {
						r(e)
					}).bind(B[2], function(e) {
						a(e)
					}), j.length && j.each(function() {
						e(this).load(function() {
							L(this) && e(this.contentDocument || this.contentWindow.document).bind(B[0], function(e) {
								n(e), r(e)
							}).bind(B[1], function(e) {
								o(e)
							}).bind(B[2], function(e) {
								a(e)
							})
						})
					})
				},
				O = function() {
					function n() {
						return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
					}

					function o(e, t, n) {
						d.type = n && r ? "stepped" : "stepless", d.scrollAmount = 10, W(a, e, t, "mcsLinearOut", n ? 60 : null)
					}
					var r, a = e(this),
						s = a.data(i),
						l = s.opt,
						d = s.sequential,
						u = i + "_" + s.idx,
						f = e("#mCSB_" + s.idx + "_container"),
						p = f.parent();
					f.bind("mousedown." + u, function() {
						t || r || (r = 1, c = !0)
					}).add(document).bind("mousemove." + u, function(e) {
						if (!t && r && n()) {
							var i = f.offset(),
								a = A(e)[0] - i.top + f[0].offsetTop,
								c = A(e)[1] - i.left + f[0].offsetLeft;
							a > 0 && a < p.height() && c > 0 && c < p.width() ? d.step && o("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (0 > a ? o("on", 38) : a > p.height() && o("on", 40)), "y" !== l.axis && s.overflowed[1] && (0 > c ? o("on", 37) : c > p.width() && o("on", 39)))
						}
					}).bind("mouseup." + u + " dragend." + u, function() {
						t || (r && (r = 0, o("off", null)), c = !1)
					})
				},
				R = function() {
					function t(t, i) {
						if (q(n), !D(n, t.target)) {
							var a = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
								d = r.scrollInertia;
							if ("x" === r.axis || "x" === r.mouseWheel.axis) var u = "x",
								f = [Math.round(a * o.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
								p = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= s.width() ? .9 * s.width() : f[0],
								h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
								m = c[1][0].offsetLeft,
								g = c[1].parent().width() - c[1].width(),
								v = t.deltaX || t.deltaY || i;
							else var u = "y",
								f = [Math.round(a * o.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
								p = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= s.height() ? .9 * s.height() : f[0],
								h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
								m = c[0][0].offsetTop,
								g = c[0].parent().height() - c[0].height(),
								v = t.deltaY || i;
							"y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((r.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), r.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== m || 0 > v && m !== g || r.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 2 && !r.mouseWheel.normalizeDelta && (p = t.deltaFactor, d = 17), U(n, (h - v * p).toString(), {
								dir: u,
								dur: d
							}))
						}
					}
					if (e(this).data(i)) {
						var n = e(this),
							o = n.data(i),
							r = o.opt,
							a = i + "_" + o.idx,
							s = e("#mCSB_" + o.idx),
							c = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
							d = e("#mCSB_" + o.idx + "_container").find("iframe");
						d.length && d.each(function() {
							e(this).load(function() {
								L(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(e, n) {
									t(e, n)
								})
							})
						}), s.bind("mousewheel." + a, function(e, n) {
							t(e, n)
						})
					}
				},
				L = function(e) {
					var t = null;
					if (e) {
						try {
							var n = e.contentDocument || e.contentWindow.document;
							t = n.body.innerHTML
						} catch (i) {}
						return null !== t
					}
					try {
						var n = top.document;
						t = n.body.innerHTML
					} catch (i) {}
					return null !== t
				},
				D = function(t, n) {
					var o = n.nodeName.toLowerCase(),
						r = t.data(i).opt.mouseWheel.disableOver,
						a = ["select", "textarea"];
					return e.inArray(o, r) > -1 && !(e.inArray(o, a) > -1 && !e(n).is(":focus"))
				},
				P = function() {
					var t, n = e(this),
						o = n.data(i),
						r = i + "_" + o.idx,
						a = e("#mCSB_" + o.idx + "_container"),
						s = a.parent(),
						l = e(".mCSB_" + o.idx + "_scrollbar ." + d[12]);
					l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(n) {
						c = !0, e(n.target).hasClass("mCSB_dragger") || (t = 1)
					}).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function() {
						c = !1
					}).bind("click." + r, function(i) {
						if (t && (t = 0, e(i.target).hasClass(d[12]) || e(i.target).hasClass("mCSB_draggerRail"))) {
							q(n);
							var r = e(this),
								l = r.find(".mCSB_dragger");
							if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
								if (!o.overflowed[1]) return;
								var c = "x",
									u = i.pageX > l.offset().left ? -1 : 1,
									f = Math.abs(a[0].offsetLeft) - .9 * u * s.width()
							} else {
								if (!o.overflowed[0]) return;
								var c = "y",
									u = i.pageY > l.offset().top ? -1 : 1,
									f = Math.abs(a[0].offsetTop) - .9 * u * s.height()
							}
							U(n, f.toString(), {
								dir: c,
								scrollEasing: "mcsEaseInOut"
							})
						}
					})
				},
				M = function() {
					var t = e(this),
						n = t.data(i),
						o = n.opt,
						r = i + "_" + n.idx,
						a = e("#mCSB_" + n.idx + "_container"),
						s = a.parent();
					a.bind("focusin." + r, function() {
						var n = e(document.activeElement),
							i = a.find(".mCustomScrollBox").length,
							r = 0;
						n.is(o.advanced.autoScrollOnFocus) && (q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (r + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
							var e = [tt(n)[0], tt(n)[1]],
								i = [a[0].offsetTop, a[0].offsetLeft],
								l = [i[0] + e[0] >= 0 && i[0] + e[0] < s.height() - n.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < s.width() - n.outerWidth(!1)],
								c = "yx" !== o.axis || l[0] || l[1] ? "all" : "none";
							"x" === o.axis || l[0] || U(t, e[0].toString(), {
								dir: "y",
								scrollEasing: "mcsEaseInOut",
								overwrite: c,
								dur: r
							}), "y" === o.axis || l[1] || U(t, e[1].toString(), {
								dir: "x",
								scrollEasing: "mcsEaseInOut",
								overwrite: c,
								dur: r
							})
						}, t[0]._focusTimer))
					})
				},
				j = function() {
					var t = e(this),
						n = t.data(i),
						o = i + "_" + n.idx,
						r = e("#mCSB_" + n.idx + "_container").parent();
					r.bind("scroll." + o, function() {
						(0 !== r.scrollTop() || 0 !== r.scrollLeft()) && e(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
					})
				},
				B = function() {
					var t = e(this),
						n = t.data(i),
						o = n.opt,
						r = n.sequential,
						a = i + "_" + n.idx,
						s = ".mCSB_" + n.idx + "_scrollbar",
						l = e(s + ">a");
					l.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(i) {
						function a(e, n) {
							r.scrollAmount = o.scrollButtons.scrollAmount, W(t, e, n)
						}
						if (i.preventDefault(), Q(i)) {
							var s = e(this).attr("class");
							switch (r.type = o.scrollButtons.scrollType, i.type) {
								case "mousedown":
								case "touchstart":
								case "pointerdown":
								case "MSPointerDown":
									if ("stepped" === r.type) return;
									c = !0, n.tweenRunning = !1, a("on", s);
									break;
								case "mouseup":
								case "touchend":
								case "pointerup":
								case "MSPointerUp":
								case "mouseout":
								case "pointerout":
								case "MSPointerOut":
									if ("stepped" === r.type) return;
									c = !1, r.dir && a("off", s);
									break;
								case "click":
									if ("stepped" !== r.type || n.tweenRunning) return;
									a("on", s)
							}
						}
					})
				},
				H = function() {
					function t(t) {
						function i(e, t) {
							a.type = r.keyboard.scrollType, a.scrollAmount = r.keyboard.scrollAmount, "stepped" === a.type && o.tweenRunning || W(n, e, t)
						}
						switch (t.type) {
							case "blur":
								o.tweenRunning && a.dir && i("off", null);
								break;
							case "keydown":
							case "keyup":
								var s = t.keyCode ? t.keyCode : t.which,
									l = "on";
								if ("x" !== r.axis && (38 === s || 40 === s) || "y" !== r.axis && (37 === s || 39 === s)) {
									if ((38 === s || 40 === s) && !o.overflowed[0] || (37 === s || 39 === s) && !o.overflowed[1]) return;
									"keyup" === t.type && (l = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), i(l, s))
								} else if (33 === s || 34 === s) {
									if ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
										q(n);
										var f = 34 === s ? -1 : 1;
										if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
											h = Math.abs(c[0].offsetLeft) - .9 * f * d.width();
										else var p = "y",
											h = Math.abs(c[0].offsetTop) - .9 * f * d.height();
										U(n, h.toString(), {
											dir: p,
											scrollEasing: "mcsEaseInOut"
										})
									}
								} else if ((35 === s || 36 === s) && !e(document.activeElement).is(u) && ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
									if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
										h = 35 === s ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
									else var p = "y",
										h = 35 === s ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
									U(n, h.toString(), {
										dir: p,
										scrollEasing: "mcsEaseInOut"
									})
								}
						}
					}
					var n = e(this),
						o = n.data(i),
						r = o.opt,
						a = o.sequential,
						s = i + "_" + o.idx,
						l = e("#mCSB_" + o.idx),
						c = e("#mCSB_" + o.idx + "_container"),
						d = c.parent(),
						u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
						f = c.find("iframe"),
						p = ["blur." + s + " keydown." + s + " keyup." + s];
					f.length && f.each(function() {
						e(this).load(function() {
							L(this) && e(this.contentDocument || this.contentWindow.document).bind(p[0], function(e) {
								t(e)
							})
						})
					}), l.attr("tabindex", "0").bind(p[0], function(e) {
						t(e)
					})
				},
				W = function(t, n, o, r, a) {
					function s(e) {
						u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
						var n = "stepped" !== f.type,
							i = a ? a : e ? n ? m / 1.5 : g : 1e3 / 60,
							o = e ? n ? 7.5 : 40 : 2.5,
							l = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
							d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
							h = "x" === f.dir[0] ? l[1] + f.dir[1] * d[1] * o : l[0] + f.dir[1] * d[0] * o,
							v = "x" === f.dir[0] ? l[1] + f.dir[1] * parseInt(f.scrollAmount) : l[0] + f.dir[1] * parseInt(f.scrollAmount),
							y = "auto" !== f.scrollAmount ? v : h,
							b = r ? r : e ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
							w = e ? !0 : !1;
						return e && 17 > i && (y = "x" === f.dir[0] ? l[1] : l[0]), U(t, y.toString(), {
							dir: f.dir[0],
							scrollEasing: b,
							dur: i,
							onComplete: w
						}), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
							s()
						}, i)))
					}

					function l() {
						clearTimeout(f.step), K(f, "step"), q(t)
					}
					var c = t.data(i),
						u = c.opt,
						f = c.sequential,
						p = e("#mCSB_" + c.idx + "_container"),
						h = "stepped" === f.type ? !0 : !1,
						m = u.scrollInertia < 26 ? 26 : u.scrollInertia,
						g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
					switch (n) {
						case "on":
							if (f.dir = [o === d[16] || o === d[15] || 39 === o || 37 === o ? "x" : "y", o === d[13] || o === d[15] || 38 === o || 37 === o ? -1 : 1], q(t), et(o) && "stepped" === f.type) return;
							s(h);
							break;
						case "off":
							l(), (h || c.tweenRunning && f.dir) && s(!0)
					}
				},
				F = function(t) {
					var n = e(this).data(i).opt,
						o = [];
					return "function" == typeof t && (t = t()), t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === n.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === n.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === n.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
				},
				z = function(t, n) {
					if (null != t && "undefined" != typeof t) {
						var o = e(this),
							r = o.data(i),
							a = r.opt,
							s = e("#mCSB_" + r.idx + "_container"),
							l = s.parent(),
							c = typeof t;
						n || (n = "x" === a.axis ? "x" : "y");
						var d = "x" === n ? s.outerWidth(!1) : s.outerHeight(!1),
							f = "x" === n ? s[0].offsetLeft : s[0].offsetTop,
							p = "x" === n ? "left" : "top";
						switch (c) {
							case "function":
								return t();
							case "object":
								var h = t.jquery ? t : e(t);
								if (!h.length) return;
								return "x" === n ? tt(h)[1] : tt(h)[0];
							case "string":
							case "number":
								if (et(t)) return Math.abs(t);
								if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
								if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
								if (-1 !== t.indexOf("+=")) {
									var m = f + parseInt(t.split("+=")[1]);
									return m >= 0 ? 0 : Math.abs(m)
								}
								if (-1 !== t.indexOf("px") && et(t.split("px")[0])) return Math.abs(t.split("px")[0]);
								if ("top" === t || "left" === t) return 0;
								if ("bottom" === t) return Math.abs(l.height() - s.outerHeight(!1));
								if ("right" === t) return Math.abs(l.width() - s.outerWidth(!1));
								if ("first" === t || "last" === t) {
									var h = s.find(":" + t);
									return "x" === n ? tt(h)[1] : tt(h)[0]
								}
								return e(t).length ? "x" === n ? tt(e(t))[1] : tt(e(t))[0] : (s.css(p, t), void u.update.call(null, o[0]))
						}
					}
				},
				Y = function(t) {
					function n() {
						return clearTimeout(f[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(f[0].autoUpdate = setTimeout(function() {
							return c.advanced.updateOnSelectorChange && (l.poll.change.n = r(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void a(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + f[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void a(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = f.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && n()) : (l.poll.img.o = l.poll.img.n, void f.find("img").each(function() {
								o(this)
							}))
						}, c.advanced.autoUpdateTimeout))
					}

					function o(t) {
						function n(e, t) {
							return function() {
								return t.apply(e, arguments)
							}
						}

						function i() {
							this.onload = null, e(t).addClass(d[2]), a(2)
						}
						if (e(t).hasClass(d[2])) return void a();
						var o = new Image;
						o.onload = n(o, i), o.src = t.src
					}

					function r() {
						c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
						var e = 0,
							t = f.find(c.advanced.updateOnSelectorChange);
						return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
							e += this.offsetHeight + this.offsetWidth
						}), e
					}

					function a(e) {
						clearTimeout(f[0].autoUpdate), u.update.call(null, s[0], e)
					}
					var s = e(this),
						l = s.data(i),
						c = l.opt,
						f = e("#mCSB_" + l.idx + "_container");
					return t ? (clearTimeout(f[0].autoUpdate), void K(f[0], "autoUpdate")) : void n()
				},
				X = function(e, t, n) {
					return Math.round(e / t) * t - n
				},
				q = function(t) {
					var n = t.data(i),
						o = e("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal");
					o.each(function() {
						V.call(this)
					})
				},
				U = function(t, n, o) {
					function r(e) {
						return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
					}

					function a() {
						return [c.callbacks.alwaysTriggerOffsets || w >= x[0] + S, c.callbacks.alwaysTriggerOffsets || -T >= w]
					}

					function s() {
						var e = [p[0].offsetTop, p[0].offsetLeft],
							n = [y[0].offsetTop, y[0].offsetLeft],
							i = [p.outerHeight(!1), p.outerWidth(!1)],
							r = [f.height(), f.width()];
						t[0].mcs = {
							content: p,
							top: e[0],
							left: e[1],
							draggerTop: n[0],
							draggerLeft: n[1],
							topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(i[0]) - r[0])),
							leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(i[1]) - r[1])),
							direction: o.dir
						}
					}
					var l = t.data(i),
						c = l.opt,
						d = {
							trigger: "internal",
							dir: "y",
							scrollEasing: "mcsEaseOut",
							drag: !1,
							dur: c.scrollInertia,
							overwrite: "all",
							callbacks: !0,
							onStart: !0,
							onUpdate: !0,
							onComplete: !0
						},
						o = e.extend(d, o),
						u = [o.dur, o.drag ? 0 : o.dur],
						f = e("#mCSB_" + l.idx),
						p = e("#mCSB_" + l.idx + "_container"),
						h = p.parent(),
						m = c.callbacks.onTotalScrollOffset ? F.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
						g = c.callbacks.onTotalScrollBackOffset ? F.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
					if (l.trigger = o.trigger, (0 !== h.scrollTop() || 0 !== h.scrollLeft()) && (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), h.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
						if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount) {
							var v = c.snapAmount instanceof Array ? "x" === o.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
							n = X(n, v, c.snapOffset)
						}
						switch (o.dir) {
							case "x":
								var y = e("#mCSB_" + l.idx + "_dragger_horizontal"),
									b = "left",
									w = p[0].offsetLeft,
									x = [f.width() - p.outerWidth(!1), y.parent().width() - y.width()],
									_ = [n, 0 === n ? 0 : n / l.scrollRatio.x],
									S = m[1],
									T = g[1],
									k = S > 0 ? S / l.scrollRatio.x : 0,
									E = T > 0 ? T / l.scrollRatio.x : 0;
								break;
							case "y":
								var y = e("#mCSB_" + l.idx + "_dragger_vertical"),
									b = "top",
									w = p[0].offsetTop,
									x = [f.height() - p.outerHeight(!1), y.parent().height() - y.height()],
									_ = [n, 0 === n ? 0 : n / l.scrollRatio.y],
									S = m[0],
									T = g[0],
									k = S > 0 ? S / l.scrollRatio.y : 0,
									E = T > 0 ? T / l.scrollRatio.y : 0
						}
						_[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= x[1] ? _ = [x[0], x[1]] : _[0] = -_[0], t[0].mcs || (s(), r("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(p[0].onCompleteTimeout), J(y[0], b, Math.round(_[1]), u[1], o.scrollEasing), (l.tweenRunning || !(0 === w && _[0] >= 0 || w === x[0] && _[0] <= x[0])) && J(p[0], b, Math.round(_[0]), u[0], o.scrollEasing, o.overwrite, {
							onStart: function() {
								o.callbacks && o.onStart && !l.tweenRunning && (r("onScrollStart") && (s(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, C(y), l.cbOffsets = a())
							},
							onUpdate: function() {
								o.callbacks && o.onUpdate && r("whileScrolling") && (s(), c.callbacks.whileScrolling.call(t[0]))
							},
							onComplete: function() {
								if (o.callbacks && o.onComplete) {
									"yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
									var e = p[0].idleTimer || 0;
									p[0].onCompleteTimeout = setTimeout(function() {
										r("onScroll") && (s(), c.callbacks.onScroll.call(t[0])), r("onTotalScroll") && _[1] >= x[1] - k && l.cbOffsets[0] && (s(), c.callbacks.onTotalScroll.call(t[0])), r("onTotalScrollBack") && _[1] <= E && l.cbOffsets[1] && (s(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, p[0].idleTimer = 0, C(y, "hide")
									}, e)
								}
							}
						})
					}
				},
				J = function(e, t, n, i, o, r, a) {
					function s() {
						x.stop || (y || h.call(), y = G() - v, l(), y >= x.time && (x.time = y > x.time ? y + f - (y - x.time) : y + f - 1, x.time < y + 1 && (x.time = y + 1)), x.time < i ? x.id = p(s) : g.call())
					}

					function l() {
						i > 0 ? (x.currVal = u(x.time, b, _, i, o), w[t] = Math.round(x.currVal) + "px") : w[t] = n + "px", m.call()
					}

					function c() {
						f = 1e3 / 60, x.time = y + f, p = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
							return l(), setTimeout(e, .01)
						}, x.id = p(s)
					}

					function d() {
						null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id), x.id = null)
					}

					function u(e, t, n, i, o) {
						switch (o) {
							case "linear":
							case "mcsLinear":
								return n * e / i + t;
							case "mcsLinearOut":
								return e /= i, e--, n * Math.sqrt(1 - e * e) + t;
							case "easeInOutSmooth":
								return e /= i / 2, 1 > e ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
							case "easeInOutStrong":
								return e /= i / 2, 1 > e ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (-Math.pow(2, -10 * e) + 2) + t);
							case "easeInOut":
							case "mcsEaseInOut":
								return e /= i / 2, 1 > e ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t);
							case "easeOutSmooth":
								return e /= i, e--, -n * (e * e * e * e - 1) + t;
							case "easeOutStrong":
								return n * (-Math.pow(2, -10 * e / i) + 1) + t;
							case "easeOut":
							case "mcsEaseOut":
							default:
								var r = (e /= i) * e,
									a = r * e;
								return t + n * (.499999999999997 * a * r + -2.5 * r * r + 5.5 * a + -6.5 * r + 4 * e)
						}
					}
					e._mTween || (e._mTween = {
						top: {},
						left: {}
					});
					var f, p, a = a || {},
						h = a.onStart || function() {},
						m = a.onUpdate || function() {},
						g = a.onComplete || function() {},
						v = G(),
						y = 0,
						b = e.offsetTop,
						w = e.style,
						x = e._mTween[t];
					"left" === t && (b = e.offsetLeft);
					var _ = n - b;
					x.stop = 0, "none" !== r && d(), c()
				},
				G = function() {
					return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
				},
				V = function() {
					var e = this;
					e._mTween || (e._mTween = {
						top: {},
						left: {}
					});
					for (var t = ["top", "left"], n = 0; n < t.length; n++) {
						var i = t[n];
						e._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[i].id) : clearTimeout(e._mTween[i].id), e._mTween[i].id = null, e._mTween[i].stop = 1)
					}
				},
				K = function(e, t) {
					try {
						delete e[t]
					} catch (n) {
						e[t] = null
					}
				},
				Q = function(e) {
					return !(e.which && 1 !== e.which)
				},
				Z = function(e) {
					var t = e.originalEvent.pointerType;
					return !(t && "touch" !== t && 2 !== t)
				},
				et = function(e) {
					return !isNaN(parseFloat(e)) && isFinite(e)
				},
				tt = function(e) {
					var t = e.parents(".mCSB_container");
					return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
				},
				nt = function() {
					function e() {
						var e = ["webkit", "moz", "ms", "o"];
						if ("hidden" in document) return "hidden";
						for (var t = 0; t < e.length; t++)
							if (e[t] + "Hidden" in document) return e[t] + "Hidden";
						return null
					}
					var t = e();
					return t ? document[t] : !1
				};
			e.fn[n] = function(t) {
				return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
			}, e[n] = function(t) {
				return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
			}, e[n].defaults = r, window[n] = !0, e(window).load(function() {
				e(o)[n](), e.extend(e.expr[":"], {
					mcsInView: e.expr[":"].mcsInView || function(t) {
						var n, i, o = e(t),
							r = o.parents(".mCSB_container");
						return r.length ? (n = r.parent(), i = [r[0].offsetTop, r[0].offsetLeft], i[0] + tt(o)[0] >= 0 && i[0] + tt(o)[0] < n.height() - o.outerHeight(!1) && i[1] + tt(o)[1] >= 0 && i[1] + tt(o)[1] < n.width() - o.outerWidth(!1)) : void 0
					},
					mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
						var n = e(t).data(i);
						return n ? n.overflowed[0] || n.overflowed[1] : void 0
					}
				})
			})
		})
	}), $(function() {
		function e(e) {
			$(e).find(".relation-panel").each(function() {
				$(this).children().each(function() {
					var t = $(this);
					if ($(this).find("hover-box")) {
						var n = null;
						$(this).find(".tooltips-box .logo").mousemove(function() {
							t.find(".tooltips-box").addClass("hover"), t.find(".chart").easyPieChart({
								scaleColor: !1,
								lineWidth: 4,
								lineCap: "butt",
								barColor: "rgb(55, 195, 147)",
								size: 50,
								animate: 500
							})
						}).mouseleave(function() {
							clearTimeout(n), n = setTimeout(function() {
								t.find(".tooltips-box").removeClass("hover")
							}, 500)
						}), t.find(".hover-box").mousemove(function() {
							clearTimeout(n), t.find(".tooltips-box").addClass("hover")
						}).mouseleave(function() {
							t.find(".tooltips-box").removeClass("hover")
						})
					}
					$(this).find(".icon-arrow-up").click(function(n) {
						n.preventDefault(), $(this).toggleClass("icon-minus"), $(e).find(".icon-arrow-up").not($(this)).removeClass("icon-minus"), t.find(".intro-box p").html(t.find(".intro-box p").html().replace(/[\uff1f|\uff0c| \uff01\uff5c\u3002]$/im, "\u3002")), $(".intro-box").mCustomScrollbar({
							axis: "y",
							autoHideScrollbar: !0
						})
					})
				})
			})
		}

		function t(e, t, n) {
			$.ajax({
				url: KR_CONFIG_OBJECT.getRongHost + "api/hostsite/relate/" + e + "?" + t,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(e) {
				n && n(e)
			})
		}

		function n(e, t) {
			$.ajax({
				url: KR_CONFIG_OBJECT.getRongHost + "api/p/crowd-funding/" + e,
				xhrFields: {
					withCredentials: !0
				},
				crossDomain: !0
			}).done(function(e) {
				t && t(e)
			})
		}

		function i(t, n, i, o) {
			juicer.register("getTime", h), juicer.register("defaultLogo", b), juicer.register("defaultAvatar", w), juicer.register("companyProfileLink", x), juicer.register("userProfileLink", _), juicer.register("orgProfileLink", C), juicer.register("companyIndustryData", m), juicer.register("getCompanyFinancePhase", g), juicer.register("zhongchouProfileLink", S), juicer.register("cashUnint", y), juicer.register("getFinancePhase", v), juicer.register("formatCompanyIntro", T), juicer.register("positionType", k), juicer.set("detection", !0);
			var r = juicer(n),
				n = r.render(i);
			$(o).append(n), setTimeout(function() {
				e(t), $(".J_fastSection").trigger("sticky_kit:recalc")
			}, 1e3)
		}
		var o = ["{@if data.length}", '<div class="side-item side-company">', "<h3>\u76f8\u5173\u516c\u53f8</h3>", '<div class="lr-list relation-panel relation-company">', "{@each data as item}", '<div class="item">', '<div class="clearfix">', "{@if item.crowdfundingInfo.cfStatus}", '<div class="tooltips-box">', '<a href="${item.company.crowdfundingId|zhongchouProfileLink}" class="f-l logo logo-bor" target="_blank">', '<img src="${item.company.logo|defaultLogo}" alt="" width="60" />', "</a>", '<div class="hover-box">', "<dl>", "<dd>", '<div class="inner">', '<div class="chart" data-percent="${item.crowdfundingInfo.cf_percent}">${item.crowdfundingInfo.cf_percent}</div>', "</div>", "</dd>", "<dd>", '<div class="inner">', "<span>\uffe5${item.crowdfundingInfo.cf_success_raising_offer}</span>", "<span>\u5df2\u7b79\u96c6</span>", "</div>", "</dd>", '<dd class="financing-cash">', '<div class="inner">', "<span>\uffe5${item.crowdfundingInfo.cf_raising}</span>", "<span>\u878d\u8d44\u91d1\u989d</span>", "</div>", "</dd>", "</dl>", '<a href="${item.company.crowdfundingId|zhongchouProfileLink}" class="link-zhongchou-details" target="_blank">\u67e5\u770b\u8be6\u60c5</a>', "</div>", "</div>", '<div class="desc-box crowdfunding-desc">', "<strong>", '<a href="${item.company.crowdfundingId|zhongchouProfileLink}" target="_blank">${item.company.name}</a>', "</strong>", "<p>${item.company.brief}</p>", "</div>", "{@/if}", "{@if !item.crowdfundingInfo.cfStatus}", '<div class="tooltips-box">', '<a href="${item.cid|companyProfileLink}" class="f-l logo logo-bor" target="_blank">', '<img src="${item.company.logo|defaultLogo}" alt="" width="60" />', "</a>", "</div>", '<div class="desc-box">', "<strong>", '<a href="${item.cid|companyProfileLink}" target="_blank">${item.company.name}</a>', "</strong>", "<p>${item.company.brief}</p>", "</div>", "{@/if}", "</div>", "{@if item.company.startDate || item.company.industry || item.company.financePhase || item.company.intro || (item.memberList && item.memberList.length)}", '<a href="#" class="icon-arrow-up"></a>', '<div class="extend-panel">', '<div class="item">', "<header>", '<div class="vintage">', "<strong>${item.company.startDate|getTime}</strong>", "<span>\u6210\u7acb\u65f6\u95f4</span>", "</div>", '<div class="industry">', "<strong>${item.company.industry|companyIndustryData}</strong>", "<span>\u516c\u53f8\u9886\u57df</span>", "</div>", '<div class="financing-phase">', "<strong>${item.company.financePhase|getCompanyFinancePhase}</strong>", "<span>\u516c\u53f8\u9636\u6bb5</span>", "</div>", "</header>", '<div class="body-main">', "{@if item.company.intro}", '<div class="intro">', "<h4>\u4ea7\u54c1\u4ecb\u7ecd</h4>", '<div class="intro-box">', "<p>$${item.company.intro|formatCompanyIntro}</p>", "</div>", "</div>", "{@/if}", "{@if item.memberList && item.memberList.length}", '<div class="extend-list startups-member">', "<h4>\u521b\u59cb\u56e2\u961f</h4>", '<div class="member-list">', "{@each item.memberList as obj,index}", "{@if index < 3}", '<div class="member-item">', '<a href="${obj.id|userProfileLink}" class="f-l logo logo-circle" target="_blank">', '<img src="${obj.avatar|defaultAvatar}" alt="" width="60" target="_blank" />', "</a>", '<div class="desc-box">', "<strong>", '<a href="${obj.id|userProfileLink}" target="_blank">${obj.name}</a>', "</strong>", "<p>${obj.type|positionType}&nbsp;&nbsp;${obj.position}</p>", "</div>", "</div>", "{@/if}", "{@/each}", "</div>", "</div>", "{@/if}", "</div>", "</div>", "</div>", "{@/if}", "{@if item.memberList && item.memberList.length > 3}", '<div class="more-info">', '<a href="${item.cid|companyProfileLink}">\u66f4\u591a &gt;</a>', "</div>", "{@/if}", "</div>", "{@/each}", "</div>", "</div>", "{@/if}"].join(""),
			r = ["{@if data.length}", '<div class="side-item side-org">', "<h3>\u76f8\u5173\u6295\u8d44\u65b9</h3>", '<div class="lr-list relation-panel relation-org">', "{@each data as item}", '<div class="item">', '<div class="clearfix">', '<div class="tooltips-box">', '<a href="${item.orgId|orgProfileLink}" class="f-l logo logo-bor" target="_blank">', '<img src="${item.organization.logo|defaultLogo}" width="60">', "</a>", "</div>", '<div class="desc-box">', "<strong>", '<a href="${item.orgId|orgProfileLink}" target="_blank">${item.organization.nameAbbr}</a>', "</strong>", "<p>", '<a href="${item.organization.website}" target="_blank">${item.organization.website}</a>', "</p>", "</div>", "</div>", "{@if item.organization.startDate || item.pastInvestmentCount || (item.memberList && item.memberList.length) || item.organization.intro}", '<a href="#" class="icon-arrow-up"></a>', '<div class="extend-panel">', '<div class="item">', "<header>", '<div class="vintage">', "<strong>${item.organization.startDate|getTime}</strong>", "<span>\u6210\u7acb\u65f6\u95f4</span>", "</div>", '<div class="industry">', "{@if item.pastInvestmentCount}", "<strong>${item.pastInvestmentCount}\u4e2a</strong>", "{@else}", "<strong>\u672a\u77e5</strong>", "{@/if}", "<span>\u6295\u8d44\u6848\u4f8b</span>", "</div>", '<div class="financing-phase">', "{@if item.memberList && item.memberList.length}", "<strong>${item.memberList.length}\u4f4d</strong>", "{@else}", "<strong>\u672a\u77e5</strong>", "{@/if}", "<span>\u5165\u9a7b\u6295\u8d44\u4eba</span>", "</div>", "</header>", '<div class="body-main">', "{@if item.organization.intro}", '<div class="intro">', "<h4>\u673a\u6784\u7b80\u4ecb</h4>", '<div class="intro-box">', "<p>${item.organization.intro}</p>", "</div>", "</div>", "{@/if}", "{@if item.memberList && item.memberList.length}", '<div class="extend-list org-member">', "<h4>\u673a\u6784\u6210\u5458</h4>", '<div class="member-list clearfix">', "{@each item.memberList as obj, index}", "{@if index < 3}", '<div class="member-item">', '<a href="${obj.user.id|userProfileLink}" class="logo logo-circle" target="_blank">', '<img src="${obj.user.avatar|defaultAvatar}" alt="" width="40" target="_blank">', "</a>", "<strong>", '<a href="${obj.user.id|userProfileLink}" target="_blank">${obj.user.name}</a>', "</strong>", "</div>", "{@/if}", "{@/each}", "</div>", "</div>", "{@/if}", "</div>", "</div>", "</div>", "{@/if}", "{@if item.memberList && item.memberList.length > 3}", '<div class="more-info">', '<a href="${item.orgId|orgProfileLink}">\u66f4\u591a &gt;</a>', "</div>", "{@/if}", "</div>", "{@/each}", "</div>", "</div>", "{@/if}"].join(""),
			a = ["{@if data.length}", '<div class="side-item side-investor">', "{@if title}", "<h3>\u76f8\u5173\u6295\u8d44\u65b9</h3>", "{@else}", '<h3 class="investor-org-both"></h3>', "{@/if}", '<div class="lr-list relation-panel relation-investor">', "{@each data as item}", '<div class="item">', '<div class="clearfix">', '<div class="tooltips-box">', '<a href="${item.baseInfo.id|userProfileLink}" class="f-l logo logo-bor" target="_blank">', '<img src="${item.baseInfo.avatar|defaultAvatar}" width="60">', "</a>", "</div>", '<div class="desc-box">', "<strong>", '<a href="${item.baseInfo.id|userProfileLink}" target="_blank">${item.baseInfo.name}</a>', "</strong>", "<p>${item.baseInfo.intro}</p>", "</div>", "</div>", "{@if item.cueeWorkStatus || item.investorSettingStatus}", '<a href="#" class="icon-arrow-up"></a>', '<div class="extend-panel">', '<div class="item">', "{@if item.investorSettingStatus}", "<header>", "{@if item.investorSettings.totalInvestCaseNum}", '<div class="vintage">', "<strong>${item.investorSettings.totalInvestCaseNum}\u4e2a</strong>", "<span>\u6295\u8d44\u6848\u4f8b</span>", "</div>", "{@/if}", "{@if item.investorSettings.totalNextCaseNum}", '<div class="industry">', "<strong>${item.investorSettings.totalNextCaseNum}\u4e2a</strong>", "<span>\u8fdb\u5165\u4e0b\u4e00\u8f6e</span>", "</div>", "{@/if}", "{@if item.investorSettings.totalQuitCaseNum}", '<div class="financing-phase">', "<strong>${item.investorSettings.totalQuitCaseNum}\u4e2a</strong>", "<span>\u6210\u529f\u9000\u51fa</span>", "</div>", "{@/if}", "</header>", "{@/if}", '<div class="body-main">', "{@if (item.investorSettingStatus && (item.investorSettings.investStartDate || item.investorSettings.totalInvestCaseNum || item.investorSettings.totalNextCaseNum || item.investorSettings.totalQuitCaseNum)) || (item.cueeWorkStatus && (item.currWork.groupName || item.currWork.positionString))}", '<div class="intro">', "<h4>\u4e2a\u4eba\u4ecb\u7ecd</h4>", '<div class="intro-box">', "<p>", "{@if item.investorSettingStatus && item.investorSettings.investStartDate}", "${item.investorSettings.investStartDate|getTime}\u5f00\u59cb\u4ece\u4e8b\u6295\u8d44\u76f8\u5173\u5de5\u4f5c\uff0c", "{@/if}", "{@if item.cueeWorkStatus && item.currWork.groupName}", "\u76ee\u524d\u5728${item.currWork.groupName}\u5de5\u4f5c\uff0c", "{@/if}", "{@if item.cueeWorkStatus && item.currWork.positionString}", "\u62c5\u4efb${item.currWork.positionString}\uff0c", "{@/if}", "{@if item.investorSettingStatus && item.investorSettings.totalInvestCaseNum}", "\u5171\u8ba1\u6295\u8d44${item.investorSettings.totalInvestCaseNum}\u4e2a\u9879\u76ee\uff0c", "{@/if}", "{@if item.investorSettingStatus && item.investorSettings.totalNextCaseNum}", "\u5176\u4e2d${item.investorSettings.totalNextCaseNum}\u4e2a\u8fdb\u5165\u4e0b\u4e00\u8f6e\uff0c", "{@/if}", "{@if item.investorSettingStatus && item.investorSettings.totalQuitCaseNum}", "\u6709${item.investorSettings.totalQuitCaseNum}\u4e2a\u9879\u76ee\u6210\u529f\u9000\u51fa\u3002", "{@/if}", "</p>", "</div>", "</div>", "{@/if}", "{@if item.industryZn || (item.investPhases && item.investPhases.length) || (item.investorSettingStatus && (item.investorSettings.yearCaseNum || item.investorSettings.yearInvestMin || item.investorSettings.yearInvestMax))}", '<div class="other">', "<h4>\u6295\u8d44\u98ce\u683c</h4>", '<div class="other-box">', "{@if item.industryZn}", '<div class="other-item">', "<label>\u5173\u6ce8\u9886\u57df</label>", "<div>${item.industryZn}</div>", "</div>", "{@/if}", "{@if item.investPhases && item.investPhases.length}", '<div class="other-item">', "<label>\u6295\u8d44\u9636\u6bb5</label>", "<div>${item.investPhases|getFinancePhase}</div>", "</div>", "{@/if}", "{@if item.investorSettings.yearCaseNum}", '<div class="other-item">', "<label>\u8ba1\u5212\u4eca\u5e74\u6295\u8d44</label>", "<div>${item.investorSettings.yearCaseNum}\u4e2a</div>", "</div>", "{@/if}", "{@if item.investorSettingStatus && (item.investorSettings.yearInvestMin || item.investorSettings.yearInvestMax)}", '<div class="other-item">', "<label>\u8ba1\u5212\u6295\u8d44\u989d\u5ea6</label>", "<div>${item.investorSettings.yearInvestCurrency|cashUnint}${item.investorSettings.yearInvestMin}\u4e07-${item.investorSettings.yearInvestMax}\u4e07</div>", "</div>", "{@/if}", "</div>", "</div>", "{@/if}", "{@if item.pastInvestmentData && item.pastInvestmentData.pastInvestmentApartList && item.pastInvestmentData.pastInvestmentApartList.length}", '<div class="extend-list investor-member">', "<h4>\u6295\u8d44\u6848\u4f8b</h4>", '<div class="member-list clearfix">', "{@each item.pastInvestmentData.pastInvestmentApartList as obj}", '<div class="member-item">', '<a href="${obj.cid|companyProfileLink}" class="f-l logo logo-circle" target="_blank">', '<img src="${obj.logo|defaultLogo}" alt="" width="60" target="_blank">', "</a>", '<div class="desc-box">', "<strong>", '<a href="${obj.cid|companyProfileLink}" target="_blank">${obj.name}</a>', "</strong>", "<p>${obj.brief}</p>", "<p>", "{@if obj.details && obj.details.length}", "{@if obj.details[0].phase}", "${obj.details[0].phase|getFinancePhase}", "{@/if}", "{@if obj.details[0].phase && obj.details[0].financeAmount}", " | ", "{@/if}", "{@if obj.details[0].financeAmountUnit && obj.details[0].financeAmount}", "\u603b\u6295\u8d44\u91d1\u989d ${obj.details[0].financeAmountUnit|cashUnint}${obj.details[0].financeAmount}\u4e07", "{@/if}", "{@/if}", "</p>", "</div>", "</div>", "{@/each}", "</div>", "</div>", "{@/if}", "</div>", "</div>", "</div>", "{@/if}", "{@if item.pastInvestmentData.pastInvestmentTotalCnt > 3}", '<div class="more-info">', '<a href="${item.baseInfo.id|userProfileLink}">\u66f4\u591a &gt;</a>', "</div>", "{@/if}", "</div>", "{@/each}", "</div>", "</div>", "{@/if}"].join(""),
			s = $(".reading-off .article-section").eq(0).find("u[data-association]"),
			l = "",
			c = "",
			d = "",
			u = {},
			f = {},
			p = {};
		$.each(s, function() {
			"company" == $(this).data("association") ? l = l + "names=" + $(this).text() + "&" : "institutional-investor" == $(this).data("association") ? c = c + "names=" + $(this).text() + "&" : "investor" == $(this).data("association") && (d = d + "names=" + $(this).text() + "&")
		}), l = l.substring(0, l.length - 1).replace(/\s/g, ""), c = c.substring(0, c.length - 1).replace(/\s/g, ""), d = d.substring(0, d.length - 1).replace(/\s/g, ""), l ? t("company", l, function(e) {
			if (0 != e.code) return void $(".relation-company-side").hide();
			if (u = e, !e.data.length) return void $(".relation-company-side").hide();
			$(".relation-company-side").show();
			var t = 0,
				r = [],
				a = [],
				s = [],
				l = [],
				c = [];
			$.each(e.data, function(d, f) {
				f.company.crowdfundingId > 0 ? (t++, n(f.company.crowdfundingId, function(e) {
					if (t--, 0 != e.code) return void l.push(d);
					if (30 == e.data.base.status) {
						var n = e.data.base.cf_success_raising_offer > 1e4 ? e.data.base.cf_success_raising_offer / 1e4 + "\u4e07" : e.data.base.cf_success_raising_offer,
							p = e.data.base.cf_raising > 1e4 ? e.data.base.cf_raising / 1e4 + "\u4e07" : e.data.base.cf_raising;
						u.data[d].crowdfundingInfo = {
							cf_percent: parseInt(e.data.base.cf_success_raising_offer / e.data.base.cf_raising * 100) + "%",
							cf_raising: p,
							cf_success_raising_offer: n,
							cfStatus: !0
						}, r.push(f), a.push(d)
					} else u.data[d].crowdfundingInfo = {
						cfStatus: !1
					};
					0 == t && (c = l.concat(a), $.each(u.data, function(e, t) {
						-1 == $.inArray(e, c) && s.push(t)
					}), u.data = r.concat(s), i(".side-company", o, u, ".relation-company-box"))
				})) : (u.data[d].crowdfundingInfo = {
					cfStatus: !1
				}, d == e.data.length - 1 && 0 == t && i(".side-company", o, u, ".relation-company-box"))
			})
		}) : $(".relation-company-side").hide(), c ? t("organization", c, function(e) {
			return 0 != e.code ? void $(".relation-org-box").hide() : (f = e, e.data.length ? (p.title = !1, $(".relation-org-box").show(), i(".side-org", r, f, ".relation-org-box"), void(d ? t("investor", d, function(e) {
				return 0 != e.code ? void $(".relation-investor-box").hide() : (p = e, e.data.length ? ($(".relation-investor-box").show().css("margin-top", -20), $.each(e.data, function(e, t) {
					$.each(t.industry, function(t, n) {
						$.each(DICTIONARY_DATA.InvestorFollowedIndustry, function(i, o) {
							n == o.value && (p.data[e].industry[t] = o.desc)
						})
					}), p.data[e].industryZn = p.data[e].industry.join("\u3001"), p.data[e].investorSettingStatus = !t.investorSettings || t.investorSettings && $.isEmptyObject(t.investorSettings) ? !1 : !t.investorSettings.totalInvestCaseNum && !t.investorSettings.totalNextCaseNum && t.investorSettings.totalQuitCaseNum && t.investorSettings.investStartDate && t.investorSettings.yearCaseNum && t.investorSettings.yearInvestCurrency && t.investorSettings.yearInvestMin && t.investorSettings.yearInvestMax ? !1 : !0, p.data[e].cueeWorkStatus = !t.currWork || t.currWork && $.isEmptyObject(t.currWork) ? !1 : t.currWork.groupName || t.currWork.positionString ? !0 : !1
				}), void i(".side-investor", a, p, ".relation-investor-box")) : void $(".relation-investor-box").hide())
			}) : $(".relation-investor-box").hide())) : (p.title = !0, void $(".relation-org-box").hide()))
		}) : ($(".relation-org-box").hide(), d ? t("investor", d, function(e) {
			return 0 != e.code ? void $(".relation-investor-box").hide() : (p = e, e.data.length ? ($(".relation-investor-box").show().css("margin-top", 0), p.title = !0, $.each(e.data, function(e, t) {
				$.each(t.industry, function(t, n) {
					$.each(DICTIONARY_DATA.InvestorFollowedIndustry, function(i, o) {
						n == o.value && (p.data[e].industry[t] = o.desc)
					})
				}), p.data[e].industryZn = p.data[e].industry.join("\u3001"), p.data[e].investorSettingStatus = !t.investorSettings || t.investorSettings && $.isEmptyObject(t.investorSettings) ? !1 : !t.investorSettings.totalInvestCaseNum && !t.investorSettings.totalNextCaseNum && t.investorSettings.totalQuitCaseNum && t.investorSettings.investStartDate && t.investorSettings.yearCaseNum && t.investorSettings.yearInvestCurrency && t.investorSettings.yearInvestMin && t.investorSettings.yearInvestMax ? !1 : !0, p.data[e].cueeWorkStatus = !t.currWork || t.currWork && $.isEmptyObject(t.currWork) ? !1 : t.currWork.groupName || t.currWork.positionString ? !0 : !1
			}), void i(".side-investor", a, p, ".relation-investor-box")) : void $(".relation-investor-box").hide())
		}) : $(".relation-investor-box").hide());
		var h = function(e) {
				if (e) {
					var t = new Date(e);
					return t.getFullYear() + "\u5e74"
				}
				return e = "\u672a\u77e5"
			},
			m = function(e) {
				if (e) {
					var t = e.split(","),
						n = "";
					return $.each(t, function(e, t) {
						e > 0 || $.each(DICTIONARY_DATA.CompanyIndustry, function(e, i) {
							return t == i.value ? n = i.desc : void 0
						})
					}), n
				}
				return e = "\u672a\u77e5"
			},
			g = function(e) {
				if (e) {
					var t = e.split(","),
						n = "";
					return $.each(t, function(e, t) {
						e > 0 || $.each(DICTIONARY_DATA.CompanyFinancePhase, function(e, i) {
							return t == i.value ? n = i.desc : void 0
						})
					}), n
				}
				return "\u672a\u77e5"
			},
			v = function(e) {
				var t = [],
					n = "";
				return "string" == typeof e ? t = e.split(",") : "object" == typeof e && (t = e), $.each(t, function(e, t) {
					e > 2 || $.each(DICTIONARY_DATA.FinancePhase, function(e, i) {
						return t == i.value ? n = n + i.desc + "\u3001" : void 0
					})
				}), n = n.substring(0, n.length - 1)
			},
			y = function(e) {
				return "CNY" == e ? "\uffe5" : "USD" == e ? "$" : void 0
			},
			b = function(e) {
				return e ? e : KR_CONFIG_OBJECT.defaultLogo
			},
			w = function(e) {
				return e ? e : KR_CONFIG_OBJECT.defaultAvatar
			},
			x = function(e) {
				return e ? KR_CONFIG_OBJECT.getRongHost + "company/" + e + "/overview" : void 0
			},
			_ = function(e) {
				return e ? KR_CONFIG_OBJECT.getRongHost + "userinfo/" + e : void 0
			},
			C = function(e) {
				return e ? KR_CONFIG_OBJECT.getRongHost + "organization/" + e : void 0
			},
			S = function(e) {
				return e ? KR_CONFIG_OBJECT.getZhongChouHost + "project/" + e : void 0
			},
			T = function(e) {
				return e ? e.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\n/g, "<br/>") : void 0
			},
			k = function(e) {
				return e && $.each(DICTIONARY_DATA.ComPositionType, function(t, n) {
					return e == n.value ? e = n.desc : void 0
				}), e
			}
	}), window.DICTIONARY_DATA = {
		AuditStatus: [{
			desc: "\u521d\u59cb",
			id: 0,
			value: "DEFAULT"
		}, {
			desc: "\u5ba1\u6838\u4e2d",
			id: 1,
			value: "PENDING"
		}, {
			desc: "\u5ba1\u6838\u901a\u8fc7",
			id: 2,
			value: "PASSED"
		}, {
			desc: "\u9a73\u56de",
			id: 3,
			value: "REJECTED"
		}, {
			desc: "\u5220\u9664",
			id: 4,
			value: "DELETED"
		}],
		WriterRoleEnum: [{
			desc: "\u666e\u901a\u4f5c\u8005",
			id: 0,
			value: "WRITER"
		}, {
			desc: "\u521b\u4e1a\u8005",
			id: 1,
			value: "ENTREPRENEUR"
		}, {
			desc: "\u6295\u8d44\u4eba",
			id: 2,
			value: "INVESTOR"
		}, {
			desc: "\u673a\u6784",
			id: 3,
			value: "ORGANIZATION"
		}],
		EmployeeType: [{
			desc: "\u521b\u59cb\u4eba",
			id: 101,
			value: "FOUNDER"
		}, {
			desc: "\u8054\u5408\u521b\u59cb\u4eba",
			id: 102,
			value: "CO_FOUNDER"
		}, {
			desc: "\u6280\u672f",
			id: 103,
			value: "TECH"
		}, {
			desc: "\u8bbe\u8ba1",
			id: 104,
			value: "DESIGN"
		}, {
			desc: "\u4ea7\u54c1",
			id: 105,
			value: "PRODUCT"
		}, {
			desc: "\u8fd0\u8425",
			id: 106,
			value: "OPERATOR"
		}, {
			desc: "\u5e02\u573a\u4e0e\u9500\u552e",
			id: 107,
			value: "SALE"
		}, {
			desc: "\u884c\u653f\u3001\u4eba\u4e8b\u53ca\u8d22\u52a1",
			id: 108,
			value: "HR"
		}, {
			desc: "\u6295\u8d44\u548c\u5e76\u8d2d",
			id: 109,
			value: "INVEST"
		}, {
			desc: "\u5176\u4ed6",
			id: 110,
			value: "OTHER"
		}],
		FundsType: [{
			desc: "\u666e\u901a\u878d\u8d44",
			id: 0,
			value: "ORDINARY"
		}, {
			desc: "\u6781\u901f\u878d\u8d44",
			id: 1,
			value: "SPEED"
		}],
		CompanyOperationStatus: [{
			desc: "3\u4e2a\u6708\u5185\u4e0a\u7ebf",
			id: -1,
			value: "ONLINE_IN_3MONTH"
		}, {
			desc: "6\u4e2a\u6708\u5185\u4e0a\u7ebf",
			id: -5,
			value: "ONLINE_IN_6MONTH"
		}, {
			desc: "\u8fd0\u8425\u4e2d",
			id: 0,
			value: "OPEN"
		}, {
			desc: "\u505c\u6b62\u8fd0\u8425",
			id: 1,
			value: "CLOSED"
		}],
		OrgSource: [{
			desc: "\u9ed8\u8ba4",
			id: 0,
			value: "DEFAULT"
		}, {
			desc: "\u4e2a\u4eba\u6295\u8d44\u7ecf\u5386",
			id: 1,
			value: "USER_INVEST"
		}, {
			desc: "\u4e2a\u4eba\u5de5\u4f5c\u7ecf\u5386",
			id: 2,
			value: "USER_WORK_EXP"
		}, {
			desc: "\u516c\u53f8\u878d\u8d44\u7ecf\u5386",
			id: 3,
			value: "COM_FINANCE"
		}, {
			desc: "\u516c\u53f8\u8fc7\u5f80\u6295\u8d44\u65b9",
			id: 4,
			value: "COM_HISTORY_INVESTOR"
		}, {
			desc: "\u5b8c\u6210\u878d\u8d44",
			id: 5,
			value: "FUND_COMPLETE"
		}, {
			desc: "\u6295\u8d44\u4eba\u8ba4\u8bc1",
			id: 6,
			value: "INVESTOR_AUDIT"
		}],
		WiseVoteEntityTypeEnum: [{
			desc: "\u521b\u4e1a\u8005",
			id: 1,
			value: "STARTUP_USER"
		}, {
			desc: "\u8ddf\u6295\u4eba",
			id: 2,
			value: "CO_INVESTOR"
		}, {
			desc: "\u521b\u4e1a\u516c\u53f8",
			id: 3,
			value: "STARTUP_COMPANY"
		}],
		OrgType: [{
			desc: "\u4e00\u822c\u6295\u8d44\u673a\u6784",
			id: 1,
			value: "COMMON"
		}, {
			desc: "\u9876\u7ea7\u6295\u8d44\u673a\u6784",
			id: 2,
			value: "VIP"
		}],
		ChartCategoryEnum: [{
			desc: "\u6c2a\u6307\u6570",
			id: 0,
			value: "KR_INDEX"
		}, {
			desc: "alexa\u6392\u540d",
			id: 1,
			value: "ALEXA"
		}, {
			desc: "app\u7efc\u5408\u6392\u540d",
			id: 2,
			value: "APP"
		}, {
			desc: "\u641c\u7d22\u6307\u6570",
			id: 3,
			value: "SEARCH"
		}, {
			desc: "\u5fae\u535a\u6307\u6570",
			id: 4,
			value: "WEIBO"
		}, {
			desc: "\u5a92\u4f53\u6307\u6570",
			id: 5,
			value: "MEDIA"
		}],
		ConfirmStatus: [{
			desc: "\u5f85\u786e\u8ba4",
			id: 0,
			value: "PENDING"
		}, {
			desc: "\u5df2\u786e\u8ba4",
			id: 1,
			value: "CONFIRMED"
		}],
		InvestorRoleEnum: [{
			desc: "\u673a\u6784\u6295\u8d44\u4eba",
			id: 0,
			value: "ORG_INVESTOR"
		}, {
			desc: "\u516c\u53f8\u6295\u8d44\u5e76\u8d2d\u90e8",
			id: 1,
			value: "COMPANY_INVEST_DEPT"
		}, {
			desc: "\u4e2a\u4eba\u6295\u8d44\u4eba",
			id: 2,
			value: "PERSONAL_INVESTOR"
		}],
		StartupPositionType: [{
			desc: "\u521b\u59cb\u4eba",
			id: 101,
			value: "FOUNDER"
		}, {
			desc: "\u8054\u5408\u521b\u59cb\u4eba",
			id: 102,
			value: "CO_FOUNDER"
		}],
		NewsReportAngle: [{
			desc: "\u6211\u4eec\u4e0a\u7ebf\u4e86\u4e00\u4e2a\u65b0\u4ea7\u54c1",
			id: 0,
			value: "PRODUCT"
		}, {
			desc: "\u6211\u4eec\u5e0c\u671b\u516c\u5e03\u878d\u8d44\u6d88\u606f",
			id: 1,
			value: "FINANCING"
		}, {
			desc: "\u6211\u6709\u5176\u4ed6\u6d88\u606f\u5e0c\u671b\u62a5\u9053",
			id: 2,
			value: "OTHER"
		}],
		InvestorType: [{
			desc: "\u975e\u6295\u8d44\u4eba",
			id: 100,
			value: 100
		}, {
			desc: "\u6295\u8d44\u4eba",
			id: 20,
			value: 20
		}, {
			desc: "\u4f18\u8d28\u6295\u8d44\u4eba",
			id: 10,
			value: 10
		}],
		InternalEmailTypeEnum: [{
			desc: "\u8ddf\u6295\u4eba\u5b8c\u6210\u4ed8\u6b3e",
			id: 0,
			value: "CO_INVESTOR_PAYMENT_COMPLETE"
		}, {
			desc: "\u8ddf\u5934\u4eba\u9009\u62e9\u7ebf\u4e0b\u4ed8\u6b3e",
			id: 1,
			value: "UNDER_LINE_PAYMENT_1"
		}, {
			desc: "\u8ddf\u6295\u4eba\u4e0b\u8ba2\u5355\u63d0\u9192",
			id: 2,
			value: "CO_INVESTOR_ORDER_REMIND"
		}, {
			desc: "\u8ddf\u6295\u4eba\u56e0\u6b3e\u9879\u4e0d\u8db3\u9000\u6b3e\u63d0\u9192",
			id: 3,
			value: "CO_INVESTOR_RETURN_PAYMENT"
		}, {
			desc: "\u540e\u53f0\u8ba2\u5355\u4fee\u6539\u540e\u786e\u8ba4",
			id: 4,
			value: "MODIFIED_ORDER_CONFIRMED"
		}, {
			desc: "\u57fa\u91d1\u52df\u96c6\u9884\u7ea6\u6210\u529f\u901a\u77e5",
			id: 5,
			value: "FUND_PRE_ORDER_SUCCESS"
		}, {
			desc: "kr\u7801\u53d1\u653e",
			id: 6,
			value: "KR_CODE"
		}],
		InternalNotificationEnum: [{
			desc: "\u57fa\u91d1\u52df\u96c6\u9884\u7ea6\u6210\u529f\u901a\u77e5",
			id: 5,
			value: "FUND_PRE_ORDER_SUCCESS"
		}, {
			desc: "kr\u7801\u53d1\u653e",
			id: 6,
			value: "KR_CODE"
		}, {
			desc: "\u521b\u4e1a\u6d3b\u52a8\u901a\u77e5",
			id: 7,
			value: "CHUANG_HUODONG"
		}, {
			desc: "\u8ddf\u6295\u4eba\u8ba4\u8bc1\u6210\u529f",
			id: 8,
			value: "CO_INVESTOR_SUCCESS"
		}],
		CoinvestorType: [{
			desc: "\u975e\u8ddf\u6295\u4eba",
			id: 0,
			value: 0
		}, {
			desc: "\u6b63\u5728\u5b9e\u540d\u8ba4\u8bc1\u8ddf\u6295\u4eba",
			id: 1,
			value: 1
		}, {
			desc: "\u8ddf\u6295\u4eba",
			id: 2,
			value: 2
		}],
		CompanyStatus: [{
			desc: "\u521d\u59cb",
			id: 0,
			value: "INIT"
		}, {
			desc: "\u5ba1\u6838\u4e2d",
			id: 1,
			value: "AUDITING"
		}, {
			desc: "\u5df2\u521b\u5efa",
			id: 2,
			value: "CREATED"
		}, {
			desc: "\u8ba4\u9886\u4e2d",
			id: 3,
			value: "CLAIMING"
		}, {
			desc: "\u5df2\u8ba4\u9886",
			id: 4,
			value: "CLAIMED"
		}],
		FundsStatus: [{
			desc: "\u7533\u8bf7\u878d\u8d44",
			id: 2,
			value: "SUBMITTED"
		}, {
			desc: "\u6302\u724c\u6210\u529f",
			id: 3,
			value: "PASSED"
		}, {
			desc: "\u4f18\u8d28\u9879\u76ee",
			id: 4,
			value: "RECOMMENDED"
		}, {
			desc: "\u5b8c\u6210\u878d\u8d44",
			id: 5,
			value: "COMPLETED"
		}, {
			desc: "\u6302\u724c\u5931\u8d25",
			id: 6,
			value: "REJECTED"
		}, {
			desc: "\u878d\u8d44\u5df2\u5173\u95ed",
			id: 7,
			value: "CLOSED"
		}],
		CompanyFinancePhase: [{
			desc: "\u672a\u77e5\u8f6e\u6b21",
			id: -100,
			value: "UNKNOWN"
		}, {
			desc: "\u975e\u6b63\u5f0f\u8f6e\u6b21",
			id: -50,
			value: "INFORMAL"
		}, {
			desc: "\u672a\u878d\u8d44",
			id: 0,
			value: "NONE"
		}, {
			desc: "\u5929\u4f7f\u8f6e",
			id: 10,
			value: "ANGEL"
		}, {
			desc: "Pre-A\u8f6e",
			id: 20,
			value: "PRE_A"
		}, {
			desc: "A\u8f6e",
			id: 30,
			value: "A"
		}, {
			desc: "A+\u8f6e",
			id: 35,
			value: "A_PLUS"
		}, {
			desc: "B\u8f6e",
			id: 40,
			value: "B"
		}, {
			desc: "B+\u8f6e",
			id: 45,
			value: "B_PLUS"
		}, {
			desc: "C\u8f6e",
			id: 50,
			value: "C"
		}, {
			desc: "D\u8f6e",
			id: 60,
			value: "D"
		}, {
			desc: "E\u8f6e\u53ca\u4ee5\u540e",
			id: 70,
			value: "E"
		}, {
			desc: "\u5e76\u8d2d",
			id: 100,
			value: "ACQUIRED"
		}, {
			desc: "\u4e0a\u5e02",
			id: 110,
			value: "IPO"
		}],
		OrgPositionType: [{
			desc: "\u521b\u59cb\u5408\u4f19\u4eba",
			id: 201,
			value: "FOUNDER_PARTNER"
		}, {
			desc: "\u8463\u4e8b\u957f",
			id: 202,
			value: "CHAIRMAN"
		}, {
			desc: "CEO",
			id: 203,
			value: "CEO"
		}, {
			desc: "\u7ba1\u7406\u5408\u4f19\u4eba",
			id: 204,
			value: "MANAGE_PARTNER"
		}, {
			desc: "\u8d44\u6df1\u5408\u4f19\u4eba",
			id: 205,
			value: "SENIOR_PARTNER"
		}, {
			desc: "\u5408\u4f19\u4eba",
			id: 206,
			value: "PARTNER"
		}, {
			desc: "\u98ce\u9669\u5408\u4f19\u4eba",
			id: 207,
			value: "VENTURE_PARTNER"
		}, {
			desc: "\u8463\u4e8b",
			id: 208,
			value: "DIRECTOR"
		}, {
			desc: "\u603b\u7ecf\u7406",
			id: 209,
			value: "GM"
		}, {
			desc: "\u526f\u603b\u7ecf\u7406",
			id: 2010,
			value: "VICE_GM"
		}, {
			desc: "\u8463\u4e8b\u603b\u7ecf\u7406",
			id: 2011,
			value: "MANAGING_DIRECTOR"
		}, {
			desc: "\u9ad8\u7ea7\u526f\u603b\u88c1",
			id: 2012,
			value: "SENIOR_VP"
		}, {
			desc: "\u526f\u603b\u88c1",
			id: 2013,
			value: "VP"
		}, {
			desc: "\u6295\u8d44\u603b\u76d1",
			id: 2014,
			value: "CIO"
		}, {
			desc: "\u9ad8\u7ea7\u6295\u8d44\u7ecf\u7406",
			id: 2015,
			value: "SENIOR_INVEST_MANAGER"
		}, {
			desc: "\u6295\u8d44\u7ecf\u7406",
			id: 2016,
			value: "INVEST_MANAGER"
		}, {
			desc: "\u9ad8\u7ea7\u5206\u6790\u5e08",
			id: 2017,
			value: "SENIOR_ANALYST"
		}, {
			desc: "\u5206\u6790\u5e08",
			id: 2018,
			value: "ANALYST"
		}],
		RnvInvestorInfo: [{
			desc: "\u6211\u7684\u91d1\u878d\u8d44\u4ea7\u8d85\u8fc7100\u4e07\u5143",
			id: 1,
			value: "V1_1"
		}, {
			desc: "\u6211\u7684\u5e74\u6536\u5165\u8d85\u8fc730\u4e07\u5143",
			id: 2,
			value: "V1_2"
		}, {
			desc: "\u6211\u662f\u4e13\u4e1a\u7684\u98ce\u9669\u6295\u8d44\u4eba",
			id: 3,
			value: "V1_3"
		}],
		LeadInvestorType: [{
			desc: "\u4e0d\u662f\u9886\u6295\u4eba",
			id: 0,
			value: 0
		}, {
			desc: "\u9886\u6295\u4eba",
			id: 1,
			value: 1
		}],
		IdentityCardType: [{
			desc: "\u8eab\u4efd\u8bc1",
			id: 1,
			value: "IDCARD"
		}, {
			desc: "\u62a4\u7167",
			id: 2,
			value: "PASSPORT"
		}],
		FaBindingStatus: [{
			desc: "\u521d\u6b65\u7ed1\u5b9a",
			id: 10,
			value: "INIT"
		}, {
			desc: "\u5f00\u542f\u878d\u8d44",
			id: 20,
			value: "FUNDING"
		}, {
			desc: "\u4ea4\u5272\u4e2d",
			id: 30,
			value: "NEGOTIATING"
		}, {
			desc: "\u6682\u505c\u4e2d",
			id: 40,
			value: "PAUSED"
		}, {
			desc: "\u5df2\u6210\u529f",
			id: 50,
			value: "SUCCESS"
		}, {
			desc: "\u5df2\u64a4\u9500",
			id: 60,
			value: "CANCELED"
		}],
		InvestorFollowedIndustry: [{
			desc: "\u7535\u5b50\u5546\u52a1",
			id: 1,
			value: "E_COMMERCE"
		}, {
			desc: "\u793e\u4ea4\u7f51\u7edc",
			id: 2,
			value: "SOCIAL_NETWORK"
		}, {
			desc: "\u667a\u80fd\u786c\u4ef6",
			id: 5,
			value: "INTELLIGENT_HARDWARE"
		}, {
			desc: "\u5a92\u4f53\u95e8\u6237",
			id: 6,
			value: "MEDIA"
		}, {
			desc: "\u5de5\u5177\u8f6f\u4ef6",
			id: 7,
			value: "SOFTWARE"
		}, {
			desc: "\u6d88\u8d39\u751f\u6d3b",
			id: 8,
			value: "CONSUMER_LIFESTYLE"
		}, {
			desc: "\u91d1\u878d",
			id: 9,
			value: "FINANCE"
		}, {
			desc: "\u533b\u7597\u5065\u5eb7",
			id: 10,
			value: "MEDICAL_HEALTH"
		}, {
			desc: "\u4f01\u4e1a\u670d\u52a1",
			id: 11,
			value: "SERVICE_INDUSTRIES"
		}, {
			desc: "\u65c5\u6e38\u6237\u5916",
			id: 12,
			value: "TRAVEL_OUTDOORS"
		}, {
			desc: "\u623f\u4ea7\u5bb6\u5c45",
			id: 13,
			value: "PROPERTY_AND_HOME_FURNISHINGS"
		}, {
			desc: "\u6570\u5b57\u5a31\u4e50",
			id: 14,
			value: "CULTURE_SPORTS_ART"
		}, {
			desc: "\u5728\u7ebf\u6559\u80b2",
			id: 15,
			value: "EDUCATION_TRAINING"
		}, {
			desc: "\u6c7d\u8f66\u4ea4\u901a",
			id: 16,
			value: "AUTO"
		}, {
			desc: "\u79fb\u52a8\u4e92\u8054\u7f51",
			id: 17,
			value: "MOBILE_INTERNET"
		}, {
			desc: "O2O",
			id: 18,
			value: "O2O"
		}, {
			desc: "\u7269\u6d41",
			id: 19,
			value: "LOGISTICS"
		}, {
			desc: "\u5176\u4ed6",
			id: 0,
			value: "OTHER"
		}],
		CompanyIndustry: [{
			desc: "\u7535\u5b50\u5546\u52a1",
			id: 1,
			value: "E_COMMERCE"
		}, {
			desc: "\u793e\u4ea4\u7f51\u7edc",
			id: 2,
			value: "SOCIAL_NETWORK"
		}, {
			desc: "\u667a\u80fd\u786c\u4ef6",
			id: 5,
			value: "INTELLIGENT_HARDWARE"
		}, {
			desc: "\u5a92\u4f53\u95e8\u6237",
			id: 6,
			value: "MEDIA"
		}, {
			desc: "\u5de5\u5177\u8f6f\u4ef6",
			id: 7,
			value: "SOFTWARE"
		}, {
			desc: "\u6d88\u8d39\u751f\u6d3b",
			id: 8,
			value: "CONSUMER_LIFESTYLE"
		}, {
			desc: "\u91d1\u878d",
			id: 9,
			value: "FINANCE"
		}, {
			desc: "\u533b\u7597\u5065\u5eb7",
			id: 10,
			value: "MEDICAL_HEALTH"
		}, {
			desc: "\u4f01\u4e1a\u670d\u52a1",
			id: 11,
			value: "SERVICE_INDUSTRIES"
		}, {
			desc: "\u65c5\u6e38\u6237\u5916",
			id: 12,
			value: "TRAVEL_OUTDOORS"
		}, {
			desc: "\u623f\u4ea7\u5bb6\u5c45",
			id: 13,
			value: "PROPERTY_AND_HOME_FURNISHINGS"
		}, {
			desc: "\u6570\u5b57\u5a31\u4e50",
			id: 14,
			value: "CULTURE_SPORTS_ART"
		}, {
			desc: "\u5728\u7ebf\u6559\u80b2",
			id: 15,
			value: "EDUCATION_TRAINING"
		}, {
			desc: "\u6c7d\u8f66\u4ea4\u901a",
			id: 16,
			value: "AUTO"
		}, {
			desc: "\u5176\u4ed6",
			id: 0,
			value: "OTHER"
		}, {
			desc: "\u7269\u6d41",
			id: 19,
			value: "LOGISTICS"
		}, {
			desc: "\u975eTMT",
			id: 20,
			value: "NON_TMT"
		}],
		FinancePhase: [{
			desc: "\u5929\u4f7f\u8f6e",
			id: 10,
			value: "ANGEL"
		}, {
			desc: "Pre-A\u8f6e",
			id: 20,
			value: "PRE_A"
		}, {
			desc: "A\u8f6e",
			id: 30,
			value: "A"
		}, {
			desc: "A+\u8f6e",
			id: 35,
			value: "A_PLUS"
		}, {
			desc: "B\u8f6e",
			id: 40,
			value: "B"
		}, {
			desc: "B+\u8f6e",
			id: 45,
			value: "B_PLUS"
		}, {
			desc: "C\u8f6e",
			id: 50,
			value: "C"
		}, {
			desc: "D\u8f6e",
			id: 60,
			value: "D"
		}, {
			desc: "E\u8f6e\u53ca\u4ee5\u540e",
			id: 70,
			value: "E"
		}, {
			desc: "\u5e76\u8d2d",
			id: 100,
			value: "ACQUIRED"
		}, {
			desc: "\u4e0a\u5e02",
			id: 110,
			value: "IPO"
		}],
		KrIndexFinancePhase: [{
			desc: "\u5929\u4f7f\u8f6e",
			id: 10,
			value: "ANGEL"
		}, {
			desc: "Pre-A\u8f6e",
			id: 20,
			value: "PRE_A"
		}, {
			desc: "A\u8f6e",
			id: 30,
			value: "A"
		}, {
			desc: "B\u8f6e",
			id: 40,
			value: "B"
		}, {
			desc: "C\u8f6e",
			id: 50,
			value: "C"
		}, {
			desc: "D\u8f6e",
			id: 60,
			value: "D"
		}, {
			desc: "E\u8f6e\u53ca\u4ee5\u540e",
			id: 70,
			value: "E"
		}, {
			desc: "\u5e76\u8d2d",
			id: 100,
			value: "ACQUIRED"
		}, {
			desc: "\u4e0a\u5e02",
			id: 110,
			value: "IPO"
		}],
		SearchSortEnum: [{
			desc: "\u6309\u6c2a\u6307\u6570\u6392\u5e8f",
			id: 0,
			value: "KR_INDEX"
		}, {
			desc: "\u6309\u7206\u53d1\u529b\u6392\u5e8f",
			id: 1,
			value: "INCREASE"
		}],
		ComPositionType: [{
			desc: "\u521b\u59cb\u4eba",
			id: 101,
			value: "FOUNDER"
		}, {
			desc: "\u8054\u5408\u521b\u59cb\u4eba",
			id: 102,
			value: "CO_FOUNDER"
		}, {
			desc: "\u6280\u672f",
			id: 103,
			value: "TECH"
		}, {
			desc: "\u8bbe\u8ba1",
			id: 104,
			value: "DESIGN"
		}, {
			desc: "\u4ea7\u54c1",
			id: 105,
			value: "PRODUCT"
		}, {
			desc: "\u8fd0\u8425",
			id: 106,
			value: "OPERATOR"
		}, {
			desc: "\u5e02\u573a\u4e0e\u9500\u552e",
			id: 107,
			value: "SALE"
		}, {
			desc: "\u884c\u653f\u3001\u4eba\u4e8b\u53ca\u8d22\u52a1",
			id: 108,
			value: "HR"
		}, {
			desc: "\u6295\u8d44\u548c\u5e76\u8d2d",
			id: 109,
			value: "INVEST"
		}, {
			desc: "\u5176\u4ed6",
			id: 110,
			value: "OTHER"
		}],
		SPOther: [{
			desc: "\u56e2\u961f\u9700\u8981\u8fdb\u4e00\u6b65\u52a0\u5f3a",
			id: 1,
			value: 1
		}, {
			desc: "\u4e0e\u6211\u4eec\u73b0\u9636\u6bb5\u6295\u8d44\u65b9\u5411\u4e0d\u5339\u914d",
			id: 2,
			value: 2
		}],
		CompanySource: [{
			desc: "\u521b\u5efa\u516c\u53f8",
			id: 1,
			value: "CREATION"
		}, {
			desc: "\u5feb\u901f\u521b\u5efa\u516c\u53f8",
			id: 2,
			value: "FAST_CREATION"
		}, {
			desc: "\u4e2a\u4eba\u5de5\u4f5c\u7ecf\u5386\u521b\u5efa",
			id: 3,
			value: "INDIVIDUAL_WORK_EXPERIENCE_CREATION"
		}, {
			desc: "\u4e2a\u4eba\u6295\u8d44\u7ecf\u5386\u521b\u5efa",
			id: 4,
			value: "INDIVIDUAL_INVEST_EXPERIENCE_CREATION"
		}, {
			desc: "\u516c\u53f8\u878d\u8d44\u7ecf\u5386\u521b\u5efa",
			id: 5,
			value: "COMPANY_FINANCE_EXPERIENCE_CREATION"
		}, {
			desc: "\u4e2a\u4eba\u521b\u4e1a\u7ecf\u5386\u521b\u5efa",
			id: 6,
			value: "INDIVIDUAL_STARTUP_EXPERIENCE_CREATION"
		}, {
			desc: "\u8fd0\u8425\u521b\u5efa",
			id: 7,
			value: "BUSINESS_CREATION"
		}, {
			desc: "\u6279\u91cf\u5bfc\u5165",
			id: 8,
			value: "BULK_IMPORT_CREATION"
		}, {
			desc: "\u8fc7\u5f80\u6295\u8d44\u65b9\u521b\u5efa",
			id: 9,
			value: "PREVIOUS_INVEST_CREATION"
		}, {
			desc: "\u5b8c\u6210\u878d\u8d44\u65f6\u521b\u5efa",
			id: 10,
			value: "FINISHED_FINANCE_CREATION"
		}, {
			desc: "\u5bfb\u6c42\u62a5\u9053\u65f6\u521b\u5efa",
			id: 11,
			value: "NEWS_REPORT_APPLICATION_CREATION"
		}, {
			desc: "\u6d3b\u52a8\u62a5\u540d",
			id: 12,
			value: "ACTIVITY_CREATION"
		}, {
			desc: "h5\u521b\u5efa",
			id: 13,
			value: "H5_CREATION"
		}, {
			desc: "FA\u521b\u5efa",
			id: 14,
			value: "FA_CREATION"
		}, {
			desc: "\u6295\u8d44\u4eba\u8ba4\u8bc1",
			id: 15,
			value: "INVESTOR_AUDIT"
		}],
		CurrencyUnit: [{
			desc: "\u4eba\u6c11\u5e01",
			id: 1,
			value: "CNY"
		}, {
			desc: "\u7f8e\u5143",
			id: 2,
			value: "USD"
		}],
		UserStatus: [{
			desc: "\u9ed8\u8ba4\u72b6\u6001",
			id: 0,
			value: 0
		}, {
			desc: "\u5df2\u9080\u8bf7",
			id: 1,
			value: 1
		}, {
			desc: "\u5df2\u6fc0\u6d3b",
			id: 2,
			value: 2
		}],
		SPBpAdvice: [{
			desc: "\u5546\u4e1a\u6a21\u5f0f\u8868\u8ff0\u53ca\u903b\u8f91\u9700\u66f4\u6e05\u6670",
			id: 1,
			value: 1
		}, {
			desc: "\u8003\u8651\u9879\u76ee\u9636\u6bb5\uff0c \u9700\u8981\u8fd0\u8425\u6570\u636e\u652f\u6301",
			id: 2,
			value: 2
		}],
		PermissionLevel: [{
			desc: "\u7533\u8bf7\u540e\u53ef\u89c1",
			id: 5,
			value: 5
		}, {
			desc: "\u4f18\u8d28\u6295\u8d44\u4eba\u53ef\u89c1",
			id: 10,
			value: 10
		}, {
			desc: "\u666e\u901a\u6295\u8d44\u4eba\u53ef\u89c1",
			id: 20,
			value: 20
		}, {
			desc: "\u4efb\u4f55\u4eba\u53ef\u89c1",
			id: 100,
			value: 100
		}],
		SPModel: [{
			desc: "\u5207\u5165\u70b9\u4e0e\u7528\u6237\u75db\u70b9\u5b58\u5728\u7591\u95ee",
			id: 1,
			value: 1
		}, {
			desc: "\u4ea7\u54c1\u8fed\u4ee3\u8def\u5f84\u9700\u8981\u8fdb\u4e00\u6b65\u8003\u8651",
			id: 2,
			value: 2
		}, {
			desc: "\u6838\u5fc3\u7ade\u4e89\u529b\u4f18\u52bf\u4e0d\u660e\u663e",
			id: 3,
			value: 3
		}, {
			desc: "\u5e02\u573a\u89c4\u6a21\u548c\u6f5c\u5728\u53d8\u73b0\u80fd\u529b\u5b58\u7591",
			id: 4,
			value: 4
		}],
		WorkPositionType: [{
			desc: "\u6280\u672f",
			id: 103,
			value: "TECH"
		}, {
			desc: "\u8bbe\u8ba1",
			id: 104,
			value: "DESIGN"
		}, {
			desc: "\u4ea7\u54c1",
			id: 105,
			value: "PRODUCT"
		}, {
			desc: "\u8fd0\u8425",
			id: 106,
			value: "OPERATOR"
		}, {
			desc: "\u5e02\u573a\u4e0e\u9500\u552e",
			id: 107,
			value: "SALE"
		}, {
			desc: "\u884c\u653f\u3001\u4eba\u4e8b\u53ca\u8d22\u52a1",
			id: 108,
			value: "HR"
		}, {
			desc: "\u6295\u8d44\u548c\u5e76\u8d2d",
			id: 109,
			value: "INVEST"
		}, {
			desc: "\u5176\u4ed6",
			id: 110,
			value: "OTHER"
		}],
		Source: [{
			desc: "\u6295\u8d44\u65b9",
			id: 2,
			value: "INVESTOR"
		}, {
			desc: "\u878d\u8d44\u65b9",
			id: 4,
			value: "FINANCIER"
		}],
		FundsPhase: [{
			desc: "\u5929\u4f7f\u8f6e",
			id: 10,
			value: "ANGEL"
		}, {
			desc: "Pre-A\u8f6e",
			id: 20,
			value: "PRE_A"
		}, {
			desc: "A\u8f6e",
			id: 30,
			value: "A"
		}, {
			desc: "B\u8f6e",
			id: 40,
			value: "B"
		}, {
			desc: "C\u8f6e",
			id: 50,
			value: "C"
		}, {
			desc: "D\u8f6e",
			id: 60,
			value: "D"
		}, {
			desc: "E\u8f6e\u53ca\u4ee5\u540e",
			id: 70,
			value: "E"
		}],
		EntityType: [{
			desc: "\u4e2a\u4eba",
			id: 1,
			value: "INDIVIDUAL"
		}, {
			desc: "\u6295\u8d44\u673a\u6784",
			id: 2,
			value: "ORGANIZATION"
		}, {
			desc: "\u516c\u53f8",
			id: 3,
			value: "COMPANY"
		}],
		SPOption: [{
			desc: "BP\u5efa\u8bae",
			id: 1,
			value: 1
		}, {
			desc: "\u6a21\u5f0f",
			id: 2,
			value: 2
		}, {
			desc: "\u5176\u4ed6",
			id: 3,
			value: 3
		}]
	},
	function() {
		(!window.BAIDU_CLB_fillSlot || $("html").is(".portable-device")) && (window.BAIDU_CLB_fillSlot = function() {}),
		function() {
			var e;
			return e = alert, window.alert = function(t) {
				return t.match("malicious javascript") ? void 0 : e(t)
			}
		}(), window.mobilecheck = function() {
			var e;
			return e = !1,
				function(t) {
					(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
				}(navigator.userAgent || navigator.vendor || window.opera), e
		}, window.doFavorite = function(e) {
			$.post("/asynces/favorites", {
				url_code: e,
				authenticity_token: window._token
			}, function(t) {
				var n;
				n = $("#favorite-btn-post-" + e), n.hasClass("is-favorite") ? (n.removeClass("is-favorite"), n.removeClass("icon-fly")) : (n.addClass("is-favorite"), setTimeout(function() {
					n.addClass("icon-fly")
				}, 0)), "add" === t.success ? (n.addClass("is-favorite"), setTimeout(function() {
					n.addClass("icon-fly"), $("#star-count-post-" + e).text(t.count)
				}, 0)) : "del" === t.success && (n.removeClass("is-favorite"), n.removeClass("icon-fly"), $("#star-count-post-" + e).text(t.count))
			})
		}, window.check_ad_function = function(e) {
			var t, n;
			return t = e.replace(/\s+/g, ""), n = "function(){}" === t || "function(id){}" === t, !n
		}, jQuery(function() {
			$(".dropdown_login_out_link").on("click", function() {
				$(".real_login_out_link").trigger("click")
			}), $("body").delegate(".require-login", "click", function() {
				void 0 !== $(".require-login").data().uid && "" !== $(".require-login").data().uid || !confirm("\u8bf7\u767b\u5f55\u540e\u7ee7\u7eed\u64cd\u4f5c\uff01 (\u25cf\u2014\u25cf)") || (window.location.href = "/users/sign_in?ok_url=/p/" + $(this).data().url_code + ".html")
			}), $(".single-post-header__headline img[src*=yestone]").after('<small><a href="http://yestone.com/?utm_source=36kr.com">\u56fe\u7247: Yestone.com \u7248\u6743\u56fe\u7247\u5e93</a></small>')
		})
	}.call(this);