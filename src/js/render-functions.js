import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from "./refs";
let galleryLightBox;
export function createGallery(images) {
    let markup = "";
    for (const image of images) {
        markup +=`<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <ul class="image-stats-list">
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Likes</h3>
                    <p class="image-stats">${image.likes}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Views</h3>
                    <p class="image-stats">${image.views}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Comments</h3>
                    <p class="image-stats">${image.comments}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Downloads</h3>
                    <p class="image-stats">${image.downloads}</p>
                </li>
            </ul>
        </li>`  
    }
    refs.galleryEl.insertAdjacentHTML("beforeend", markup)
    
    if (!galleryLightBox) {
    galleryLightBox = new SimpleLightbox('.gallery a', {
      animationSpeed: 300,
      fadeSpeed: 250,
      captions: true,
      captionDelay: 250,
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      showCounter: true,
      scrollZoom: true,
    });
  } else {
    galleryLightBox.refresh();
  }
}

export function clearGallery() { 
 refs.galleryEl.innerHTML=""   
} 

export function showLoader(){
    if (refs.loaderEl.classList.contains("visually-hidden")) {
        refs.loaderEl.classList.remove("visually-hidden")
    }
    
}

export function hideLoader() {
if (!refs.loaderEl.classList.contains("visually-hidden")) {
        refs.loaderEl.classList.add("visually-hidden")
    }
}
