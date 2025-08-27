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

            
        // inheritance - class derived from another class
        // child class will inherit the public and protected properties and methods

        class Animal{

            public $name;
            public $age;
            function __construct($name, $age)
            {
                $this->name = $name;
                $this->age = $age;
            }

        }


        class Rabbit extends Animal{

            function printData(){
                echo $this->name . " is eating and the age of animal is ". $this->age;
            }

        }

        class Dog extends Animal{

            function printData(){
                echo $this->name . " is eating and the age of animal is ". $this->age;
            }

        }

        
            
        $rabbit = new Rabbit("rabbit", 21);
        $rabbit->printData();

        $dog = new Dog("dog", 12);
        $dog->printData();

            



        ?>
    </pre>

</body>
</html>