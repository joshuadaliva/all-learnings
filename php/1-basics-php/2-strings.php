<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- 


        echo() - can't print array it expexted an a string
        echo() - converts number,boolean, float into a string but not an array use print_r or var_dump


        // echo strlen($name);              
        // echo strpos($name, "liva");
        // echo strtoupper($name);
        // echo strtolower($name);
        // echo strrev($name);
        // echo str_replace("joshua", "chester", $name);
        // echo str_contains($name, "daliva")
        // echo str_shuffle($name);
        // echo stripslashes($name);
        // echo str_starts_with($name, "joshua")
        // echo str_ends_with($name, "daliva");
        // echo str_word_count($name)
        // echo strip_tags($name);
        // echo trim($name);
        // $name = explode(" ", $name);
        // var_dump($name)


    -->


    <?php


        $name = "joshua daliva";

        echo strlen($name); // return the length of a string
        echo "<br>";

        echo str_word_count($name); //returns the word count
        echo "<br>";

        echo strpos($name, "daliva"); //returns an index of a search name
        echo "<br>";

        echo strtolower($name); //returns the the lowercase string
        echo "<br>";

        echo strtoupper($name); //returns the highercase string
        echo "<br>";

        echo str_replace("joshua", "chester", $name); //replaces a string portion
        echo "<br>";

        echo strrev($name); //reverse a string
        echo "<br>";

        echo trim($name); //removes whitespace
        echo "<br>";

        $y = explode(" ", $name); //used to convert string to an array
        print_r($y);
        echo "<br>";

        $y = implode(" ", $y); //converts an array to string
        var_dump($y);
        echo "<br>";

        $x = substr($name, 6, 3); //slice a string starts at 6 and tkaes 3 character
        echo $x;
        echo "<br>";
        

        // escaping chracters use backslash
        $vikings = "we are the so called \" vikings \" from the north";
        echo $vikings;


    ?>


</body>
</html>