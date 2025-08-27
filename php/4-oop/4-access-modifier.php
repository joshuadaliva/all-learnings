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

            // access modifier - allows a certain variables to be accessible or not

            // public - the property or method can be accessed anywhere
            // protected - the property or method can be access within a derived class 
            // private - only accessible within a class
            
            class Fruit{
                public $name;
                protected $color;
                private $weight;


                function __construct($name, $color, $weight)
                {
                    $this->name = $name;
                    $this->color = $color;
                    $this->weight = $weight;
                }


                // use getter to get the protected and weight
                function getColor(){
                    return $this->color;
                }

                function getWeight(){
                    return $this->weight;
                }

                
                // use setter to set a value
                function setColor($color){
                    $this->color = $color;
                }



            }

            $apple = new Fruit("apple", "red", 23.0);

            echo $apple -> name;
            // echo $apple -> color; //errror since this is protected
            // echo $apple -> weight; //errror since this is weight


            echo $apple->getColor();
            echo $apple->getWeight();

            $apple->setColor("purple");
            echo $apple->getColor();

            
           

            



        ?>
    </pre>

</body>
</html>