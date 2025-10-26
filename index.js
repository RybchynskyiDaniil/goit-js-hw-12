import{a as h,S as v,i as r}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const w="52837219-31e3d366b905b38697491d842";h.defaults.baseURL="https://pixabay.com";async function p(a,s){try{const e=await h.get("/api/",{params:{key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}});return console.log(e.data),e.data}catch(e){console.log(e.message)}}const o={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loadMoreButton:document.querySelector(".load-more-button")};let f;function y(a){let s="";for(const e of a)s+=`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <ul class="image-stats-list">
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Likes</h3>
                    <p class="image-stats">${e.likes}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Views</h3>
                    <p class="image-stats">${e.views}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Comments</h3>
                    <p class="image-stats">${e.comments}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Downloads</h3>
                    <p class="image-stats">${e.downloads}</p>
                </li>
            </ul>
        </li>`;o.galleryEl.insertAdjacentHTML("beforeend",s),f?f.refresh():f=new v(".gallery a",{animationSpeed:300,fadeSpeed:250,captions:!0,captionDelay:250,captionType:"attr",captionsData:"alt",captionPosition:"bottom",showCounter:!0,scrollZoom:!0})}function E(){o.galleryEl.innerHTML=""}function L(){o.loaderEl.classList.contains("visually-hidden")&&o.loaderEl.classList.remove("visually-hidden")}function n(){o.loaderEl.classList.contains("visually-hidden")||o.loaderEl.classList.add("visually-hidden")}function b(){o.loadMoreButton.classList.contains("visually-hidden")&&o.loadMoreButton.classList.remove("visually-hidden")}function l(){o.loadMoreButton.classList.contains("visually-hidden")||o.loadMoreButton.classList.add("visually-hidden")}let c=1,d,m="";async function M(a){a.preventDefault(),l();const s=a.target.elements[0].value.trim();s===""&&r.error({message:"Please write something",position:"topRight"}),E(),L(),m="",c=1;try{m=s;const e=await p(s,c);if(!e.hits||e.hits.length===0){n(),l(),r.error({message:"Houston, we have a problem.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff"});return}d=Math.ceil(e.totalHits/15),y(e.hits),n(),c!==d?b():(r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l())}catch{n(),l(),r.error({message:"Houston, we have a problem.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff"})}}async function B(){c++,L();try{const a=await p(m,c);d=Math.ceil(a.totalHits/15),y(a.hits);let s=o.galleryEl.firstElementChild.getBoundingClientRect();window.scrollBy({top:s.height*1.75,behavior:"smooth"}),n(),c!==d?b():(r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l())}catch(a){n(),l(),r.error({message:"Houston, we have a problem.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff"}),console.log(a.message)}}n();o.formEl.addEventListener("submit",M);o.loadMoreButton.addEventListener("click",B);
//# sourceMappingURL=index.js.map
