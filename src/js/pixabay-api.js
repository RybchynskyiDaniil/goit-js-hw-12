
import axios from "axios";
const APIkey = "52837219-31e3d366b905b38697491d842";
axios.defaults.baseURL = 'https://pixabay.com';
export function getImagesByQuery(query) {
    return axios.get("/api/",{params:{
        key: APIkey,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch:true,
    }
    })
        .then(response => {
     return response.data.hits
        })
        .catch(error => {
    console.log(error.message);
    
    })
}