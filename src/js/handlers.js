
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api"
import {createGallery} from "./render-functions"
export function handleSubmit(event) {
    event.preventDefault()   
    const inputEl = event.target.elements[0].value.trim()
    if (inputEl === "") {
   iziToast.show({
    position: 'topRight',
    message: 'Please write something'
   })
    return;
    }  
    getImagesByQuery(inputEl)
        .then(hits => {
            if (!hits || hits.length === 0) {
                throw new Error('no images found ');
            }
        createGallery(hits)
        })
        .catch((error) => {
  iziToast.error({
    message: `Houston, we have a problem.`,
    position: 'topRight',
    backgroundColor: '#ef4040',
    messageColor: '#ffffff',
  });
});
}