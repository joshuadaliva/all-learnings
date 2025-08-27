<pre>
<?php


$localhost = "localhost";
$username = "root";
$password = "";
$db = "practice";

try{
    $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 1. query
    $query = "UPDATE users SET username = :name WHERE id = :id";
    // 2. prepare
    $stmt = $conn->prepare($query);
    // 3. execute
    $stmt->execute([
        ":name" => "chester daliva",
        ":id" => 11
    ]);

    // 4. identify if one row are affected
    $rowCount = $stmt->rowCount();
    if($rowCount > 0){
        echo "name updated successfully";
    }


}catch(PDOException $e){
    echo $e->getMessage();
}


?>
</pre>


