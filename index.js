(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu"),c=document.querySelector(".js-menu"),o=document.querySelector(".js-menu-close"),n=document.querySelector(".nav-list");c.addEventListener("click",e),o.addEventListener("click",e);function e(){const t=c.getAttribute("aria-expanded")==="true"||!1;c.setAttribute("aria-expanded",!t),r.classList.toggle("is-open"),document.body.classList.toggle("is-open")}n.addEventListener("click",t=>{t.target.nodeName==="A"&&t.target.nodeName==="A"&&(r.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(c){for(var o=this,n=(o.document||o.ownerDocument).querySelectorAll(c),e=0;n[e]&&n[e]!==o;)++e;return!!n[e]}),typeof r.closest!="function"&&(r.closest=function(c){for(var o=this;o&&o.nodeType===1;){if(o.matches(c))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),c=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");r.forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+t+'"]');const i=document.querySelector("div.js-menu-close");s.classList.add("active"),c.classList.add("active"),document.body.classList.add("modal-open"),i.classList.remove("is-open")})}),o.forEach(function(n){n.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),c.classList.remove("active"),document.body.classList.remove("modal-open")})}),document.body.addEventListener("keyup",function(n){var e=n.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".modal-overlay").classList.remove("active"))},!1),c.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")})});
//# sourceMappingURL=index.js.map
