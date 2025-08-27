// variable scope - where a variable is accessible (local vs global)


let x = 10; //global variable

// local variable

function func1() {
    console.log("dalvia")
}
function func2(func1) {
    func1()
}

func2(func1)