import{S as p,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="47467192-b15a855f7913b17ade7ea6ded",m="https://pixabay.com/api/",f=async(t,o=1,a=12)=>{const n=`${m}?key=${y}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${a}`;try{const e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}},g=t=>t.map(({webformatURL:o,largeImageURL:a,tags:n,likes:e,views:r,comments:s,downloads:u})=>`
    <a href="${a}" class="gallery__item">
      <div class="photo-card">
        <img src="${o}" alt="${n}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${r}</p>
          <p><b>Comments:</b> ${s}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </div>
    </a>
  `).join(""),h=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},b=t=>{document.querySelector(".gallery").insertAdjacentHTML("beforeend",t)},d=document.querySelector("#search-form");document.querySelector(".gallery");const l=document.querySelector(".loader");let w=new p(".gallery a"),c="",S=1;const $=async t=>{if(t.preventDefault(),c=d.querySelector("input").value.trim(),!c){i.warning({title:"Warning",message:"Please enter a search query!"});return}h(),l.style.display="block";try{const a=await f(c,S);if(l.style.display="none",a.hits.length===0){i.info({title:"Sorry",message:"There are no images matching your search query. Please try again!"});return}const n=g(a.hits);b(n),w.refresh()}catch{l.style.display="none",i.error({title:"Error",message:"Something went wrong. Please try again later."})}};d.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
