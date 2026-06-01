async function loadStats(){

    const token =
    localStorage.getItem(
        "token"
    );

    const response =
    await fetch(

        `${API_URL}/dashboard`,

        {

            headers:{

                Authorization:
                `Bearer ${token}`

            }

        }

    );

    const stats =
    await response.json();

    document
    .getElementById(
        "servicesCount"
    )
    .textContent =
    stats.services;

    document
    .getElementById(
        "quotesCount"
    )
    .textContent =
    stats.quotes;

    document
    .getElementById(
        "contactsCount"
    )
    .textContent =
    stats.contacts;

}

loadStats();