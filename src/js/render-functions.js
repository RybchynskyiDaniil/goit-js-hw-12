import { refs } from "./refs"
export function createGallery(images) {
    let markup = ""
    for (const image of images) {
        markup +=`<li>
    <a href="${image.webformatURL}">
    <img src="${image.largeImageURL}" alt="${image.tags}">
    </a>
    <ul>
    <li>
        <h3>likes</h3>
        <p>${image.likes}</p>
    </li>
    <li>
        <h3>views</h3>
        <p>${image.views}</p>
    </li>
    <li>
        <h3>comments</h3>
        <p>${image.comments}</p>
    </li>
    <li>
        <h3>downloads</h3>
        <p>${image.downloads}</p>
    </li>
</ul>
    </li>`
    }
    refs.galleryEl.insertAdjacentHTML("beforeend", markup)
}


function clearGallery() {
    
}
function showLoader() {
    
}
function hideLoader(){
    
}
