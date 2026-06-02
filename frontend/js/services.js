const token =
localStorage.getItem(
    "token"
);

async function loadServices(){

    const response =
    await fetch(

        fetch(`${API_URL}/services`),
        fetch(`${API_URL}/quotes`),
        fetch(`${API_URL}/contacts`)

    );

    const services =
    await response.json();

    const container =
    document.getElementById(
        "servicesList"
    );

    container.innerHTML="";

    services.forEach(service=>{

        container.innerHTML += `

        <div>

            <h3>

                ${service.titulo}

            </h3>

            <p>

                $${service.precio}

            </p>

        </div>

        `;

    });

}

loadServices();