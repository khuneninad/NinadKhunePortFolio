from flask import Flask, render_template

app = Flask(__name__)

# --- PORTFOLIO CONFIGURATION ---
# Update this dictionary to customize the entire portfolio text and content.
PORTFOLIO_DATA = {
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
}

@app.route('/')
def home():
    return render_template('index.html', data=PORTFOLIO_DATA)

if __name__ == '__main__':
    app.run(debug=True)
