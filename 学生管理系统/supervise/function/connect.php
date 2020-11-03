<?php
   /* header('Content-Type: text/html;charset=utf-8');
    $servername = "localhost";
    $username = "localhost";
    $password = "";
    $dbname="web";
     
    // 创建连接
    $conn = new mysqli($servername, $username, $password); 
    */

   header('Content-Type: text/html;charset=utf-8');
   $mysqli = mysqli_connect('localhost','root','','web') or die('连接数据库失败！');
   $sql = 'select * from `news`';
   $query = mysqli_query($mysqli,$sql);

   $data = array();
   while($row = mysqli_fetch_assoc($query)){
      $data[] = $row;
   }
   //print_r($data);


   require('../news.html');
/*    $list = mysqli_fetch_all($query);
   print_r($list); */
   
   ?>