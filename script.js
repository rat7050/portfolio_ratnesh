const portfolio = {
  name: "Ratnesh Kumar",
  role: "AI & Data Science Student",
  location: "Bhopal, Madhya Pradesh",
  email: "ratneshkumar77659@gmail.com",
  profileImage: "https://github.com/rat7050.png",
  github: "https://github.com/rat7050",
  linkedin:
    "https://www.linkedin.com/in/ratnesh-kumar-692376338?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  heroTitle: "Turning data into practical solutions that people can use.",
  summary:
    "B.Tech student in Artificial Intelligence and Data Science, focused on real-world problem solving through SQL, analytics, Python, and machine learning.",
  aboutHeading: "I enjoy transforming raw information into systems, insights, and useful decisions.",
  aboutShort:
    "My work is grounded in data first thinking: collect the right information, structure it well, analyze it carefully, and present it clearly. I am especially interested in projects where analytics can improve real workflows.",
  aboutLong:
    "I am an AI and Data Science student who likes building practical projects instead of staying only at theory level. From SQL-based systems to analytics-driven problem solving, I enjoy understanding how data moves, what it reveals, and how it can support better decisions.",
  quote:
    "I am most interested in projects where data is not just stored, but used to solve a real problem clearly and practically.",
  stats: [
    { value: "5", label: "Public GitHub repos" },
    { value: "3", label: "Featured SQL projects" },
    { value: "24/7", label: "Learning mindset" }
  ],
  focusAreas: [
    "Data analytics and AI-based project building",
    "ETL thinking, dashboards, and structured problem solving",
    "Practical SQL workflows with business insight generation"
  ],
  techStack: ["SQL", "Python", "C++", "Power BI", "Pandas", "NumPy", "SQLite", "Canva"],
  process: [
    {
      title: "Understand the data",
      text: "I start by learning what the dataset represents, how it is structured, and what questions it can realistically answer."
    },
    {
      title: "Build clean logic",
      text: "I like writing organized queries and analysis steps so the solution remains understandable and easy to improve."
    },
    {
      title: "Extract useful insight",
      text: "The goal is not just technical correctness. I want the result to help someone take action or understand performance."
    }
  ],
  facts: [
    { title: "Based In", text: "Bhopal, Madhya Pradesh, India" },
    { title: "Primary Direction", text: "AI, Data Science, SQL, and analytics projects" },
    { title: "Interested In", text: "Real-world datasets, pipelines, dashboards, and machine learning" }
  ],
  learningPath: [
    {
      title: "Now",
      text: "Building data analytics and AI-focused projects that feel practical and portfolio-ready."
    },
    {
      title: "Learning",
      text: "Artificial intelligence, data science, SQL, Python, and data engineering concepts."
    },
    {
      title: "Collaboration",
      text: "Open to AI and data science collaborations, especially projects with clear business or social use cases."
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
      text: "Professional learning certificates and course completions are showcased through my LinkedIn profile.",
      url: "https://www.linkedin.com/in/ratnesh-kumar-692376338?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  ],
  values: [
    {
      title: "Practical First",
      text: "I like solutions that connect technical work with an understandable real outcome."
    },
    {
      title: "Steady Growth",
      text: "I am actively learning and improving through projects, iteration, and experimentation."
    },
    {
      title: "Collaboration Ready",
      text: "I enjoy working with others on project ideas, data challenges, and portfolio-building work."
    }
  ],
  contactIntro:
    "If you are working on analytics, SQL, AI, or data-heavy ideas, I would be happy to connect and explore how I can contribute.",
  collaborationFit: [
    {
      title: "Great Match",
      text: "Student collaborations, entry-level internships, SQL problem solving, and applied analytics projects."
    },
    {
      title: "Also Interested",
      text: "Dashboards, ETL-flavored workflows, machine learning practice projects, and real-world datasets."
    },
    {
      title: "Best Way To Reach Me",
      text: "Email or LinkedIn work best if you want to discuss a project, idea, or opportunity."
    }
  ],
  availabilityTitle: "Looking for opportunities where technical work creates visible value.",
  availabilityCopy:
    "I am especially excited by collaborations around AI, SQL, data analysis, and project-based learning that can grow into strong real-world case studies.",
  projects: [
    {
      title: "Library Management System",
      type: "SQL Database Project",
      description:
        "A SQL-based library management system for handling books, members, issuing, and returns while reducing manual errors and keeping records organized.",
      impact:
        "Shows relational thinking, transaction handling, and workflow-focused database design for a real operational use case.",
      tags: ["SQL", "Database Design", "CSV", "Operations"],
      url: "https://github.com/rat7050/LIibrary_management_system_sql_project"
    },
    {
      title: "Online Bookstore SQL Project",
      type: "Analytics + SQL",
      description:
        "A structured database project for an online bookstore with data import, joins, aggregation, and business-focused queries around customers, orders, and revenue.",
      impact:
        "Demonstrates how I move from schema creation to meaningful analytics such as top spending customers, revenue, and inventory questions.",
      tags: ["SQL", "Analytics", "Joins", "Business Insights"],
      url: "https://github.com/rat7050/Online-Bookstore-SQL-Project"
    },
    {
      title: "Zepto Data Analysis",
      type: "Retail Data Exploration",
      description:
        "An analysis project built on product-level quick-commerce data, covering cleaning, category exploration, pricing, discounts, and inventory-oriented insights.",
      impact:
        "Highlights my interest in business-facing data analysis and the ability to turn raw tables into patterns decision-makers can use.",
      tags: ["SQL", "Data Cleaning", "Retail", "Insights"],
      url: "https://github.com/rat7050/zepto-sql-project"
    }
  ]
};

function fillText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function fillLink(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.href = value;
  });
}

function fillImage(selector, src, alt) {
  document.querySelectorAll(selector).forEach((node) => {
    node.src = src;
    node.alt = alt;
  });
}

function renderChips(containerSelector, items) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = items.map((item) => `<span class="chip">${item}</span>`).join("");
}

function renderStats() {
  const container = document.querySelector("[data-stats]");
  if (!container) return;

  container.innerHTML = portfolio.stats
    .map(
      (stat) => `
        <article class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `
    )
    .join("");
}

function renderFocus() {
  const container = document.querySelector("[data-focus-list]");
  if (!container) return;

  container.innerHTML = portfolio.focusAreas.map((item) => `<li>${item}</li>`).join("");
}

function renderProjects() {
  document.querySelectorAll("[data-projects]").forEach((container) => {
    const mode = container.getAttribute("data-projects");
    const list = mode === "featured" ? portfolio.projects.slice(0, 3) : portfolio.projects;

    container.innerHTML = list
      .map(
        (project, index) => `
          <article class="project-card">
            <div class="project-banner">
              <span class="project-index">0${index + 1}</span>
            </div>
            <div class="project-copy">
              <p class="section-tag">${project.type}</p>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <p>${project.impact}</p>
            </div>
            <div class="project-meta">
              ${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
              <a class="text-link" href="${project.url}" target="_blank" rel="noreferrer">View GitHub Repo</a>
            </div>
          </article>
        `
      )
      .join("");
  });
}

function renderProcess() {
  const container = document.querySelector("[data-process]");
  if (!container) return;

  container.innerHTML = portfolio.process
    .map(
      (item) => `
        <article class="mini-panel">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderFacts() {
  const container = document.querySelector("[data-facts]");
  if (!container) return;

  container.innerHTML = portfolio.facts
    .map(
      (fact) => `
        <article class="mini-panel">
          <strong>${fact.title}</strong>
          <span>${fact.text}</span>
        </article>
      `
    )
    .join("");
}

function renderLearningPath() {
  const container = document.querySelector("[data-learning-path]");
  if (!container) return;

  container.innerHTML = portfolio.learningPath
    .map(
      (item) => `
        <article class="timeline-item">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderValues() {
  const container = document.querySelector("[data-values]");
  if (!container) return;

  container.innerHTML = portfolio.values
    .map(
      (item) => `
        <div>
          <h2>${item.title}</h2>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function renderCertificates() {
  const container = document.querySelector("[data-certificates]");
  if (!container) return;

  container.innerHTML = portfolio.certifications
    .map(
      (item) => `
        <article class="certificate-card">
          <div>
            <p class="section-tag">${item.issuer}</p>
            <h3>${item.title}</h3>
          </div>
          <p>${item.text}</p>
          <a class="text-link certificate-link" href="${item.url}" target="_blank" rel="noreferrer">View on LinkedIn</a>
        </article>
      `
    )
    .join("");
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
      (item) => `
        <article class="contact-item">
          <h3>${item.title}</h3>
          <p><a href="${item.href}" target="_blank" rel="noreferrer">${item.text}</a></p>
        </article>
      `
    )
    .join("");
}

function renderCollabFit() {
  const container = document.querySelector("[data-collab-fit]");
  if (!container) return;

  container.innerHTML = portfolio.collaborationFit
    .map(
      (item) => `
        <article class="fit-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
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

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

fillText("[data-name]", portfolio.name);
fillText("[data-role]", portfolio.role);
fillText("[data-location]", portfolio.location);
fillText("[data-summary]", portfolio.summary);
fillText("[data-hero-title]", portfolio.heroTitle);
fillText("[data-about-heading]", portfolio.aboutHeading);
fillText("[data-about-short]", portfolio.aboutShort);
fillText("[data-about-long]", portfolio.aboutLong);
fillText("[data-quote]", portfolio.quote);
fillText("[data-project-summary]", "These projects highlight practical SQL, data cleaning, schema thinking, and business insight generation.");
fillText("[data-contact-intro]", portfolio.contactIntro);
fillText("[data-availability-title]", portfolio.availabilityTitle);
fillText("[data-availability-copy]", portfolio.availabilityCopy);
fillText("[data-year]", new Date().getFullYear());

fillLink("[data-github-link]", portfolio.github);
fillLink("[data-linkedin-link]", portfolio.linkedin);
fillLink("[data-email-link]", `mailto:${portfolio.email}`);
fillImage("[data-profile-image]", portfolio.profileImage, `${portfolio.name} GitHub profile picture`);

renderStats();
renderFocus();
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
