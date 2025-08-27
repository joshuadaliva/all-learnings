<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <?php


        // operator - use to perform operations

        // arithmethic operators
        $x = 21;
        $y = 30;
        $z;

        $z = $x + $y; //addition    
        $z = $x - $y; //subtraction
        $z = $x / $y; //divide
        $z = $x % $y; //modulo
        $z = $x * $y; //multiplication
        $z = $x ** $y; //exponent

        // shorthand
        $x += $y;
        $x -= $y;
        $x /= $y;
        $x *= $y;
        $x %= $y;

        
        // comparison operators
        $z = $x == $y; //return true if equal
        $z = $x === $y; //return true if equal and both the same type 
        $z = $x != $y; //return true if not equal 
        $z = $x !== $y; //return true if not equal and not the same type
        $z = $x > $y; //return true x is greather than y
        $z = $x < $y; //return true x is less than to y
        $z = $x >= $y; //return true x is greather than y or equal
        $z = $x <= $y; //return true x is less than to y or equal


        // increment / decrement
        ++$x; //pre increment - increment x by one then return x
        $x++; //post increment - return x then increment
        --$x; //pre increment - decrement x by one then return x
        $x--; //post increment - return x then decrement


        // logical operators
        $z = $x && $y; //both are the same
        $z = $x || $y; //or
        $z = !$y; //not

        // concatenation shortcut
        $name = "joshua";
        $name .= "daliva";
        echo $name;


    ?>


</body>
</html>