

// callback - a function that is passed as an argument to another function


function hello(callback){
    console.log("hello");
    callback()
}

function goodbye(){
    console.log("goodbye");
}

hello(goodbye);


function sum(display, x, y){
    let result = x + y;
    display(result)
}

function display(result){
    console.log(result);
}

sum(display, 20, 5)