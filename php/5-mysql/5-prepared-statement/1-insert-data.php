<?php


        $localhost = "localhost";
        $username = "root";
        $password = "";
        $db = "practice";

        if($_SERVER["REQUEST_METHOD"] === "POST"){
            $name = $_POST["username"];
            try{

                $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     
                // 1. query
                 $query = "INSERT INTO users(username) VALUES (:username)";
                // 2. prepare
                 $stmt = $conn->prepare($query);
                // 3. execute
                 $stmt->execute([
                    ":username" => $name
                 ]);
                 
                // rowcount return the number of affected rows based on the last sql code
                 $rowCount = $stmt->rowCount();

                 if($rowCount > 0){
                     echo "inserted to the database";
                 }
         
     
                 
     
     
     
     
             }catch(PDOException $e){
     
                 echo $e->getMessage();
             }
        }


    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST">
        username:
        <input type="text" name="username" id="username"><br>
       <button type="submit">submit</button>
    </form>

</body>
</html>


