<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


    <?php

        

        // constant = like variables but once set cannot be change
        // automatical global across the entire script



        // define(name, value) - can be created inside a block scope
        // ex.
        define("GREETING", "hello world");
        var_dump(GREETING);


        // using const - cannot be created inside a block scope such as function or in an if
        const MyCar = "missyoubibi";
        var_dump(MyCar);

    ?>



</body>
</html>