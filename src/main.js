
import { handleSubmit } from "./js/handlers";
import { refs } from "./js/refs";
import { hideLoader } from "./js/render-functions";
hideLoader()
refs.formEl.addEventListener("submit", handleSubmit);
