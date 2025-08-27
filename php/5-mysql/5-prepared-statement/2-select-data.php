<pre>
<?php


$localhost = "localhost";
$username = "root";
$password = "";
$db = "practice";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        $conn = new PDO("mysql:host=$localhost;dbname=$db", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // 1. query
        $query = "SELECT * FROM users";

        // 2. prepare
        $stmt = $conn->prepare($query);

        // 3. execute
        $stmt->execute();

        // 4. fetch
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC); //return as associative array

        // 5. print data

        if(count($data) > 0){
            foreach($data as $data){
                echo $data["username"]. "<br>";
            }
        }


    } catch (PDOException $e) {

        echo $e->getMessage();
    }
}
?>
</pre>