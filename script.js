const portfolio = {
  name: "Ratnesh Kumar",
  role: "AI & Data Science Student",
  location: "Bhopal, Madhya Pradesh, India",
  email: "ratneshkumar77659@gmail.com",
  profileImage: "https://github.com/rat7050.png",
  githubUsername: "rat7050",
  github: "https://github.com/rat7050",
  linkedin:
    "https://www.linkedin.com/in/ratnesh-kumar-692376338?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  heroTitle: "Ratnesh Kumar builds practical AI and data projects.",
  summary:
    "B.Tech student in Artificial Intelligence and Data Science, focused on real-world problem solving through SQL, analytics, Python, and machine learning.",
  aboutHeading: "I enjoy transforming raw information into systems, insights, and useful decisions.",
  aboutShort:
    "My work is grounded in data-first thinking: collect the right information, structure it well, analyze it carefully, and present it clearly. I am especially interested in projects where analytics can improve real workflows.",
  aboutLong:
    "I am an AI and Data Science student who likes building practical projects instead of staying only at theory level. From SQL-based systems to analytics-driven problem solving, I enjoy understanding how data moves, what it reveals, and how it can support better decisions.",
  quote:
    "I am most interested in projects where data is not just stored, but used to solve a real problem clearly and practically.",
  stats: [
    { value: "--", label: "Public GitHub repos" },
    { value: "3", label: "Featured on home" },
    { value: "Live", label: "GitHub sync" }
  ],
  techStack: ["SQL", "Python", "C++", "Power BI", "Pandas", "NumPy", "SQLite", "Canva"],
  process: [
    {
      title: "Understand the data",
      text: "I begin by understanding the structure, quality, and business meaning behind the dataset."
    },
    {
      title: "Build clean logic",
      text: "I like writing organized queries and analysis steps so the solution stays clear and easy to improve."
    },
    {
      title: "Deliver useful insight",
      text: "The result should help someone understand performance, make a choice, or improve a workflow."
    }
  ],
  facts: [
    { title: "Base", text: "Bhopal, Madhya Pradesh, India" },
    { title: "Primary Track", text: "AI, data science, analytics, and SQL" },
    { title: "Preferred Work", text: "Practical projects with real-world datasets" },
    { title: "Current Mode", text: "Learning, building, and refining portfolio work" }
  ],
  learningPath: [
    {
      title: "Now",
      text: "Building data analytics and AI-focused projects that feel practical, presentable, and portfolio-ready."
    },
    {
      title: "Learning",
      text: "Artificial intelligence, data science, SQL, Python, and data engineering concepts through project work."
    },
    {
      title: "Next",
      text: "Growing toward stronger machine learning workflows, better storytelling, and clearer business-facing analysis."
    }
  ],
  strengths: [
    "SQL querying",
    "Database design thinking",
    "Business insights",
    "Data cleaning",
    "Analytics storytelling",
    "Python fundamentals",
    "Problem solving",
    "Machine learning foundations",
    "Dashboard mindset"
  ],
  certifications: [
    {
      title: "LinkedIn Certificates",
      issuer: "LinkedIn Profile",
      text: "Professional learning certificates and course completions are currently showcased through my LinkedIn profile.",
      url: "https://www.linkedin.com/in/ratnesh-kumar-692376338?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  ],
  values: [
    {
      title: "Practical first",
      text: "I like solutions that connect technical work with a clear real-world outcome."
    },
    {
      title: "Steady growth",
      text: "I learn best by building, testing, improving, and repeating the process."
    },
    {
      title: "Collaboration ready",
      text: "I enjoy working with others on data challenges, learning projects, and portfolio-building ideas."
    }
  ],
  contactIntro:
    "If you are working on analytics, SQL, AI, or data-heavy ideas, I would be happy to connect and explore how I can contribute.",
  collaborationFit: [
    {
      title: "Great match",
      text: "Student collaborations, internships, SQL problem solving, and applied analytics projects."
    },
    {
      title: "Also interested",
      text: "Dashboards, ETL-flavored workflows, machine learning practice projects, and business-facing data analysis."
    },
    {
      title: "Best way to reach me",
      text: "Email or LinkedIn work best if you want to discuss a project, opportunity, or collaboration."
    }
  ],
  availabilityTitle: "Looking for opportunities where technical work creates visible value.",
  availabilityCopy:
    "I am especially excited by collaborations around AI, SQL, data analysis, and project-based learning that can grow into strong real-world case studies.",
  projects: [
    {
      title: "Library Management System",
      type: "SQL database project",
      description:
        "A SQL-based library management system for handling books, members, issuing, and returns while reducing manual errors and keeping records organized.",
      tags: ["SQL", "Database Design", "Operations"],
      status: "Fallback portfolio project",
      url: "https://github.com/rat7050/LIibrary_management_system_sql_project"
    },
    {
      title: "Online Bookstore SQL Project",
      type: "Analytics and SQL",
      description:
        "A structured database project for an online bookstore with data import, joins, aggregation, and business-focused queries around customers, orders, and revenue.",
      tags: ["SQL", "Analytics", "Business Insights"],
      status: "Fallback portfolio project",
      url: "https://github.com/rat7050/Online-Bookstore-SQL-Project"
    },
    {
      title: "Zepto Data Analysis",
      type: "Retail data exploration",
      description:
        "An analysis project built on product-level quick-commerce data, covering cleaning, category exploration, pricing, discounts, and inventory-oriented insights.",
      tags: ["SQL", "Data Cleaning", "Retail"],
      status: "Fallback portfolio project",
      url: "https://github.com/rat7050/zepto-sql-project"
    }
  ]
};

let revealObserver;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function sanitizeUrl(value) {
  try {
    return new URL(value, window.location.href).href;
  } catch (error) {
    return "#";
  }
}

function getDelayClass(index) {
  if (index % 3 === 1) return " delay-1";
  if (index % 3 === 2) return " delay-2";
  return "";
}

function fillText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function fillLink(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.href = sanitizeUrl(value);
  });
}

function fillImage(selector, src, alt) {
  document.querySelectorAll(selector).forEach((node) => {
    node.src = sanitizeUrl(src);
    node.alt = alt;
  });
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal:not([data-reveal-bound])");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => {
      item.dataset.revealBound = "true";
      item.classList.add("is-visible");
    });
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
      }
    );
  }

  items.forEach((item) => {
    item.dataset.revealBound = "true";
    revealObserver.observe(item);
  });
}

function showAboveFoldSections() {
  document.querySelectorAll(".hero-section .reveal, .page-hero .reveal").forEach((item) => {
    item.dataset.revealBound = "true";
    item.classList.add("is-visible");
  });
}

function renderChips(containerSelector, items) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) =>
        `<span class="chip reveal${getDelayClass(items.indexOf(item))}">${escapeHtml(item)}</span>`
    )
    .join("");

  observeReveals();
}

function renderStats() {
  const container = document.querySelector("[data-stats]");
  if (!container) return;

  container.innerHTML = portfolio.stats
    .map(
      (stat, index) => `
        <article class="stat-card reveal${getDelayClass(index)}">
          <strong>${escapeHtml(stat.value)}</strong>
          <span>${escapeHtml(stat.label)}</span>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderProjects() {
  document.querySelectorAll("[data-projects]").forEach((container) => {
    const mode = container.getAttribute("data-projects");
    const list = mode === "featured" ? portfolio.projects.slice(0, 3) : portfolio.projects;

    container.innerHTML = list
      .map((project, index) => {
        const title = escapeHtml(project.title);
        const type = escapeHtml(project.type);
        const description = escapeHtml(project.description);
        const status = escapeHtml(project.status || "Public repository");
        const repoUrl = sanitizeUrl(project.url);
        const demoUrl = project.demoUrl ? sanitizeUrl(project.demoUrl) : "";
        const tags = (project.tags || [])
          .map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
          .join("");

        return `
          <article class="project-card reveal${getDelayClass(index)}">
            <div class="project-topline">
              <span class="project-index">0${index + 1}</span>
              <span>${type}</span>
            </div>
            <div class="project-copy">
              <h3>${title}</h3>
              <p>${description}</p>
            </div>
            <div class="project-meta">${tags}</div>
            <div class="project-footer">
              <span class="project-status">${status}</span>
              <div class="project-links">
                <a href="${repoUrl}" target="_blank" rel="noreferrer">View Repo</a>
                ${demoUrl ? `<a href="${demoUrl}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  });

  observeReveals();
}

function renderProcess() {
  const container = document.querySelector("[data-process]");
  if (!container) return;

  container.innerHTML = portfolio.process
    .map(
      (item, index) => `
        <article class="mini-panel reveal${getDelayClass(index)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderFacts() {
  const container = document.querySelector("[data-facts]");
  if (!container) return;

  container.innerHTML = portfolio.facts
    .map(
      (fact, index) => `
        <article class="fact-row reveal${getDelayClass(index)}">
          <span>${escapeHtml(fact.title)}</span>
          <strong>${escapeHtml(fact.text)}</strong>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderLearningPath() {
  const container = document.querySelector("[data-learning-path]");
  if (!container) return;

  container.innerHTML = portfolio.learningPath
    .map(
      (item, index) => `
        <article class="timeline-item reveal${getDelayClass(index)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderValues() {
  const container = document.querySelector("[data-values]");
  if (!container) return;

  container.innerHTML = portfolio.values
    .map(
      (item, index) => `
        <article class="value-card reveal${getDelayClass(index)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderCertificates() {
  const container = document.querySelector("[data-certificates]");
  if (!container) return;

  container.innerHTML = portfolio.certifications
    .map(
      (item, index) => `
        <article class="certificate-card reveal${getDelayClass(index)}">
          <div>
            <p class="section-tag">${escapeHtml(item.issuer)}</p>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <p>${escapeHtml(item.text)}</p>
          <a href="${sanitizeUrl(item.url)}" target="_blank" rel="noreferrer">View on LinkedIn</a>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderContactLinks() {
  const container = document.querySelector("[data-contact-links]");
  if (!container) return;

  const contactItems = [
    {
      title: "Email",
      text: portfolio.email,
      href: `mailto:${portfolio.email}`
    },
    {
      title: "GitHub",
      text: "github.com/rat7050",
      href: portfolio.github
    },
    {
      title: "LinkedIn",
      text: "ratnesh-kumar-692376338",
      href: portfolio.linkedin
    }
  ];

  container.innerHTML = contactItems
    .map(
      (item, index) => `
        <article class="contact-item reveal${getDelayClass(index)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p><a href="${sanitizeUrl(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.text)}</a></p>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function renderCollabFit() {
  const container = document.querySelector("[data-collab-fit]");
  if (!container) return;

  container.innerHTML = portfolio.collaborationFit
    .map(
      (item, index) => `
        <article class="fit-card reveal${getDelayClass(index)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");

  observeReveals();
}

function highlightCurrentPage() {
  const page = document.body.dataset.page;
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      (page === "home" && href === "index.html") ||
      (page === "projects" && href === "projects.html") ||
      (page === "about" && href === "about.html") ||
      (page === "contact" && href === "contact.html")
    ) {
      link.classList.add("active");
    }
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("[data-nav]");

  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNav();
  });
}

function setupScrollProgress() {
  const bar = document.querySelector("[data-progress-bar]");
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function setupCursorGlow() {
  const glow = document.querySelector("[data-cursor-glow]");
  if (!glow) return;

  if (window.matchMedia("(pointer: coarse)").matches) {
    glow.classList.add("hidden");
    return;
  }

  const setGlowPosition = (event) => {
    glow.style.transform = `translate(${event.clientX - glow.offsetWidth / 2}px, ${
      event.clientY - glow.offsetHeight / 2
    }px)`;
  };

  window.addEventListener("pointermove", setGlowPosition);
}

function renderParticles() {
  const field = document.querySelector("[data-particle-field]");
  if (!field) return;

  const particles = Array.from({ length: 16 }, (_, index) => {
    const left = Math.round(Math.random() * 100);
    const top = Math.round(Math.random() * 100);
    const size = 3 + (index % 4);
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 4;

    return `<span style="left:${left}%; top:${top}%; width:${size}px; height:${size}px; --duration:${duration}s; --delay:${delay}s;"></span>`;
  }).join("");

  field.innerHTML = particles;
}

function formatDate(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function formatRepoTitle(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b[a-z]/g, (character) => character.toUpperCase());
}

function mapGitHubRepoToProject(repo) {
  return {
    title: formatRepoTitle(repo.name),
    type: repo.language ? `${repo.language} repository` : "GitHub repository",
    description:
      repo.description ||
      "Public GitHub repository by Ratnesh Kumar. Open it to explore the code, commit history, and project structure.",
    tags: [
      repo.language || "Code",
      repo.visibility ? String(repo.visibility).toUpperCase() : "PUBLIC",
      repo.updated_at ? `Updated ${formatDate(repo.updated_at)}` : null
    ].filter(Boolean),
    status:
      typeof repo.stargazers_count === "number" && repo.stargazers_count > 0
        ? `${repo.stargazers_count} star${repo.stargazers_count === 1 ? "" : "s"}`
        : "Recently updated",
    url: repo.html_url,
    demoUrl: repo.homepage || ""
  };
}

async function syncGitHubProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${portfolio.githubUsername}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repos = await response.json();
    const publicRepos = repos.filter((repo) => !repo.fork && !repo.archived);

    if (!publicRepos.length) {
      portfolio.stats[0].value = String(portfolio.projects.length);
      renderStats();
      return;
    }

    portfolio.projects = publicRepos.map(mapGitHubRepoToProject);
    portfolio.stats[0].value = String(publicRepos.length);
    portfolio.stats[1].value = String(Math.min(3, publicRepos.length));

    renderStats();
    renderProjects();
  } catch (error) {
    console.warn("GitHub repo sync failed. Showing fallback projects instead.", error);
    portfolio.stats[0].value = String(portfolio.projects.length);
    renderStats();
  }
}

function initializePortfolio() {
  fillText("[data-name]", portfolio.name);
  fillText("[data-role]", portfolio.role);
  fillText("[data-location]", portfolio.location);
  fillText("[data-summary]", portfolio.summary);
  fillText("[data-hero-title]", portfolio.heroTitle);
  fillText("[data-about-heading]", portfolio.aboutHeading);
  fillText("[data-about-short]", portfolio.aboutShort);
  fillText("[data-about-long]", portfolio.aboutLong);
  fillText("[data-quote]", portfolio.quote);
  fillText(
    "[data-project-summary]",
    "These repositories are synced from GitHub so new public repos can appear here automatically."
  );
  fillText("[data-contact-intro]", portfolio.contactIntro);
  fillText("[data-availability-title]", portfolio.availabilityTitle);
  fillText("[data-availability-copy]", portfolio.availabilityCopy);
  fillText("[data-year]", new Date().getFullYear());

  fillLink("[data-github-link]", portfolio.github);
  fillLink("[data-linkedin-link]", portfolio.linkedin);
  fillLink("[data-email-link]", `mailto:${portfolio.email}`);
  fillImage("[data-profile-image]", portfolio.profileImage, `${portfolio.name} GitHub profile picture`);

  renderStats();
  renderProjects();
  renderProcess();
  renderFacts();
  renderLearningPath();
  renderChips("[data-tech-stack]", portfolio.techStack);
  renderChips("[data-strengths]", portfolio.strengths);
  renderCertificates();
  renderValues();
  renderContactLinks();
  renderCollabFit();
  highlightCurrentPage();
  setupMobileNav();
  setupScrollProgress();
  setupCursorGlow();
  renderParticles();
  showAboveFoldSections();
  observeReveals();
  syncGitHubProjects();
}

initializePortfolio();
