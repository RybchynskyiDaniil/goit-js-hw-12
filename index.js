import{a,i as l}from"./assets/vendor-CHMhaTs2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="52837219-31e3d366b905b38697491d842";a.defaults.baseURL="https://pixabay.com";function u(i){return a.get("/api/",{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits).catch(r=>{console.log(r.messege)})}const c={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery")};function m(i){let r="";for(const t of i)r+=`<li>
    <a href="${t.webformatURL}">
    <img src="${t.largeImageURL}" alt="${t.tags}">
    </a>
    <ul>
    <li>
        <h3>likes</h3>
        <p>${t.likes}</p>
    </li>
    <li>
        <h3>views</h3>
        <p>${t.views}</p>
    </li>
    <li>
        <h3>comments</h3>
        <p>${t.comments}</p>
    </li>
    <li>
        <h3>downloads</h3>
        <p>${t.downloads}</p>
    </li>
</ul>
    </li>`;c.galleryEl.insertAdjacentHTML("beforeend",r)}function d(i){i.preventDefault();const r=i.target.elements[0].value.trim();if(r===""){l.show({position:"topRight",message:"Please write something"});return}u(r).then(t=>{if(!t||t.length===0)throw new Error("no images found ");m(t)}).catch(t=>{l.error({message:"Houston, we have a problem.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff"})})}c.formEl.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
