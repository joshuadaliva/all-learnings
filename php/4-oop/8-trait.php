
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


            // trait - use to declare methods that can be used in multiple classes. its like inheritance but you can use it multiple
            // can have abstract and methods 
            // can used public , protected, private


            trait Authenticate{
                public function process($username, $password){
                    echo "processing";
                    echo $username . " is created";
                }
            }


            trait Login{
                public function loginUser($username){
                    echo "welcome username";
                }
            }


            class User{
                use Authenticate, Login;
                public $name;
                public $password;

                function __construct($name, $password)
                {
                    $this->name = $name;
                    $this->password = $password;
                    $this->process($this->name, $this->password);
                    $this->loginUser($this->name);
                }


            }

            $user = new User("dalva", "1234");



        ?>
    </pre>

    

</body>
</html>