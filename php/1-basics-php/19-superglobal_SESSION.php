<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



    <form action="index.php" method="POST">
        <label for="name">Enter your name: </label><br>
        <input type="text" name="name" id="name"><br>
        <label for="age">Enter your age: </label><br>
        <input type="text" name="age" id="age"><br>
        <input type="submit" value="submit">
    </form>

    
    <pre>

        <?php

            
            // superglobals - are predefined variables in php
            /*
                $_SERVER
                $_POST
                $_GET
                $_FILES
                $_COOKIE
                $_SESSION
                $_ENV
            */

            // $_REQUEST - get all info about POST, GET, COOKIE
            // print_r($_REQUEST);


            // SESSION - USE TO STORE DATA IN THE BROWSER AND ACCESS THEM ANYWHERE IN YOUR CODE
            // use session_start()


            session_start();
            $_SESSION["name"] = "daliva"; //add a session or replace ad sessioon
            

            unset($_SESSION["name"]); //delete a session

            print_r($_SESSION)






        ?>

    </pre>


</body>
</html>