const githubIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7A11.3 11.3 0 0 0 8.42 22.72c.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.26-5.19-5.63 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17A10.8 10.8 0 0 1 12 5.9c.96 0 1.93.13 2.83.38 2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.38-2.66 5.33-5.2 5.61.41.35.78 1.04.78 2.1v3.12c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>`;

const projects = [
  {
    id: "pulp",
    page: "/pulp",
    name: "Pulp",
    description: "A minimal split keyboard.",
    image: "images/pulp/keyboard.png",
    github: "https://github.com/HolographicX/pulp",
    meta: { type: "Open-source keyboard", year: "2025" },
    subtitle: "A minimal, low-profile split ortholinear keyboard with 40 keys.",
    hero: { src: "images/pulp/render-2.png", alt: "Pulp keyboard render", caption: "01 — Pulp / final render" },
    overview: {
      kicker: "A small keyboard, deliberately",
      heading: "Less reach.<br>More intention.",
      body: [
        "Pulp began with a simple desire: make a split keyboard that feels as clean as it is capable. Split layouts are a revelation ergonomically, but I did not want that comfort to come with visual clutter or unnecessary complexity.",
        "I took cues from the Totem’s restraint and the Corne’s familiar thumb cluster, then made the design my own: a compact, slightly staggered layout, low-profile Choc switches, and just forty keys. Each half carries a tiny OLED display and a low-profile knob, so the board remains expressive without becoming busy."
      ],
      facts: [
        { label: "Layout", value: "40-key split ortho" },
        { label: "Firmware", value: "ZMK" },
        { label: "Built with", value: "KiCad + Onshape" }
      ]
    },
    process: {
      kicker: "From reference to routing",
      heading: "Designing<br>the quiet details.",
      intro: "The goal stayed constant throughout: an ergonomic board with a calm silhouette. Getting there involved a few useful detours.",
      entries: [
        { num: "01 / Research", title: "Finding the balance", body: "I started by studying the keyboards I kept returning to. The Totem made a case for minimalism, while the Corne’s thumb cluster felt like a strong foundation. That comparison set the direction: low profile was non-negotiable, but the layout still needed enough contour and reachability to feel intentional in use." },
        { num: "02 / Schematic", title: "One schematic, two halves", body: "The electronics came together around nice!nano v2 controllers, hot-swappable Choc switches, diodes, OLEDs, and encoders. I designed both sides around the same schematic from the beginning, with a flippable PCB in mind—one board design instead of separate left and right orders." },
        { num: "03 / PCB", title: "Letting the layout tool help", body: "After spending too long wrestling with grids, splay, and mirrored placement in KiCad, I switched to Ergogen for the layout work. It was the right pivot: the component positions became easier to iterate on, and the flippable-board constraint stopped dominating every decision. Back in KiCad, I refined the placement, added 3D models, and prepared the board for routing." },
        { num: "04 / Enclosure", title: "Giving the electronics a home", body: "With the board taking shape, I moved into Onshape to assemble the PCB and components, then designed the case, bottom plate, and screw locations around them. The final stretch was about resolution: finishing the bill of materials, rendering the form in Blender, and routing the traces that turn the idea into a buildable keyboard." }
      ]
    },
    features: {
      kicker: "Built to be used, and remade",
      heading: "Small board.<br>Complete system.",
      items: ["Hot-swappable Choc v1 switches", "128 × 32 OLED on each half", "Low-profile knob on each half", "Flippable PCB", "3D-printable, open-source design", "Corne-inspired thumb cluster"]
    },
    media: {
      kicker: "The workbench",
      heading: "Board, body,<br>and final form.",
      layout: "keyboard-media",
      tiles: [
        { src: "images/pulp/real-final-build.jpg", alt: "Pulp keyboard real build photo", label: "Final build / Pulp", large: true },
        { src: "images/pulp/keyboard.png", alt: "Pulp keyboard final render", label: "Final render / Pulp" },
        { src: "images/pulp/kicad-pcb.png", alt: "Pulp PCB layout", label: "PCB layout / KiCad" },
        { src: "images/pulp/onshape-cad-image.png", alt: "Pulp keyboard CAD assembly", label: "CAD assembly / Onshape" }
      ]
    },
    cta: { text: "Pulp is designed to be replicated, modified, and made your own.", link: "https://github.com/HolographicX/pulp", label: "View source" }
  },
  {
    id: "fracley",
    page: "/fracley",
    name: "Fracley",
    description: "3D Printable Refractor Telescope",
    image: "images/fracley/fracley.png",
    github: "https://github.com/HolographicX/fracley",
    meta: { type: "3D-printed optics", year: "2025" },
    subtitle: "A 3D printable refractor telescope for visual observing and astrophotography.",
    hero: { src: "images/fracley/fracley.png", alt: "Fracley telescope render", caption: "01 — Fracley / render" },
    overview: {
      kicker: "A beginner-friendly telescope",
      heading: "Big views.<br>Small budget.",
      body: [
        "Fracley aims to be a beginner-friendly, yet high-performance visual and astrophotography hybrid telescope at a low budget. It is a 3D printable refractor based on the Hadley telescope, adapted into a lighter, more portable form.",
        "The optical design centers on an 83mm aperture doublet lens with a 600mm focal length and f/7.2 focal ratio. That ratio is customizable—buy a lower focal length lens and move the lens cell backward to change the configuration."
      ],
      facts: [
        { label: "Lens", value: "83mm doublet" },
        { label: "Focal", value: "600mm · f/7.2" },
        { label: "Status", value: "Completed & Published" }
      ]
    },
    process: {
      kicker: "From lens cell to focuser",
      heading: "Optics,<br>made printable.",
      intro: "A telescope is unforgiving. Get something off by a fraction of a millimetre and the image never sharpens. So here is how I chased that precision with printed parts, and why I made the choices I did.",
      entries: [
        { num: "01 / Motivation", title: "A telescope I could actually build", body: "I wanted to look at the night sky and photograph it, but the refractors that do both well cost more than I could justify. The Hadley project had already shown me that a 3D-printed telescope could really perform, so I used it as a starting point. Fracley became my attempt to take that proven base and make it my own. I wanted something light enough to carry outside on a whim, cheap enough to build from printed parts and common hardware, and open enough that someone else could build one from my files." },
        { num: "02 / Lens cell", title: "Where a fraction of a millimetre matters", body: "A refractor lives or dies by the alignment of its lens. The doublet has to sit square to the optical axis. Any tilt throws the focal plane off-center, which is fine for a quick glance at the moon but ruins astrophotography. I split the lens cell into an inner and outer ring that clamp the glass. The real decision was how to fasten it. Instead of adding a separate collimation mechanism, I used six M3 screws around the perimeter. Each screw holds the cell together and also pulls its section of the ring forward or back. Turn a pair of screws and the lens tilts in tiny increments. So collimation comes from the same six bolts that already assembled the cell." },
        { num: "03 / Structure", title: "Light, stiff, and honest about it", body: "A telescope only works if it refuses to bend. Point a heavy one low and the tube sags under its own weight. Print a solid tube instead and it becomes a brick that never leaves the shelf. So I replaced the tube with three carbon fiber rods that run between the lens cell and the focuser joint. Carbon fiber gives me the stiffness of a much heavier part for a fraction of the mass. Three rods also form a naturally rigid triangle, so the frame resists bending and twisting without a closed shell. The open design keeps the whole thing light enough to carry in one hand. For a telescope that is actually meant to get used, that matters more than any number on a spec sheet." },
        { num: "04 / Focuser", title: "Tolerances you can feel", body: "The focuser is where a design stops being an image on a screen and becomes something your hands judge. A refractor’s focus is fine enough that too much play in a helical focuser wobbles the view as you turn it. Too little clearance and it binds or grinds. I went through a long run of test prints, nudging the clearances by fractions of a millimetre. Eventually it moved smoothly with no detectable backlash. It was the slowest part of the build and the least visible in the final photos. It is also the difference between a telescope you fight and one that quietly disappears while you are looking through it." },
        { num: "05 / Iteration", title: "Prototype, measure, reprint", body: "Very little survived the first print unchanged. I would assemble a section and find the heat-set inserts sitting proud, the rods binding, or the lens cell flexing under load. Then it was back into CAD and another print. Every pass tightened the geometry and the build guide. By the end I could hand someone a bill of materials and a set of STL files and trust that the parts would fit. First light through the finished scope, a full moon and a lunar eclipse, was the reward." }
      ]
    },
    features: {
      kicker: "Designed for the night sky",
      heading: "Portable.<br>Capable.",
      items: ["Refracting telescope design", "83mm aperture doublet lens", "600mm focal length, f/7.2", "Lightweight and portable", "2 inch non-rotating focuser", "Built for visual + astrophotography", "Customizable focal ratio", "Prints without supports"]
    },
    media: {
      kicker: "Build & sky",
      heading: "From CAD<br>to first light.",
      layout: "fracley-media",
      tiles: [
        { src: "images/fracley/initial-cad.png", alt: "Fracley initial CAD model", label: "CAD / first pass" },
        { src: "images/fracley/build-prototype.jpg", alt: "Fracley prototype build", label: "Prototype / build" },
        { src: "images/fracley/real-final-build-photo.png", alt: "Fracley final build photo", label: "Final build / Fracley" },
        { src: "images/fracley/eclipse-image.png", alt: "Solar eclipse captured through Fracley", label: "Capture / eclipse" },
        { src: "images/fracley/moon-image.jpg", alt: "Moon captured through Fracley", label: "Capture / full moon" }
      ]
    },
    cta: { text: "Fracley is open source and built to be iterated on.", link: "https://github.com/HolographicX/fracley", label: "View source" }
  },
  {
    id: "spin-dac",
    page: "/spin-dac",
    name: "Spin DAC",
    description: "USB-C audio hardware",
    image: "images/spin-dac/spin-dac.png",
    github: "https://github.com/HolographicX/spin-dac",
    meta: { type: "Audio hardware", year: "in progress" },
    subtitle: "A compact USB-C digital-to-analog converter for high-quality portable listening.",
    hero: { src: "images/spin-dac/spin-dac.png", alt: "Spin DAC render", caption: "01 — Spin DAC / current direction" },
    overview: {
      kicker: "A better signal path",
      heading: "Small device.<br>Serious sound.",
      body: [
        "Spin DAC started with a frustrating gap: commercial DACs that promise clean, portable audio tend to be either expensive, bulky, or both. I wanted to see whether a compact, budget-conscious USB-C DAC could still be engineered with a careful signal path and a focus on low noise.",
        "The design converts digital audio from a USB-C source into an analog signal for headphones or speakers. The circuit centers on three essential stages—USB to I²S, digital-to-analog conversion, and amplification—with an analog volume potentiometer to keep the physical interaction direct and simple."
      ],
      facts: [
        { label: "Audio", value: "Up to 24-bit / 192 kHz" },
        { label: "PCB", value: "Four layers" },
        { label: "Status", value: "PCB received · paused" }
      ]
    },
    process: {
      kicker: "A first audio board",
      heading: "Keeping the noise<br>out of the music.",
      intro: "This is my first PCB project and my first four-layer board. The board has arrived, and hardware assembly is currently paused while I focus on other projects.",
      entries: [
        { num: "01 / Research", title: "Making the project feel possible", body: "I began by looking at existing DIY DACs and compact headphone amplifiers. Those projects made the core architecture feel approachable: USB-to-I²S, a DAC, and an op-amp. The real challenge was not inventing the circuit, but building a clean enough implementation that noise and interference would not undermine it." },
        { num: "02 / Schematic", title: "Reading the details", body: "The schematic required the most research. I worked through datasheets, component options, footprints, and the supporting circuitry around each major part. By the end, the system had a concrete set of components and a signal path I could confidently carry into layout." },
        { num: "03 / PCB", title: "Separating the sensitive parts", body: "Audio made the board layout feel especially consequential. I used a four-layer stack-up to reduce electromagnetic interference and give the digital and analog sections room to stay deliberately separated. Routing meant paying attention not only to where a trace went, but which layer it belonged on and what it might disturb nearby." },
        { num: "04 / Enclosure", title: "Planning the object around the board", body: "Once the PCB was routed, I designed a compact enclosure in Onshape with room for the connectors, knob, and fasteners, then rendered the concept in Blender. The next stage is hands-on: assembling the delivered PCB and finding out how the decisions on screen translate into sound." }
      ]
    },
    features: {
      kicker: "Signal chain",
      heading: "Designed for<br>quiet listening.",
      items: ["USB-C input", "Up to 24-bit / 192 kHz audio", "PCM5102A DAC", "Integrated op-amp stage", "Separated analog and digital signals", "3.5 mm audio output"]
    },
    media: {
      kicker: "Documentation",
      heading: "From circuit<br>to enclosure.",
      layout: "spin-media",
      tiles: [
        { src: "images/spin-dac/render-2.png", alt: "Spin DAC alternate render", label: "Render / concept" },
        { src: "images/spin-dac/kicad-schematic.png", alt: "Spin DAC schematic", label: "Schematic / KiCad" },
        { src: "images/spin-dac/pcb-kicad-render.png", alt: "Spin DAC PCB render", label: "PCB / KiCad render" },
        { src: "images/spin-dac/pcb-kicad-routing.png", alt: "Spin DAC PCB routing", label: "PCB / routing" },
        { src: "images/spin-dac/PCB-real.jpg", alt: "Spin DAC PCB, physical board received", label: "PCB / received" },
        { src: "images/spin-dac/cad-1.png", alt: "Spin DAC CAD model", label: "CAD / enclosure" },
        { src: "images/spin-dac/cad-2.png", alt: "Spin DAC CAD model detail", label: "CAD / assembly" }
      ]
    },
    cta: { text: "Assembly is next when Spin DAC returns from its pause.", link: "https://github.com/HolographicX/spin-dac", label: "View source" }
  }
];

const byId = Object.fromEntries(projects.map(project => [project.id, project]));
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

const thumbHashes = {
  "images/fracley/build-prototype.jpg": "XSkKDYKKmXfbZ3ePd4h2hucmb3yw",
  "images/fracley/eclipse-image.png": "yPcBBYAI5yl4d3hwjmGXjQh3cHAH",
  "images/fracley/fracley.png": "FvcNFICGhniAh3eHd4eIj8r6tQ==",
  "images/fracley/initial-cad.png": "5fcJBICo2HZ2iIl/hppZZf+Y6A==",
  "images/fracley/moon-image.jpg": "yvcFBwAKZ2dUqodydadpN6eJRd/Kg68D",
  "images/fracley/real-final-build-photo.png": "GwgKFQK2Z493R2hYh4tneIeAawe4",
  "images/pulp/keyboard.png": "jQcKDIJQaJiVh4eReoi/a6+TBw==",
  "images/pulp/kicad-pcb.png": "CtcFBYImSViMdodweVmHleZmX272",
  "images/pulp/onshape-cad-image.png": "+QcKDID2qGl3mHifZInndL+QGQ==",
  "images/pulp/real-final-build.jpg": "oygGDIL8h4d8d4eMd4qVdl94Bw==",
  "images/pulp/render-2.png": "kvcJDIBRaJiUh3egiYbNbN+iBQ==",
  "images/spin-dac/PCB-real.jpg": "5SgODID6lml6iIaMdoeQhwdf5w==",
  "images/spin-dac/cad-1.png": "7wcSDoD1iYmHeIefZHd3qWiJrmofVQk=",
  "images/spin-dac/cad-2.png": "7gcSBID5lmeXV4h+hGf2dp+QCA==",
  "images/spin-dac/kicad-schematic.png": "OwgCBYCIqGZmmHibZ/ZohHaKUDv6",
  "images/spin-dac/pcb-kicad-render.png": "YxcGDYLplnivSnuJd7d3egZrh6A3",
  "images/spin-dac/pcb-kicad-routing.png": "R+cFDYIJd3edVXeHeXeXdAmdd7Bo",
  "images/spin-dac/render-2.png": "ZAcSBICpZ4dwd3d1hne/chjt+A==",
  "images/spin-dac/spin-dac.png": "YgcSBICpZ4hgh3hnhod/YAfDGA==",
};

/* ThumbHash by Evan Wallace, github.com/evanw/thumbhash (MIT licensed). */
function thumbHashToApproximateAspectRatio(hash) {
  let header = hash[3];
  let hasAlpha = hash[2] & 0x80;
  let isLandscape = hash[4] & 0x80;
  let lx = isLandscape ? (hasAlpha ? 5 : 7) : header & 7;
  let ly = isLandscape ? header & 7 : hasAlpha ? 5 : 7;
  return lx / ly;
}

function thumbHashToRGBA(hash) {
  let { PI, min, max, cos, round } = Math;

  let header24 = hash[0] | (hash[1] << 8) | (hash[2] << 16);
  let header16 = hash[3] | (hash[4] << 8);
  let l_dc = (header24 & 63) / 63;
  let p_dc = ((header24 >> 6) & 63) / 31.5 - 1;
  let q_dc = ((header24 >> 12) & 63) / 31.5 - 1;
  let l_scale = ((header24 >> 18) & 31) / 31;
  let hasAlpha = header24 >> 23;
  let p_scale = ((header16 >> 3) & 63) / 63;
  let q_scale = ((header16 >> 9) & 63) / 63;
  let isLandscape = header16 >> 15;
  let lx = max(3, isLandscape ? (hasAlpha ? 5 : 7) : header16 & 7);
  let ly = max(3, isLandscape ? header16 & 7 : hasAlpha ? 5 : 7);
  let a_dc = hasAlpha ? (hash[5] & 15) / 15 : 1;
  let a_scale = (hash[5] >> 4) / 15;

  let ac_start = hasAlpha ? 6 : 5;
  let ac_index = 0;
  let decodeChannel = (nx, ny, scale) => {
    let ac = [];
    for (let cy = 0; cy < ny; cy++)
      for (let cx = cy ? 0 : 1; cx * ny < nx * (ny - cy); cx++)
        ac.push((((hash[ac_start + (ac_index >> 1)] >> ((ac_index++ & 1) << 2)) & 15) / 7.5 - 1) * scale);
    return ac;
  };
  let l_ac = decodeChannel(lx, ly, l_scale);
  let p_ac = decodeChannel(3, 3, p_scale * 1.25);
  let q_ac = decodeChannel(3, 3, q_scale * 1.25);
  let a_ac = hasAlpha && decodeChannel(5, 5, a_scale);

  let ratio = thumbHashToApproximateAspectRatio(hash);
  let w = round(ratio > 1 ? 32 : 32 * ratio);
  let h = round(ratio > 1 ? 32 / ratio : 32);
  let rgba = new Uint8Array(w * h * 4), fx = [], fy = [];
  for (let y = 0, i = 0; y < h; y++) {
    for (let x = 0; x < w; x++, i += 4) {
      let l = l_dc, p = p_dc, q = q_dc, a = a_dc;

      for (let cx = 0, n = max(lx, hasAlpha ? 5 : 3); cx < n; cx++)
        fx[cx] = cos(PI / w * (x + 0.5) * cx);
      for (let cy = 0, n = max(ly, hasAlpha ? 5 : 3); cy < n; cy++)
        fy[cy] = cos(PI / h * (y + 0.5) * cy);

      for (let cy = 0, j = 0; cy < ly; cy++)
        for (let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx * ly < lx * (ly - cy); cx++, j++)
          l += l_ac[j] * fx[cx] * fy2;

      for (let cy = 0, j = 0; cy < 3; cy++) {
        for (let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx < 3 - cy; cx++, j++) {
          let f = fx[cx] * fy2;
          p += p_ac[j] * f;
          q += q_ac[j] * f;
        }
      }

      if (hasAlpha)
        for (let cy = 0, j = 0; cy < 5; cy++)
          for (let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx < 5 - cy; cx++, j++)
            a += a_ac[j] * fx[cx] * fy2;

      let b = l - 2 / 3 * p;
      let r = (3 * l - b + q) / 2;
      let g = r - q;
      rgba[i] = max(0, 255 * min(1, r));
      rgba[i + 1] = max(0, 255 * min(1, g));
      rgba[i + 2] = max(0, 255 * min(1, b));
      rgba[i + 3] = max(0, 255 * min(1, a));
    }
  }
  return { w, h, rgba };
}

function rgbaToDataURL(w, h, rgba) {
  let row = w * 4 + 1;
  let idat = 6 + h * (5 + row);
  let bytes = [
    137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0,
    w >> 8, w & 255, 0, 0, h >> 8, h & 255, 8, 6, 0, 0, 0, 0, 0, 0, 0,
    idat >>> 24, (idat >> 16) & 255, (idat >> 8) & 255, idat & 255,
    73, 68, 65, 84, 120, 1
  ];
  let table = [
    0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960,
    1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376,
    -2032938284, -1609899400, -1111625188
  ];
  let a = 1, b = 0;
  for (let y = 0, i = 0, end = row - 1; y < h; y++, end += row - 1) {
    bytes.push(y + 1 < h ? 0 : 1, row & 255, row >> 8, ~row & 255, (row >> 8) ^ 255, 0);
    for (b = (b + a) % 65521; i < end; i++) {
      let u = rgba[i] & 255;
      bytes.push(u);
      a = (a + u) % 65521;
      b = (b + a) % 65521;
    }
  }
  bytes.push(
    b >> 8, b & 255, a >> 8, a & 255, 0, 0, 0, 0,
    0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130
  );
  for (let [start, end] of [[12, 29], [37, 41 + idat]]) {
    let c = ~0;
    for (let i = start; i < end; i++) {
      c ^= bytes[i];
      c = (c >>> 4) ^ table[c & 15];
      c = (c >>> 4) ^ table[c & 15];
    }
    c = ~c;
    bytes[end++] = c >>> 24;
    bytes[end++] = (c >> 16) & 255;
    bytes[end++] = (c >> 8) & 255;
    bytes[end++] = c & 255;
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...bytes));
}

const blurCache = new Map();
function blurPlaceholder(src) {
  const hash = thumbHashes[src];
  if (!hash) return "";
  if (!blurCache.has(hash)) {
    const bytes = Uint8Array.from(atob(hash), char => char.charCodeAt(0));
    const { w, h, rgba } = thumbHashToRGBA(bytes);
    blurCache.set(hash, rgbaToDataURL(w, h, rgba));
  }
  return blurCache.get(hash);
}

const blurFrameStyle = src => {
  const url = blurPlaceholder(src);
  return url ? ` style="background-image:url('${url}')"` : "";
};

function revealBlurImages(root = document) {
  root.querySelectorAll("img.blur-img").forEach(img => {
    const reveal = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth > 0) reveal();
    else {
      img.addEventListener("load", reveal, { once: true });
      img.addEventListener("error", reveal, { once: true });
    }
  });
}

function renderGallery() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(project => {
    const href = project.page || `/project?project=${project.id}`;
    return `<article class="project-card"><a class="project-link" href="${href}" aria-label="View ${escapeHtml(project.name)} case study"><span class="blur-frame"${blurFrameStyle(project.image)}><img class="project-image blur-img" src="${project.image}" alt="${escapeHtml(project.name)} project preview" loading="lazy" decoding="async" /></span><div class="project-text"><span class="project-title">${escapeHtml(project.name)}</span><span class="project-description">${escapeHtml(project.description)}</span></div></a>${project.github ? `<a class="icon-button" href="${project.github}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(project.name)} on GitHub">${githubIcon}</a>` : ""}</article>`;
  }).join("");
}

function renderCaseStudy(project) {
  const facts = project.overview.facts.map(fact => `<div><span>${fact.label}</span><strong>${fact.value}</strong></div>`).join("");
  const paragraphs = project.overview.body.map(text => `<p>${text}</p>`).join("");
  const entries = project.process.entries.map(entry => `<article class="process-entry"><p class="process-number">${entry.num}</p><div><h3>${entry.title}</h3><p>${entry.body}</p></div></article>`).join("");
  const features = project.features.items.map(item => `<span>${item}</span>`).join("");
  const tiles = project.media.tiles.map(tile => `<figure class="media-tile${tile.large ? " large" : ""}"><button class="zoomable blur-frame" type="button"${blurFrameStyle(tile.src)} data-zoom-source="${tile.src}" data-zoom-alt="${escapeHtml(tile.alt)}"><img class="blur-img" src="${tile.src}" alt="${escapeHtml(tile.alt)}" loading="lazy" decoding="async"><span class="media-label">${tile.label}</span></button></figure>`).join("");
  return `<div class="project-shell">
    <a class="back-link" href="/">← &nbsp;Back to selected work</a>
    <header class="project-hero">
      <p class="project-meta">${project.meta.type} / ${project.meta.year}</p>
      <h1 class="project-heading">${project.name}.</h1>
      <p class="project-subtitle">${project.subtitle}</p>
    </header>
    <figure class="hero-figure"><button class="zoomable hero-zoom blur-frame" type="button"${blurFrameStyle(project.hero.src)} data-zoom-source="${project.hero.src}" data-zoom-alt="${escapeHtml(project.hero.alt)}"><img class="hero-image blur-img" src="${project.hero.src}" alt="${escapeHtml(project.hero.alt)}" fetchpriority="high" decoding="async"><span class="zoom-hint">Click to enlarge ↗</span></button><figcaption class="hero-caption">${project.hero.caption}</figcaption></figure>
    <section class="overview">
      <div><p class="section-kicker">${project.overview.kicker}</p><h2>${project.overview.heading}</h2></div>
      <div class="overview-copy">${paragraphs}<div class="facts">${facts}</div></div>
    </section>
    <section class="process-section">
      <div class="process-header"><p class="section-kicker">${project.process.kicker}</p><h2>${project.process.heading}</h2><p>${project.process.intro}</p></div>
      <div class="process-log">${entries}</div>
    </section>
    <section class="feature-section"><p class="section-kicker">${project.features.kicker}</p><h2>${project.features.heading}</h2><div class="feature-list">${features}</div></section>
    <section class="media-section"><p class="section-kicker">${project.media.kicker}</p><h2>${project.media.heading}</h2><div class="media-grid ${project.media.layout}">${tiles}</div></section>
    <footer class="case-cta"><p>${project.cta.text}</p><a class="repo-link" href="${project.cta.link}" target="_blank" rel="noopener">${project.cta.label} ↗</a></footer>
  </div>`;
}

function renderProject() {
  const detail = document.getElementById("project-detail");
  if (!detail) return;
  const id = document.body.dataset.project || new URLSearchParams(window.location.search).get("project");
  const project = id ? byId[id] : null;
  if (!project) {
    document.title = "Project not found | design fun";
    detail.innerHTML = `<div class="project-shell"><a class="back-link" href="/">← &nbsp;Back to selected work</a><section class="overview"><div><p class="section-kicker">404</p><h2>Project<br>not found.</h2></div><div class="overview-copy"><p>That case study doesn’t exist yet. Head back to see the selected work.</p></div></section></div>`;
    return;
  }
  document.title = `${project.name} | design fun`;
  detail.innerHTML = renderCaseStudy(project);
}

function setupLightbox() {
  const lightbox = document.createElement("dialog");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close enlarged image">×</button><img class="blur-img" alt="">`;
  document.body.appendChild(lightbox);
  const image = lightbox.querySelector("img");
  const revealImage = () => image.classList.add("is-loaded");
  image.addEventListener("load", revealImage);
  document.addEventListener("click", event => {
    const trigger = event.target.closest(".zoomable");
    if (trigger) {
      const src = trigger.dataset.zoomSource;
      image.classList.remove("is-loaded");
      image.style.backgroundImage = `url('${blurPlaceholder(src)}')`;
      image.alt = trigger.dataset.zoomAlt;
      image.src = src;
      if (image.complete && image.naturalWidth > 0) revealImage();
      lightbox.showModal();
    }
  });
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox || event.target.closest(".lightbox-close")) lightbox.close();
  });
}

renderGallery();
renderProject();
revealBlurImages();
setupLightbox();
