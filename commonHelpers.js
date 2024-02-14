import{S as u}from"./assets/vendor-9d80c77f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="gallery-link",g="https://pixabay.com/api/";function f(i){const n=`?${new URLSearchParams({key:"42137546-386b5be41212ccd429cab5a80",q:i,image_type:"photo",orientation:"horizontal",safeSearch:!0})}`,r=g+n;return fetch(r).then(e=>e.json()).catch(e=>{throw toastError(`Error fetching images: ${e}`),e})}function p({largeImageURL:i,tags:s,webformatURL:n,likes:r,views:e,comments:t,downloads:a}){return`
    <a href="${i}" class="${m}">
      <figure>
        <img src="${n}" alt="${s}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${r}</span></div>
          <div class="image-item">Views <span class="image-elem">${e}</span></div>
          <div class="image-item">Comments <span class="image-elem">${t}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${a}</span></div>
        </figcaption>
      </figure>
    </a>
  `}const c=document.querySelector(".gallery"),l=document.querySelector(".search-form"),d=document.querySelector(".loader"),o=document.querySelector(".result-info");l.addEventListener("submit",function(i){i.preventDefault();const s=i.target.elements.query.value.trim();if(s.length<3){iziToast.warning({title:"Warning",message:"Please enter a search query with at least 3 characters.",position:"topRight"});return}c.innerHTML="",o.innerHTML="";const n=new u(`.${m}`);f(s).then(({hits:r})=>{if(r.length>0){const e=r.map(p).join("");c.innerHTML=e,o.innerHTML='<p class="result-messages">Loading images, please wait...</p>',n.refresh(),setTimeout(()=>{o.innerHTML=""},2e3)}else o.innerHTML='<p class="no-results-message">No images found.</p>',setTimeout(()=>{o.innerHTML=""},5e3)}).catch(r=>{console.error("Error fetching images:",r),iziToast.error({title:"Error",message:"Error fetching images. Please try again.",position:"topRight"})}).finally(()=>{d.style.display="none",l.reset()})});
//# sourceMappingURL=commonHelpers.js.map
