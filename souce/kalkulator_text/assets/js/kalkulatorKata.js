const dummy_input = 'ini yang yang contoh text yang akan di proses text text'

//ambil input
const inputText = document.getElementById('inputForm')
const input = document.getElementById('text_input')
const kataList = document.getElementById('listKata')
const tr = document.createElement('li');


document.addEventListener('click', e => {
  e.preventDefault();
  const jumKarakter = input.value;
  const kata = jumKarakter.split(" ");
  const jumKalimat = jumKarakter.split('. ');
  const jumParagraf = jumKarakter.split(/[\r\n]+/);
  hitungKata(kata)
  listJumlah(jumKarakter, kata, jumKalimat, jumParagraf)
})

// proses input
function hitungKata(input) {
  const result = {};
  input.map(key => {
    if (!result.hasOwnProperty(key)) {
      result[key] = 1
    } else {
      result[key] = result[key] + 1
    }
  });

  return listKata(result);
}

function page() {
  const data = [{
    a: 1
  }, {
    b: 2
  }, {
    b: 2
  }, {
    b: 2
  }, {
    b: 2
  }, {
    b: 2
  }];

  const result = []
  data.map(key => {
    result.push(key)
  })
  return result;
}

// console.log(page())

// tampilkan input
function listKata(input) {
  let elCreate = "";
  for (const [key, val] of Object.entries(input)) {
    elCreate +=
      /*html*/
      `<tr>
       <td>${key}</td>
       <td>${val}</td>
     </tr>`;
  }
  kataList.innerHTML = elCreate

}

function listJumlah(jumKarakter, kata, jumKalimat, jumParagraf) {


  /*html*/
  const inj = ` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Jumlah Kata
      <span class="badge bg-primary rounded-pill">${kata.length}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Jumlah Karakter
      <span class="badge bg-primary rounded-pill">${jumKarakter.length}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Jumlah Kalimat
      <span class="badge bg-primary rounded-pill">${jumKalimat.length}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Jumlah Paragraf
      <span class="badge bg-primary rounded-pill">${jumParagraf.length}</span>
    </li>`

  document.querySelector('ul.list-group').innerHTML = inj
}