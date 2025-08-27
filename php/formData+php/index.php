


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    
    <form id="form">
        username:
        <input type="text" name="username" id="username"><br>
        password:
        <input type="text" name="password" id="password"><br>
        <input type="submit" value="submit">
    </form>
    <script>
        const form = document.getElementById("form")

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            
            const formData = new FormData(e.target);


            const insertData = async () => {
                const response = await fetch("db.php", {
                    method:"POST",
                    body:formData
                })
                const data = await response.json();

                console.log(data.message);

            }

            insertData(formData)
            


        })

    </script>

</body>
</html>