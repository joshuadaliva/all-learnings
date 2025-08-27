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

            $nameErr = $ageErr = $emailErr =  "";
            // checks if the request method
            if($_SERVER["REQUEST_METHOD"] === "POST"){

                if(empty($_POST["name"])){
                    $nameErr = "Name is required";
                }
                else{
                    $name = validateInput($_POST["name"]);
                }
                if(empty($_POST["age"])){
                    $ageErr = "age is required";
                }
                else{
                    $age = validateInput($_POST["age"]);
                }


                if(empty($_POST["email"])){
                    $emailErr = "email cannot be blank";
                }
                else{
                    $email = validateInput($_POST["email"]);
                    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                        $emailErr = "not a valid email";
                    }

                }

            }



        ?>

    </pre>

    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])  ?>" method="POST">
        name:
        <input type="text" name="name" id="name">
        <span style="color: red;"><?php echo $nameErr ?></span><br>
        age:
        <input type="text" name="age" id="age">
        <span style="color: red;"><?php echo $ageErr ?></span><br>
        email:
        <input type="text" name="email" id="email">
        <span style="color: red;"><?php echo $emailErr ?></span><br>
        <input type="submit" value="submit">
    </form>
    

     


</body>
</html>