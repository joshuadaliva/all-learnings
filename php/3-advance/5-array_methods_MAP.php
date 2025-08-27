<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        // callback function - this is a function that is passed as an argument to another function 
        // most used when dealing with array

        $fruits = ["banana", "apple", "orange"];

        $newFruits = array_map(function($fruit){
            return strtoupper($fruit);
        }, $fruits);

        print_r($newFruits);

    ?>
</body>
</html>