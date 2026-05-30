// Replace with your actual Render backend URL
const API = "https://my-portifolio-06vn.onrender.com";

// Fetch skills from backend
async function loadSkills() {
  try {
    const res = await fetch(`${API}/skills`);
    const data = await res.json();
    document.getElementById("skills-list").innerHTML =
      data.skills.map(s => `<div class="skill-item">${s}</div>`).join("");
  } catch (e) {
    document.getElementById("skills-list").innerHTML = `
      <div class="skill-item">Python</div>
      <div class="skill-item">R</div>
      <div class="skill-item">STATA</div>
      <div class="skill-item">Excel</div>
      <div class="skill-item">Database Design</div>
      <div class="skill-item">HTML & CSS</div>
      <div class="skill-item">Java</div>
      <div class="skill-item">Cloud Computing</div>
    `;
  }
}

// Fetch projects from backend
async function loadProjects() {
  try {
    const res = await fetch(`${API}/projects`);
    const data = await res.json();
    document.getElementById("projects-list").innerHTML =
      data.projects.map(p => `
        <div class="proj-card">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <span class="proj-tag">View on GitHub</span>
        </div>`).join("");
  } catch (e) {
    document.getElementById("projects-list").innerHTML = `
      <div class="proj-card">
        <h3>Poverty Prediction Project</h3>
        <p>Machine learning model to predict poverty levels using socioeconomic data. Built with Python and statistical analysis tools.</p>
        <span class="proj-tag">Python</span>
        <span class="proj-tag">Machine Learning</span>
      </div>
      <div class="proj-card">
        <h3>Personal Portfolio Website</h3>
        <p>Full-stack portfolio website deployed on Vercel (frontend) and Render (backend API) as part of Cloud Computing module.</p>
        <span class="proj-tag">Node.js</span>
        <span class="proj-tag">Vercel</span>
        <span class="proj-tag">Render</span>
      </div>
    `;
  }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = '#2a2a2a';
  }
});

loadSkills();
loadProjects();