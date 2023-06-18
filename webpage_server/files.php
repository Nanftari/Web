<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Files -The Edenland</title>
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
				
				<h2 id="files_0" class="scriptum" style="font-size:300%;text-align:center">公开文件</h2>
				<hr />
				<a id="files_1" class='scriptum links' target='_blank' href='../Documents/devices.txt'>服务器使用设备记录</a><br>
				<a id="files_2" class='scriptum links' target='_blank' href='../Documents/locations.xlsx'>服务器重要地点</a><br>
				<a id="files_3" class='scriptum links' target='_blank' href='../Documents/money.txt'>服务器资金记录</a><br>
				<a id="files_4" class='scriptum links' target='_blank' href='../Documents/players.xlsx'>服务器玩家列表</a><br>
				<a id="files_5" class='scriptum links' target='_blank' href='../Documents/versions.xlsx'>服务器版本历史</a><br>
			</div>
			<style>
				.links {
					font-size: 120%;
					line-height: 2.5rem;
				}
				.mainContent {
					text-align: center;
				}
			</style>
			
		</div>
		
	
	</body>
</html>
