const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const hero = document.getElementById("home");
    const spotlight = document.getElementById("heroSpotlight");
    const spotlightCore = document.getElementById("heroSpotlightCore");
    const lightField = document.getElementById("lightField");
    const parallaxItems = document.querySelectorAll("[data-depth]");
    const approachSection = document.querySelector(".approach-section");
    const approachItems = document.querySelectorAll("[data-approach-depth]");
    const solutionsSection = document.querySelector(".solutions-section");
    const solutionsItems = document.querySelectorAll("[data-solutions-depth]");
    const processSection = document.querySelector(".process-section");
    const processItems = document.querySelectorAll("[data-process-depth]");
    const portfolioSection = document.querySelector(".portfolio-section");
    const portfolioItems = document.querySelectorAll("[data-portfolio-depth]");
    const contactSection = document.querySelector(".final-cta-section");
    const contactItems = document.querySelectorAll("[data-contact-depth]");

    if (window.lucide) {
      window.lucide.createIcons();
    }

    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    menuToggle?.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
        window.lucide?.createIcons();
      }
    });

    mobileMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        menuToggle?.setAttribute("aria-expanded", "false");
        menuToggle?.setAttribute("aria-label", "Abrir menu");
        const icon = menuToggle?.querySelector("i");
        if (icon) {
          icon.setAttribute("data-lucide", "menu");
          window.lucide?.createIcons();
        }
      });
    });

    if (hero && spotlight && spotlightCore && window.matchMedia("(hover: hover)").matches) {
      hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xRatio = (x / rect.width) - .5;
        const yRatio = (y / rect.height) - .5;

        spotlight.style.opacity = "1";
        spotlightCore.style.opacity = "1";
        spotlight.style.background = `radial-gradient(880px at ${x}px ${y}px, rgba(37,99,235,.22), transparent 64%)`;
        spotlightCore.style.background = `radial-gradient(360px at ${x}px ${y}px, rgba(96,165,250,.13), transparent 66%)`;
        lightField?.style.setProperty("--glow-x", `${xRatio * 22}px`);

        parallaxItems.forEach((item) => {
          const depth = Number(item.dataset.depth || 0);
          item.style.translate = `${xRatio * depth * 42}px ${yRatio * depth * 34}px`;
        });
      });

      hero.addEventListener("mouseleave", () => {
        spotlight.style.opacity = "0";
        spotlightCore.style.opacity = "0";
        lightField?.style.setProperty("--glow-x", "0px");
        parallaxItems.forEach((item) => {
          item.style.translate = "0 0";
        });
      });
    }

    if (approachSection && approachItems.length && window.matchMedia("(hover: hover)").matches) {
      approachSection.addEventListener("mousemove", (event) => {
        const rect = approachSection.getBoundingClientRect();
        const xRatio = ((event.clientX - rect.left) / rect.width) - .5;
        const yRatio = ((event.clientY - rect.top) / rect.height) - .5;

        approachItems.forEach((item) => {
          const depth = Number(item.dataset.approachDepth || 0);
          item.style.translate = `${xRatio * depth * 36}px ${yRatio * depth * 30}px`;
        });
      });

      approachSection.addEventListener("mouseleave", () => {
        approachItems.forEach((item) => {
          item.style.translate = "0 0";
        });
      });
    }

    if (solutionsSection && solutionsItems.length && window.matchMedia("(hover: hover)").matches) {
      solutionsSection.addEventListener("mousemove", (event) => {
        const rect = solutionsSection.getBoundingClientRect();
        const xRatio = ((event.clientX - rect.left) / rect.width) - .5;
        const yRatio = ((event.clientY - rect.top) / rect.height) - .5;

        solutionsItems.forEach((item) => {
          const depth = Number(item.dataset.solutionsDepth || 0);
          item.style.translate = `${xRatio * depth * 34}px ${yRatio * depth * 28}px`;
        });
      });

      solutionsSection.addEventListener("mouseleave", () => {
        solutionsItems.forEach((item) => {
          item.style.translate = "0 0";
        });
      });
    }

    if (processSection && processItems.length && window.matchMedia("(hover: hover)").matches) {
      processSection.addEventListener("mousemove", (event) => {
        const rect = processSection.getBoundingClientRect();
        const xRatio = ((event.clientX - rect.left) / rect.width) - .5;
        const yRatio = ((event.clientY - rect.top) / rect.height) - .5;

        processItems.forEach((item) => {
          const depth = Number(item.dataset.processDepth || 0);
          item.style.translate = `${xRatio * depth * 34}px ${yRatio * depth * 28}px`;
        });
      });

      processSection.addEventListener("mouseleave", () => {
        processItems.forEach((item) => {
          item.style.translate = "0 0";
        });
      });
    }

    if (portfolioSection && portfolioItems.length && window.matchMedia("(hover: hover)").matches) {
      portfolioSection.addEventListener("mousemove", (event) => {
        const rect = portfolioSection.getBoundingClientRect();
        const xRatio = ((event.clientX - rect.left) / rect.width) - .5;
        const yRatio = ((event.clientY - rect.top) / rect.height) - .5;

        portfolioItems.forEach((item) => {
          const depth = Number(item.dataset.portfolioDepth || 0);
          item.style.translate = `${xRatio * depth * 34}px ${yRatio * depth * 28}px`;
        });
      });

      portfolioSection.addEventListener("mouseleave", () => {
        portfolioItems.forEach((item) => {
          item.style.translate = "0 0";
        });
      });
    }

    if (contactSection && contactItems.length && window.matchMedia("(hover: hover)").matches) {
      contactSection.addEventListener("mousemove", (event) => {
        const rect = contactSection.getBoundingClientRect();
        const xRatio = ((event.clientX - rect.left) / rect.width) - .5;
        const yRatio = ((event.clientY - rect.top) / rect.height) - .5;

        contactItems.forEach((item) => {
          const depth = Number(item.dataset.contactDepth || 0);
          item.style.translate = `${xRatio * depth * 32}px ${yRatio * depth * 26}px`;
        });
      });

      contactSection.addEventListener("mouseleave", () => {
        contactItems.forEach((item) => {
          item.style.translate = "0 0";
        });
      });
    }
