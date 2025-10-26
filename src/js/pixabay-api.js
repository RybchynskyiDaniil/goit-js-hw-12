
import axios from "axios";
const APIkey = "52837219-31e3d366b905b38697491d842";
axios.defaults.baseURL = 'https://pixabay.com';
export async function getImagesByQuery(query,page) {
    try
   {const response = await axios.get("/api/",{params:{
        key: APIkey,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
       safesearch: true,
       page,
       per_page: 15,   
   }   
   })
        console.log(response.data);
        
    return response.data    
    }
    catch (error) {
    console.log(error.message);
}
}
