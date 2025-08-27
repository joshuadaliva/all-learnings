
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


            // interface - allows you to specify what methods a class should implement
            // when one or more classes use the same interface that is called polymorphism
            /*

                - interfaces cannot have properties
                - must be public

            */


            interface Animal{
                public function makeSound():void;
                public function move():void;
            }

            class Rabbit implements Animal{

                function __construct($name, $age)
                {
                    $this->name = $name;
                    $this->age = $age;
                }

                public function makeSound(): void{
                    echo "this $this->name makes sound";
                }

                public function move(): void
                {
                    echo "this $this->name moves";
                }


            }


            $rabbit = new Rabbit("rabbit", 2);

            $rabbit->move();
            




        ?>
    </pre>

    

</body>
</html>