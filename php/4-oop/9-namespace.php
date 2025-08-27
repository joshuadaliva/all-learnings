<?php
//    namespace - is like a container for classess , functions and constants
/*
                -avoid naming conflicts
                -organize code better
                -needs to be at the very top of the code
    
            */

namespace Db1;

class Database
{
    public function connect()
    {
        echo "database 1 connected";
    }
}

namespace Db2;

class Database
{
    public function connect()
    {
        echo "database 2 connected";
    }
}


$db1 = new \Db1\Database();
$db2 = new \Db2\Database();

$db1->connect();


// one folder one namespace for example


/*  

    


    namespace App\Model\;       //this is declared inside a class

    use App\Model\User;        //this is used when using in another class


*/