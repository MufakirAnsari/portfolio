// Scholar & Portfolio Global Metrics Config
// FUTURE UPDATES: You can update your Google Scholar citations count right here
// (e.g. change "50+" to "60+") or directly in index.html at line 929.
window.PORTFOLIO_METRICS = {
  citations: "52",
  hIndex: "3",
  i10Index: "1"
};

document.addEventListener("DOMContentLoaded", () => {
  // Sync Scholar Citations metric if element exists
  const citEl = document.getElementById("scholar-citations");
  if (citEl && window.PORTFOLIO_METRICS?.citations) {
    citEl.textContent = window.PORTFOLIO_METRICS.citations;
  }

  initNavigation();

  const deferTask = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (fn) => setTimeout(fn, 16);
  deferTask(() => {
    initResearchCatalog();
    initReviewsShowcase();
    initCertificatesGrid();
    initContactForms();
    initBackgroundCanvas();
  });
});

/* =======================================================================
   1. NAVIGATION & RESPONSIVE DRAWER
   ======================================================================= */
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const siteNav = document.getElementById("site-nav");
  const header = document.getElementById("site-header");
  const menuIcon = document.getElementById("menu-toggle-icon") || (menuToggle ? menuToggle.querySelector(".material-symbols-outlined") : null);

  const drawer = mobileDrawer || siteNav;

  if (menuToggle && drawer) {
    const toggleNav = (forceClose = false) => {
      if (typeof window.__toggleMobileNav === "function") {
        window.__toggleMobileNav(forceClose);
        return;
      }
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      const shouldOpen = forceClose ? false : !isExpanded;
      menuToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");

      const bars = document.getElementById("menu-icon-bars");
      const close = document.getElementById("menu-icon-close");

      if (mobileDrawer) {
        if (shouldOpen) {
          mobileDrawer.classList.remove("hidden");
          if (bars) bars.classList.add("hidden");
          if (close) close.classList.remove("hidden");
          if (menuIcon) menuIcon.textContent = "close";
        } else {
          mobileDrawer.classList.add("hidden");
          if (bars) bars.classList.remove("hidden");
          if (close) close.classList.add("hidden");
          if (menuIcon) menuIcon.textContent = "menu";
        }
      } else if (siteNav) {
        if (shouldOpen) {
          siteNav.classList.remove("hidden");
          siteNav.classList.add("flex", "flex-col", "absolute", "top-16", "left-0", "right-0", "bg-surface-raised", "p-4", "border-b", "border-border-subtle", "shadow-2xl", "z-50");
          if (bars) bars.classList.add("hidden");
          if (close) close.classList.remove("hidden");
          if (menuIcon) menuIcon.textContent = "close";
        } else {
          siteNav.classList.add("hidden");
          siteNav.classList.remove("flex", "flex-col", "absolute", "top-16", "left-0", "right-0", "bg-surface-raised", "p-4", "border-b", "border-border-subtle", "shadow-2xl", "z-50");
          if (bars) bars.classList.remove("hidden");
          if (close) close.classList.add("hidden");
          if (menuIcon) menuIcon.textContent = "menu";
        }
      }
    };

    if (!menuToggle.getAttribute("data-nav-bound")) {
      menuToggle.setAttribute("data-nav-bound", "true");
      if (!window.__toggleMobileNav) {
        menuToggle.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleNav();
        });

        drawer.querySelectorAll("a").forEach(a => {
          a.addEventListener("click", () => {
            if (window.innerWidth < 1024) {
              toggleNav(true);
            }
          });
        });

        // Close when tapping outside
        document.addEventListener("click", (e) => {
          if (menuToggle.getAttribute("aria-expanded") === "true") {
            if (header && !header.contains(e.target) && drawer && !drawer.contains(e.target)) {
              toggleNav(true);
            }
          }
        });
      }
    }

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        if (typeof window.__toggleMobileNav === "function") {
          window.__toggleMobileNav(true);
        } else {
          toggleNav(true);
        }
      }
    });
  }

  // Header scroll backdrop shadow effect
  if (header) {
    let headerScrollTimer = null;
    window.addEventListener("scroll", () => {
      if (headerScrollTimer) return;
      headerScrollTimer = requestAnimationFrame(() => {
        headerScrollTimer = null;
        if (window.scrollY > 20) {
          header.classList.add("shadow-lg");
        } else {
          header.classList.remove("shadow-lg");
        }
      });
    }, { passive: true });
  }

  // Overview Page Multi-Active Section Highlighting
  // When scrolling/clicking Research, Experience, Stack, BOTH Overview and that section get the active box
  const pathname = window.location.pathname.toLowerCase();
  const isOverviewPage = pathname.endsWith("index.html") || 
                         pathname.endsWith("home.html") || 
                         pathname === "/" || 
                         pathname.endsWith("/code/") ||
                         pathname.endsWith("/code/index.html") ||
                         pathname.endsWith("/code/home.html") ||
                         (!pathname.includes(".html") && !pathname.includes("reviews") && !pathname.includes("bio") && !pathname.includes("hire") && !pathname.includes("freelance") && !pathname.includes("consulting") && !pathname.includes("certifications") && !pathname.includes("contact"));

  if (isOverviewPage) {
    const navOverview = document.getElementById("nav-overview") || document.querySelector('nav a[href="index.html"]');
    const sectionNavMap = {
      research: document.getElementById("nav-research") || document.querySelector('nav a[href="#research"]'),
      experience: document.getElementById("nav-experience") || document.querySelector('nav a[href="#experience"]'),
      stack: document.getElementById("nav-stack") || document.querySelector('nav a[href="#stack"]')
    };

    const activeBoxClasses = ["bg-surface-overlay", "text-primary", "border", "border-primary/30", "rounded-DEFAULT"];
    const inactiveClasses = ["text-on-surface-variant", "hover:text-text-primary", "hover:bg-surface-overlay/60"];

    function activateBox(el) {
      if (!el) return;
      inactiveClasses.forEach(c => el.classList.remove(c));
      activeBoxClasses.forEach(c => el.classList.add(c));
    }

    function deactivateBox(el) {
      if (!el) return;
      activeBoxClasses.forEach(c => el.classList.remove(c));
      inactiveClasses.forEach(c => el.classList.add(c));
    }

    // Overview ALWAYS keeps active box on Overview page
    if (navOverview) {
      activateBox(navOverview);
    }

    function syncActiveNav(activeId) {
      // Ensure Overview remains active
      if (navOverview) activateBox(navOverview);

      Object.entries(sectionNavMap).forEach(([id, link]) => {
        if (!link) return;
        if (id === activeId) {
          activateBox(link);
        } else {
          deactivateBox(link);
        }
      });
    }

    // Click handler for section anchor links
    Object.entries(sectionNavMap).forEach(([id, link]) => {
      if (!link) return;
      link.addEventListener("click", () => {
        syncActiveNav(id);
      });
    });

    if (navOverview) {
      navOverview.addEventListener("click", () => {
        syncActiveNav(null);
      });
    }

    // Scrollspy detection - restricted to desktop screens (>= 1024px) with requestAnimationFrame to eliminate mobile layout thrashing
    const trackedSections = [
      { id: "research", el: document.getElementById("research") },
      { id: "experience", el: document.getElementById("experience") },
      { id: "stack", el: document.getElementById("stack") }
    ].filter(s => s.el);

    if (trackedSections.length > 0 && typeof window !== "undefined" && window.innerWidth >= 1024) {
      let scrollspyTimer = null;
      window.addEventListener("scroll", () => {
        if (scrollspyTimer) return;
        scrollspyTimer = requestAnimationFrame(() => {
          scrollspyTimer = null;
          const scrollPosition = window.scrollY + 220;
          let activeSec = null;

          for (let i = trackedSections.length - 1; i >= 0; i--) {
            const item = trackedSections[i];
            if (item.el.offsetTop <= scrollPosition) {
              activeSec = item.id;
              break;
            }
          }

          syncActiveNav(activeSec);
        });
      }, { passive: true });
    }

    // Initial hash check on load
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (sectionNavMap[hashId]) {
        syncActiveNav(hashId);
      }
    }
  }
}

/* =======================================================================
   2. RESEARCH PAPERS CATALOG & PROSPECTUS POPUP MODAL
   ======================================================================= */
let katexLoadingPromise = null;
function loadKaTeXLibrary() {
  if (typeof renderMathInElement === "function") return Promise.resolve();
  if (katexLoadingPromise) return katexLoadingPromise;

  katexLoadingPromise = new Promise((resolve) => {
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
      document.head.appendChild(link);
    }
    const s1 = document.createElement("script");
    s1.src = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js";
    s1.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js";
      s2.onload = resolve;
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
  });
  return katexLoadingPromise;
}

function renderLatexMath(element) {
  if (!element) return;
  // If element contains no LaTeX delimiters, skip KaTeX entirely to conserve 100% CPU
  if (!element.innerHTML.includes('$') && !element.innerHTML.includes('\\[')) return;

  loadKaTeXLibrary().then(() => {
    if (typeof renderMathInElement === "function") {
      try {
        renderMathInElement(element, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false }
          ],
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    }
  });
}

function formatMarkdownText(text) {
  if (!text) return "";
  // Bold markdown: **text** -> <strong class="text-text-primary font-bold">text</strong>
  let res = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>');
  // Bold single asterisks: *text* -> <strong class="text-text-primary font-bold">text</strong>
  res = res.replace(/(?<!\*)\*([^*\s][^*]*?[^*\s])\*(?!\*)/g, '<strong class="text-text-primary font-bold">$1</strong>');
  return res;
}

function initResearchCatalog() {
  const container = document.getElementById("research-papers-container");
  const filterBtns = document.querySelectorAll(".paper-filter-btn");
  const modal = document.getElementById("paper-prospectus-modal");

  if (!container || typeof researchPapers === "undefined") return;

  let showAllPapersOnMobile = false;

  function renderPapers(filter = "all") {
    container.innerHTML = "";
    const filtered = filter === "all" 
      ? researchPapers 
      : researchPapers.filter(p => p.category === filter);

    const isMobile = window.innerWidth < 768;
    const shouldLimit = isMobile && filter === "all" && !showAllPapersOnMobile && filtered.length > 4;
    const displayPapers = shouldLimit ? filtered.slice(0, 4) : filtered;

    displayPapers.forEach((paper) => {
      const card = document.createElement("article");
      card.className = "bg-surface-raised rounded-DEFAULT p-space-lg flex flex-col justify-between gap-space-md group hover:bg-surface-overlay transition-all shadow-md relative overflow-hidden cursor-pointer";
      
      // Determine accent border color based on category
      let borderAccent = "bg-primary-container";
      if (paper.category === "quantum-hpc") borderAccent = "bg-secondary";
      else if (paper.category === "biomedical") borderAccent = "bg-status-active";
      else if (paper.category === "finance-applied") borderAccent = "bg-status-warning";

      const statsHtml = paper.stats.map(s => `
        <div class="flex flex-col">
          <span class="text-text-dim text-[11px]">${s.label}</span>
          <span class="text-text-primary font-semibold text-[13px] font-label-mono-sm">${s.value}</span>
        </div>
      `).join("");

      const tagsHtml = paper.tags.map(t => `
        <span class="font-label-mono-sm text-[11px] px-2 py-0.5 bg-surface-container text-text-muted rounded-DEFAULT">${t}</span>
      `).join("");

      card.innerHTML = `
        <div class="absolute top-0 left-0 w-1.5 h-full ${borderAccent}"></div>
        <div class="flex flex-col gap-space-sm pl-2">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="font-label-mono-sm text-label-mono-sm px-2.5 py-0.5 bg-primary/10 text-primary rounded-DEFAULT uppercase font-semibold">
              ${paper.statusBadge}
            </span>
            <span class="font-label-mono-sm text-[11px] text-text-dim flex items-center gap-1 font-semibold">
              <span class="w-1.5 h-1.5 rounded-full ${paper.statusColor === 'status-active' ? 'bg-status-active' : (paper.statusColor === 'status-warning' ? 'bg-status-warning' : 'bg-primary')}"></span>
              ${paper.status}
            </span>
          </div>
          <h3 class="font-headline-md text-headline-md text-text-primary font-bold group-hover:text-primary transition-colors leading-snug">
            ${paper.shortTitle}
          </h3>
          <p class="font-label-mono-sm text-[12px] text-text-dim">
            ${paper.authors}
          </p>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            ${formatMarkdownText(paper.summary)}
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-xs bg-surface-base p-space-sm rounded-DEFAULT font-label-mono-sm mt-1">
            ${statsHtml}
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-space-sm pl-2 pt-space-xs mt-2 border-t border-border-subtle">
          <div class="flex flex-wrap gap-1.5">
            ${tagsHtml}
          </div>
          <button class="open-paper-prospectus inline-flex items-center gap-1.5 bg-primary/10 hover:bg-primary-container text-primary hover:text-on-primary-container font-label-mono-sm text-label-mono-sm px-3.5 py-1.5 rounded-DEFAULT transition-all font-semibold" data-id="${paper.id}">
            <span>&gt; View Prospectus</span>
            <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      `;

      // Entire card or button opens prospectus
      card.addEventListener("click", (e) => {
        // Prevent opening if clicking an external paper link directly
        if (e.target.closest("a")) return;
        openPaperProspectus(paper);
      });

      container.appendChild(card);
    });

    if (shouldLimit) {
      const loadMoreWrap = document.createElement("div");
      loadMoreWrap.className = "col-span-full pt-3 flex flex-col items-center";
      loadMoreWrap.innerHTML = `
        <button id="show-all-papers-mobile-btn" class="w-full sm:w-auto px-6 py-3 bg-surface-raised hover:bg-surface-overlay active:bg-surface-container text-primary border border-primary/40 rounded-DEFAULT font-label-mono-sm text-[12px] uppercase font-bold transition-all shadow-md flex items-center justify-center gap-2">
          <span>&gt; View All 10 Research Papers (${filtered.length - 4} More)</span>
          <span class="material-symbols-outlined text-[18px]">expand_more</span>
        </button>
      `;
      loadMoreWrap.querySelector("button").addEventListener("click", () => {
        showAllPapersOnMobile = true;
        renderPapers(filter);
      });
      container.appendChild(loadMoreWrap);
    }

    // KaTeX is loaded on-demand when user opens a research prospectus modal (openPaperProspectus)
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-primary", "text-on-primary");
        b.classList.add("text-text-dim", "bg-surface-raised");
      });
      btn.classList.add("bg-primary", "text-on-primary");
      btn.classList.remove("text-text-dim", "bg-surface-raised");
      renderPapers(btn.dataset.category);
    });
  });

  // Initial render
  renderPapers("all");

  // Prospectus Modal Functions
  window.openPaperProspectus = function(paper) {
    if (!modal) return;
    const modalTitle = document.getElementById("prospectus-modal-title");
    const modalVenue = document.getElementById("prospectus-modal-venue");
    const modalAuthors = document.getElementById("prospectus-modal-authors");
    const modalFocus = document.getElementById("prospectus-modal-focus");
    const modalHighlights = document.getElementById("prospectus-modal-highlights");
    const modalStats = document.getElementById("prospectus-modal-stats");
    const modalCodeBtn = document.getElementById("prospectus-modal-code");
    const modalPaperBtn = document.getElementById("prospectus-modal-paper");

    if (modalTitle) modalTitle.innerHTML = paper.title;
    if (modalVenue) modalVenue.textContent = `${paper.venue} · ${paper.status}`;
    if (modalAuthors) modalAuthors.textContent = `Authors: ${paper.authors}`;
    if (modalFocus) modalFocus.textContent = `Focus: ${paper.focusArea}`;

    if (modalStats) {
      modalStats.innerHTML = paper.stats.map(s => `
        <div class="bg-surface-base p-space-sm rounded-DEFAULT flex flex-col">
          <span class="text-text-dim text-[11px] font-label-mono-sm uppercase">${s.label}</span>
          <span class="text-primary font-bold text-label-mono-md mt-0.5">${s.value}</span>
        </div>
      `).join("");
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = paper.highlights.map((h, idx) => {
        // Highlight title before colon, formatted with markdown bold
        const formattedH = formatMarkdownText(h);
        const parts = formattedH.split(/:(.+)/);
        if (parts.length > 1) {
          return `
            <li class="flex items-start gap-2.5 leading-relaxed">
              <span class="w-5 h-5 rounded-full bg-primary/10 text-primary font-label-mono-sm text-[11px] flex items-center justify-center shrink-0 mt-0.5 font-bold">${idx + 1}</span>
              <div class="text-on-surface-variant font-body-md text-[14px]">
                <strong class="text-text-primary font-semibold">${parts[0]}:</strong>${parts[1]}
              </div>
            </li>
          `;
        }
        return `
          <li class="flex items-start gap-2.5 leading-relaxed">
            <span class="w-5 h-5 rounded-full bg-primary/10 text-primary font-label-mono-sm text-[11px] flex items-center justify-center shrink-0 mt-0.5 font-bold">${idx + 1}</span>
            <span class="text-on-surface-variant font-body-md text-[14px]">${formattedH}</span>
          </li>
        `;
      }).join("");
    }

    if (modalCodeBtn) {
      if (paper.codeUrl) {
        modalCodeBtn.href = paper.codeUrl;
        modalCodeBtn.classList.remove("hidden");
      } else {
        modalCodeBtn.classList.add("hidden");
      }
    }

    if (modalPaperBtn) {
      if (paper.paperUrl) {
        modalPaperBtn.href = paper.paperUrl;
        modalPaperBtn.classList.remove("hidden");
      } else {
        modalPaperBtn.classList.add("hidden");
      }
    }

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    renderLatexMath(modal);
  };

  window.closePaperProspectus = function() {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  // Close modal when clicking outside the dialog box (backdrop overlay)
  modal.addEventListener("click", (e) => {
    const dialog = modal.querySelector(".bg-surface-raised");
    if (dialog && !dialog.contains(e.target)) {
      closePaperProspectus();
    }
  });

  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closePaperProspectus();
    }
  });
}

/* =======================================================================
   3. REVIEWS SHOWCASE & CERTIFICATE LIGHTBOX MODAL
   ======================================================================= */
function initReviewsShowcase() {
  const container = document.getElementById("reviews-grid-container");
  const modal = document.getElementById("review-lightbox-modal");

  if (!container || typeof reviewsData === "undefined") return;

  container.innerHTML = "";
  reviewsData.forEach(rev => {
    const card = document.createElement("article");
    card.className = "bg-surface-raised rounded-DEFAULT p-3 sm:p-space-md shadow-lg flex flex-col justify-between gap-space-sm group hover:bg-surface-overlay transition-all relative overflow-hidden border border-border-subtle cursor-pointer";

    card.innerHTML = `
      <div class="flex flex-col gap-2">
        <div class="relative w-full aspect-[4/3] bg-surface-base rounded-DEFAULT overflow-hidden border border-border-subtle group-hover:border-primary/50 transition-colors">
          <img src="${rev.certificateImage}" alt="${rev.venue} Certificate" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-base/90 via-transparent to-transparent flex items-end p-2">
            <span class="font-label-mono-sm text-[10px] sm:text-[11px] text-primary bg-surface-raised/90 px-1.5 py-0.5 rounded-DEFAULT font-semibold">
              ${rev.badge}
            </span>
          </div>
        </div>
        <div class="flex items-center justify-between pt-1 gap-1">
          <span class="font-label-mono-sm text-[10px] sm:text-[11px] text-secondary uppercase font-semibold truncate">${rev.publisher}</span>
          <span class="font-label-mono-sm text-[10px] sm:text-[11px] text-status-active bg-status-active/10 px-1.5 py-0.5 rounded-DEFAULT font-semibold shrink-0">
            ${rev.reviewsCount} ${rev.reviewsCount === 1 ? 'Review' : 'Reviews'} Verified
          </span>
        </div>
        <h3 class="font-headline-md text-[14px] sm:text-[15px] text-text-primary font-bold group-hover:text-primary transition-colors leading-snug line-clamp-2">
          ${rev.venue}
        </h3>
        <p class="font-body-md text-[12px] text-on-surface-variant line-clamp-3">
          ${formatMarkdownText(rev.description)}
        </p>
      </div>
      <div class="pt-2 border-t border-border-subtle flex items-center justify-between font-label-mono-sm text-[11px]">
        <span class="text-text-dim truncate">${rev.period}</span>
        <span class="text-primary group-hover:translate-x-1 transition-transform flex items-center gap-0.5 font-semibold shrink-0">
          Inspect <span class="material-symbols-outlined text-[13px]">open_in_full</span>
        </span>
      </div>
    `;

    card.addEventListener("click", () => openReviewLightbox(rev));
    container.appendChild(card);
  });

  window.openReviewLightbox = function(rev) {
    if (!modal) return;
    const img = document.getElementById("review-lightbox-img");
    const title = document.getElementById("review-lightbox-title");
    const desc = document.getElementById("review-lightbox-desc");
    const meta = document.getElementById("review-lightbox-meta");
    const download = document.getElementById("review-lightbox-download");

    if (img) img.src = rev.certificateImage;
    if (title) title.textContent = `${rev.venue} — Certificate of Reviewing`;
    if (desc) desc.textContent = rev.description;
    if (meta) meta.textContent = `${rev.role} · ${rev.reviewsCount} Reviews · ${rev.period} · ${rev.verificationNote}`;
    if (download) download.href = rev.certificateImage;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  window.closeReviewLightbox = function() {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  // Close modal when clicking outside the dialog box (backdrop overlay)
  modal.addEventListener("click", (e) => {
    const dialog = modal.querySelector(".bg-surface-raised");
    if (dialog && !dialog.contains(e.target)) {
      closeReviewLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeReviewLightbox();
    }
  });
}

/* =======================================================================
   4. CERTIFICATES GRID & DYNAMIC ON-DEMAND MODAL VIEWER
   ======================================================================= */
function initCertificatesGrid() {
  const grid = document.getElementById("certificate-grid");
  const filterBtns = document.querySelectorAll(".cert-filter-btn");
  const modal = document.getElementById("certificate-modal");

  if (!grid || typeof certificatesData === "undefined") return;

  const platformMeta = {
    coursera:   { label: "Coursera",          icon: "school", color: "text-primary" },
    linkedin:   { label: "LinkedIn Learning",  icon: "work", color: "text-secondary" },
    udemy:      { label: "Udemy",             icon: "menu_book", color: "text-status-warning" },
    hubspot:    { label: "HubSpot Academy",   icon: "donut_large", color: "text-status-warning" },
    hackerrank: { label: "HackerRank",        icon: "terminal", color: "text-status-active" },
    ibm:        { label: "IBM",               icon: "computer", color: "text-primary" },
    other:      { label: "Certified",         icon: "verified", color: "text-text-dim" }
  };

  function renderCertificates(filter = "all") {
    grid.innerHTML = "";
    const filtered = filter === "all"
      ? certificatesData
      : certificatesData.filter(c => c.category === filter);

    filtered.forEach(cert => {
      const card = document.createElement("article");
      card.className = "bg-surface-raised rounded-DEFAULT p-space-md shadow-md flex flex-col justify-between gap-space-sm hover:bg-surface-overlay transition-all border border-border-subtle group cursor-pointer";

      const meta = platformMeta[cert.platform] || platformMeta.other;
      const fileUrl = `certificates/${encodeURIComponent(cert.filename)}`;

      let thumbnailHtml = "";
      if (cert.thumbnail || cert.type === "image") {
        const thumbSrc = cert.thumbnail ? cert.thumbnail : fileUrl;
        thumbnailHtml = `
          <div class="relative w-full aspect-[16/10] bg-surface-base rounded-DEFAULT overflow-hidden border border-border-subtle group-hover:border-primary/50 transition-colors">
            <img src="${thumbSrc}" alt="${cert.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent flex items-end p-2">
              <span class="font-label-mono-sm text-[10px] text-primary bg-surface-base/90 px-2 py-0.5 rounded font-semibold uppercase flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">${meta.icon}</span> ${meta.label}
              </span>
            </div>
          </div>
        `;
      } else {
        // High-tech terminal PDF certificate preview card
        thumbnailHtml = `
          <div class="relative w-full aspect-[16/10] bg-surface-base rounded-DEFAULT p-space-md flex flex-col justify-between border border-border-subtle group-hover:border-primary/50 transition-colors overflow-hidden">
            <div class="flex items-center justify-between">
              <span class="font-label-mono-sm text-[11px] ${meta.color} font-semibold flex items-center gap-1 uppercase">
                <span class="material-symbols-outlined text-[14px]">${meta.icon}</span> ${meta.label}
              </span>
              <span class="font-label-mono-sm text-[10px] text-text-dim uppercase px-1.5 py-0.5 bg-surface-raised rounded">
                ${cert.type.toUpperCase()}
              </span>
            </div>
            <div class="flex flex-col items-center justify-center my-2">
              <div class="w-12 h-12 rounded-full bg-surface-overlay flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                <span class="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <span class="font-label-mono-sm text-[11px] text-text-muted mt-2 text-center line-clamp-1 font-medium">${cert.institution || meta.label}</span>
            </div>
            <div class="flex items-center justify-between font-label-mono-sm text-[10px] text-text-dim border-t border-surface-container pt-1.5">
              <span>AUTHENTICATED</span>
              <span class="text-status-active flex items-center gap-0.5"><span class="w-1.5 h-1.5 rounded-full bg-status-active"></span> VERIFIED</span>
            </div>
          </div>
        `;
      }

      const tagsHtml = (cert.tags || []).slice(0, 3).map(t => `
        <span class="font-label-mono-sm text-[10px] px-1.5 py-0.5 bg-surface-base text-text-muted rounded">${t}</span>
      `).join("");

      card.innerHTML = `
        <div class="flex flex-col gap-2">
          ${thumbnailHtml}
          <div class="flex flex-col gap-1 pt-1">
            <h3 class="font-headline-md text-[15px] font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
              ${cert.title}
            </h3>
            <span class="font-label-mono-sm text-[11px] text-text-dim">
              ${cert.institution || meta.label}
            </span>
            <p class="font-body-md text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed">
              ${cert.description}
            </p>
          </div>
        </div>
        <div class="mt-2 pt-2 border-t border-border-subtle flex flex-col gap-2">
          <div class="flex flex-wrap gap-1">
            ${tagsHtml}
          </div>
          <button class="w-full py-1.5 bg-surface-base hover:bg-primary text-text-primary hover:text-on-primary font-label-mono-sm text-[11px] rounded transition-all flex items-center justify-center gap-1.5 font-semibold">
            <span>&gt; Inspect Certificate</span>
            <span class="material-symbols-outlined text-[13px]">visibility</span>
          </button>
        </div>
      `;

      card.addEventListener("click", () => openCertificateModal(cert));
      grid.appendChild(card);
    });
  }

  // Filter handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-primary", "text-on-primary");
        b.classList.add("text-text-dim");
      });
      btn.classList.add("bg-primary", "text-on-primary");
      btn.classList.remove("text-text-dim");
      renderCertificates(btn.dataset.category);
    });
  });

  renderCertificates("all");

  // Dynamic on-demand certificate loading into modal
  window.openCertificateModal = function(cert) {
    if (!modal) return;
    const titleEl = document.getElementById("cert-modal-title");
    const descEl = document.getElementById("cert-modal-desc");
    const instEl = document.getElementById("cert-modal-inst");
    const viewerEl = document.getElementById("cert-modal-viewer");
    const downloadEl = document.getElementById("cert-modal-download");
    const fileUrl = `certificates/${encodeURIComponent(cert.filename)}`;

    if (titleEl) titleEl.textContent = cert.title;
    if (descEl) descEl.textContent = cert.description;
    if (instEl) instEl.textContent = `Issued by: ${cert.institution || cert.platform} · File: ${cert.filename}`;
    if (downloadEl) downloadEl.href = fileUrl;

    if (viewerEl) {
      viewerEl.innerHTML = `
        <div class="w-full h-80 flex flex-col items-center justify-center gap-3 text-text-dim font-label-mono-sm">
          <span class="material-symbols-outlined text-[36px] animate-spin text-primary">autorenew</span>
          <span>Loading authenticated certificate document...</span>
        </div>
      `;

      // Check if certificate is an image or PDF
      if (cert.type === "image" || cert.filename.endsWith(".png") || cert.filename.endsWith(".jpg")) {
        const img = new Image();
        img.src = fileUrl;
        img.alt = cert.title;
        img.className = "max-h-[70vh] w-auto mx-auto object-contain rounded border border-border-subtle shadow-2xl";
        img.onload = () => {
          viewerEl.innerHTML = "";
          viewerEl.appendChild(img);
        };
        img.onerror = () => {
          viewerEl.innerHTML = `
            <div class="p-6 text-center text-status-warning font-label-mono-sm">
              <p>Unable to preview image directly in iframe.</p>
              <a href="${fileUrl}" target="_blank" class="text-primary underline mt-2 inline-block">Click here to open file</a>
            </div>
          `;
        };
      } else {
        // PDF Embed
        const iframe = document.createElement("iframe");
        iframe.src = `${fileUrl}#view=FitH`;
        iframe.title = cert.title;
        iframe.className = "w-full h-[65vh] rounded border border-border-subtle bg-surface-base shadow-2xl";
        iframe.onload = () => {
          const loader = viewerEl.querySelector(".animate-spin");
          if (loader && loader.parentElement) loader.parentElement.remove();
        };
        viewerEl.innerHTML = "";
        viewerEl.appendChild(iframe);
      }
    }

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  window.closeCertificateModal = function() {
    if (!modal) return;
    const viewerEl = document.getElementById("cert-modal-viewer");
    // Free iframe/image memory immediately
    if (viewerEl) viewerEl.innerHTML = "";
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  // Close modal when clicking outside the dialog box (backdrop overlay)
  modal.addEventListener("click", (e) => {
    const dialog = modal.querySelector(".bg-surface-raised");
    if (dialog && !dialog.contains(e.target)) {
      closeCertificateModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeCertificateModal();
    }
  });
}

/* =======================================================================
   5. CONTACT FORMS & SUBMISSION CONTROLLER
   ======================================================================= */
function initContactForms() {
  const formConfigs = [
    { formId: "collabForm", feedbackId: "formSuccess" },
    { formId: "contactPageForm", feedbackId: "contactSuccess" },
    { formId: "hiringForm", feedbackId: "formSuccessMessage" },
    { formId: "freelance-form", feedbackId: "form-feedback" }
  ];

  formConfigs.forEach(({ formId, feedbackId }) => {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      // If action is not formsubmit, allow normal submission
      if (!form.action || !form.action.includes("formsubmit.co")) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";

      try {
        e.preventDefault();
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span> Dispatching...`;
        }

        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          if (feedback) {
            feedback.classList.remove("hidden");
            feedback.classList.add("flex");
          }
          form.reset();
          if (submitBtn) {
            submitBtn.innerHTML = `<span class="material-symbols-outlined text-[18px]">done</span> Sent Successfully`;
          }
        } else {
          // If AJAX response is not ok (e.g. initial activation needed), submit normally
          form.submit();
        }
      } catch (err) {
        console.warn("AJAX form submission error, falling back to direct POST:", err);
        form.submit();
      }
    });
  });
}

/* =======================================================================
   6. BACKGROUND CANVAS AMBIENT GRAPH
   ======================================================================= */
function initBackgroundCanvas() {
  const canvas = document.getElementById("background-canvas");
  if (!canvas) return;

  // On mobile or tablet screens (< 1024px), completely disable canvas animation to free 100% of CPU and GPU
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    if (canvas && canvas.style) canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const isMobile = window.innerWidth < 768;
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = isMobile ? Math.min(18, Math.floor(width / 40)) : Math.min(45, Math.floor(width / 35));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 0.5
    }));
  }

  // On mobile screens, render a static high-efficiency ambient constellation once to preserve 100% CPU/GPU for instant UI responsiveness
  if (isMobile) {
    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
      ctx.strokeStyle = "rgba(6, 182, 212, 0.04)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    resize();
    drawStatic();
    window.addEventListener("resize", () => {
      resize();
      drawStatic();
    });
    return;
  }

  let animId = null;
  function draw() {
    // If tab is hidden, skip drawing to save power and battery
    if (document.hidden) {
      animId = requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
    ctx.strokeStyle = "rgba(6, 182, 212, 0.04)";

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}
