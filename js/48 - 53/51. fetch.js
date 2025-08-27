// fetch - is a function thats uses to make HTTP request like (GET, POST, PUT, DELETE)
//  returns a promise
//  also handles asynchronous operations


// syntax

fetch(url, options)
.then(response => response.json())
.then(data => console.log(data))


// POST
fetch(url, {
    method: "POST",
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({name: "joshua", lastName: "daliva"})
})
.then(response => response.json())
.then(data => console.log(data))



// PUT
fetch(url, {
    method: "PUT",
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({name: "joshua", lastName: "daliva"})
})






