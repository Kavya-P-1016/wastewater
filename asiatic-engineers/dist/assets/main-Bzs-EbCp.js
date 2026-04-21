(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))L(u);new MutationObserver(u=>{for(const v of u)if(v.type==="childList")for(const w of v.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&L(w)}).observe(document,{childList:!0,subtree:!0});function S(u){const v={};return u.integrity&&(v.integrity=u.integrity),u.referrerPolicy&&(v.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?v.credentials="include":u.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function L(u){if(u.ep)return;u.ep=!0;const v=S(u);fetch(u.href,v)}})();const O=`<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo" aria-label="Asiatic Engineers Home">
      <img src="assets/img/Sticker-Erecyle-png-sm.png" alt="Asiatic Engineers" height="44" width="198">
    </a>
    <ul class="nav-links" role="list">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li><a href="about.html" class="nav-link">About</a></li>
      <li><a href="blog.html" class="nav-link">Blog</a></li>
      <li class="nav-item-dropdown">
        <a href="#" class="nav-link nav-link-dropdown" aria-haspopup="true" aria-expanded="false">
          Products
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        <div class="dropdown-menu" role="menu">
          <div class="dropdown-group">
            <span class="dropdown-group-label">ZLD</span>
            <a href="zld.html" class="dropdown-link" role="menuitem">Zero Discharge System</a>
            <a href="zld_lowTds.html" class="dropdown-link" role="menuitem">Low TDS Evaporation System</a>
            <a href="ro_reject.html" class="dropdown-link" role="menuitem">RO Reject System</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-group-label">MVRS</span>
            <a href="high_Tds.html" class="dropdown-link" role="menuitem">High TDS Evaporation System</a>
            <a href="high_concration.html" class="dropdown-link" role="menuitem">High Concentration System</a>
          </div>
        </div>
      </li>
      <li><a href="services.html" class="nav-link">Services</a></li>
      <li><a href="industry.html" class="nav-link">Industry</a></li>
      <li><a href="jobs.html" class="nav-link">Careers</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>
    <a href="contact.html" class="btn btn-primary nav-cta">Get Free Consultation</a>
    <button type="button" class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
`,z=`<footer class="footer">
  <div class="footer-band" aria-hidden="true"></div>
  <div class="footer-body">
    <div class="footer-container">
      <div class="footer-col footer-col--brand">
        <a href="index.html" class="footer-logo">
          <img src="assets/img/Sticker-Erecyle-png-sm.png" alt="Asiatic Engineers" height="60" width="270">
        </a>
        <p class="footer-blurb">
          Patented non-thermal ZLD &amp; RO reject evaporation systems.
          Protecting the environment since 1998.
        </p>
        <div class="footer-socials">
          <a href="https://wa.me/919824054002" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://www.facebook.com/people/Zero-discharge-system-for-the-treatment-of-RO-Reject-Effluent/100067200350793" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://x.com/abhi9824054002" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-patel-aa6a3311" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://youtu.be/P_Y1jTsh5Q4" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.instagram.com/asiatic_engineers" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h3 class="footer-heading">Navigation</h3>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="industry.html">Industries</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="jobs.html">Careers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3 class="footer-heading">Products</h3>
        <ul class="footer-links">
          <li><a href="zld.html">Zero Discharge System</a></li>
          <li><a href="zld_lowTds.html">Low TDS Evaporation</a></li>
          <li><a href="ro_reject.html">RO Reject System</a></li>
          <li><a href="high_Tds.html">High TDS Evaporation (MVRS)</a></li>
          <li><a href="high_concration.html">High Concentration System</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3 class="footer-heading">Contact</h3>
        <ul class="footer-contact-list">
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.73a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span>+91-98240 54002</span>
          </li>
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.73a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span>+91-93767 54002</span>
          </li>
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:water@wastewaterevaporation.com">water@wastewaterevaporation.com</a>
          </li>
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>109/A, Nalanda Complex, NR Mansi Complex, Mahavir Nagar society, Vastrapur, Ahmedabad, Gujarat 380015, India</span>
          </li>
        </ul>
        <img
          src="assets/img/patented-logo-sm.png"
          class="footer-patented-badge"
          alt="Intellectual property patented"
          loading="lazy"
          width="92"
          height="92"
        />
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-container">
      <p>© 1998–2026 Asiatic Engineers. All Rights Reserved.</p>
      <div class="footer-bottom-links">
        <a href="privacy-policy.html">Privacy Policy</a>
        <span>|</span>
        <a href="terms.html">Terms &amp; Conditions</a>
        <span>|</span>
        <span class="footer-credit">Website by <a href="https://blitzstudio.xyz" target="_blank" rel="noopener noreferrer">Blitz Studio</a></span>
      </div>
    </div>
  </div>
</footer>
`;(function(){function k(e,t){var n=document.getElementById(e);n&&(n.outerHTML=t)}function b(){var e=window.location.pathname.split("/").pop()||"index.html";(!e||e==="")&&(e="index.html"),document.querySelectorAll(".nav-link[href]").forEach(function(t){var n=t.getAttribute("href");if(!(!n||n==="#")){var o=n.split("/").pop();o===e&&t.classList.add("active")}})}function S(){var e=document.getElementById("navbar");if(e){window.addEventListener("scroll",function(){e.classList.toggle("scrolled",window.scrollY>40)},{passive:!0});var t=e.querySelector(".nav-hamburger");t&&t.addEventListener("click",function(n){n.stopPropagation(),e.classList.toggle("mobile-open"),t.setAttribute("aria-expanded",e.classList.contains("mobile-open"))}),document.addEventListener("click",function(n){e.contains(n.target)||e.classList.remove("mobile-open")}),document.querySelectorAll(".nav-link-dropdown").forEach(function(n){n.addEventListener("click",function(o){window.matchMedia("(max-width: 1024px)").matches&&o.preventDefault()})}),b()}}function L(){document.querySelectorAll(".accordion-item").forEach(function(e){var t=e.querySelector(".accordion-trigger");t&&t.addEventListener("click",function(){var n=e.classList.contains("open");e.closest(".accordion")&&e.closest(".accordion").querySelectorAll(".accordion-item.open").forEach(function(o){o.classList.remove("open")}),n||e.classList.add("open")})})}function u(){var e=new URLSearchParams(window.location.search),t=e.get("subject");if(t){var n=document.getElementById("contact-subject");if(n){for(var o={"ZLD-Enquiry":"ZLD System","LowTDS-Enquiry":"Low TDS Evaporation","ROReject-Enquiry":"RO Reject System","HighTDS-Enquiry":"High TDS Evaporation MVRS","HighConc-Enquiry":"High Concentration System"},c=o[t]||t,r=0;r<n.options.length;r++)if(n.options[r].value===c||n.options[r].textContent===c){n.selectedIndex=r;break}}}}function v(){var e=document.getElementById("jobs-application-form");e&&e.addEventListener("submit",function(t){var n=e.querySelector('input[name="_honey"]');if(n&&n.value){t.preventDefault();return}var o=e.getAttribute("action")||"";if(o.indexOf("YOUR_JOBS_FORM")!==-1){t.preventDefault();var c=e.querySelector(".form-success");c&&(c.classList.add("visible"),c.textContent="Replace YOUR_JOBS_FORM in the form action with your Formspree form ID (enable file uploads in Formspree). Nothing was sent.");return}t.preventDefault();var r=e.querySelector('button[type="submit"]'),a=e.querySelector(".form-success");r&&(r.disabled=!0,r.textContent="Sending…"),a&&(a.classList.remove("visible"),a.textContent="");var s=new FormData(e);fetch(o,{method:"POST",body:s,headers:{Accept:"application/json"}}).then(function(m){a&&(a.classList.add("visible"),a.textContent=m.ok?"Thank you — we received your CV. Our HR team will review it and get back to you.":"Something went wrong. Please email water@wastewaterevaporation.com with your CV attached."),m.ok&&e.reset(),r&&(r.disabled=!1,r.textContent="Submit application")}).catch(function(){a&&(a.classList.add("visible"),a.textContent="Network error. Please try again or email water@wastewaterevaporation.com."),r&&(r.disabled=!1,r.textContent="Submit application")})})}function w(){var e=document.getElementById("contact-form");e&&(u(),e.addEventListener("submit",function(t){var n=e.querySelector('input[name="_honey"]');if(n&&n.value){t.preventDefault();return}var o=e.getAttribute("action")||"";if(o.indexOf("YOURCODE")!==-1){t.preventDefault();var c=document.querySelector(".form-success");c&&(c.classList.add("visible"),c.textContent="Configure the Formspree action URL on this form to enable email delivery. Message not sent.");return}t.preventDefault();var r=new FormData(e);fetch(o,{method:"POST",body:r,headers:{Accept:"application/json"}}).then(function(a){var s=document.querySelector(".form-success");a.ok&&s?(s.classList.add("visible"),s.textContent="Thank you — your message has been sent.",e.reset()):s&&(s.classList.add("visible"),s.textContent="Something went wrong. Please call +91-98240 54002.")}).catch(function(){var a=document.querySelector(".form-success");a&&(a.classList.add("visible"),a.textContent="Network error. Please try again or call us.")})}))}function C(){var e=document.querySelectorAll(".stat-number, .mini-stat-num, .split-badge-num, .pct-number");if(!e.length)return;function t(r){var a=(r||"").trim(),s=a.match(/-?\d+(?:\.\d+)?/);if(!s)return null;var m=parseFloat(s[0]);return Number.isFinite(m)?{prefix:a.slice(0,s.index),suffix:a.slice(s.index+s[0].length),value:m,decimals:(s[0].split(".")[1]||"").length}:null}function n(r,a){return a>0?r.toFixed(a):Math.round(r).toLocaleString("en-IN")}function o(r){if(r.getAttribute("data-no-counter")==="true"||r.dataset.counterAnimated==="1")return;var a=t(r.textContent);if(!a)return;r.dataset.counterAnimated="1";var s=performance.now(),m=1600,f=a.value;function i(l){var d=Math.min((l-s)/m,1),g=1-Math.pow(1-d,3),h=f*g;r.textContent=a.prefix+n(h,a.decimals)+a.suffix,d<1?requestAnimationFrame(i):r.textContent=a.prefix+n(f,a.decimals)+a.suffix}requestAnimationFrame(i)}var c=new IntersectionObserver(function(r){r.forEach(function(a){a.isIntersecting&&(o(a.target),c.unobserve(a.target))})},{threshold:.45});e.forEach(function(r){r.getAttribute("data-no-counter")!=="true"&&c.observe(r)})}function A(){var e=document.querySelectorAll("[data-adv-card]");e.length&&e.forEach(function(t){t.setAttribute("role","button"),t.hasAttribute("aria-pressed")||t.setAttribute("aria-pressed","false"),t.addEventListener("click",function(){if(t.classList.contains("is-selected")){t.classList.remove("is-selected"),t.setAttribute("aria-pressed","false");return}e.forEach(function(n){n.classList.remove("is-selected"),n.setAttribute("aria-pressed","false")}),t.classList.add("is-selected"),t.setAttribute("aria-pressed","true")}),t.addEventListener("keydown",function(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t.click())})})}function x(){var e=document.querySelector("section.hero[data-hero-images]");if(!e)return;var t=Array.prototype.slice.call(e.querySelectorAll(".hero-slider-dot"));if(!t.length)return;var n=e.getAttribute("data-hero-images")||"",o=n.split("|").map(function(h){return h.trim()}).filter(Boolean),c=e.getAttribute("data-hero-positions")||"",r=c.split("|").map(function(h){return h.trim()});if(!o.length)return;o.forEach(function(h){var p=new Image;p.decoding="async",p.src=h});var a=e.querySelector(".hero__frame--a"),s=e.querySelector(".hero__frame--b"),m=!!(a&&s),f=0,i=!0,l=null;function d(h){if(h!==f){if(f=h,m){var p=i?s:a,y=i?a:s;p.style.backgroundImage="url('"+o[f]+"')",p.style.backgroundPosition=r[f]||"center center",p.classList.add("is-visible"),y.classList.remove("is-visible"),i=!i}else e.style.backgroundImage="url('"+o[f]+"')",e.style.backgroundPosition=r[f]||"center center";t.forEach(function(D,B){D.classList.toggle("is-active",B===f)})}}function g(){d((f+1)%o.length)}l=window.setInterval(g,5200),e.addEventListener("mouseenter",function(){l&&window.clearInterval(l),l=null}),e.addEventListener("mouseleave",function(){l||(l=window.setInterval(g,5200))}),t.forEach(function(h,p){h.addEventListener("click",function(){d(p)})})}function E(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.addEventListener("pageshow",function(){window.scrollTo(0,0)})}function q(){var e=document.querySelector("[data-blog-listing]"),t=document.getElementById("blog-toolbar");if(!e||!t)return;var n=document.getElementById("blog-search"),o=document.getElementById("blog-listing-meta"),c=e.querySelectorAll("[data-blog-card]"),r=c.length,a="all";function s(i){var l=i.getAttribute("data-blog-search")||"";return(l+" "+i.textContent).toLowerCase()}function m(i){var l=i.getAttribute("data-blog-filter")||"all";a=l,t.querySelectorAll("[data-blog-filter]").forEach(function(d){var g=d===i;d.classList.toggle("is-active",g),d.setAttribute("aria-pressed",g?"true":"false")})}function f(){var i=(n&&n.value?n.value:"").trim().toLowerCase(),l=0;c.forEach(function(d){var g=d.getAttribute("data-blog-category")||"",h=a==="all"||g===a,p=!i||s(d).indexOf(i)!==-1,y=h&&p;y&&l++,d.toggleAttribute("hidden",!y),d.classList.toggle("is-blog-filter-hidden",!y)}),o&&(o.textContent="Showing "+l+" of "+r+" articles")}t.addEventListener("click",function(i){var l=i.target;if(!(!l||!l.closest)){var d=l.closest("[data-blog-filter]");!d||!t.contains(d)||(i.preventDefault(),m(d),f())}}),t.addEventListener("keydown",function(i){if(!(i.key!=="Enter"&&i.key!==" ")&&!(i.target&&i.target.closest&&i.target.closest(".blog-search-wrap"))){var l=i.target&&i.target.closest&&i.target.closest("[data-blog-filter]");!l||!t.contains(l)||(i.preventDefault(),m(l),f())}}),n&&(n.addEventListener("input",f),n.addEventListener("search",f)),f()}function M(){var e=document.querySelector(".split-image--video .split-video");if(e){e.muted=!0,e.defaultMuted=!0;var t=e.play();t&&typeof t.catch=="function"&&t.catch(function(){})}}function R(){k("site-nav",O),k("site-footer",z),E(),S(),L(),w(),v(),C(),A(),x(),M(),q()}R()})();
