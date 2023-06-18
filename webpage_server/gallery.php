<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Gallery -The Edenland</title>
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
				
				<h2 id="gallery_0" class="scriptum" style="font-size:300%;text-align:center">画廊</h2>
				<style>
					.images_div image {
						max-width: 100%;
						object-fit: cover;
					}
					.images_div figcaption {
						padding: 0.3em 0.8em;
						background-color: rgba(0, 0, 0, 0.5);
						color: white;
						text-align: right;
					}
					.images_div {
							display: grid;
							grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
							grid-auto-rows: 1fr;
							grid-gap: 1em;
							grid-auto-flow: dense;
						}
					.images_div > figure {
							display: flex;
							flex-direction: column;
							max-width: initial;
						}
					.images_div image {
							max-width: 100%;
							object-fit: cover;
							flex: 1;
						}
					.images_div .bigImages{
							grid-row: span 2;
							grid-column: span 2;
						}
					}
				</style>
				<hr />
				<div class='images_div'>
				
					<figure>
						<image loading="lazy" src='../Images/blog/Ringtonus.jpg' alt='Author'>
						<figcaption id="gallery_1" class="scriptum">站长头像</figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" src='../Images/index/pig.jpg' alt='icon'>
						<figcaption id="gallery_2" class="scriptum">网站LOGO</figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" class='bigImages' src='../Images/index/origin/2023-05-12_20.39.09_2.png' alt='png1'>
						<figcaption></figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" class='bigImages' src='../Images/index/origin/2023-05-13_11.16.03.png' alt='png2'>
						<figcaption></figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" class='bigImages' src='../Images/index/origin/2023-05-13_11.17.57.png' alt='png3'>
						<figcaption></figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" class='bigImages' src='../Images/index/origin/2023-05-13_11.32.23.png' alt='png4'>
						<figcaption></figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" class='bigImages' src='../Images/index/origin/2023-05-13_12.17.28.png' alt='png5'>
						<figcaption></figcaption>
					</figure>
					
					<figure>
						<image loading="lazy" class='bigImages' src='../Images/index/origin/2023-05-13_13.19.17.png' alt='png6'>
						<figcaption></figcaption>
					</figure>
					

				</div>
				
			</div>
			
			
		</div>
		
	
	</body>
</html>