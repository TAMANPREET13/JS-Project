const Random_Quote_Api_Url = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");

quoteInputElement.addEventListener("input", () => {
  console.log("changed");
});

function getRandomQuote() {
  return fetch(Random_Quote_Api_Url)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

renderNewQuote();
