const anuKey = "VEnqnQL0CdzJU92YKUtMxegigLW4BW1VphMAVqklMQk";
const contImg = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${anuKey}&count=${contImg}`;

const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImg = 0;
let photosArray = [];


// cek img load
function imgLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImg) {
    ready = true;
  }
}

// heplper untu set atribut
function setAtribut(element, atribut) {
  for (const key in atribut) {
    element.setAttribute(key, atribut[key])
  }
}

// create elements fos links & photos, add dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImg = photosArray.length;

  photosArray.forEach((photos) => {
    // membuat <a></a> untuk menarok link (jika gambar di klik ke unspls)
    const item = document.createElement('a');
    // item.setAttribute('href', photos.links.html);
    // item.setAttribute('target','_blank')
    setAtribut(item, {
      href: photos.links.html,
      target: '_blank'
    });
    //img dari url
    const img = document.createElement('img');
    // img.setAttribute('src', photos.urls.regular);
    // img.setAttribute('alt', photos.alt_description);
    // img.setAttribute('title', photos.alt_description);
    setAtribut(img, {
      src: photos.urls.regular,
      alt: photos.alt_description,
      img: photos.alt_description
    });

    // check apakah img telah selesai di load
    img.addEventListener('load', imgLoaded)

    //menggabungkan img ke dalam a tag
    item.appendChild(img);
    imgContainer.appendChild(item)

  })

}

// get api 
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos()
  } catch (error) {

  }
}

//cek ketika user scroll sudah hampir mendekati akhir
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos()

  }
})

getPhotos()