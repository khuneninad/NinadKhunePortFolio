// Portfolio Configuration
const portfolioData = {
    "profile": {
        "name": "Ninad Khune",
        "title": "Data Engineer / Data Scientist",
        "location": "Navi Mumbai, India",
        "email": "ninadkhune3@gmail.com",
        "phone": "+91 8421053808",
        "linkedin": "https://www.linkedin.com/in/ninadkhune",
        "github": "https://github.com/khuneninad",
        "summary": "Data Professional with specialized expertise across Core Banking Systems, scalable ETL pipelines, and Big Data frameworks. Experienced in processing high-volume transaction data, constructing end-to-end data pipelines, and implementing analytical solutions to solve real-world business problems."
    },
    "skills": {
        "Languages & Frameworks": ["SQL", "Python", "PySpark", "Hadoop Ecosystem", "Hive"],
        "Data Engineering & Tools": ["Alteryx Designer (Core Certified)", "Apache Kafka", "Apache Airflow", "ETL Pipelines", "Data Warehousing"],
        "Databases & Analytics": ["Oracle", "MySQL", "Snowflake", "Power BI", "Excel"],
        "Cloud & AI (Exposure)": ["AWS (S3)", "Azure (Blob Storage)", "Machine Learning Fundamentals", "TensorFlow", "REST APIs"]
    },
    "experience": [
        {
            "role": "Assistant System Analyst",
            "company": "C-Edge Technologies Ltd. (TCS-SBI Joint Venture)",
            "period": "June 2025 - Present",
            "bullets": [
                "Support Core Banking System (CBS) operations for 10+ Regional Rural Banks, managing high-volume data validation and daily reconciliation.",
                "Author complex SQL and PL/SQL queries for data analysis, operational reporting, and rapid production support troubleshooting.",
                "Configure core banking products (Loans, CC/OD, SB, FD) following strict regulatory compliance rules."
            ]
        },
        {
            "role": "Big Data Analytics Graduate",
            "company": "C-DAC Mumbai",
            "period": "August 2024 - February 2025",
            "bullets": [
                "Completed intensive PG-Diploma in Big Data Analytics covering distributed storage, streaming architectures, and advanced data pipelines.",
                "Designed and optimized analytical workflows, ETL workflows, data cleaning pipelines, and feature engineering schemas."
            ]
        }
    ],
    "projects": [
        {
            "title": "Banking Transaction Data Analysis Pipeline",
            "tech": ["PySpark", "Python", "SQL", "Power BI"],
            "description": "Developed an end-to-end distributed data pipeline to process high-volume transaction datasets. Implemented rule-based data transformation logic to surface anomalies and built a responsive Power BI dashboard tied to a optimized star schema for corporate metrics."
        },
        {
            "title": "ETL Data Pipeline & Workflow Automation",
            "tech": ["Alteryx", "SQL", "Python", "MySQL", "AWS S3"],
            "description": "Built an automated ETL pipeline that integrated diverse data streams, executing data cleaning, transformation, and staging routines. Optimized query performance via target database indexing and established data staging workflows utilizing cloud object storage."
        },
        {
            "title": "LLM Resume Analyzer & Insights Tool",
            "tech": ["Python", "LLM APIs", "Streamlit", "LangChain"],
            "description": "Created a lightweight web application that parses and compares structured documents against target criteria, dynamically calculating semantic match scoring, identifying critical skills gaps, and offering contextual optimization recommendations."
        }
    ]
};

// DOM Elements setup
document.addEventListener('DOMContentLoaded', () => {

    // 1. Populate Hero Section
    document.getElementById('hero-name').textContent = portfolioData.profile.name;
    document.getElementById('hero-title').textContent = portfolioData.profile.title;
    document.getElementById('hero-summary').textContent = portfolioData.profile.summary;

    // 2. Populate About Section
    document.getElementById('about-text').innerHTML = `
          <p>${portfolioData.profile.summary}</p>
          <p style="margin-top: 1rem;">I thrive on turning raw data into actionable insights and robust pipelines.</p>
      `;

    document.getElementById('about-details').innerHTML = `
          <div class="detail-item">
              <span class="detail-label">Location</span>
              <span class="detail-value">${portfolioData.profile.location}</span>
          </div>
          <div class="detail-item">
              <span class="detail-label">Email</span>
              <span class="detail-value"><a href="mailto:${portfolioData.profile.email}">${portfolioData.profile.email}</a></span>
          </div>
          <div class="detail-item">
              <span class="detail-label">Phone</span>
              <span class="detail-value">${portfolioData.profile.phone}</span>
          </div>
      `;

    // 3. Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    for (const [category, skills] of Object.entries(portfolioData.skills)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';

        const title = document.createElement('h3');
        // simple icon representation based on category text
        let icon = '▹';
        if (category.includes('Languages')) icon = '⚡';
        if (category.includes('Engineering')) icon = '⚙️';
        if (category.includes('Databases')) icon = '🗄️';
        if (category.includes('Cloud')) icon = '☁️';

        title.innerHTML = `${icon} ${category}`;
        categoryDiv.appendChild(title);

        const listDiv = document.createElement('div');
        listDiv.className = 'skill-list';

        skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            listDiv.appendChild(tag);
        });

        categoryDiv.appendChild(listDiv);
        skillsContainer.appendChild(categoryDiv);
    }

    // 4. Populate Experience
    const experienceTimeline = document.getElementById('experience-timeline');
    portfolioData.experience.forEach(exp => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'experience-item';

        let bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join('');

        itemDiv.innerHTML = `
              <div class="exp-header">
                  <div>
                      <h3 class="exp-role">${exp.role}</h3>
                      <div class="exp-company">${exp.company}</div>
                  </div>
                  <div class="exp-period">${exp.period}</div>
              </div>
              <ul class="exp-bullets">
                  ${bulletsHtml}
              </ul>
          `;
        experienceTimeline.appendChild(itemDiv);
    });

    // 5. Populate Projects
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';

        let techHtml = proj.tech.map(t => `<span>${t}</span>`).join('');

        card.innerHTML = `
              <div class="project-header">
                  <div class="project-icon">📁</div>
              </div>
              <h3 class="project-title">${proj.title}</h3>
              <p class="project-desc">${proj.description}</p>
              <div class="project-tech">
                  ${techHtml}
              </div>
          `;
        projectsGrid.appendChild(card);
    });

    // 6. Populate Contact
    document.getElementById('contact-card').innerHTML = `
          <h3>Get In Touch</h3>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:${portfolioData.profile.email}" class="btn btn-primary" style="margin-bottom: 2rem;">Say Hello</a>
          
          <div style="display:flex; justify-content:center; gap: 1.5rem; margin-top: 2rem;">
              <a href="${portfolioData.profile.linkedin}" target="_blank" class="btn btn-secondary" style="padding: 0.5rem 1rem;">LinkedIn</a>
              <a href="${portfolioData.profile.github}" target="_blank" class="btn btn-secondary" style="padding: 0.5rem 1rem;">GitHub</a>
          </div>
      `;

    // 7. Footer
    document.getElementById('footer-content').innerHTML = `
          <p>Designed & Built by ${portfolioData.profile.name}</p>
      `;

    // Add simple scroll effect for navbar
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});
