<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- form validation

        htmlspecialchars() = convert special chracters into a html entities
    
    
    -->

    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])  ?>" method="POST">
        name:
        <input type="text" name="name" id="name"><br>
        age:
        <input type="text" name="age" id="age"><br>
        <input type="submit" value="submit">
    </form>
    

    <pre>
        
        <?php

            // use to validate an input and sanitize
            function validateInput($input){
                $data = trim($input);
                $data = stripslashes($data);
                $data = strip_tags($data);
                $data =  htmlspecialchars($data);
                return $data;
            }

            // checks if the request method
            if($_SERVER["REQUEST_METHOD"] === "POST"){
                
                $name = validateInput($_POST["name"]);
                $age = validateInput($_POST["age"]);
                
                echo $name . " ".  $age . "<br>"; 
            }



        ?>

    </pre>


</body>
</html>