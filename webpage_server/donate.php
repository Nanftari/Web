<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Donate us -The Edenland</title>
		<link rel="icon" href="../Images/icon/pig.ico">
		
		<script type="text/javascript" src="../JS/main_js.js"></script>
		
		<link rel="stylesheet" type="text/css" href="../CSS/main_root.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_sidebar.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_header.css">
		<link rel="stylesheet" type="text/css" href="../CSS/main_content.css">
		
	</head>
	<body>
		
		
		<!-- 这个是侧边栏 -->
		<?php include("sidebar.html"); ?>
		
		<div id="main" class="theMain">
			
			
			<!--标题栏-->
			<?php include("header.html"); ?>
			
			<div class="mainContent">
				
				
				<h2 id="donate_1" class="scriptum" style="font-size:300%;color:black;text-family:courier;text-align:center"><b>自愿赞助</b></h2>
				<p>ㅤ</p>
				<hr />
				<h3 id="donate_2" class="scriptum" style="text-align:center">
					本服务器为公益服，永久免费，但玩家可以选择自愿赞助服务器<br>
					自愿资助的玩家将被列入服务器赞助者名单，玩家可选择匿名<br>
					赞助资金单次最大不得超过50元，且一周最多只能赞助2次<br>
					<!-- 赞助资金会转换成玩家的赞助值，1赞助值=1人民币，赞助值可用于购买封邦头衔<br>
					如有特殊情况，可向服主申请退款，退款后，其金额对应的赞助值和用赞助值兑换的封邦和头衔将立即宣布无效<br>
					<a href="get_title.html">关于通过赞助获得封邦/头衔的详细规则，请点击这里</a> -->
				</h3>
				
				<p id="donate_3" class="scriptum" style="text-align:center;"> 捐助渠道：<br>
					QQ：1635675769<br>
					微信：Y1635675769Y<br>
					支付宝：15989566069<br>
				</p>
				
				<p id="donate_4" class="scriptum" style="text-align:center;"><i id="tips">*支付方式：微信（左）| 支付宝（右）</i></p>
				<p class="scriptum" style="text-align:center">
					<img loading="lazy" src="../images/payment/wechat.jpg" alt="pay" width="256"
					height="256" >
					<img loading="lazy" src="../images/payment/alipay.jpg" alt="pay" width="256"
					height="256" >
				</p>
				
				<!--<div class="cls">
					<p class="cls"><button type="button" class="button1" id="show_button"
							onclick="func1()">显示赞助列表</button></p>
					<p class="cls"><button type="button" class="button2" id="hide_button"
							onclick="func2()">隐藏赞助列表</button></p>
					<p class="cls" id="list">暂无</p>
				</div>-->

				
				<hr />
				
				<p style="text-align: center;"><a id="donate_6" class="scriptum" href="../Documents/money.txt" target="_blank">查看服务器资金记录</a></p>
				
				
				
			</div>
			
			
		</div>
		

	</body>

	<style>
		a {
			text-decoration: none;
		}
		.button2,#list {
			display: none;
		}
		.cls {
			position: relative;
			text-align: center;
		}
	</style>

</html>
