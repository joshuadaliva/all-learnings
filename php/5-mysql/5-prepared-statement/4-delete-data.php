<pre>
<?php


$localhost = "localhost";
$username = "root";
$password = "";
$db = "practice";

try{
    $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 1.  query
    $query = "DELETE FROM users WHERE id = :id";
    // 2. prepare
    $stmt = $conn->prepare($query);
    // 3. execute
    $stmt->execute([
        ":id" => 11
    ]);

    // 4. row count
    $rowCount = $stmt->rowCount();
    if($rowCount > 0){
        echo "data deleted successfully";
    }


}catch(PDOException $e){
    echo $e->getMessage();
}


?>
</pre>


