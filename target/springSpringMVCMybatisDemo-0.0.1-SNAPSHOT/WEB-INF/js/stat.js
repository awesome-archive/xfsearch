! function() {
	var t = {
		getCookie: function(t) {
			return (t = RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie)) ? t[2] : null
		},
		setCookie: function(t, e) {
			var r = new Date,
				n = location.host.indexOf("36kr.com") > -1 ? "36kr" : "36tr";
			if (r.setYear(r.getFullYear() + 20), "[object Object]" == {}.toString.call(arguments[0]))
				for (var o in arguments[0]) document.cookie = o + "=" + arguments[0][o] + ";expires=" + r.toGMTString() + ";domain=." + n + ".com;path=/";
			else document.cookie = t + "=" + e + ";expires=" + r.toGMTString() + ";domain=." + n + ".com;path=/"
		},
		getRandomId: function() {
			for (var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", e = "", r = parseInt((new Date).getTime() / 6e4), n = 0; 5 > n; n++) e += t.charAt(Math.floor(Math.random() * t.length));
			return e + r
		}
	};
	null == t.getCookie("kr_stat_uuid") && t.setCookie("kr_stat_uuid", t.getRandomId())
}(window, document),
function(t, e) {
	function r(t, e) {
		for (var r = ["data-stat-" + e, "data-stat-module"], n = "", o = 0, a = []; t && t != document.body;) r.forEach(function(i) {
			var c = t.getAttribute(i);
			(i == r[0] || n) && (i == r[0] && n || c && (n = n ? [c, n].join(".") : [c, e].join("."), a.push(o)))
		}), t = t.parentNode, o++;
		return n
	}

	function n(t) {
		var e = t.target,
			n = r(e, "click");
		n && krtracker("trackEvent", "click", n)
	}

	function o(t) {
		var e = t.target,
			n = t.relatedTarget,
			o = n;
		if (e.getAttribute("data-stat-hover")) {
			for (; o && o.getAttribute;) {
				if (o == e) return;
				o = o.parentNode
			}
			var a = r(e, "hover");
			krtracker("trackEvent", "hover", a)
		}
	}
	e.body.addEventListener("click", n), e.body.addEventListener("mouseout", o)
}(window, document),
function() {
	function t(t) {
		var e = new Image,
			r = new Image;
		e.src = a + "?" + t, r.src = i + "?" + t
	}

	function e(t) {
		t = t || {}, r(t);
		var e = [];
		for (k in t) e.push(k + "=" + encodeURIComponent(t[k]));
		return e.join("&")
	}

	function r(t) {
		t[c.host] = location.host
	}

	function n(r) {
		var n = {};
		n[c.url] = r, document.referrer && !u && (n[c.ref] = document.referrer, u = !0), t(e(n))
	}

	function o() {
		var r = {};
		r[c.evType] = arguments[0][0], r[c.evValue] = arguments[0][1], t(e(r))
	}
	var a = "//36kr.com/global/hm.gif",
		i = "//z.36kr.com/api/p/sensors-data/event",
		c = {
			host: "h",
			url: "u",
			evType: "et",
			evValue: "ev",
			ref: "r"
		},
		u = !1,
		d = (window.krtracker ? window.krtracker.q : [], {
			trackPageView: n,
			trackEvent: o
		}),
		s = function() {
			var t = Array.prototype.slice.call(arguments),
				e = t[0];
			d[e] && d[e].call(this, t.slice(1))
		};
	if (window.krtracker.q && window.krtracker.q.length)
		for (var f = 0; f < window.krtracker.q.length; f++) s.apply(this, window.krtracker.q[f]);
	window.krtracker = s
}();