<?php
    
    header('Content-Type: text/html;charset=utf-8');
    $mysqli = mysqli_connect('localhost','root','','web') or die('连接数据库失败！');
    $id = $_GET['id'];

    $sql = "delete from news where id = $id";
    if(!mysqli_query($mysqli,$sql)){
        echo '删除失败！';
    }else{
        echo '删除成功！';
    }

?>