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

            // class - it is used  to define the structure of an object
            // provides dry or dont repeat yourself
            // accessed using -> 
            // $this - belongs to the object
            
            class Fruit{
                public $name;
                public $color;

                function setName($name){
                    $this->name = $name;
                }


                function getName(){
                    return $this->name;
                }

            }

            $apple = new Fruit(); //creating an object
            $apple->setName("apple"); 

            echo $apple->getName();
            echo $apple -> name; //accessing a variable inside a class
            



        ?>
    </pre>

</body>
</html>