const suratContainer = document.getElementById('surat-container');
const surahText = document.getElementById('surat');
const ayat = document.getElementById('span-ayat');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-ayat');
const loader = document.getElementById('loader');

let apiQuotes = [];
let surahResult = {};

function loading() {
  loader.hidden = false;
  suratContainer.hidden = true;
}

function complate() {
  loader.hidden = true;
  suratContainer.hidden = false;
}

// show new quote
function newQoute() {

  loading();
  surahText.textContent = surahResult.id.teks;
  ayat.textContent = `Qs. ${surahResult.id.surat} : ${surahResult.id.ayat}`;

  complate()
}


//get quotes
async function getQuotes() {
  loading()
  const apiUrl = 'https://api.banghasan.com/quran/format/json/acak';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    surahResult = apiQuotes.acak
    // console.log(apiQuotes);
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