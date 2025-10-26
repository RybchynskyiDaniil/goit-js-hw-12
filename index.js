import{a as d,S as f,i as m}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const g="52837219-31e3d366b905b38697491d842";d.defaults.baseURL="https://pixabay.com";function p(i){return d.get("/api/",{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits).catch(s=>{console.log(s.message)})}const l={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};let o;function h(i){let s="";for(const t of i)s+=`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
            </a>
            <ul class="image-stats-list">
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Likes</h3>
                    <p class="image-stats">${t.likes}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Views</h3>
                    <p class="image-stats">${t.views}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Comments</h3>
                    <p class="image-stats">${t.comments}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Downloads</h3>
                    <p class="image-stats">${t.downloads}</p>
                </li>
            </ul>
        </li>`;l.galleryEl.insertAdjacentHTML("beforeend",s),o?o.refresh():o=new f(".gallery a",{animationSpeed:300,fadeSpeed:250,captions:!0,captionDelay:250,captionType:"attr",captionsData:"alt",captionPosition:"bottom",showCounter:!0,scrollZoom:!0})}function y(){l.galleryEl.innerHTML=""}function u(){l.loaderEl.classList.contains("visually-hidden")&&l.loaderEl.classList.remove("visually-hidden")}function n(){l.loaderEl.classList.contains("visually-hidden")||l.loaderEl.classList.add("visually-hidden")}function L(i){i.preventDefault();const s=i.target.elements[0].value.trim();s===""&&m.error({message:"Please write something",position:"topRight"}),y(),u(),p(s).then(t=>{if(!t||t.length===0)throw new Error("No images found");u(),h(t)}).catch(t=>{n(),m.error({message:"Houston, we have a problem.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff"})}).finally(()=>{n()})}n();l.formEl.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
