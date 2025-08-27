// formData - is a specifial object in js that is used to collect all input fields and their values and stored them in a key value pair
// name attribute
// supports binary upload (file)
// use form data if you want to collect all inputs all out once and make it dynamically




const submit = document.getElementById('submit')

submit.addEventListener("click", (e) => {
    e.preventDefault()

    const formData = new FormData(submit)

    formData.append("city", "pili") //adds a value
    formData.set("name", "updatedName") //replace a value
    formData.get("name") //get a value
    formData.getAll("name") //get all value from multiple same name inputs
    formData.has("name") //checks for input if existing
    formData.delete("name")

    // used to print key and values
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }




})