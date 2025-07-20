function hideCookieNotice(){var e=document.getElementById("cookie-notice");e&&(e.style.display="none")}
var acceptBtn = document.getElementById("cookie-accept-btn");
if (acceptBtn) {
  acceptBtn.onclick = function(e){e.preventDefault(),hideCookieNotice()};
}
var closeBtn = document.getElementById("cn-close-notice");
if (closeBtn) {
  closeBtn.onclick = function(){hideCookieNotice()};
}

const themeToggle=document.getElementById("theme-toggle"),html=document.documentElement;
"dark"===localStorage.getItem("theme")?(html.classList.add("dark"),themeToggle.checked=!0):(html.classList.remove("dark"),themeToggle.checked=!1),themeToggle.addEventListener("change",function(){this.checked?(html.classList.add("dark"),localStorage.setItem("theme","dark")):(html.classList.remove("dark"),localStorage.setItem("theme","light"))});
const themeToggleMobile=document.getElementById("theme-toggle-mobile");
"dark"===localStorage.getItem("theme")?themeToggleMobile.checked=!0:themeToggleMobile.checked=!1,themeToggleMobile.addEventListener("change",function(){this.checked?(html.classList.add("dark"),localStorage.setItem("theme","dark"),themeToggle.checked=!0):(html.classList.remove("dark"),localStorage.setItem("theme","light"),themeToggle.checked=!1)}),themeToggle.addEventListener("change",function(){themeToggleMobile.checked=this.checked});

document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("table-of-contents");t&&t.addEventListener("click",function(t){if("A"===t.target.tagName&&t.target.hash){const e=t.target.hash.slice(1),n=document.getElementById(e);if(n){t.preventDefault();const e=152,o=n.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:o,behavior:"smooth"}),history.pushState(null,"",t.target.hash)}}})});

document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("table-of-contents");if(!e)return;const t=e.querySelectorAll('a[href^="#"]'),n=Array.from(t).map(e=>e.getAttribute("href").slice(1)).map(e=>document.getElementById(e)).filter(Boolean);if(!n.length)return;function o(){e.querySelectorAll(".toc-active").forEach(e=>e.classList.remove("toc-active"))}function r(t){o();const n=e.querySelector(`a[href="#${t}"]`)?.parentElement;n&&n.classList.add("toc-active")}let i=!1,c=null;const l=new IntersectionObserver(e=>{i||(window.requestAnimationFrame(()=>{let t=e.filter(e=>e.isIntersecting&&e.intersectionRatio>0);if(t.length){t.sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);const e=t[0].target.id;e!==c&&(r(e),c=e)}else o(),c=null;i=!1}),i=!0)},{rootMargin:"-160px 0px -60% 0px",threshold:[0,.2,.5,1]});n.forEach(e=>{e&&l.observe(e)}),window.location.hash&&r(window.location.hash.slice(1))}); 