<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style type="text/css">
/*public*/
.hide {
	display: none;
}

.page-bar {
	margin: 40px;
}

ul, li {
	margin: 0px;
	padding: 0px;
}

li {
	list-style: none
}

.page-bar li:first-child>a {
	margin-left: 0px
}

.page-bar a {
	border: 1px solid #ddd;
	text-decoration: none;
	position: relative;
	float: left;
	padding: 6px 12px;
	margin-left: -1px;
	line-height: 1.42857143;
	color: #337ab7;
	cursor: pointer
}

.page-bar a:hover {
	background-color: #eee;
}

.page-bar a.banclick {
	cursor: not-allowed;
}

.page-bar .active a {
	color: #fff;
	cursor: default;
	background-color: #337ab7;
	border-color: #337ab7;
}

.page-bar i {
	font-style: normal;
	color: #d44950;
	margin: 0px 4px;
	font-size: 12px;
}

/*顶部*/
.navbar-collapse {
	
}

.top {
	width: 100%;
	height: 200px;
	background-color: #FBFBF9;
	margin-top: 50px;
}

.search {
	position: relative;
	top: 40%;
	transform: translateY(-40%);
}

.text-list {
	padding-top: 10px;
}

.text-right-list {
	
}

.text-right-list ul {
	margin-top: 20px;
}

.text-right-list li {
	padding-top: 5px;
	list-style: none;
}
/*搜索关键词*/
.search_keyword {
	margin-top: 40px;
}

.search_keyword p a {
	color: #777;
}

.page-bar {
	margin: 40px;
}

ul, li {
	margin: 0px;
	padding: 0px;
}

li {
	list-style: none
}

.page-bar li:first-child>a {
	margin-left: 0px
}

.page-bar a {
	border: 1px solid #ddd;
	text-decoration: none;
	position: relative;
	float: left;
	padding: 6px 12px;
	margin-left: -1px;
	line-height: 1.42857143;
	color: #337ab7;
	cursor: pointer
}

.page-bar a:hover {
	background-color: #eee;
}

.page-bar a.banclick {
	cursor: not-allowed;
}

.page-bar .active a {
	color: #fff;
	cursor: default;
	background-color: #337ab7;
	border-color: #337ab7;
}

.page-bar i {
	font-style: normal;
	color: #d44950;
	margin: 0px 4px;
	font-size: 12px;
}
.img-thumbnail {
    display: inline-block;
    height: 200px;
    max-width: 100%;
    padding: 4px;
    line-height: 1.428571429;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
  @media (max-width: 768px) {
   .Hhhhhh{
    width:320px;
  }
  @media (min-width: 768px){
  	.nav-right{
  		float:right;
  	}
  	.img-left{
  		float:left !important;
  	}
}
 
</style>
<script type="text/javascript">
	function btnType(type) 
	{
		var text = document.getElementById("input").value;
		if(text==null||type==null||text==""||type=="")
       	{
       		return ;
       	}
		window.location.href = "./index.do?type=" + type + "&text=" + text;
		return false;
       }
	function gotoA(cur) {
       	var text = document.getElementById("input").value;
    	if(text==null||cur==null||text==""||cur==0)
       	{
       		return ;
       	}
		window.location.href = "./pageSearch.do?text=" + text +  "&cur=" + cur;
		
        }
	function gotoT(cur,type) {
       	var text = document.getElementById("input").value;
    	if(text==null||cur==null||text==""||cur==0)
       	{
       		return ;
       	}
		window.location.href = "./pageIndex.do?text=" + text +  "&cur=" + cur+ "&type="+type;
        }
	function  ruSearch() {
	    var text = document.getElementById("input").value;
       	if(text==null||text=="")
       	{
       		return ;
       	}
		window.location.href = "./search.do?text=" + text ;
        }
	function EnterPress(e,value){ //传入 event 
		var e = e || window.event; //兼容ie
		if(e.keyCode == 13){ 
			if(value==null||value=="")
			{
				return ;
			}
			window.location.href = "./search.do?text=" + value ;
		} 
		} 
	
	
</script>