const url = "./travel_recommendation_api.json";

const btnSearch = document.getElementById("btnSearch");
const btnReset = document.getElementById("btnReset");
const searchInput = document.getElementById("search");
const results = document.getElementById("results");

btnSearch.addEventListener("click", fetchData);
btnReset.addEventListener("click", resetResults);

function fetchData() {
    console.log(checkSearchInput())
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

function checkSearchInput() {
    const searchValue = searchInput.value.toLowerCase().trim();;

    switch (searchValue) {
        // --- Countries ---
        case "country":
        case "countries":
        case "nation":
        case "nations":
        case "state":
        case "states":
        case "land":
        case "lands":
        case "place":
        case "places":
          return "countries";
    
        // --- Beaches ---
        case "beach":
        case "beaches":
        case "coast":
        case "coasts":
        case "shore":
        case "shores":
        case "seaside":
          return "beaches";
    
        // --- Temples ---
        case "temple":
        case "temples":
        case "shrine":
        case "shrines":
        case "sanctuary":
        case "sanctuaries":
        case "pagoda":
          return "temples";
    
        default:
          return "";
      }
}

function resetResults() {
    results.innerHTML = "";
}
