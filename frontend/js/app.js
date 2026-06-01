const menuBtn =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});

const API_URL =

window.location.hostname ===
"localhost"

? "http://localhost:3000/api"

: "https://tu-api.onrender.com/api";

async function cargarServicios(){

    try{

        const response =
        await fetch(
            `${API_URL}/services`
        );

        const services =
        await response.json();

        const grid =
        document.getElementById(
            "servicesGrid"
        );
        grid.innerHTML = "";

        services.forEach(service=>{
            grid.innerHTML += `
            <div class="service-card">
                <img
                    src="${
                        service.imagen ||
                        'assets/default.jpg'
                    }"
                >
                <div
                    class="service-content">
                    <h3>
                        ${service.titulo}
                    </h3>
                    <p>
                        ${service.descripcion}
                    </p>
                    <div
                    class="service-price">
                        $${service.precio} MXN
                    </div>
                </div>
            </div>
            `;
        });
    }

    catch(error){
        console.error(error);
    }
}

cargarServicios();

const proyecto =
document.getElementById(
    "proyecto"
);

const extras =
document.querySelectorAll(
    ".extra"
);

const totalSpan =
document.getElementById(
    "total"
);

function calcularTotal(){

    let total =
    Number(
        proyecto.value
    );

    extras.forEach(extra=>{

        if(extra.checked){

            total +=
            Number(extra.value);

        }

    });

    totalSpan.textContent =
    `$${total}`;

}

proyecto.addEventListener(
    "change",
    calcularTotal
);

extras.forEach(extra=>{

    extra.addEventListener(
        "change",
        calcularTotal
    );

});

calcularTotal();

document
.getElementById("quoteForm")
.addEventListener(
"submit",
async(e)=>{

    e.preventDefault();

    let opciones=[];

    extras.forEach(extra=>{

        if(extra.checked){

            opciones.push(
                extra.parentElement
                     .textContent
                     .trim()
            );

        }

    });

    const quote = {

        nombre:
        document.getElementById(
            "nombre"
        ).value,

        correo:
        document.getElementById(
            "correo"
        ).value,

        proyecto:
        proyecto.options[
            proyecto.selectedIndex
        ].text,

        opciones,

        total:Number(
            totalSpan.textContent
                .replace("$","")
        )

    };

    await fetch(

        `${API_URL}/quotes`,

        {

            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify(
                quote
            )

        }

    );

    alert(
        "Cotización enviada"
    );

});

document
.getElementById(
"contactForm"
)
.addEventListener(
"submit",
async(e)=>{

    e.preventDefault();

    await fetch(

        `${API_URL}/contacts`,

        {

            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({

                nombre:
                document
                .getElementById(
                    "contactNombre"
                ).value,

                correo:
                document
                .getElementById(
                    "contactCorreo"
                ).value,

                mensaje:
                document
                .getElementById(
                    "contactMensaje"
                ).value

            })

        }

    );

    alert(
        "Mensaje enviado"
    );

});