<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



    <?php

        // while loop use to execute something multiple times as long as the value is true

        $count = 0;

        // old while
        while($count < 6){
            $count++;
            if($count === 3) continue;
            echo $count;
        }

        //new while
        while($count < 6):
            $count++;
            echo $count;
        endwhile;


        // do while
        do{
            $count++;
            echo $count;
        }
        while($count < 6);


    ?>


</body>
</html>