var lang; /*储存语言名*/
var ele; /*储存选中的元素*/
var eleId; /*储存选中元素的ID*/
var HeightLast = window.innerHeight; //获取初始视口高度
var WidthLast = window.innerWidth; //获取初始视口宽度

function judgeDevice() {//判断设备是否是桌面端
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			return false;//移动端
    }
    else {
        return true;//桌面端
    }
}

function sleep (time) {//定义睡眠函数，没鸟用
	return new Promise((resolve) => setTimeout(resolve, time));
  }

window.onload = function() {//窗口加载完后的函数
	check_language();//检测语言
	traverse_element();//根据语言切换文本
	hideSideTexts();//把侧边栏文本隐藏
	closeNav();//默认关闭侧边栏
	if(judgeDevice()) {
    	document.getElementById('main').style.width = '90vw';
	}
	else {
		changeStyleForMobile();
	}
}

function changeStyleForMobile() {//为移动端专门准备的样式

}


//通过ajax获取储存语言文本的json文件
var xhr="";//声明变量容纳XMLHttpRequest对象
//封装XMLHttpRequest对象创建方法（用于兼容低版本IE浏览器*但是为什么要兼容IE呢*）
function createXHR(){
	if(new window.XMLHttpRequest){//如果浏览器支持对象XMLHttpRequest
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLH");//低版本IE使用ActiveXObject
	}
}
createXHR();//调用函数以创建XMLHttpRequest对象

//使用XMLHttpRequest对象发送请求
xhr.open("get","../JS/JSON/main.json",false);//创建请求，请求这个文件
xhr.send(null);//发送请求

//获取返回的json数据
var languageString=xhr.responseText;//返回的数据都是字符串，不是对象
var text=JSON.parse(languageString);//使用JSON.parse函数把字符串转成对象，然后就可以愉快的调用了



/*检测语言*/
/*
zh-HK 华 - 香港
zh-MO 华 - 澳门
zh-CN 华 -大陆
zh-CHS 华 简体
zh-SG 华 -新加坡
zh-TW 华 -台湾
zh-CHT 华 正體中文
啥都不是就是默認，默認就是英語（English）
*/
//根据浏览器设置来判断语言的函数
function check_language() {
	switch (navigator.language.toLowerCase()) {

		case "zh-cn":
			lang = "简体中文";
			break;
		case "zh-sg":
			lang = "简体中文";
			break;
		case "zh-chs":
			lang = "简体中文";
			break;

		case "zh-hk":
			lang = "正體中文";
			break;
		case "zh-mo":
			lang = "正體中文";
			break;
		case "zh-tw":
			lang = "正體中文";
			break;
		case "zh-cht":
			lang = "正體中文";
			break;

		default:
			lang = "English";
			break;

	}
	return lang;
}

/*循环遍历每个class="scriptum"的元素，并进行上面的操作*/
function traverse_element() {
	ele = document.querySelectorAll(".scriptum");
	for (var i = 0; i < ele.length; i++) {
		// 对每个.scriptura元素执行操作
		eleId = ele[i].id;
		// 使用当前元素的id进行操作
		load_text(eleId, lang);
	}
}

/*以json中对应ID的对应语言的文本填充进对应ID的元素中*/
function load_text(x, y) {
	if(text[x] != null) {//先判断这个要替换的文本是否为空
		if (text[x].hasOwnProperty(y)) {//检测该文本是否具有对应的内容
			document.getElementById(x).innerHTML = text[x][y];//替代文本内容
		}
	}
	return "finished!";
}

/*关闭警告弹窗*/
function confirmed() {
	document.getElementById("coveringId").style.display = "none";
	document.getElementById("upperId").style.display = "none";
}



//头部导航栏部分

var languageListAppear = false;

//判断语言下拉框是否开启
function checkLanguageList() {
	if(languageListAppear) {//为真，隐藏下拉框
		document.getElementById("languageList").style.cssText = "display:none";
		languageListAppear = false;
	}
	else {//反之则开启下拉框
		document.getElementById("languageList").style.cssText = "display:block;";
		checkLanguageToMoveList();
		languageListAppear = true;
	}
}

//刷新语言及其对应文本
function refreshText(x) {
	lang = x;
	traverse_element();
	checkLanguageToMoveList();
}

//这个是为了让语言栏根据不同的语言变化一下左移的程度，不然会很奇怪
function checkLanguageToMoveList() {
	if (lang == "简体中文") {
		document.getElementById("languageList").style.cssText = "display:block;margin-left:calc(4vw + 4rem + 350px);";
	}
	else if (lang == "English") {
		document.getElementById("languageList").style.cssText = "display:block;margin-left:calc(6vw + 6rem + 350px);";
	}
	else {
		document.getElementById("languageList").style.cssText = "display:block;margin-left:calc(6vw + 4rem + 350px);";
	}
}

//昼夜切换，离完成还有99.99%
var needToDoDayNightSwitch = document.getElementsByClassName('dayNightSeparated');
function dayNightSwitch() {
    for (var i = 0; i < needToDoDayNightSwitch.length; i++) {
        needToDoDayNightSwitch[i].classList.toggle("night");
    }
	return 'finished';
}


var screenDefault = false;//false表示横屏，反之则为竖屏，下同
var screenNow;

//涉及分辨率变化检测、横竖屏样式调整部分
//检测视口分辨率有无变化，一旦有变则执行：

window.onresize = function() {
	var HeightNow = window.innerHeight;
	var WidthNow = window.innerWidth;
	if(HeightLast !== HeightNow || WidthLast !== WidthNow) {
		HeightLast = HeightNow;
		WidthLast = WidthNow;
		isScreenChanged();
	}
}

function isScreenChanged() {

	if(WidthLast / HeightLast >= 1) {
		screenNow = false;
	}
	else {
        screenNow = true;
	}
	
	if(screenNow == screenDefault) {
	    return;
	}
	else {
	    screenDefault = screenNow;
	    if(sidebarOpen) {
    	    changeSidebar();
	    }
	    closeNav();
	}
	
}

//输出视口长宽比是否大于1
function judgeWindowInfo() {
	if(WidthLast >= HeightLast) {
		return true;
	}
	else {
		return false;
	}
}
//通过进行样式变更，还没想好怎么写
function switchStylesOnResolution() {
	if(WidthLast / HeightLast >= 1) {
		
	}
	else {
        
	}
}

function forceShowIcon() {//强行显示图标

}
function notForceShowIcon() {//不再强行显示图标

}

/*侧边栏及协调部分*/

var sidebarOpen = false; /*对于侧边栏，false就是关上了，true就是打开了*/


/*打开侧面板*/
function controllNav() {
	if (sidebarOpen) {
		closeNav();
	} else {
		openNav();
	}
	sidebarOpen = !sidebarOpen;
}

//if下面的是横屏写法，else下面的是竖屏写法
//打开侧边栏
function openNav() {
	/*document.getElementById('mySidebar').style.width = 'calc(4rem + 5vw + 5vh)';
	document.getElementById('main').style.marginLeft = 'calc(4rem + 5vw + 5vh)';*/
	if(judgeWindowInfo()) {
		document.getElementById('closeSidebarIcon').style.display = 'none';
		document.getElementById('mySidebar').style.display = 'inline-block';
		document.getElementById('mySidebar').style.width = '20vw';
		document.getElementById('main').style.marginLeft = '20vw';
		//if(judgeDevice()) {
		    document.getElementById('main').style.width = '75vw';
		//}
		//else {
		//    document.getElementById('main').style.width = '80vw';
		//}
		document.getElementById('sidebarShadow').style.display = 'none';
		showSideTexts();
	}
	else {
		showSideTexts();
		mobileOpenNav();
	}
}

function mobileOpenNav() {
	document.getElementById('closeSidebarIcon').style.display = 'block';
	document.getElementById('sidebarShadow').style.display = 'block';
	document.getElementById('mySidebar').style.display = 'inline-block';
	setTimeout('mobileShowNav()', 1); //延迟以避免出现玄学问题
}
function mobileShowNav() {
	document.getElementById('mySidebar').style.width = '60vw';
}

/* 设置侧边栏宽度为5，页面内容左边距为5，收缩侧面板 */
function closeNav() {
	if(judgeWindowInfo()) {
		document.getElementById('closeSidebarIcon').style.display = 'none';
		document.getElementById('mySidebar').style.display = 'inline-block';
		document.getElementById('mySidebar').style.width = '5vw';
		document.getElementById('main').style.marginLeft = '5vw';
		//if(judgeDevice()) {
		    document.getElementById('main').style.width = '90vw';
		//}
		//else {
		//   document.getElementById('main').style.width = '95vw';
		//}
		document.getElementById('sidebarShadow').style.display = 'none';
		hideSideTexts();
	}
	else {
		mobileCloseNav();
		hideSideTexts();
	}
}

function mobileCloseNav() {
	document.getElementById('closeSidebarIcon').style.display = 'none';
	document.getElementById('sidebarShadow').style.display = 'none';
	document.getElementById('mySidebar').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
    document.getElementById('main').style.width = '95vw';
	setTimeout('mobileHideNav()', 500); //延迟，与上同理
}
function mobileHideNav() {
	document.getElementById('mySidebar').style.display = 'none';
}

function changeSidebar() {//改变按钮class名以载入新样式
//	document.getElementById('sidebarButton').classList.toggle('change');
}

//隐藏除了图标外的文字内容
var sideTexts = document.getElementsByClassName('sidebarText');
function hideSideTexts() {
	for(var i = 0;i < sideTexts.length; i++) {
		sideTexts[i].style.display = 'none';
	}
}
function showSideTexts() {
	for(var j = 0;j < sideTexts.length; j++) {
		sideTexts[j].style.display = 'inline-block';
	}
}