



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- 
        php - hypertext pre processor
        - you can put your code anywhere in the document/html
        - variables are use to store a single data
        - variables need to start with dollar sign $
        - echo() is used to print out in the screen 
        - var_dump($variable) use to display detailed information about the variables most commonly for debugging purposes
        - php assign the data type automatically

    -->

    <?php

    
        $name = "joshua";
        $age = 21;

        $x = 21;
        $y = 30.5;

        echo "my name is " . $name . " ". $age . " years old";

        echo "<br>";

        // int
        var_dump(5);
        echo "<br>";
        // boolean
        var_dump(true);
        echo "<br>";
        // string
        var_dump("joshua");
        echo "<br>";
        // array
        var_dump(["banana", "apple", "orange"]);

    ?>  
   
</body>
</html>