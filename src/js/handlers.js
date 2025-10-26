
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api"
import { clearGallery, createGallery, hideLoader, hideLoadMoreButton, showLoader, showLoadMoreButton } from "./render-functions";
import { refs } from "./refs";
let page = 1;
let totalPages;
let currentUserInput = "";

export async function handleSubmit(event) {
  event.preventDefault() 
  hideLoadMoreButton()
    const userInput = event.target.elements[0].value.trim()
    if (userInput === "") {
       iziToast.error({
            message: 'Please write something',
            position: 'topRight', 
    })
    }
clearGallery()
  showLoader()
  currentUserInput = ""
  page = 1
  try {
    currentUserInput = userInput
    const data = await getImagesByQuery(userInput, page)
    
         if (!data.hits || data.hits.length === 0) {
           hideLoader()
           hideLoadMoreButton()
           iziToast.error({
        message: `Houston, we have a problem.`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
           });
           return
    }
    totalPages = Math.ceil(data.totalHits / 15);
    createGallery(data.hits) 
    hideLoader()
    if (page !== totalPages ) {
     showLoadMoreButton()
    }
    else {
    iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
    });
      hideLoadMoreButton()
    }
  }
  catch (error){
    hideLoader();
    hideLoadMoreButton()
      iziToast.error({
        message: `Houston, we have a problem.`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
      });
     }
}

export async function handleLoadMore() {
  page++;
  showLoader()
  try {
    const data = await getImagesByQuery(currentUserInput, page)
    totalPages = Math.ceil(data.totalHits / 15);
    createGallery(data.hits)

     let galleryItemSize = refs.galleryEl.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: galleryItemSize.height * 1.75,
      behavior: "smooth",
    });

    hideLoader()

    if (page !== totalPages) {
      showLoadMoreButton()
    }
    else {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      hideLoadMoreButton()
    }
  }
  catch (error){
    hideLoader();
    hideLoadMoreButton()
      iziToast.error({
        message: `Houston, we have a problem.`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
      });
    console.log(error.message);
    
     }
}
