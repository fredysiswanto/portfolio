const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complate() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// show new quote
function newQoute() {

  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  (!quote.author) ? authorText.textContent = 'Unknown': authorText.textContent = quote.author;

  (quote.text.length < 140) ? quoteText.classList.add('long-quote'): quoteText.classList.remove('long-quote');
  quoteText.textContent = quote.text;
  complate()
}


//get quotes
async function getQuotes(params) {
  loading()
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQoute()
  } catch (error) {
    console.log(error);
  }
}

function twitterQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} __ ${authorText.textContent} `;
  window.open(twitterUrl, '_blank')
}

//event listener
newQuoteBtn.addEventListener('click', getQuotes)
twitterBtn.addEventListener('click', twitterQuote)

getQuotes()