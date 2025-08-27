<?php

    $localhost = "localhost";
    $username = "root";
    $password = "";
    $db = "practice";

    try{
        $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "database connected successfully";

        $query = "CREATE TABLE users(
            id int AUTO_INCREMENT PRIMARY KEY,
            name varchar(250) not null
        )";

        $conn->exec($query);

    }catch(PDOException $e){
        echo $e->getMessage();
    }


    // to know the class methods you can use
    // print_r(get_class_methods());


?>