(function () {
  const nav = document.getElementById("site-nav");
  const hero = document.getElementById("hero");
  const memory = document.getElementById("memory");
  const finale = document.getElementById("finale");
  const manifestoLines = document.querySelectorAll(".manifesto-line");
  const manifestoSection = document.getElementById("manifesto");
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  function updateScrollTopBtn() {
    if (!scrollTopBtn) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    const vh = window.innerHeight;
    const doc = document.documentElement;
    const maxScroll = Math.max(0, doc.scrollHeight - vh);
    const nearBottom = maxScroll > 0 && y > maxScroll - vh * 0.35;
    const pastFold = y > vh * 0.45;
    const show = pastFold || nearBottom;
    scrollTopBtn.classList.toggle("is-visible", show);
  }

  function scrollToTopAnimated() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function updateNav() {
    if (!nav) return;

    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    const memoryTop = memory ? memory.getBoundingClientRect().top : Infinity;
    const finaleTop = finale ? finale.getBoundingClientRect().top : Infinity;
    const onDark =
      (memoryTop < 120 && finaleTop > -100) || finaleTop < 200;
    const pastHero = heroBottom < 80;

    nav.classList.remove("navbar-glass", "navbar-solid", "navbar-dark");
    if (onDark) {
      nav.classList.add("navbar-dark");
    } else if (pastHero) {
      nav.classList.add("navbar-solid");
    } else {
      nav.classList.add("navbar-glass");
    }

    const logo = nav.querySelector(".nav-logo");
    const links = nav.querySelectorAll(".nav-links a");

    if (onDark) {
      logo?.classList.remove("text-neutral-900");
      logo?.classList.add("text-white");
      links.forEach((a) => {
        a.classList.remove("text-neutral-700");
        a.classList.add("text-white/90");
      });
    } else if (pastHero) {
      logo?.classList.add("text-neutral-900");
      logo?.classList.remove("text-white");
      links.forEach((a) => {
        a.classList.add("text-neutral-700");
        a.classList.remove("text-white/90");
      });
    } else {
      logo?.classList.remove("text-neutral-900");
      logo?.classList.add("text-white");
      links.forEach((a) => {
        a.classList.remove("text-neutral-700");
        a.classList.add("text-white/90");
      });
    }
  }

  function updateManifestoOpacity() {
    if (!manifestoSection || !manifestoLines.length) return;
    const rect = manifestoSection.getBoundingClientRect();
    const vh = window.innerHeight;
    const sectionHeight = rect.height;
    const centerOffset = rect.top + sectionHeight / 2 - vh / 2;
    const maxDist = vh * 0.55;
    const base = Math.max(0, Math.min(1, 1 - Math.abs(centerOffset) / maxDist));

    manifestoLines.forEach((line, i) => {
      const stagger = i * 0.12;
      const opacity = 0.25 + base * 0.75 * (1 - stagger);
      line.style.opacity = Math.max(0.2, Math.min(1, opacity)).toFixed(2);
    });
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
  document.querySelectorAll("[data-reveal-scale]").forEach((el) => io.observe(el));

  window.addEventListener(
    "scroll",
    () => {
      updateNav();
      updateManifestoOpacity();
      updateScrollTopBtn();
    },
    { passive: true }
  );
  window.addEventListener("resize", () => {
    updateNav();
    updateManifestoOpacity();
    updateScrollTopBtn();
  });

  scrollTopBtn?.addEventListener("click", () => {
    scrollToTopAnimated();
  });

  updateNav();
  updateManifestoOpacity();
  updateScrollTopBtn();
})();
