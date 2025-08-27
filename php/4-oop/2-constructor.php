<?php


    
    

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

            // constructor - allows you to initialize value inside a class for every object
            // __constructor()


            class Fruit{
                public $name;
                public $color;

                function __construct($name, $color){
                    $this->name = $name;
                    $this->color = $color;
                }

                function getName():string{
                    return $this->name;
                }


            }

            $apple = new Fruit("apple", "red");

            echo $apple -> getName(); //using the getter function
            echo $apple->color; //using the color variable inside a class
            
           

            



        ?>
    </pre>

</body>
</html>