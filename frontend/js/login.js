const API_URL =

window.location.hostname ===
"localhost"

? "http://localhost:3000/api"

: "https://designme-web.onrender.com/api";

document
.getElementById("loginForm")
.addEventListener(
"submit",
async(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try{

        const response =
        await fetch(

            `${API_URL}/auth/login`,

            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body:JSON.stringify({
                    email,
                    password
                })
            }

        );

        const data =
        await response.json();

        if(!response.ok){

            alert(
                data.message ||
                "Credenciales inválidas"
            );

            return;
        }

        localStorage.setItem(
            "token",
            data.token
        );

        window.location.href =
        "dashboard.html";

    }catch(error){

        console.error(error);

        alert(
            "Error al conectar con el servidor"
        );

    }

});