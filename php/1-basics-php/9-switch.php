<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



    <?php

        $day = "tuesday";

        switch ($day){
            case "monday":
                echo "it is monday";
                break;
            case "tuesday":
                echo "it is tuesday";
                break;
            default:
                echo "not a valid day";
                break;
        }

    ?>


</body>
</html>