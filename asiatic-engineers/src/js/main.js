(function () {
  "use strict";

  function injectPartial(id, html) {
    var el = document.getElementById(id);
    if (!el) return;
    el.outerHTML = html;
  }

  function loadPartial(id, file) {
    var url = "/partials/" + file;
    return fetch(url, { credentials: "same-origin" })
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load " + url);
        return res.text();
      })
      .then(function (html) {
        if (/<html[\s>]|<!doctype/i.test(html)) {
          throw new Error("Invalid partial payload for " + file);
        }
        injectPartial(id, html);
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

  function initJobsForm() {
    var form = document.getElementById("jobs-application-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) {
        e.preventDefault();
        return;
      }
      var action = form.getAttribute("action") || "";
      if (action.indexOf("YOUR_JOBS_FORM") !== -1) {
        e.preventDefault();
        var hint = form.querySelector(".form-success");
        if (hint) {
          hint.classList.add("visible");
          hint.textContent =
            "Replace YOUR_JOBS_FORM in the form action with your Formspree form ID (enable file uploads in Formspree). Nothing was sent.";
        }
        return;
      }
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var ok = form.querySelector(".form-success");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      if (ok) {
        ok.classList.remove("visible");
        ok.textContent = "";
      }

      var data = new FormData(form);
      fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (ok) {
            ok.classList.add("visible");
            ok.textContent = res.ok
              ? "Thank you — we received your CV. Our HR team will review it and get back to you."
              : "Something went wrong. Please email water@wastewaterevaporation.com with your CV attached.";
          }
          if (res.ok) form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit application";
          }
        })
        .catch(function () {
          if (ok) {
            ok.classList.add("visible");
            ok.textContent =
              "Network error. Please try again or email water@wastewaterevaporation.com.";
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit application";
          }
        });
    });
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
      if (el.getAttribute("data-no-counter") === "true") return;
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
      if (el.getAttribute("data-no-counter") === "true") return;
      io.observe(el);
    });
  }

  function initAdvCards() {
    var cards = document.querySelectorAll("[data-adv-card]");
    if (!cards.length) return;
    cards.forEach(function (card) {
      card.setAttribute("role", "button");
      if (!card.hasAttribute("aria-pressed")) {
        card.setAttribute("aria-pressed", "false");
      }
      card.addEventListener("click", function () {
        if (card.classList.contains("is-selected")) {
          card.classList.remove("is-selected");
          card.setAttribute("aria-pressed", "false");
          return;
        }
        cards.forEach(function (c) {
          c.classList.remove("is-selected");
          c.setAttribute("aria-pressed", "false");
        });
        card.classList.add("is-selected");
        card.setAttribute("aria-pressed", "true");
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

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
    var rawPositions = hero.getAttribute("data-hero-positions") || "";
    var positions = rawPositions
      .split("|")
      .map(function (s) {
        return s.trim();
      });

    if (!images.length) return;

    images.forEach(function (src) {
      var img = new Image();
      img.decoding = "async";
      img.src = src;
    });

    var frameA = hero.querySelector(".hero__frame--a");
    var frameB = hero.querySelector(".hero__frame--b");
    var useDualFrames = !!(frameA && frameB);

    var index = 0;
    var showingA = true;
    var interval = null;

    function setActive(i) {
      if (i === index) return;
      index = i;

      if (useDualFrames) {
        var incoming = showingA ? frameB : frameA;
        var outgoing = showingA ? frameA : frameB;
        incoming.style.backgroundImage = "url('" + images[index] + "')";
        incoming.style.backgroundPosition = positions[index] || "center center";
        incoming.classList.add("is-visible");
        outgoing.classList.remove("is-visible");
        showingA = !showingA;
      } else {
        hero.style.backgroundImage = "url('" + images[index] + "')";
        hero.style.backgroundPosition = positions[index] || "center center";
      }

      dots.forEach(function (d, di) {
        d.classList.toggle("is-active", di === index);
      });
    }

    function next() {
      setActive((index + 1) % images.length);
    }

    interval = window.setInterval(next, 5200);
    hero.addEventListener("mouseenter", function () {
      if (interval) window.clearInterval(interval);
      interval = null;
    });
    hero.addEventListener("mouseleave", function () {
      if (!interval) interval = window.setInterval(next, 5200);
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        setActive(i);
      });
    });
  }

  function initScrollResetOnReload() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.addEventListener("pageshow", function () {
      window.scrollTo(0, 0);
    });
  }

  function initBlogListing() {
    var grid = document.querySelector("[data-blog-listing]");
    var toolbar = document.getElementById("blog-toolbar");
    if (!grid || !toolbar) return;

    var search = document.getElementById("blog-search");
    var meta = document.getElementById("blog-listing-meta");
    var cards = grid.querySelectorAll("[data-blog-card]");
    var total = cards.length;
    var activeFilter = "all";

    function cardHaystack(card) {
      var extra = card.getAttribute("data-blog-search") || "";
      return (extra + " " + card.textContent).toLowerCase();
    }

    function setChipActive(btn) {
      var filter = btn.getAttribute("data-blog-filter") || "all";
      activeFilter = filter;
      toolbar.querySelectorAll("[data-blog-filter]").forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    function apply() {
      var q = (search && search.value ? search.value : "").trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var cat = card.getAttribute("data-blog-category") || "";
        var matchCat = activeFilter === "all" || cat === activeFilter;
        var matchSearch = !q || cardHaystack(card).indexOf(q) !== -1;
        var show = matchCat && matchSearch;
        if (show) visible++;
        card.toggleAttribute("hidden", !show);
        card.classList.toggle("is-blog-filter-hidden", !show);
      });
      if (meta) {
        meta.textContent =
          "Showing " + visible + " of " + total + " articles";
      }
    }

    // Delegation: clicks on label text / counts inside the chip still hit the filter
    toolbar.addEventListener("click", function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var btn = t.closest("[data-blog-filter]");
      if (!btn || !toolbar.contains(btn)) return;
      e.preventDefault();
      setChipActive(btn);
      apply();
    });

    toolbar.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (e.target && e.target.closest && e.target.closest(".blog-search-wrap")) {
        return;
      }
      var btn =
        e.target && e.target.closest && e.target.closest("[data-blog-filter]");
      if (!btn || !toolbar.contains(btn)) return;
      e.preventDefault();
      setChipActive(btn);
      apply();
    });

    if (search) {
      search.addEventListener("input", apply);
      search.addEventListener("search", apply);
    }

    apply();
  }

  function initSplitVideo() {
    var video = document.querySelector(".split-image--video .split-video");
    if (!video) return;
    // Autoplay is reliably allowed only when muted in most browsers.
    video.muted = true;
    video.defaultMuted = true;
    var p = video.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {
        // If autoplay is blocked, user can press play via controls.
      });
    }
  }

  function initApp() {
    initScrollResetOnReload();
    initNavbar();
    initAccordions();
    initContactForm();
    initJobsForm();
    initLiveNumbers();
    initAdvCards();
    initHeroSlider();
    initSplitVideo();
    initBlogListing();
  }

  function boot() {
    Promise.all([
      loadPartial("site-nav", "nav.html"),
      loadPartial("site-footer", "footer.html")
    ])
      .catch(function (err) {
        console.error(err);
      })
      .finally(function () {
        // Always initialize app logic after partial fetch attempts complete.
        initApp();
      });
  }

  boot();
})();
