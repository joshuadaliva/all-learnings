<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <?php

        $name = "joshua";
        $age = 21;
        $isStudent = true;
        $hobbies = array("coding", "watching");

        var_dump(is_string($name)); //check if string
        echo "<br>";
        var_dump(is_numeric($age)); //check if int
        echo "<br>";
        var_dump(is_bool($isStudent)); //check if boolean
        echo "<br>";
        var_dump(is_array($hobbies)); //check if array


    ?>
    
</body>
</html>