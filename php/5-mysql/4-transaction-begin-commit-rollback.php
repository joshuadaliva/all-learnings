<pre>
<?php

    $localhost = "localhost";
    $username = "root";
    $password = "";
    $db = "practice";

    
    try{
        $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // $query = "CREATE TABLE users(
        //     id INT PRIMARY KEY AUTO_INCREMENT,
        //     username VARCHAR(250) NOT NULL
        // )";

        // begin transaction
        $conn->beginTransaction();
      
        $conn->exec($query);
        $query = "INSERT INTO users(username) VALUES('joshua daliva')";
        $conn->exec($query);
        $query = "INSERT INTO users(username) VALUES('joshua daliva')"  $query = "INSERT INTO users(username) VALUES('joshua daliva')";;
        $conn->exec($query);
        $query = "INSERT INTO users(username) VALUES('joshua daliva')";
        $conn->exec($query);
        $query = "INSERT INTO users(username) VALUES('joshua daliva')";
        $conn->exec($query);

        // commit all transaction
        $conn->commit();

        echo "record added successfully with the id of " . $conn->lastInsertId();
        echo "connected successfully";

        print_r(get_class_methods($conn));

    }catch(PDOException $e){
        // rollback if error
        $conn ->rollBack();
        echo $e->getMessage();
    }


?>
</pre>
