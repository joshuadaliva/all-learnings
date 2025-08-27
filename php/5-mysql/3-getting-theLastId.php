<?php


    $localhost = "localhost";
    $username = "root";
    $password = "";
    $db = "practice";

    try{
        $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "INSERT INTO users(name) VALUES('hans tolin')";
        $conn->exec($query);

        echo $conn->lastInsertId();

    }catch(PDOException $e){
        echo $e->getMessage();
    }


?>