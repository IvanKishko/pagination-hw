const gallery = document.getElementById("gallery");
const loadMore = document.getElementById("loadMoreBtn");

const apiKey = "48848351-0857751ff8f9e0b75b15170ec";
const perPage = 5;
let currentPage = 1;

function fetchImages() {
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&editors_choice=true&per_page=${perPage}&page=${currentPage}`
  )
    .then((response) => response.json())
    .then((data) => data.hits);
}

function displayImages(images) {
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    imgElement.classList.add("gallery-image");
    gallery.appendChild(imgElement);
  });
}

function loadMoreImages() {
  fetchImages(currentPage).then((images) => {
    displayImages(images);
    currentPage++;
  });
}

loadMore.addEventListener("click", loadMoreImages);
