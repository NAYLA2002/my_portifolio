const express = require("express");
const cors    = require("cors");
const app     = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Portfolio API running — Scolastica Christopher Abdallah" });
});

// GET /skills
app.get("/skills", (req, res) => {
  res.json({
    skills: [
      "Python",
      "R",
      "STATA",
      "Excel",
      "Database Design",
      "HTML & CSS",
      "Java",
      "Cloud Computing",
      "Sales & Marketing"
    ]
  });
});

// GET /projects
app.get("/projects", (req, res) => {
  res.json({
    projects: [
      {
        name: "Poverty Prediction Project",
        description: "Machine learning model to predict poverty levels using socioeconomic data. Built with Python and statistical analysis tools.",
        tags: ["Python", "Machine Learning", "Data Science"],
        github: "https://github.com/NAYLA2002"
      },
      {
        name: "Personal Portfolio Website",
        description: "Full-stack portfolio website deployed on Vercel (frontend) and Render (backend API) as part of Cloud Computing module.",
        tags: ["Node.js", "Vercel", "Render"],
        github: "https://github.com/NAYLA2002"
      }
    ]
  });
});

// GET /contact
app.get("/contact", (req, res) => {
  res.json({
    email: "scolasticac4@gmail.com",
    phone: "+255616286879",
    github: "https://github.com/NAYLA2002",
    location: "Dar es Salaam, Tanzania"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});