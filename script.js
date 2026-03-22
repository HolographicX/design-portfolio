const projects = [
  {
    image: "images/fracley.png",
    name: "Fracley",
    description: "3D design, Blender",
    link: "https://github.com/HolographicX/fracley"
  },

  {
    image: "images/spin-dac.png",
    name: "Spin DAC",
    description: "3D design, Blender",
    link: "https://github.com/honeyoak/spin-dac"
  },
  {
    image: "images/keyboard.png",
    name: "keyboard",
    description: "3D design, Blender",
    link: "https://github.com/HolographicX/keyboard"
  },
  {
    image: "images/hfs.png",
    name: "HFS",
    description: "Vector Art, Inkscape",
    link: "https://hackfromscratch.org"
  },
  {
    image: "images/carora.png",
    name: "Carora",
    description: "Mobile UI/UX, Figma",
    link: "https://www.figma.com/design/l1CEic29YiFBAuZ9yAJno9/Elder-Care-App?node-id=0-1&t=TQNtynvAof3rWNbk-1"
  },
    {
    image: "images/hamarisilai.png",
    name: "Hamari",
    description: "Web UI/UX, Figma",
    link: "https://holographicx.github.io/hamarisilai/"
  },


];



const grid = document.getElementById("projects-grid");

projects.forEach(project => {

  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img class="project-image" src="${project.image}" />
    
    <div class="project-text">
      <div class="project-title">${project.name}</div>
      <div class="project-description">${project.description}</div>
    </div>
  `;

  card.onclick = () => {
    window.open(project.link, "_blank");
  };

  grid.appendChild(card);

});