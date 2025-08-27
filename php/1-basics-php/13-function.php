<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



    <?php

        // default value inside the greet function
        function greet($name = "joshua"){
            echo "hello world " . $name;

        }
        greet("daliva");
        greet("daliva");
        greet();
        


        // return value
        function sum($x, $y){
            return $x + $y;
        }

        echo sum(20,30);


        // ...rest operator
        function numbers(...$numbers){
            var_dump($numbers);
        }

        numbers(34,12,3123,32,12,12);

    ?>


</body>
</html>