var lang; /*储存语言名*/
var ele; /*储存选中的元素*/
var eleId; /*储存选中元素的ID*/
var HeightLast = window.innerHeight; //获取初始视口高度
var WidthLast = window.innerWidth; //获取初始视口宽度

function sleep (time) {//定义睡眠函数
	return new Promise((resolve) => setTimeout(resolve, time));
  }

window.onload = function() {//窗口加载完后的函数
	hideNav();
	check_language();
	traverse_element();
	switchImages();
}


//检测视口分辨率有无变化，每5秒检测一次
setInterval( function() {
	var HeightNow = window.innerHeight;
	var WidthNow = window.innerWidth;
	if(HeightLast !== HeightNow || WidthLast !== WidthNow) {
		HeightLast = HeightNow;
		WidthLast = WidthNow;
		getWindowInfo();
	}
} ,5000
)
//输出视口长宽
function getWindowInfo() {
	console.log(WidthLast);
	console.log(HeightLast);
}


//通过ajax获取语言文件json
var xhr="";//声明变量容纳XMLHttpRequest对象
//封装XMLHttpRequest对象创建方法（用于兼容低版本IE浏览器）
function createXHR(){
	if(new window.XMLHttpRequest){//如果浏览器支持对象XMLHttpRequest
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLH");//低版本IE使用ActiveXObject
	}
}
createXHR();//调用函数以创建XMLHttpRequest对象

//使用XMLHttpRequest对象发送请求
xhr.open("get","../JS/JSON/main.json",false);//创建请求
xhr.send(null);//发送请求

//获取返回的json数据，
var languageString=xhr.responseText;//返回的数据都是字符串，不具备对象方法
var text=JSON.parse(languageString);//使用JSON.parse方法将字符串数据转换为javascript对象



/*检测语言*/
/*
zh-HK 华 - 香港
zh-MO 华 - 澳门
zh-CN 华 -大陆
zh-CHS 华 简体
zh-SG 华 -新加坡
zh-TW 华 -台湾
zh-CHT 华 繁体
*/
//用于判断语言的函数
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
		document.getElementById("languageList").style.cssText = "display:none;margin-top:-100px;";
		document.getElementById("headerTriangle").style.transform = "rotate(180deg)";
		languageListAppear = false;
	}
	else {//反之则开启下拉框
		document.getElementById("languageList").style.cssText = "display:block;margin-top:40px;";
		checkLanguageToMoveList();
		document.getElementById("headerTriangle").style.transform = "rotate(0deg)";	
		languageListAppear = true;
	}
}

//刷新语言及其对应文本
function refreshText(x) {
	lang = x;
	traverse_element();
	checkLanguageToMoveList();
}


function checkLanguageToMoveList() {
	if (lang == "简体中文") {
		document.getElementById("languageList").style.cssText = "display:block;margin-top:40px;margin-left:calc(4vw + 4rem + 350px);";
	}
	else if (lang == "English") {
		document.getElementById("languageList").style.cssText = "display:block;margin-top:40px;margin-left:calc(6vw + 6rem + 350px);";
	}
	else {
		document.getElementById("languageList").style.cssText = "display:block;margin-top:40px;margin-left:calc(6vw + 4rem + 350px);";
	}
}


//var needToDoDayNightSwitch = document.querySelectorAll("body, header, p, h1, h2, h3, h4, h5, .article1, .article2, .article3, .logs, .sidebar, .index_button, .mainLinks");
//var dayNightSwitch_i;
//昼夜切换
//function dayNightSwitch() {
    //for (dayNightSwitch_i = 0; dayNightSwitch_i < needToDoDayNightSwitch; i++) {
    //    needToDoDayNightSwitch[dayNightSwitch_i].classList.toggle("night");
    //}
//}



/*侧边栏及协调部分*/

var sidebarOpen = false; /*对于侧边栏，0就是关上了，1就是打开了*/

/* 设置侧边栏的宽度为250px，页面内容的左边距为250px，打开侧面板 */
function controllNav() {
	if (sidebarOpen) {
		closeNav();
	} else {
		openNav();
	}
	sidebarOpen = !sidebarOpen;
}

function openNav() {
	document.getElementById("mySidebar").style.display = "inline-block";
	setTimeout("showNav()", 1); //延迟以避免出现玄学问题
}

function showNav() {
	/*document.getElementById("mySidebar").style.width = "calc(4rem + 5vw + 5vh)";
	document.getElementById("main").style.marginLeft = "calc(4rem + 5vw + 5vh)";*/
	document.getElementById("mySidebar").style.width = "20vw";
	document.getElementById("main").style.marginLeft = "20vw";
	document.getElementById("header").style.width = "80vw";
}

/* 设置侧边栏宽度为0，页面内容左边距为0，关闭侧面板 */
function closeNav() {
	document.getElementById("sidebarButton").style.transform = "rotate(0deg)";
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("header").style.width = "100vw";
	setTimeout("hideNav()", 500); //延迟，与上同理
}

function hideNav() {//隐藏侧边栏
	document.getElementById("mySidebar").style.display = "none";
}

function changeSidebar() {//改变按钮class名以载入新样式
	document.getElementById("sidebarButton").classList.toggle("change");
}



//图片功能区
var isIndex;
var img = 0;//图片对应的顺序

function switchImages() {
	if (img == 0) {
		setInterval( function() {

		if (img == 0) {
			img = 1;
		}
		else if (img == 1) {
			img_2();
		}
		else if (img == 2) {
			img_3();
		}
		else if (img == 3) {
			img_4();
		}
		else if (img == 4) {
			img_5();
		}
		else if (img == 5) {
			img_1();
		}

		} ,20000
		);
	}
	else {
		return;
	}
}


function restoreImageOpacity() {
    if (img == 1) {
		document.getElementById("main_image").src="../Images/index/2023-05-13_11.17.57.jpg";
	}
	else if (img == 2) {
		document.getElementById("main_image").src="../Images/index/2023-05-13_11.16.03.jpg";
	}
	else if (img == 3) {
		document.getElementById("main_image").src="../Images/index/2023-05-13_11.32.23.jpg";
	}
	else if (img == 4) {
		document.getElementById("main_image").src="../Images/index/2023-05-13_12.17.28.jpg";
	}
	else if (img == 5) {
		document.getElementById("main_image").src="../Images/index/2023-05-13_13.19.17.jpg";
	}
	document.getElementById("main_image").style.opacity = 1;
}

function img_1() {
	document.getElementById("main_image").style.opacity = 0;
	img = 1;
	setTimeout("restoreImageOpacity()", 500);
	return;
}

function img_2() {
	document.getElementById("main_image").style.opacity = 0;
	img = 2;
	setTimeout("restoreImageOpacity()", 500);
	return;
}

function img_3() {
	document.getElementById("main_image").style.opacity = 0;
	img = 3;
	setTimeout("restoreImageOpacity()", 500);
	return;
}

function img_4() {
	document.getElementById("main_image").style.opacity = 0;
	img = 4;
	setTimeout("restoreImageOpacity()", 500);
	return;
}

function img_5() {
	document.getElementById("main_image").style.opacity = 0;
	img = 5;
	setTimeout("restoreImageOpacity()", 500);
	return;
}