<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


    <?php


    
    //string
     $a = 5;
     $b = 5.34;
     $c = "hello";
     $d = false;
     $e = null;

     $a = (string) $a; // "5"
     $c = (string) $c; // "hello"
     $d = (string) $d; // "1" for true "0" for false
     $e = (string) $e;  // ""
    //  var_dump($d);



    // int
     $a = 5;
     $c = "25 kilometer";
     $d = false;
     $e = null;

     $a = (int) $a; // 5
     $c = (int) $c; // 25 gets the first number in the string
     $d = (int) $d; // 1 for true 0 for false
     $e = (int) $e;  // 0
    //  var_dump($e)


    // array
    $a = 5;
    $a = (array) $a;
    var_dump($a); //all data type can be converted to an array


    // null
    $a = 5.56;
    $a = (unset) $a;
    var_dump($a);

    
    ?>



</body>
</html>