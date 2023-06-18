var lang; /*储存语言名*/
var ele; /*储存选中的元素*/
var eleId; /*储存选中元素的ID*/

window.onload = function() {//窗口加载完后的函数
	check_language();//检测语言
	traverse_element();//根据语言切换文本
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
xhr.open("get","../../JS/JSON/main.json",false);//创建请求，请求这个文件
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
	ele = document.getElementsByClassName('scriptum');
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

//刷新语言及其对应文本
function refreshText(x) {
	lang = x;
	traverse_element();
	checkLanguageToMoveList();
}