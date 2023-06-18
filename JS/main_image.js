//图片功能区
var isIndex;
var img = 0;//图片对应的顺序
//一定时间结束之后，就判定当前图片是哪一个，然后执行对应的切图函数
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

//趁着图片完全透明的时候切图。其实只是修改源地址
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
//无脑的切图函数，这是最愚蠢的办法
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

function img_previous() {
	if(img == 1) {
		document.getElementById("main_image").style.opacity = 0;
		img = 5;
		setTimeout("restoreImageOpacity()", 500);
		return;
	}
	else {
		document.getElementById("main_image").style.opacity = 0;
		img = img - 1;
		setTimeout("restoreImageOpacity()", 500);
		return;
	}
}

function img_next () {
	if(img == 5) {
		document.getElementById("main_image").style.opacity = 0;
		img = 1;
		setTimeout("restoreImageOpacity()", 500);
		return;
	}
	else if(img == 0){
		document.getElementById("main_image").style.opacity = 0;
		img = 2;
		setTimeout("restoreImageOpacity()", 500);
		return;
	}
	else {
		document.getElementById("main_image").style.opacity = 0;
		img = img + 1;
		setTimeout("restoreImageOpacity()", 500);
		return;
	}
}



switchImages();//开始执行