import {JavaIcon,JavaScriptIcon,SQLIcon,HTMLIcon,CSSIcon,ReactIcon,SpringBootIcon,AwsIcon,AiIcon,FigmaIcon} from "../portfolio/skills.jsx";
import Resume from "../assests/Pradeep_G _A-Resume.pdf";
import SchoolIcon from "@mui/icons-material/School";
//import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Greatlearning from "../photos/greatlearning.png"
import Amazonessentials from "../photos/amazonessentialss.png"
import Outskill from "../photos/outskill.png"
import "../portfolio/portfolio.css";

function downloadResume() {
  const link = document.createElement("a");
  link.href = Resume;
  link.download = "Pradeep_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  const certificates = [
    {
      title: "React JS Development",
      issuer: "Great Learning",
      imageUrl: Greatlearning,
      icon: <ReactIcon width="35" height="35" /> // Add the icon component here

    },
    {
      title: "AWS Cloud Essentials",
      issuer: "NASSCOM",
      imageUrl: Amazonessentials,
      icon: <AwsIcon width="35" height="35" /> 
    },
    {
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      imageUrl: Outskill,
      icon: <AiIcon width="35" height="35" /> 
    },
  ];

export const ResumeSection = () => {
  return (
    <div className="section-content">
      <h2>
        Resume
        <button className="download-btn" onClick={downloadResume}>
          Download
          <svg
            id="download"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"></path>
          </svg>
        </button>
      </h2>

      <div className="timeline">
        <div className="timeline-section">
          <div className="timeline-header">
            <div className="timeline-icon">
              <SchoolIcon />
            </div>
            <h3>Education</h3>
          </div>
          <div className="timeline-item">
            <h4 className="item-title">Bachelor of Engineering in EEE</h4>
            <div className="item-meta">
              <span className="item-location">
                Sri Krishna College of Technology, Coimbatore.
              </span>
              <span className="item-date">2021 – 2025</span>
            </div>
            <p className="item-description">Percentage: 75%</p>
          </div>
          <div className="timeline-item">
            <h4 className="item-title">Higher Secondary School</h4>
            <div className="item-meta">
              <span className="item-location">
                Saru Matric Higher Secondary School, Sathyamangalam.
              </span>
              <span className="item-date">2020 – 2021</span>
            </div>
            <p className="item-description">Percentage: 91%</p>
          </div>
          <div className="timeline-item">
            <h4 className="item-title">Grade X</h4>
            <div className="item-meta">
              <span className="item-location">
                Saru Matric Higher Secondary School, Sathyamangalam.
              </span>
              <span className="item-date">2018 – 2019</span>
            </div>
            <p className="item-description">Percentage: 90%</p>
          </div>
        </div>

        <div className="timeline-section">
          {" "}
          <div className="timeline-header">
            {" "}
            <div className="timeline-icon">
              <EmojiEventsIcon />
            </div>{" "}
            <h3>Certifications</h3>{" "}
          </div>{" "}
                  <div className="certificate-grid">
          {" "}
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="certificate-card"
              style={{ backgroundImage: `url(${cert.imageUrl})` ,backgroundPosition:`center`,backgroundSize:`cover`}}
            >
              {" "}
              <div className="certificate-content">
                {" "}
                <div className="certificate-icon" > {cert.icon} </div>{" "}
                <h4 className="certificate-title">{cert.title}</h4>{" "}
                <p className="certificate-issuer">{cert.issuer}</p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        </div>

        {/* <div className="timeline-section">
            <div className="timeline-header">
              <div className="timeline-icon"><WorkIcon /></div>
              <h3>Experience</h3>
              </div>
              <div className="timeline-item">
              <h4 className="item-title">Web Development Intern</h4>
              <div className="item-meta">
                <span className="item-date">2023</span>
                <span className="item-location">Tech Solutions Inc.</span>
              </div>
              <p className="item-description">Assisted the development team in building and maintaining client websites using React and modern CSS practices.</p>
              </div>
              </div> */}

        <div className="timeline-section">
          <div className="timeline-header">
            <div className="timeline-icon">
              <BuildIcon />
            </div>
            <h3>Skills</h3>
          </div>
          <div className="skills-container" style={{ paddingTop: "1rem" }}>
            <span className="logocontext">
              <JavaIcon width="30" height="30" />
              Java
            </span>
            <span className="logocontext">
              <JavaScriptIcon width="30" height="30" />
              JavaScript
            </span>
            <span className="logocontext">
              <SQLIcon width="30" height="30" />
              SQL
            </span>
            <span className="logocontext">
              <HTMLIcon width="30" height="30" />
              HTML
            </span>
            <span className="logocontext">
              <CSSIcon width="30" height="30" />
              CSS
            </span>
            <span className="logocontext">
              <ReactIcon width="30" height="30" />
              React
            </span>
            <span className="logocontext">
              <SpringBootIcon width="30" height="30" />
              Spring Boot
            </span>
            <span className="logocontext">
              <FigmaIcon width="30" height="30" />
              Figma
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
