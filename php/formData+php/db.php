
<?php


    $localhost = "localhost";
    $username = "root";
    $password = "";
    $db = "practice";

    try{
        $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



    function sanitizeInput($data){
        $data = strip_tags($data);
        $data = stripslashes($data);
        $data = trim($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    

    if($_SERVER["REQUEST_METHOD"] === "POST"){

        $username = sanitizeInput($_POST["username"]);
        $password = sanitizeInput($_POST["password"]);
        $password = password_hash($password, PASSWORD_BCRYPT);

        $query = "INSERT INTO users(name,pass) VALUES (?,?)";
        $stmt = $conn->prepare($query);
        $stmt->execute([$username, $password]);

        $rowCount = $stmt->rowCount();

        if($rowCount > 0){
            echo json_encode([
                "success" => true,
                "message" => "data inserted successfully"
            ]);
        }
        else{
            echo json_encode([
                "success" => false,
                "message" => "data not inserted"
            ]);

        }


    }


    }catch(PDOException $e){
        echo $e->getMessage();
    }



?>