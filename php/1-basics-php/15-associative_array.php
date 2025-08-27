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

    // associative array = an array that uses named key instead of index
    
    $person = [
        "name" => "joshua",
        "age" => 21,
        "hobbies" => "coding"
    ];

    // echo $person["hobbies"][0]; //accessing using key
    $person["name"] = "chester"; //changing value or adding value (if not exist) in associative array
    print_r($person);


    // printing all value inside an associative array
    foreach($person as $key => $pers){
        echo $key . $pers;
    }


    unset($person["name"]); //deleting an item on an array
    print_r($person);
    // or using splice
    array_splice($person, 1, 1);
    print_r($person)
        


    ?>
    </pre>

</body>
</html>