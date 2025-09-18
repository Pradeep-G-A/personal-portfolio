import { useState } from "react";
import { useRef, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { ProfileSection } from "../components/profileSection.jsx";
import { AboutSection } from "../components/aboutSection.jsx";
import { ResumeSection } from "../components/resumeSection.jsx";
import { ProjectSection } from "../components/projectSection.jsx";
import { ContactSection } from "../components/contactSection.jsx";
import "./portfolio.css";

const sections = [
  {
    id: "about",
    label: "About",
    content: <AboutSection />,
  },
  {
    id: "resume",
    label: "Resume",
    content: <ResumeSection />,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    content: <ProjectSection />,
  },
  {
    id: "contact",
    label: "Contact",
    content: <ContactSection />,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const mainContentRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 992;

    if (isMobile) {
      // In mobile mode, the whole page scrolls.
      window.scrollTo({top: 535, behavior: 'smooth'});
      mainContentRef.current.scrollTop = ({ top: 0, behavior: 'smooth' });
    } else {
      // In desktop mode, the main-content div scrolls.
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = ({ top: 0, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  return (
    <>
      <div className="portfolio-container">
        <aside className="sidebar">
          <ProfileSection />
        </aside>

        <main className="main-content">
          <nav className="top-nav">
            <LayoutGroup>
              <ul>
                {sections.map((section) => (
                  <li key={section.id} className="nav-item">
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`nav-button ${
                        activeSection === section.id ? "active" : ""
                      }`}
                    >
                      {section.label}

                      {activeSection === section.id && (
                        <motion.span
                          layoutId="nav-bubble"
                          className="active-nav-bubble"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </LayoutGroup>
          </nav>

          <div className="content-display" ref={mainContentRef}>
            {sections.find((section) => section.id === activeSection)?.content}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
