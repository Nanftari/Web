<?php


//获取前端表单数据并定义变量
$name = $_POST["name"];
$feedback = $_POST["feedback"];
$terms = filter_input(INPUT_POST, "terms", FILTER_VALIDATE_BOOLEAN);

//判断用户是否同意协定
if ( ! $terms) {
	die("你必须同意并遵守服务器规则!");
}

//创建MySQL连接变量
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "database";
 
// 创建连接，引用上文连接变量值
$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检测连接
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}

 //往数据库表单中插入数据，引用上文前端表单数据的值
$sql = "INSERT INTO messages (name, feedback)
VALUES ('$name', '$feedback')";

 //判断是否成功插入数据并输出结果
if (mysqli_query($conn, $sql)) {
    echo "数据已成功上传";
} else {
    echo "数据上传错误: " . $sql . "<br>" . mysqli_error($conn);
}

 //终止与数据库的连接
mysqli_close($conn);


?>
