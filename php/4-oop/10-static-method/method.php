<?php



    setcookie("name", "daliva", time() + 8300, "/");
    

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


            class Student{

                public static $name = "joshua daliva";
                public $age;

                public static function getName():string{
                    return self::$name;
                }



            }

            $student1 = new Student();
            print_r(Student::getName());

            Student::$name = "daliva";
            print_r(Student::$name);



        ?>
    </pre>

    

</body>
</html>