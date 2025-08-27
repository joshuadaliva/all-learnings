<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


    <?php

        // if else - used to check the condition of two or more values

        $age = 17;

        // if( $age >= 21){
        //     echo "21 above";
        // }
        // else if($age === 17){
        //     echo "minor";
        // }
        // else{
        //     echo "21 below";
        // }


        // shorthand for if
        if($age < 18) echo "you are not a minor";

        // shorthand for if else
        $age = $age < 18 ? "you are a minor" :"not a minor";
        echo$age;

    ?>


</body>
</html>