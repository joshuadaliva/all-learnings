





const generatePassword = (passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers) =>{

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const symbols = "!@#$%^&*()_+=";
    const numbers = "1234567890";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    for (let index = 0; index < passwordLength; index++) {    
        let randomInt =  Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomInt]
    }   

    return password
    


}




const generatePass = document.getElementById("generatePassword").addEventListener("click", () => {
    const passwordLength = Number(document.getElementById("passLength").value);
    const includeLowerCase = document.getElementById("lower").checked ? true : false;
    const includeUpperCase = document.getElementById("upper").checked ? true : false;
    const includeSymbols = document.getElementById("symbols").checked ? true : false;
    const includeNumbers = document.getElementById("numbers").checked ? true : false;
    document.getElementById("generatedPassword").textContent =  generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeSymbols,includeNumbers)
})