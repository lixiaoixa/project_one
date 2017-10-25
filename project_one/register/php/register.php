<?php
//支持跨域访问
header('Access-Control-Allow-Origin: *');

//接收前端传来的数据
$num=$_POST["num"];
$ver=$_POST["ver"];
$pwd=$_POST["pwd"];
$repwd=$_POST["repwd"];
//连接数据库MySql
$conn = new mysqli("127.0.0.1", "root", "", "mydb") or die("连接失败");

//判断用户名是否已经存在
$sql = "select * from users where number='$num'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    $arr = array("status"=>0, "msg"=>"该手机号用户已存在");
    echo  json_encode($arr);
}
else {
    //插入数据， 注册
    $sql = "insert into users(number, verify, password, repassword) values('$num', '$ver', '$pwd','$repwd')";
    $result = $conn->query($sql);
    if ($result) {
        $arr = array("status"=>1, "msg"=>"注册成功");
        echo  json_encode($arr);
    } else {
        $arr = array("status"=>0, "msg"=>"注册失败");
        echo  json_encode($arr);
    }
}
$conn->close();



?>