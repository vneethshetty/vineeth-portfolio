// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.querySelector(".progress-bar").style.width = progress + "%";
});

// Inject About
document.getElementById("about-content").innerHTML = portfolioData.about;

// Inject Experience
const experienceContainer = document.getElementById("experience-container");
portfolioData.experience.forEach(exp => {
  experienceContainer.innerHTML += `
    <div class="card">
      <h3>${exp.role} - ${exp.company}</h3>
      <p><strong>${exp.duration}</strong></p>
      <p>${exp.description}</p>
    </div>
  `;
});

// Inject Projects
const projectsContainer = document.getElementById("projects-container");
portfolioData.projects.forEach(project => {
  projectsContainer.innerHTML += `
    <div class="card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech}</p>
      <a href="${project.github}" target="_blank">View on GitHub →</a>
    </div>
  `;
});

// Inject Certifications
const certContainer = document.getElementById("certifications-container");
portfolioData.certifications.forEach(cert => {
  certContainer.innerHTML += `
    <div class="card">
      <h3>${cert.name}</h3>
      <p>${cert.issuer}</p>
      <a href="${cert.link}" target="_blank">View Certificate →</a>
    </div>
  `;
});
