<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String ctxPath = request.getContextPath();
%>
<meta name="referrer" content="no-referrer" />


		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="icon" href="/images/" type="image/x-icon">
		<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<link rel="Shortcut Icon" href="<%=ctxPath%>/images/logo-icon.ico">
		<script src="<%=ctxPath%>/bootstrap/js/jquery-3.2.0.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=ctxPath%>/bootstrap/js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="<%=ctxPath%>/bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="<%=ctxPath%>/css/style.css">

<script type="text/javascript">

$(document).ready(function(){
    $("#dropdownMenu1").mouseover(function(){
       $("#dropdownMenu1").click();
    });
    $("#dropdownMenu1").mouseout(function(){
        $(this).click();    
    });
  })
  function send(id,idName) {
	//ajax请求
			$.ajax({
				type : 'GET',
				dataType : "json",
				url : "./setPriase.do?id="+id,
				success : function(result) {

		if (result.status == "success") {
         
			//alert(result.data);
			document.getElementById(idName).innerHTML =result.data;
			alert(result.data);
			
			
		
		}
		if (result.status == "error") {
			alert(result.data);
		}
		
		
				}
	});
	return false;
}
	function btnType(type) 
	{
		var text = document.getElementById("input").value;
		if(text==null||type==null||text==""||type=="")
       	{
       		return ;
       	}
		text = encodeURIComponent(text);

		window.location.href = "./index.do?type=" + type + "&text=" + text;
		return false;
       }
	function gotoA(cur) {
       	var text = document.getElementById("input").value;
    	if(text==null||cur==null||text==""||cur==0)
       	{
       		return ;
       	}
		text = encodeURIComponent(text);
		window.location.href = "./pageSearch.do?text=" + text +  "&cur=" + cur;
		
        }
	function gotoT(cur,type) {
       	var text = document.getElementById("input").value;
    	if(text==null||cur==null||text==""||cur==0)
       	{
       		return ;
       	}
		text = encodeURIComponent(text);
		window.location.href = "./pageIndex.do?text=" + text +  "&cur=" + cur+ "&type="+type;
        }
	function  ruSearch() {
	    var text = document.getElementById("input").value;
       	if(text==null||text=="")
       	{
       		return ;
       	}
		text = encodeURIComponent(text);
		window.location.href = "./search.do?text=" + text ;
        }
	function hotSearch(text) {

		if (text == null || text == "") {
			return;
		}
		text = encodeURIComponent(text);
		window.location.href = "./search.do?text=" + text;
	}
	function EnterPress(e,value){ //传入 event 
		var e = e || window.event; //兼容ie
		if(e.keyCode == 13){ 
			if(value==null||value=="")
			{
				return ;
			}
			value = encodeURIComponent(value);
			window.location.href = "./search.do?text=" + value ;
		} 
		} 
	
	
</script>