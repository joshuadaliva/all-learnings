<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        // exception - an object that handles the error in the code

        function divide($dividend, $divisor){
            if($divisor === 0){
                throw new Exception("Division by zero");
            }
            return $dividend / $divisor;
        }

        try{
            echo divide(2, 0);
        }catch(Exception $e){
            $code = $e -> getCode();
            $message = $e->getMessage();
            echo $message . $code;
        }finally{
            echo "process complete";
        }


    ?>
</body>
</html>