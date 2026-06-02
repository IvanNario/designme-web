const API_URL =
"https://designme-web.onrender.com/api";

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
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        console.log(
            "STATUS:",
            response.status
        );

        const data =
        await response.json();

        console.log(
            "DATA:",
            data
        );

        if(!response.ok){

            alert(
                data.message
            );

            return;
        }

        localStorage.setItem(
            "token",
            data.token
        );

        console.log(
            "TOKEN GUARDADO:",
            localStorage.getItem("token")
        );

        window.location.href =
        "dashboard.html";

    }catch(error){

        console.error(error);

    }

});