

let age = document.getElementById("age")
let submit = document.getElementById("submit")
let check = document.getElementById("check")

submit.addEventListener("submit", (e) => {
    e.preventDefault()
    age = Number(age.value);
    if(age >= 18){
        check.textContent = "pasok ka";
    }
    else{
        check.textContent = "di ka allowed";
    }
})