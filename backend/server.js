const express = require("express");
const cors    = require("cors");
const app    = express();

// Allow Vercel frontend to call this API
app.use(cors());
app.use(express.json());

// Health check — Render pings this to keep service alive
app.get("/", (req, res) => {
  res.json({ status: "Portfolio API running" });
});

// GET /skills
app.get("/skills", (req, res) => {
  res.json({
    skills: [
      "JavaScript", "Node.js",
      "Cloud Deployment", "HTML/CSS",
      "REST APIs", "Git"
    ]
  });
});

// GET /projects
app.get("/projects", (req, res) => {
  res.json({
    projects: [
      {
        name: "Portfolio Website",
        description: "Personal site deployed on Vercel + Render"
      },
      {
        name: "Cloud Storage App",
        description: "File upload system using cloud storage APIs"
      }
    ]
  });
});

// GET /contact
app.get("/contact", (req, res) => {
  res.json({
    email: "you@example.com",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername"
  });
});

// Render assigns the port automatically
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});