const url = "./travel_recommendation_api.json";

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", fetchData);

function fetchData() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error("Network response was not ok " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos recibidos:", data);
        })
        .catch(error => {
            console.error("Hubo un problema con la petición fetch:", error);
        });
    }
