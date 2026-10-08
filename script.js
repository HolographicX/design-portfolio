const githubIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7A11.3 11.3 0 0 0 8.42 22.72c.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.26-5.19-5.63 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17A10.8 10.8 0 0 1 12 5.9c.96 0 1.93.13 2.83.38 2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.38-2.66 5.33-5.2 5.61.41.35.78 1.04.78 2.1v3.12c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>`;

const projects = [
  { id: "keyboard", page: "pulp.html", image: "images/pulp/keyboard.png", name: "Pulp", description: "A minimal split keyboard.", github: "https://github.com/HolographicX/pulp" },
  { id: "fracley", image: "images/fracley.png", name: "Fracley", description: "3D design, Blender", type: "3D exploration", year: "2025", role: "Design + render", github: "https://github.com/HolographicX/fracley" },
  { id: "spin-dac", page: "spin-dac.html", image: "images/spin-dac/spin-dac.png", name: "Spin DAC", description: "USB-C audio hardware", github: "https://github.com/honeyoak/spin-dac" }
];

const byId = Object.fromEntries(projects.map(project => [project.id, project]));
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char]));

function renderGallery() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(project => {
    const href = project.page || `project.html?project=${project.id}`;
    return `<article class="project-card"><a class="project-link" href="${href}" aria-label="View ${escapeHtml(project.name)} case study"><img class="project-image" src="${project.image}" alt="${escapeHtml(project.name)} project preview" /><div class="project-text"><span class="project-title">${escapeHtml(project.name)}</span><span class="project-description">${escapeHtml(project.description)}</span></div></a>${project.github ? `<a class="icon-button" href="${project.github}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(project.name)} on GitHub">${githubIcon}</a>` : ""}</article>`;
  }).join("");
}

function renderProject() {
  const detail = document.getElementById("project-detail");
  if (!detail) return;
  const project = byId[new URLSearchParams(window.location.search).get("project")] || projects[1];
  document.title = `${project.name} — design fun`;
  detail.innerHTML = `<div class="project-shell"><a class="back-link" href="index.html">← &nbsp;Back to selected work</a><header class="project-hero"><p class="project-meta">${escapeHtml(project.type || "Project")} / ${escapeHtml(project.year || "")}</p><h1 class="project-heading">${escapeHtml(project.name)}</h1><p class="project-subtitle">${escapeHtml(project.description)}</p></header><figure style="margin:0"><img class="hero-image" src="${project.image}" alt="${escapeHtml(project.name)} hero image"></figure><section class="overview"><div><p class="section-kicker">Case study</p><h2>In<br>progress.</h2></div><div class="overview-copy"><p>This case study is being documented as the project develops.</p></div></section></div>`;
}

function setupLightbox() {
  const lightbox = document.createElement("dialog");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close enlarged image">×</button><img alt="">`;
  document.body.appendChild(lightbox);
  const image = lightbox.querySelector("img");
  document.addEventListener("click", event => {
    const trigger = event.target.closest(".zoomable");
    if (trigger) {
      image.src = trigger.dataset.zoomSource;
      image.alt = trigger.dataset.zoomAlt;
      lightbox.showModal();
    }
  });
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox || event.target.closest(".lightbox-close")) lightbox.close();
  });
}

renderGallery();
renderProject();
setupLightbox();
