<!DOCTYPE HTML>
<html>


	<!--
	
	
       　  　▃▆█▇▄▖
　 　 　 ▟◤▖　　　◥█▎
   　 ◢◤　 ▐　　　 　▐▉
　 ▗◤　　　▂　▗▖　　▕█▎
　◤　▗▅▖◥▄　▀◣　　█▊
▐　▕▎◥▖◣◤　　　　◢██
█◣　◥▅█▀　　　　▐██◤
▐█▙▂　　     　◢██◤
◥██◣　　　　◢▄◤
 　　▀██▅▇▀
你是一个一个偷偷看我的代码的人哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊啊啊啊啊！！！！
	-->


	<head>


		<meta charset="utf-8">
		<title>The Edenland</title>


		<script type="text/javascript" src="../JS/main_js.js"></script>


		<link rel="stylesheet" type="text/css" href="../CSS/main_root.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_alert.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_sidebar.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_header.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_content.css">


	</head>


	<body id="TheMainPage">

		<!--警告栏-->
		<div id="upperId" class="upper">
			<div  id='main_alert' class="scriptum alertArea">
				<p class='alertText'>
					本网页目前还在测试中，一切内容均不代表其最终版本，且网页本身将存在许多bug，如果您有建议或有发现细节bug(重大bug站长已知)，请前往
					<i><a href='../webpage_common/feedback.html'>反馈页</a></i>报告给站长
				</p>
				<button onclick='confirmed()'>确定</button>
			</div>
		</div>

		<div id="coveringId" class="covering"></div>


         <!--侧边栏-->
		<?php include("sidebar.html"); ?>



		<!--右侧的除侧边栏外的内容-->
		<div id="main" class="theMain">

			<!--标题栏-->
			<?php include("header.html"); ?>

			<div class="mainContent">

				<!--图片功能区-->
				<div>

					<img src="../Images/index/2023-05-13_11.17.57.jpg" alt="intro_img" class="main_images" id="main_image">

					<!--图片上的文字-->
					<div class="miniText">
						<h3 id="main_10" class="scriptum miniTitle">一个破败穷酸的服务器</h3>
						<p id="main_20" class="scriptum miniIntro">The Edenland是一个存档已有4年历史的破败穷酸<br>服务器，这里除了咸鱼没有别的玩家，所以服务器<br>建设依旧很落后</p>
						<button id="main_30" class="scriptum toIntro"><a href='introduction.html'>服务器介绍<span></span></a></button>
						<button id="main_40" class="scriptum toIntro"><a href='join.html'>加入服务器<span></span></a></button>
					</div>

					<!--
					<p class="switch_buttons">
						<a id="switch_left"><button><--</button></a>
						<a id="button1"><button onclick="image_one()">1</button></a>
						<a id="button2"><button onclick="image_two()">2</button></a>
						<a id="button3"><button onclick="image_three()">3</button></a>
						<a id="button4"><button onclick="image_four()">4</button></a>
						<a id="button5"><button onclick="image_five()">5</button></a>
						<a id="switch_right"><button>-->
					<!--</button></a>
					</p>-->


				</div>


				<h4 id='main_AT' class='scriptum'>*服务器文章*</h4>

				<div class='article_area'>


					<div id='main_A3' class='scriptum article1'>
						<h5>网页测试中</h5>
						<p class='date'>2023</p>
						<p class='arcs'>这一段文字只是测试用的
						</p>
					</div>

					<div id='main_A2' class='scriptum article2'>
						<h5>网页测试中</h5>
						<p class='date'>2023</p>
						<p class='arcs'>测试用</p>
					</div>

					<div id='main_A1' class='scriptum article3'>
						<h5>网页测试中</h5>
						<p class='date'>2023</p>
						<p class='arcs'>哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
					</div>


				</div>


				<h4 id='main_HT' class='scriptum'>*服务器历史*</h4>
				<div class='history'>


					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H7' class='scriptum'>初步完成新版网页布局</h5>
							<p class='date'>2023/4/12</p>
						</div>
					</div>

					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H6' class='scriptum'>开始重写网页</h5>
							<p class='date'>2023/3/6</p>
						</div>
					</div>

					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H5' class='scriptum'>首次开发网页</h5>
							<p class='date'>2022/8/22</p>
						</div>
					</div>

					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H4' class='scriptum'>再次开服</h5>
							<p class='date'>2022/2/1</p>
						</div>
					</div>

					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H3' class='scriptum'>停服重回单人模式</h5>
							<p class='date'>2020/3/15</p>
						</div>
					</div>

					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H2' class='scriptum'>首次开服</h5>
							<p class='date'>2020/2/23</p>
						</div>
					</div>

					<div class='histories'>
						<div class='logs'>
							<h5 id='main_H1' class='scriptum'>创建存档（单人模式）</h5>
							<p class='date'>2018/8/31</p>
						</div>
					</div>


				</div>
			</div>


		</div>

		<hr />
		<h4><a id='main_65535' class="scriptum noTextDecoration" href="Old/index.html">访问旧版网页</a></h4>

		</div>




	</body>



</html>

<!--
				获取视口宽高
				<button onclick="getWindowInfo()">测试用，请勿触碰</button>
				<script>
					function getWindowInfo() {
						var windowHeight = window.innerHeight;
						var windowWidth = window.innerWidth;
						document.write(windowHeight, windowWidth);
					}
				</script>-->
