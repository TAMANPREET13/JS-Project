const Random_Quote_Api_Url = "http://api.quotable.io/random";

const getRandomQuote = () => {
  return fetch(Random_Quote_Api_Url)
    .then((response) => response.json())
    .then((data) => data.content);
};

const getNextQuote = async () => {
  const quote = await getRandomQuote();
  console.log(quote);
};

getNextQuote();
