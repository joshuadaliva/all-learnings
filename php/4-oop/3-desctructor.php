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

            // destructor = runs automatically when an object is about to be desctroyed
            // __destruct
            // good for cleanup like closing the database etc.


            class Fruit{
                public $name;
                public $color;

                function __construct($name, $color)
                {
                    $this->name = $name;
                    $this->color = $color;
                }

                function __destruct()
                {
                    echo $this->name . " and " . $this->color . " is created";
                }

            }

            $apple = new Fruit("apple", "red");
            // after using the object the destructor is automatically called


            
           

            



        ?>
    </pre>

</body>
</html>