import{S as a}from"./assets/vendor-CgTBfC_f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu"),o=document.querySelector(".js-menu"),s=document.querySelector(".js-menu-close"),n=document.querySelector(".nav-list");o.addEventListener("click",e),s.addEventListener("click",e);function e(){const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),r.classList.toggle("is-open"),document.body.classList.toggle("is-open")}n.addEventListener("click",t=>{t.target.nodeName==="A"&&t.target.nodeName==="A"&&(r.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),s=document.querySelectorAll(".js-modal-close");r.forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+t+'"]').classList.add("active"),o.classList.add("active"),document.body.classList.add("modal-open")})}),s.forEach(function(n){n.addEventListener("click",function(){this.closest(".modal").classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("modal-open")})}),document.body.addEventListener("keyup",function(n){n.key==="Escape"&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".modal-overlay").classList.remove("active"),document.body.classList.remove("modal-open"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")})});new Swiper(".mySwiper",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},preloadImages:!1});new Swiper(".orderSwiper",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},preloadImages:!1});new a(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map