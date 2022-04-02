const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");

// Search the states.json and filter it
const searchStates = async(searchText) => {
    //The below code is used to fetch the data from states.json
    const res = await fetch("states.json");
    const states = await res.json();

    //Get matches to current textInput
    let matches = states.filter((state) => {
        //filtering on the the basis of patterns like start with that particular Input we put
        const regex = new RegExp(`^${searchText}`, "gi");
        return state.name.match(regex) || state.key.match(regex);
    });
    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = "";
    }
    outputHtml(matches);
};

//Show results in html
const outputHtml = (matches) => {
    if (matches.length > 0) {
        const html = matches
            .map(
                (match) => `
        <div class='card card-body mb-1'>
          <h4>${match.name} (${match.key}) <span class='text-primary'>${match.capital}</span>
          </h4>
        </div>
        `
            )
            .join("");

        matchList.innerHTML = html;
    }
};

search.addEventListener("input", () => searchStates(search.value));