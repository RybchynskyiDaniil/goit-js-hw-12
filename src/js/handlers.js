
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api"
import { clearGallery, createGallery, hideLoader, showLoader } from "./render-functions";
export function handleSubmit(event) {
event.preventDefault() 
    const userInput = event.target.elements[0].value.trim()
    if (userInput === "") {
       iziToast.error({
            message: 'Please write something',
            position: 'topRight', 
    })
    }
clearGallery()
showLoader()
    getImagesByQuery(userInput)
        .then(hits => {
            if (!hits || hits.length === 0) {
        throw new Error('No images found');
      }
      showLoader();
     createGallery(hits)
        })
        .catch((error)=> {
     hideLoader();
      iziToast.error({
        message: `Houston, we have a problem.`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
      });
    })
        .finally(() => {
hideLoader()          
})
}