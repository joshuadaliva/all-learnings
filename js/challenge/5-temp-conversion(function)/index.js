



let toFahrenheit = document.getElementById("toFahrenheit")
let toCelcius = document.getElementById("toCelcius")
let convert = document.getElementById("convert")
let result = document.getElementById("result")
let temp = document.getElementById("temp")
let converted;



convert.addEventListener("click", () => {
    converted = Number(temp.value)
    if(toFahrenheit.checked){
        converted = converted * 9 / 5 + 33;
        result.textContent = converted.toFixed(1) + "f"
    }
    else if(toCelcius.checked){
        converted = (converted - 32) * (5 / 9);
        result.textContent = converted.toFixed(1) + "f"
    }

})