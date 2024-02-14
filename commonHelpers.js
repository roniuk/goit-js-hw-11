import{S as u}from"./assets/vendor-9d80c77f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="gallery-link",g="https://pixabay.com/api/";function f(n){const i=`?${new URLSearchParams({key:"42137546-386b5be41212ccd429cab5a80",q:n,image_type:"photo",orientation:"horizontal",safeSearch:!0})}`,r=g+i;return fetch(r).then(e=>e.json()).catch(e=>{throw toastError(`Error fetching images: ${e}`),e})}function p({largeImageURL:n,tags:s,webformatURL:i,likes:r,views:e,comments:t,downloads:o}){return`
    <a href="${n}" class="${m}">
      <figure>
        <img src="${i}" alt="${s}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${r}</span></div>
          <div class="image-item">Views <span class="image-elem">${e}</span></div>
          <div class="image-item">Comments <span class="image-elem">${t}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${o}</span></div>
        </figcaption>
      </figure>
    </a>
  `}const c=document.querySelector(".gallery"),l=document.querySelector(".search-form"),d=document.querySelector(".loader"),a=document.querySelector(".result-info");l.addEventListener("submit",function(n){n.preventDefault();const s=n.target.elements.query.value.trim();if(s.length<3){iziToast.warning({title:"Warning",message:"Please enter a search query with at least 3 characters.",position:"topRight"});return}c.innerHTML="",a.innerHTML="";const i=new u(`.${m}`);f(s).then(({hits:r})=>{if(r.length>0){const e=r.map(p).join("");c.innerHTML=e,a.innerHTML=`<p class="result-messages">${r.length} images found for "${s}"</p>`,i.refresh(),setTimeout(()=>{a.innerHTML=""},500)}else a.innerHTML='<p class="no-results-message">No images found.</p>',setTimeout(()=>{a.innerHTML=""},500)}).catch(r=>{console.error("Error fetching images:",r),iziToast.error({title:"Error",message:"Error fetching images. Please try again.",position:"topRight"})}).finally(()=>{d.style.display="none",l.reset()})});
//# sourceMappingURL=commonHelpers.js.map
