<?php

    $localhost = "localhost";
    $username = "root";
    $password = "";
    $db = "practice";

    try{
        $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "INSERT INTO users(name) VALUES('joshua daliva')";

        // use exec since the query doesnt return a value
        $conn->exec($query);

        echo "info created";


    }
    catch(PDOException $e){
        echo $e->getMessage();
    }

?>