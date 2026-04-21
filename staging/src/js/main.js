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
        // Safety: avoid injecting full-page HTML when a server fallback returns index.html.
        if (/<html[\s>]|<!doctype/i.test(html)) {
          throw new Error("Invalid partial payload for " + file);
        }
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

  function initLiveNumbers() {
    var targets = document.querySelectorAll(
      ".stat-number, .mini-stat-num, .split-badge-num, .pct-number"
    );
    if (!targets.length) return;

    function parseCounter(text) {
      var raw = (text || "").trim();
      var match = raw.match(/-?\d+(?:\.\d+)?/);
      if (!match) return null;
      var value = parseFloat(match[0]);
      if (!Number.isFinite(value)) return null;
      return {
        prefix: raw.slice(0, match.index),
        suffix: raw.slice(match.index + match[0].length),
        value: value,
        decimals: (match[0].split(".")[1] || "").length
      };
    }

    function formatValue(value, decimals) {
      if (decimals > 0) {
        return value.toFixed(decimals);
      }
      return Math.round(value).toLocaleString("en-IN");
    }

    function animateNumber(el) {
      if (el.dataset.counterAnimated === "1") return;
      var parsed = parseCounter(el.textContent);
      if (!parsed) return;
      el.dataset.counterAnimated = "1";

      var start = performance.now();
      var duration = 1600;
      var target = parsed.value;

      function tick(now) {
        var p = Math.min((now - start) / duration, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        var current = target * ease;
        el.textContent =
          parsed.prefix +
          formatValue(current, parsed.decimals) +
          parsed.suffix;
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent =
            parsed.prefix +
            formatValue(target, parsed.decimals) +
            parsed.suffix;
        }
      }

      requestAnimationFrame(tick);
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateNumber(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.45 }
    );

    targets.forEach(function (el) {
      io.observe(el);
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
      initLiveNumbers();
      initHeroSlider();
    })
    .catch(function () {
      initLiveNumbers();
      console.warn("Partials failed to load — serve site over HTTP (e.g. python3 -m http.server).");
    });

  function initHeroSlider() {
    var hero = document.querySelector(
      'section.hero[data-hero-images]'
    );
    if (!hero) return;

    var dots = Array.prototype.slice.call(
      hero.querySelectorAll(".hero-slider-dot")
    );
    if (!dots.length) return;

    var raw = hero.getAttribute("data-hero-images") || "";
    var images = raw
      .split("|")
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);

    if (!images.length) return;

    // Preload images to reduce background swap delay.
    images.forEach(function (src) {
      var img = new Image();
      img.decoding = "async";
      img.src = src;
    });

    var index = 0;
    var interval = null;

    function setActive(i) {
      index = i;
      hero.style.backgroundImage = "url('" + images[index] + "')";
      dots.forEach(function (d, di) {
        d.classList.toggle("is-active", di === index);
      });
    }

    function next() {
      setActive((index + 1) % images.length);
    }

    setActive(0);

    // Auto-rotate; pause on hover for a premium "crystal energy" feel.
    interval = window.setInterval(next, 4200);
    hero.addEventListener("mouseenter", function () {
      if (interval) window.clearInterval(interval);
      interval = null;
    });
    hero.addEventListener("mouseleave", function () {
      if (!interval) interval = window.setInterval(next, 4200);
    });

    // Click dots to jump to a specific slide.
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        setActive(i);
      });
    });
  }
})();
