<?php
    // setcookie("name", "value", "expiration", "path");
    setcookie("name", "joshua daliva", time() + (86400 * 30), "/");

    // delete a cookie
    setcookie("name", "", time() - 3000);

?>

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

        // cookie = used to identify the user, Each time a computer request a page cookie will sent too.
        // cookie function must be created before html tag
        // the value of the cookie is automatically URLencoded when sending the cookie and decoded when received

        print_r($_COOKIE); //print all cookies
        print_r($_COOKIE["name"]); //print individual cookies


    ?>
    </pre>
</body>
</html>