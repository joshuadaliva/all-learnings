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

            
            // constant- useful if you want to define a constant data within a class
            // const
            // case sensitive and cannot be change 
            // recommended all capital letters


            class Fruit{
                const PILI = "the area where fruit grows";

                function getLocation(){
                    return self::PILI;
                }

            }

            $fruit = new Fruit();

            echo $fruit->getLocation();

            echo Fruit::PILI;


            



        ?>
    </pre>

</body>
</html>