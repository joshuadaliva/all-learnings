<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <pre>
        <?php

            // JSON - stands for javascript object notation and used for storing and sending data

            $person =  [
                "name" => "joshua",
                "age" => 21,
                "isStudent" => true
            ];

            $personEncoded =  json_encode($person); //converts an associative array into an object/json
            echo $personEncoded;

           
            echo "<br>";
            echo "<br>";
            echo "<br>";
            echo "<br>";
            echo "<br>";

            $personDecode = json_decode($personEncoded, true); //converts an object/json to class but when set to true it will be converted into an associative array
            print_r($personDecode);
            // echo $personDecode->name; //accessing the decoded using oop or object approach
            echo $personDecode["name"]; //accessing decoded when set to true
            
        ?>

    </pre>
</body>
</html>