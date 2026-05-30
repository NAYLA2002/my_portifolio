// Replace with your actual Render backend URL
const API = "https://my-portifolio-06vn.onrender.com";

// Fetch skills from backend
async function loadSkills() {
  const res = await fetch(`${API}/skills`);
  const data = await res.json();
  document.getElementById("skills-list").innerHTML =
    data.skills.map(s => `<span class="badge">${s}</span>`).join("");
}

// Fetch projects from backend
async function loadProjects() {
  const res = await fetch(`${API}/projects`);
  const data = await res.json();
  document.getElementById("projects-list").innerHTML =
    data.projects.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>`).join("");
}

loadSkills();
loadProjects();