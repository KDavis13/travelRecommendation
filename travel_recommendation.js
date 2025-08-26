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
            const category = checkSearchInput();
            renderResults(category, data);
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
    results.style.display = "none";
    searchInput.value = "";
  }

function renderResults(category, data) {
    resetResults();
  
    if (!data[category] || data[category].length === 0) {
      results.style.display = "none"; // oculta si no hay nada
      return;
    }
  
    results.style.display = "block"; // mostrar panel si hay resultados
  
    data[category].forEach(item => {
      if (category === "countries" && item.cities) {
        item.cities.forEach(city => {
          const card = createCard(city.name, city.imageUrl, city.description);
          results.appendChild(card);
        });
      } else {
        const card = createCard(item.name, item.imageUrl, item.description);
        results.appendChild(card);
      }
    });
  }
  
  function createCard(title, imageUrl, description) {
    const card = document.createElement("div");
    card.classList.add("result-card");
  
    card.innerHTML = `
      <img src="images/${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
    `;
  
    return card;
  }