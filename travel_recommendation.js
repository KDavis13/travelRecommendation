const url = "./travel_recommendation_api.json";

const btnSearch = document.getElementById("btnSearch");
const searchInput = document.getElementById("search");
const results = document.getElementById("search");

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
            
            console.log("Data gathered:", data);
        })
        .catch(error => {
            console.error("There was an issue with fetched data:", error);
        });
    }
