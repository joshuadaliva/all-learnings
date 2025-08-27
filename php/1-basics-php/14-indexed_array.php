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

            $fruits = ["banana", "apple", "orange"];
            $fruits1 = ["banana", "dsa", "dsa"]; //to be used in intersect and diff


            // echo $fruits[0];                     //accessing an array using index
            // $fruits[1] = "banana";               //changing or adding value inside an array


            // printing all values inside an array
            // foreach($fruits as $index => $fruit){
            //     echo $fruit;
            // }



            //  array methods


            // array_push($fruits, "kiwi");             //push at the end of an array
            // array_unshift($fruits, "kiwi");          //push at the start of an array
            // array_pop($fruits);                      //delete an item in the end of an array
            // array_shift($fruits);                    //delete an item in the start of an array
            // $intersect = array_intersect($fruits, $fruits1);         //return a new array with the intersecting value
            // $intersect = array_diff($fruits, $fruits1);                 //return a new array with the value not having on the right side
            // sort($fruits);                           //sort array in ascending order

            print_r($fruits)
            



        ?>


    </pre>


</body>
</html>