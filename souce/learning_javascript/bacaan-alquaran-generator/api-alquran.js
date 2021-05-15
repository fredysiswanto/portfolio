let result = {}

const urlAlquran = 'https://api.banghasan.com/quran/format/json/acak';

fetch(urlAlquran, {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    result = data;
    // console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });



console.log();