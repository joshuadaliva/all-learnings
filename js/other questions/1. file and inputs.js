


const submit = document.getElementById("submit")
const date = document.getElementById("date")
const image = document.getElementById("image")

submit.addEventListener("submit", (e) => {
    
    e.preventDefault()
    
    // one by one
    const dt = date.value
    const images = image.value
    const data = e.target
    console.log(data);


    // using formData for collecting all inputs
    const formData = new FormData(e.target)

})


// 1. file is not possible or not recommended to send as JSON , use formData
// 2. file have many steps for the security and the file handling because there is many file types