const API_URL =
"http://localhost:3000/api";

document
.getElementById(
"loginForm"
)
.addEventListener(
"submit",
async(e)=>{

    e.preventDefault();

    const email =
    document.getElementById(
        "email"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

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

    localStorage.setItem(

        "token",

        data.token

    );

    window.location.href =
    "dashboard.html";

});