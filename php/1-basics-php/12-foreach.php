<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



    <?php

        
        $fruits = array("banana", "apple", "orange", "pineapple");

        foreach($fruits as $index => $fruit){
            if($fruit === "banana") continue;
            echo $index . $fruit . "<br>";
        }



        foreach($fruits as $fruit):
            echo $fruit;
        endforeach;



    ?>


</body>
</html>