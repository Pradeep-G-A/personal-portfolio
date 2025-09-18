import React from 'react'
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Triplanner from "../photos/tripplanner.webp";
import Database from "../photos/Database.webp";
import Affliate from "../photos/affliate.webp";
import School from "../photos/School.webp";
import {
  JavaIcon, JavaScriptIcon, NextJSIcon, SQLIcon, HTMLIcon, CSSIcon, ReactIcon, SpringBootIcon, FigmaIcon
} from '../portfolio/skills.jsx';
import "../portfolio/portfolio.css";




const projectData = [
  {
    title: "Trip Planner Web Application",
    image: Triplanner,
    description:
      "Designed a responsive frontend using React, enabling users to create and organize travel itineraries and optimizing component rendering.",
    skills: ["React", "HTML", "CSS", "JavaScript"], 
    liveUrl: "https://triplanners.netlify.app/",
    githubUrl: "https://github.com/Pradeep-G-A/Trip-Planner",
  },
  {
    title: "Affiliate Marketing Hub",
    image: Affliate,
    description:
    "Developed a comprehensive affiliate marketing hub featuring real-time analytics, link tracking, and commission management to maximize user earnings.",
    skills: ["React", "NextJS", "CSS", "JavaScript"], 
    liveUrl: "https://everydayessentialshub.netlify.app/",
    githubUrl: "https://github.com/Pradeep-G-A/Affliate-Marketing-Website",
  },
  {
    title: "Database Management System",
    image: Database,
    description:
    "Developed a full-stack system with Spring Boot and React. Increased data retrieval speed by 45% by implementing RESTful APIs.",
    skills: ["Spring Boot", "React", "Java", "SQL","CSS"], 
    liveUrl: null,
    githubUrl: "https://github.com/Pradeep-G-A/Database-System",
  },
  {
    title: "School Finder Web",
    image: School,
    description:
    "Developed an application to help users find schools in a specific location, with options to filter by curriculum (CBSE or State Board) and co-ed status.",
    skills: ["NextJS", "React", "CSS", "SQL"], 
    liveUrl: "https://web-school-finder.netlify.app/",
    githubUrl: "https://github.com/Pradeep-G-A/school-finder",
  },
];

const skillIconMap = {
  React: ReactIcon,
  JavaScript: JavaScriptIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  "Spring Boot": SpringBootIcon,
  Java: JavaIcon,
  SQL: SQLIcon,
  Figma: FigmaIcon,
  NextJS: NextJSIcon,
};

export const ProjectSection = () => {
    return (
         <div className="section-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <Link href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link" 
              >

              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
                />
              </Link>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                 <div className="skills-section" style={{ display:"flex",  gap: "8px" }}>
                {project.skills.map((skillName, skillIndex) => {
                  const IconComponent = skillIconMap[skillName];
                  return IconComponent ? (
                    <IconComponent
                      key={skillIndex}
                      className="skill-icon" 
                      width="24"
                      height="24"
                      title={skillName} 
                    />
                  ) : null; 
                })}
              </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <LaunchIcon fontSize="small" /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn github"
                  >
                    <GitHubIcon fontSize="small" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}
