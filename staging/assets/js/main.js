(function () {
  "use strict";

  function assetPrefix() {
    var segs = window.location.pathname.split("/").filter(function (s) {
      return s.length && !/\.html?$/i.test(s);
    });
    return segs.length ? "../".repeat(segs.length) : "";
  }

  function loadPartial(id, file) {
    var el = document.getElementById(id);
    if (!el) return Promise.resolve();
    var url = assetPrefix() + "assets/partials/" + file;
    return fetch(url, { credentials: "same-origin" })
      .then(function (r) {
        if (!r.ok) throw new Error(url);
        return r.text();
      })
      .then(function (html) {
        el.outerHTML = html;
      });
  }

  function setActiveNavLinks() {
    var page =
      window.location.pathname.split("/").pop() || "index.html";
    if (!page || page === "") page = "index.html";
    document.querySelectorAll(".nav-link[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || href === "#") return;
      var target = href.split("/").pop();
      if (target === page) link.classList.add("active");
    });
  }

  function initNavbar() {
    var navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener(
      "scroll",
      function () {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
      },
      { passive: true }
    );

    var hamburger = navbar.querySelector(".nav-hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        navbar.classList.toggle("mobile-open");
        hamburger.setAttribute(
          "aria-expanded",
          navbar.classList.contains("mobile-open")
        );
      });
    }

    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) navbar.classList.remove("mobile-open");
    });

    document.querySelectorAll(".nav-link-dropdown").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 1024px)").matches) {
          e.preventDefault();
        }
      });
    });

    setActiveNavLinks();
  }

  function initAccordions() {
    document.querySelectorAll(".accordion-item").forEach(function (item) {
      var btn = item.querySelector(".accordion-trigger");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var open = item.classList.contains("open");
        item.closest(".accordion") &&
          item
            .closest(".accordion")
            .querySelectorAll(".accordion-item.open")
            .forEach(function (o) {
              o.classList.remove("open");
            });
        if (!open) item.classList.add("open");
      });
    });
  }

 function prefillContactSubject() {
   var params = new URLSearchParams(window.location.search);
   var sub = params.get("subject");
   if (!sub) return;
   var sel = document.getElementById("contact-subject");
   if (!sel) return;
   var map = {
     "ZLD-Enquiry": "ZLD System",
     "LowTDS-Enquiry": "Low TDS Evaporation",
     "ROReject-Enquiry": "RO Reject System",
     "HighTDS-Enquiry": "High TDS Evaporation MVRS",
     "HighConc-Enquiry": "High Concentration System"
   };
   var label = map[sub] || sub;
   for (var i = 0; i < sel.options.length; i++) {
     if (sel.options[i].value === label || sel.options[i].textContent === label) {
       sel.selectedIndex = i;
       break;
     }
   }
 }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    prefillContactSubject();
    form.addEventListener("submit", function (e) {
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) {
        e.preventDefault();
        return;
      }
      var action = form.getAttribute("action") || "";
      if (action.indexOf("YOURCODE") !== -1) {
        e.preventDefault();
        var ok = document.querySelector(".form-success");
        if (ok) {
          ok.classList.add("visible");
          ok.textContent =
            "Configure the Formspree action URL on this form to enable email delivery. Message not sent.";
        }
        return;
      }
      e.preventDefault();
      var data = new FormData(form);
      fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          var ok = document.querySelector(".form-success");
          if (res.ok && ok) {
            ok.classList.add("visible");
            ok.textContent = "Thank you — your message has been sent.";
            form.reset();
          } else if (ok) {
            ok.classList.add("visible");
            ok.textContent = "Something went wrong. Please call +91-98240 54002.";
          }
        })
        .catch(function () {
          var ok = document.querySelector(".form-success");
          if (ok) {
            ok.classList.add("visible");
            ok.textContent = "Network error. Please try again or call us.";
          }
        });
    });
  }

  Promise.all([
    loadPartial("site-nav", "nav.html"),
    loadPartial("site-footer", "footer.html")
  ])
    .then(function () {
      initNavbar();
      initAccordions();
      initContactForm();
    })
    .catch(function () {
      console.warn("Partials failed to load — serve site over HTTP (e.g. python3 -m http.server).");
    });
})();
