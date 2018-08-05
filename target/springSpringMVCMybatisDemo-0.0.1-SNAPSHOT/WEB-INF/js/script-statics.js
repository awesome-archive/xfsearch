(function(){var c=function(){var e=[].slice.call(arguments);e.push(c.options);if(e[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)){e[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm,function(h,i){var f=document;var g=f&&f.getElementById(i);e[0]=g?(g.value||g.innerHTML):h;});}if(arguments.length==1){return c.compile.apply(c,e);}if(arguments.length>=2){return c.to_html.apply(c,e);}};var d={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(e){return d.escapehash[e];},escaping:function(e){return typeof(e)!=="string"?e:e.replace(/[&<>"]/igm,this.escapereplace);},detection:function(e){return typeof(e)==="undefined"?"":e;}};var b=function(e){if(typeof(console)!=="undefined"){if(console.warn){console.warn(e);return;}if(console.log){console.log(e);return;}}throw (e);};var a=function(h,f){h=h!==Object(h)?{}:h;if(h.__proto__){h.__proto__=f;return h;}var g=function(){};var j=Object.create?Object.create(f):new (g.prototype=f,g);for(var e in h){if(h.hasOwnProperty(e)){j[e]=h[e];}}return j;};c.__cache={};c.version="0.6.5-stable";c.settings={};c.tags={operationOpen:"{@",operationClose:"}",interpolateOpen:"\\${",interpolateClose:"}",noneencodeOpen:"\\$\\${",noneencodeClose:"}",commentOpen:"\\{#",commentClose:"\\}"};c.options={cache:true,strip:true,errorhandling:true,detection:true,_method:a({__escapehtml:d,__throw:b,__juicer:c},{})};c.tagInit=function(){var f=c.tags.operationOpen+"each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?"+c.tags.operationClose;var h=c.tags.operationOpen+"\\/each"+c.tags.operationClose;var i=c.tags.operationOpen+"if\\s*([^}]*?)"+c.tags.operationClose;var j=c.tags.operationOpen+"\\/if"+c.tags.operationClose;var n=c.tags.operationOpen+"else"+c.tags.operationClose;var o=c.tags.operationOpen+"else if\\s*([^}]*?)"+c.tags.operationClose;var k=c.tags.interpolateOpen+"([\\s\\S]+?)"+c.tags.interpolateClose;var l=c.tags.noneencodeOpen+"([\\s\\S]+?)"+c.tags.noneencodeClose;var m=c.tags.commentOpen+"[^}]*?"+c.tags.commentClose;var g=c.tags.operationOpen+"each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)"+c.tags.operationClose;var e=c.tags.operationOpen+"include\\s*([^}]*?)\\s*,\\s*([^}]*?)"+c.tags.operationClose;c.settings.forstart=new RegExp(f,"igm");c.settings.forend=new RegExp(h,"igm");c.settings.ifstart=new RegExp(i,"igm");c.settings.ifend=new RegExp(j,"igm");c.settings.elsestart=new RegExp(n,"igm");c.settings.elseifstart=new RegExp(o,"igm");c.settings.interpolate=new RegExp(k,"igm");c.settings.noneencode=new RegExp(l,"igm");c.settings.inlinecomment=new RegExp(m,"igm");c.settings.rangestart=new RegExp(g,"igm");c.settings.include=new RegExp(e,"igm");};c.tagInit();c.set=function(f,j){var h=this;var e=function(i){return i.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm,function(l){return"\\"+l;});};var k=function(l,m){var i=l.match(/^tag::(.*)$/i);if(i){h.tags[i[1]]=e(m);h.tagInit();return;}h.options[l]=m;};if(arguments.length===2){k(f,j);return;}if(f===Object(f)){for(var g in f){if(f.hasOwnProperty(g)){k(g,f[g]);}}}};c.register=function(g,f){var e=this.options._method;if(e.hasOwnProperty(g)){return false;}return e[g]=f;};c.unregister=function(f){var e=this.options._method;if(e.hasOwnProperty(f)){return delete e[f];}};c.template=function(e){var f=this;this.options=e;this.__interpolate=function(g,l,i){var h=g.split("|"),k=h[0]||"",j;if(h.length>1){g=h.shift();j=h.shift().split(",");k="_method."+j.shift()+".call({}, "+[g].concat(j)+")";}return"<%= "+(l?"_method.__escapehtml.escaping":"")+"("+(!i||i.detection!==false?"_method.__escapehtml.detection":"")+"("+k+")) %>";};this.__removeShell=function(h,g){var i=0;h=h.replace(c.settings.forstart,function(n,k,m,l){var m=m||"value",l=l&&l.substr(1);var j="i"+i++;return"<% ~function() {for(var "+j+" in "+k+") {if("+k+".hasOwnProperty("+j+")) {var "+m+"="+k+"["+j+"];"+(l?("var "+l+"="+j+";"):"")+" %>";}).replace(c.settings.forend,"<% }}}(); %>").replace(c.settings.ifstart,function(j,k){return"<% if("+k+") { %>";}).replace(c.settings.ifend,"<% } %>").replace(c.settings.elsestart,function(j){return"<% } else { %>";}).replace(c.settings.elseifstart,function(j,k){return"<% } else if("+k+") { %>";}).replace(c.settings.noneencode,function(k,j){return f.__interpolate(j,false,g);}).replace(c.settings.interpolate,function(k,j){return f.__interpolate(j,true,g);}).replace(c.settings.inlinecomment,"").replace(c.settings.rangestart,function(m,l,n,k){var j="j"+i++;return"<% ~function() {for(var "+j+"="+n+";"+j+"<"+k+";"+j+"++) {{var "+l+"="+j+"; %>";}).replace(c.settings.include,function(l,j,k){return"<%= _method.__juicer("+j+", "+k+"); %>";});if(!g||g.errorhandling!==false){h="<% try { %>"+h;h+='<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';}return h;};this.__toNative=function(h,g){return this.__convert(h,!g||g.strip);};this.__lexicalAnalyze=function(k){var j=[];var o=[];var n="";var g=["if","each","_","_method","console","break","case","catch","continue","debugger","default","delete","do","finally","for","function","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","null","typeof","class","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","const","arguments","true","false","undefined","NaN"];var m=function(r,q){if(Array.prototype.indexOf&&r.indexOf===Array.prototype.indexOf){return r.indexOf(q);}for(var p=0;p<r.length;p++){if(r[p]===q){return p;}}return -1;};var h=function(p,i){i=i.match(/\w+/igm)[0];if(m(j,i)===-1&&m(g,i)===-1&&m(o,i)===-1){if(typeof(window)!=="undefined"&&typeof(window[i])==="function"&&window[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)){return p;}if(typeof(global)!=="undefined"&&typeof(global[i])==="function"&&global[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)){return p;}if(typeof(c.options._method[i])==="function"||c.options._method.hasOwnProperty(i)){o.push(i);return p;}j.push(i);}return p;};k.replace(c.settings.forstart,h).replace(c.settings.interpolate,h).replace(c.settings.ifstart,h).replace(c.settings.elseifstart,h).replace(c.settings.include,h).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/igm,h);for(var l=0;l<j.length;l++){n+="var "+j[l]+"=_."+j[l]+";";}for(var l=0;l<o.length;l++){n+="var "+o[l]+"=_method."+o[l]+";";}return"<% "+n+" %>";};this.__convert=function(h,i){var g=[].join("");g+="'use strict';";g+="var _=_||{};";g+="var _out='';_out+='";if(i!==false){g+=h.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out;";return g;}g+=h.replace(/\\/g,"\\\\").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\n]/g,"\\n").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";return g;};this.parse=function(h,g){var i=this;if(!g||g.loose!==false){h=this.__lexicalAnalyze(h)+h;}h=this.__removeShell(h,g);h=this.__toNative(h,g);this._render=new Function("_, _method",h);this.render=function(k,j){if(!j||j!==f.options._method){j=a(j,f.options._method);}return i._render.call(this,k,j);};return this;};};c.compile=function(g,f){if(!f||f!==this.options){f=a(f,this.options);}try{var h=this.__cache[g]?this.__cache[g]:new this.template(this.options).parse(g,f);if(!f||f.cache!==false){this.__cache[g]=h;}return h;}catch(i){b("Juicer Compile Exception: "+i.message);return{render:function(){}};}};c.to_html=function(f,g,e){if(!e||e!==this.options){e=a(e,this.options);}return this.compile(f,e).render(g,e._method);};typeof(module)!=="undefined"&&module.exports?module.exports=c:this.juicer=c;})();
/**
 * 初始化页头
 */
!(function initHeader($){

    if(location.host=="seo.36kr.com")return;
    //如果是客户端则不初始化头部
    if(!!navigator.userAgent.match(/36kr/))return;

    var rongHost = 'https://rong.36kr.com';
    var zhongHost = 'https://z.36kr.com';
    var ucHost = 'https://uc.36kr.com';
    var passportHost = 'https://passport.36kr.com';
    var krHost = '//36kr.com';
    var krWriterHost = 'http://writer.36kr.com';
    var insightHost = 'http://insight.36kr.com';

    //写入HTML

//
    window.CommonHeader = {
        active:window.CommonHeader?CommonHeader.active:null,
        setNavActive: function(name){
            CommonHeader.active = name;
        }
    };

    //检测jquery
    if(!$){
        setTimeout(function(){
            initHeader(window.$);
        }, 100);
        return;
    }
    CommonHeader.setNavActive = function(name){
        $(".J_commonHeaderWrapper li").removeClass('active');
        $(".J_commonHeaderWrapper li[name='"+name+"']").addClass('active');
    }
    var activeName = $('script[src*="common-header"]').attr('name') || window.activeChlName;
    var fixed = $('script[src*="common-header"]').attr('fixed');

    if(CommonHeader.active){
        CommonHeader.setNavActive(CommonHeader.active);
    }else if(activeName){
        CommonHeader.setNavActive(activeName);
    };

    /**
     * Services:获取消息数，获取用户数据
     */
    var Services = {
        hosts: {
            passport: passportHost,
            rong: rongHost,
            uc: ucHost,
            kr: location.host.indexOf('client')>-1?('//'+location.host):'//36kr.com'
        },
        urls: {
            msg: {
                host: 'rong',
                api: '/api/message/count'
            },
            login: {
                host: 'rong',
                api: '/user/login'
            },
            logout: {
                host: 'rong',
                api: '/user/logout'
            },
            info: {
                host: 'passport',
                api: '/user/me?_=' + $.now()
            },
            identity: {
                host: 'rong',
                api: '/api/user/identity'
            },
            role: {
                host: 'kr',
                api: "/current_user.json?_=" + $.now()
            }
        },
        getUrl: function(name){
            var api = Services.urls[name];
            return Services.hosts[api.host] + api.api;
        },
        getMsgCount: function(callback){
            $.get(Services.getUrl('msg'), function(data){
                if(data.code){
                    callback && callback({"code":0,"data":{"total":0,"bpCnt":0,"ufinmailCnt":0,"newsCnt":0,"notice":0,"finmailCnt":0}});
                    return;
                }
                callback && callback(data);
            }, 'jsonp').fail(function() {
                callback && callback({"code":0,"data":{"total":0,"bpCnt":0,"ufinmailCnt":0,"newsCnt":0,"notice":0,"finmailCnt":0}});
            });
        },
        getUID: function(){
            var uid = document.cookie.match(/kr_plus_id\=(\d+)/);
            //var isLogin = !!document.cookie.match(/krid_user_version=/);
            if (uid && uid.length && uid[1]) {
                uid = uid[1];
            }
            return uid;
        },
        getUserInfo: function(uid, callback, error){
            var count = 2;

            var isLogin = !!document.cookie.match(/krid_user_version=/);
            if(!isLogin){
                setTimeout(function(){
                    callback && callback({});
                },100);
                return;
            }

            $.ajax({
                url: Services.getUrl('info'),
                success: function(data){
                    data.avatar_url = data.avatar || '//krplus.b0.upaiyun.com/default_avatar.png';
                    data.name = (data.defaultNickname?data.nickname: data.realname) || '未填写';
                    $.ajax({
                        url: Services.getUrl('identity'),
                        success: function(identity){
                            $.extend(data, identity.data);
                            count--;
                            if(!count){
                                callback && callback(data);
                            }
                        },
                        error: function(){
                            count--;
                            if(!count){
                                callback && callback(data);
                            }
                        },
                        xhrFields: {
                            withCredentials: true
                        }
                    });

                    //if(
                    //    (!location.host.match(/^(test\.36kr\.com|test\.writer\.36kr\.com)/))
                    //    &&
                    //    location.host.match(/test|dev/)
                    //){
                    //    count--;
                    //    if(!count){
                    //        callback && callback({});
                    //    }
                    //}else{

                    $.ajax({
                        url: Services.getUrl('role'),
                        success: function(kr){
                            clearTimeout(cancelHandler);
                            data.role = kr.role;
                            //data.role = 'reader';
                            count--;
                            if(!count){
                                callback && callback(data);
                            }
                        },
                        error: function(){
                            clearTimeout(cancelHandler);
                            count--;
                            if(!count){
                                callback && callback(data);
                            }
                        },
                        dataType: 'json',
                        xhrFields: {
                            withCredentials: true
                        }
                    });

                    var cancelHandler = setTimeout(function(){
                        count--;
                        if(!count){
                            callback && callback(data);
                        }
                    },3000);
                    //}
                },
                error: function(){
                    error && error();
                },
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                }
            });
        },
        login: function(){
            var url = Services.getUrl('login');
            var backUrl = encodeURIComponent(location.href);
            if(window._hmt){
                _hmt.push(['_trackPageview', "/user/login##fromUser=0"]);
            }
            if(window.krtracker){
                krtracker('trackPageView', '/user/login');
            }

            setTimeout(function(){
                location.href = url + '?from=' + backUrl;
            },100);
        },
        logout: function(){
            if(window._hmt){
                _hmt.push(['_trackPageview', "/user/logout##fromUser=0"]);
            }
            if(window.krtracker){
                krtracker('trackPageView', '/user/logout');
            }
            $.get(Services.getUrl('logout'), function () {
                //var url = Services.getUrl('login');
                //var backUrl = encodeURIComponent(location.href);
                location.href = 'http:'+krHost;
            },'jsonp');
        }
    };

    /*
    *创建Cookie对象
    */
    var docCookies = {
      getItem: function (sKey) {
        if (!sKey) { return null; }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      },
      setItem: function (sKey, sValue) {
        var domainName = location.host.indexOf('36kr.com')>-1?'36kr':'36tr';
            document.cookie = sKey + "=" + sValue+";domain=."+domainName+".com;path=/";
      },
        getFlag: function(key){
            return !!docCookies.getItem(key);
        },
        setFlag: function(key, expire){
            var domainName = location.host.indexOf('36kr.com')>-1?'36kr':'36tr';
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + expire;
            now.setTime(expireTime);
            document.cookie = key + "=" + 1 + ";domain=."+domainName+".com;expires="+now.toGMTString()+";path=/";
        }
    };

    //初始化导航
    $(function(){

        var uid = Services.getUID();
        initScroll();
        initDownloadBar();
        initFooterEntry();
        //渲染右侧菜单区
        Services.getUserInfo(uid, function(data){
            //未登录状态
            if(!data || !data.id){
                renderRightNav({
                    isLogin: false
                });

                $('.J_commonHeaderWrapper .J_logout').remove();

                triggerBind();
                return;
            }
            data.isLogin = true;
            data.user = data;
            renderRightNav(data);
                triggerBind();
            getMsgCount();
        },
            function(){
            renderRightNav({
                isLogin: false
            });
                $('.J_commonHeaderWrapper .J_logout').remove();
                triggerBind();
        });

    });

    //cookie 处理导航发现红点
     docCookies.getItem("c_name") ? $(".red-pointer").addClass("current") : $(".red-pointer").removeClass("current");
     $(".discover").mouseenter(function() {
        $(".red-pointer").addClass("current");
        docCookies.setItem("c_name", "point");
    });

    // cookie 埋点
    function getQueryParameters(str) {
        var parseString = (str || document.location.search).replace(/(^\?)/,'').split('&');

        return parseString.map(function(item) {
            item = item.split('=');
            this[item[0]] = item[1];
            return this;
        }.bind({}))[0];
    }

    var queryParams = getQueryParameters();

    $.each(queryParams, function(key, value) {
        if( /^ktm_/g.test(key)) {
            docCookies.setItem(key, value);
        }
    });
    //模板
    var tpls = {
        menu: ('<ul class="sub-nav">    <li class="search-item">        <a href="javascript:void(0)" data-stat-hover="sousuo"><i class="headericon-header-search"></i> 搜索</a>        <div class="search-wrap pop-up">            <div class="searchbar">                {@if chl!=\'news\'&&chl!=\'insight\'}                <form action="" class="J_searchForm">                    <input type="text" placeholder="创业公司、投资人、投资机构" ng-model="keyword">                    <button class="headericon-header-search search-icon" type="submit" data-stat-click="sousuo"></button>                    <button class="headericon-close close-icon" type="button" data-stat-click="guanbisousuo"></button>                </form>                {@/if}                {@if chl==\'insight\'}                <form action="" class="J_searchForm">                    <input type="text" placeholder="请输入公司名称" ng-model="keyword">                    <button class="headericon-header-search search-icon" type="submit" data-stat-click="sousuo"></button>                    <button class="headericon-close close-icon" type="button" data-stat-click="guanbisousuo"></button>                </form>                {@/if}                {@if chl==\'news\'}                <form action="" class="J_searchForm">                    <input type="text" placeholder="搜索" ng-model="keyword">                    <button class="headericon-header-search search-icon" type="submit" data-stat-click="sousuo"></button>                    <button class="headericon-close close-icon" type="button" data-stat-click="guanbisousuo"></button>                </form>                {@/if}            </div>        </div>    </li>    <li class="app-download">        <a href="http://download.36kr.com" data-stat-hover="kehuduan"><i class="headericon-header-app"></i> 客户端</a>        <div class="mobile-wrap pop-up">            <img class="qr" src="//krplus-cdn.b0.upaiyun.com/common-module/common-header/images/appqr.png" alt=""/>            <div class="btns">                <span>下载36氪客户端</span>                <a href="https://appsto.re/cn/2LNxJ.i" data-stat-click="ios"><i class="headericon-apple"></i> App Store</a>                <a href="http://fir.im/45sa" data-stat-click="android"><i class="headericon-android"></i> Android</a>            </div>        </div>    </li>    {@if !isLogin}    <li class="login-actions">        <a href="javascript:void(0)" class="login-link J_login" data-stat-click="dengluzhuce"><i class="headericon-header-user"></i> 登录/注册</a>    </li>    {@else}    <li class="msg-menu">        <a href="${ucHost}/#/uc/message/inbox/followed/" data-stat-click="xiaoxi" data-stat-hover="xiaoxi"><i class="headericon-header-msg J_msgIcon"></i> 消息</a>        <div class="msg-wrap pop-up J_msgCountWrap"></div>    </li>    <li class="user-menu">        <a href="${ucHost}/#/uc/account/basic" class="head-avatar" data-stat-click="touxiang" data-stat-hover="touxiang"><img src="${user.avatar_url}" alt=""/></a>        <div class="menu-wrap pop-up">            <a class="brief" href="${ucHost}/#/uc/account/basic" data-stat-click="zhanghushezhi">                <img src="${user.avatar_url}" alt=""/>                <span>${user.name}</span>            </a>            <div class="menu">                {@if krPlusId}                <a href="${rongHost}/userinfo/${krPlusId}/edit" data-stat-click="wodezhuye">我的主页</a>                {@/if}                <a href="${ucHost}/#/uc/favorite " data-stat-click="wodeshoucang">我的收藏</a>                {@if coInvestor}                <a href="${ucHost}/#/uc/coinvest" data-stat-click="wodedingdan">我的订单</a>                {@/if}                {@if krPlusId}                <a href="${rongHost}/company/create" data-stat-click="chuangjiangongshi">创建公司</a>                <a href="${ucHost}/#/uc/mycompany" data-stat-click="woguanlidegongsi">我管理的公司</a>                <!--<a href="${ucHost}/#/uc/follow/1" data-stat-click="woguanzhudegongsi">我关注的公司</a>-->                {@/if}                {@if role&&role!=\'reader\'}                    {@if role!=\'operator\'}                    <a href="${krWriterHost}/posts/new" data-stat-click="zhuanxiewenzhang" target="_blank">撰写文章</a>                    {@/if}                    {@if role!=\'investor\'&&role!=\'organization\'&&role!=\'entrepreneur\'}                        {@if role!=\'operator\'}                            <a href="${krHost}/krypton/posts/myown" data-stat-click="wodewenzhang">我的文章</a>                            <a href="${krHost}/krypton/posts/draft" data-stat-click="wodecaogao">我的草稿</a>                        {@/if}                        <a href="${krHost}/krypton/dashboard" data-stat-click="jinruhoutai">进入后台</a>                    {@else}                        <a href="${ucHost}/#/uc/article-manager" data-stat-click="wodewenzhang">我的文章</a>                    {@/if}                {@/if}                                {@if leadInvestor}                <a href="${ucHost}/#/uc/lead" data-stat-click="wolingtoudegongsi">我领投的公司</a>                {@/if}                <!--<a href="${krHost}/pages/contribute" data-stat-click="tougao">向36氪投稿</a>-->                {@if !investor}                <a href="${rongHost}/setting/vip" data-stat-click="renzhenggentouren">认证投资人</a>                {@/if}                {@if !coInvestor}                <a href="${zhongHost}/investorValidate" data-stat-click="renzhengtouziren">认证跟投人</a>                {@/if}                <a href="${ucHost}/#/uc/account/basic" data-stat-click="zhanghaoshezhi">账号设置</a>                <a href="javascript:void(0)" class="J_logout" data-stat-click="tuichu">退出</a>            </div>        </div>    </li>    {@/if}</ul>'),
        msg: ('<div class="menu">    <a href="${ucHost}/#/uc/message/inbox/followed/" class="J_navToInbox" data-stat-click="tourongzixiaoxi">        {@if invest>0}        <span>${invest}</span>        {@/if}        投融资消息    </a></div>')
    };
    window.MsgEventObj = $({});

    /**
     * 已登录状态
     * @param data
     */
    function renderRightNav(data){
        data.rongHost = rongHost;
        data.zhongHost = zhongHost;
        data.ucHost = ucHost;
        data.krHost = krHost;
        data.krWriterHost = krWriterHost;
        data.krPlusId = Services.getUID();
        data.chl = activeName;
        var html = juicer(tpls.menu, data);
        var wrapper = $('.J_commonHeaderWrapper');
        $('.J_rightNavWrapper', wrapper).html(html);
        //登录按钮
        $('.J_login', wrapper).bind('click touchend', function(e){
            e.preventDefault();
            Services.login();
        });
        $('.J_logout', wrapper).bind('click touchend', function(e){
            e.preventDefault();
            Services.logout();
        });

        //初始化搜索
        initSearch();
    }

    /**
     * 每隔30秒获取一次
     * @param lastResult
     */
    function getMsgCount(lastResult){

        Services.getMsgCount(function(data){
            if(data.code!=0){
                return;
            }
            var wrapper = $('.J_commonHeaderWrapper .J_msgCountWrap');
            var icon = $('.J_commonHeaderWrapper .J_msgIcon');

            var result = data.data;

            //比较数据是否有变化
            lastResult = lastResult || {};
            for(k in result){
                if(lastResult[k]!=result[k]){
                    MsgEventObj.trigger(k, result);
                }
                lastResult[k]=result[k] || 0;
            }

            //渲染下拉列表
            var renderData = {
                total: lastResult.total,
                invest: lastResult.finmailCnt + lastResult.notice + lastResult.ufinmailCnt + lastResult.bpCnt,
                news: lastResult.newsCnt,
                rongHost: rongHost,
                zhongHost: zhongHost,
                ucHost:ucHost
            };
            var html = juicer(tpls.msg, renderData);
            if(renderData.total){
                icon.addClass('point');
            }else{
                icon.removeClass('point');
            }

            wrapper.html(html);

            if(lastResult.notice>0){
                wrapper.find('.J_navToInbox').attr('href',ucHost + '/#/uc/message/notification/');
            }
            if(lastResult.ufinmailCnt){
                wrapper.find('.J_navToInbox').attr('href',ucHost + '/#/uc/message/inbox/unfollowed/');
            }
            if(lastResult.finmailCnt){
                wrapper.find('.J_navToInbox').attr('href',ucHost + '/#/uc/message/inbox/followed/');
            }
            if(lastResult.bpCnt){
                wrapper.find('.J_navToInbox').attr('href',ucHost + '/#/uc/message/bp/');
            }

            var durationTime = (30 + Math.random()*20)*1000;
            setTimeout(function(){
                getMsgCount(lastResult);
            },durationTime)
        });

    }

    /**
     * 初化搜索
     */
    function initSearch(){
        var form = $('.J_commonHeaderWrapper .J_searchForm');
        var input = form.find('input');
        var wrap = form.parents('li');
        var otherWrap = wrap.siblings();
        input.focus(function(){
            wrap.addClass('stay');
        }).blur(function(){
            wrap.removeClass('stay');
        });
        otherWrap.mouseenter(function(){
            input.trigger('blur');
        });
        form.submit(function(e){
            e.preventDefault();
            var keyword = input.val().trim();
            //input.trigger('blur');
            if(!keyword){
                return;
            }
            $('.J_commonHeaderWrapper .searchbar .close-icon').trigger('touchend');
            setTimeout(function(){
                location.href = activeName=="news"?
                    krHost + "/search?q="+encodeURIComponent(keyword):
                    activeName=="insight"?insightHost+'/#/result?keyword='+encodeURIComponent(keyword):
                    rongHost+'/search?query='+encodeURIComponent(keyword);
            },300);
        });
    }
    /**
     * 初始化滚动动作
     */
    function initScroll(){
        if(fixed=="false"){
            $('body').css({
                paddingTop:0
            });
            $('.J_commonHeaderWrapper').css({
                position:'relative'
            });
            return;
        }
        $(window).scroll(function(){
            var top = $(window).scrollTop();
            if($(window).width()<=820)return;
            var wrap = $('.J_commonHeaderWrapper');
            if(top>0 && !wrap.hasClass('scrolling')){
                wrap.addClass('scrolling');
            }else if(top==0){
                wrap.removeClass('scrolling');
            }
        });
    }

    /**
     * 初始化移动端触发
     */
    function triggerBind(){
        function holdBody (slide){
            $('html').addClass('holding');
            $('body').addClass('holding');
            if(slide){
                $('body').addClass('slide-left');
                $('body').addClass('holding-right');
            }
            window.scrollTo(0,0);
        }
        function releaseBody (){
            $('html').removeClass('holding');
            $('body').removeClass('holding');
            $('body').removeClass('slide-left');
            $('body').removeClass('holding-right');

        }

        $('.J_commonHeaderWrapper .J_searchTrigger').bind('mouseup touchend', function bindSearch(e){
            e.preventDefault();
            var wrapper = $('.J_commonHeaderWrapper');
            var trigger = $(this);
            holdBody();
            wrapper.addClass('show-search');
            wrapper.find('.searchbar input').trigger('focus');

        });

        $('.J_commonHeaderWrapper .searchbar .close-icon').bind('mouseup touchend', function(e){
            e.preventDefault();
            setTimeout(function(){
                var wrapper = $('.J_commonHeaderWrapper');
                wrapper.removeClass('show-search');
                releaseBody();
            }, 100);
        });
        //移动端收回菜单

        $('.J_commonHeaderWrapper .J_menuTrigger').bind('mouseup touchend', function bindMenu(e){
            e.preventDefault();
            e.stopPropagation();
            var wrapper = $('.J_commonHeaderWrapper');
            var trigger = $(this);

            function cancel(e){
                var cur = $(e.target);

                if(!cur.parents('.J_commonHeaderWrapper').length || cur.parents('.triggers').length){
                    e.preventDefault && e.preventDefault();
                    $('body').removeClass('slide-left');
                    $('body').unbind('mouseup touchstart', cancel);
                    $('.J_commonHeaderWrapper .J_navList a').unbind('mouseup touchend');
                    setTimeout(function(){
                        trigger.removeClass('active');
                        releaseBody();
                        wrapper.removeClass('show-menu');
                    }, 400);
                }
            }

            if(trigger.hasClass('active')){
                //cancel(e);
                return;
            }
            trigger.addClass('active');
            holdBody(true);
            wrapper.addClass('show-menu');
            setTimeout(function(){
                $('body').bind('mouseup touchstart', cancel);
                $('.J_commonHeaderWrapper .J_navList a').bind('mouseup touchend', function(){
                    location.href=$(this).attr('href');
                    $('.J_commonHeaderWrapper .J_navList a').unbind('mouseup touchend', arguments.callee);
                    cancel({
                        target:$()
                    });
                });
            },100);
        });
    }

    //强制用户不能scale
    if(activeName =='news'){
        var meta = $('meta[name="viewport"]');
        var originViewPort = meta.attr('content');
        originViewPort.indexOf('user-scalable=no')==-1?meta.attr('content', 'user-scalable=no,'+originViewPort):true;
    }

    /**
     * 初始化下载条
     */
    function initDownloadBar(){
        var bar = $('.J_appDownloadWrapper');
        var closeBtn = $('.J_closeTip', bar);

        closeBtn.bind('click touchend', function(e){
            e.preventDefault();
            bar.hide();
        });   
    }
    /**
     * 初始化页脚入口
     */
    function initFooterEntry(){
        var banner = $('.J_zhongchouFooterBanner');
        var isMainSiteIndex = location.pathname=='/'&&location.hostname=='36kr.com';
        var isMainSiteTestIndex = location.pathname=='/'&&location.hostname=='staging.36kr.com';
        var isDevEnv = location.hostname=='header.36kr.com';
        var isClosed = docCookies.getFlag('ftbclosed');
        if(isClosed){
            banner.remove();
            return;
        }
        if(isMainSiteIndex || isDevEnv || isMainSiteTestIndex){
            banner.show();
        }
        var scrollHandler = bindScrollEvent();
        bindClose();

        function bindScrollEvent(){
            var initialScrollTop = $(window).scrollTop();
            var handler = function(){
                var currentScrollTop = $(window).scrollTop();
                var matchHideCase = currentScrollTop - initialScrollTop > 40;
                var matchShowCase = currentScrollTop - initialScrollTop <= -40;
                if(matchHideCase){
                    banner.addClass('hide');
                }else if(matchShowCase){
                    banner.removeClass('hide');
                }
                if(currentScrollTop<initialScrollTop && !banner.hasClass('hide')){
                    initialScrollTop = currentScrollTop;
                }
                if(currentScrollTop>initialScrollTop && banner.hasClass('hide')){
                    initialScrollTop = currentScrollTop;
                }
            };
            $(window).scroll(handler);
            return handler;
        }
        function bindClose(){
            $('.J_closeZhongchouFooterBanner').click(function(){
                banner.remove();
                docCookies.setFlag('ftbclosed', 7*24*60*60*1000);
                $(window).unbind('scroll', scrollHandler);
            });
        }
    }

})(window.$);