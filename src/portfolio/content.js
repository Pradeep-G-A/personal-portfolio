import { useState } from 'react';

// --- Helper Components for Organization ---

// This component represents the content for the "About" section
const AboutSection = () => (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            Aspiring Full-Stack Developer with hands-on experience in building responsive web applications using React, Spring Boot, and MySQL. Proven ability to deliver performance-driven projects. Eager to apply skills in software development and UI/UX design to create innovative and user-centric solutions.
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Professional Interests</h3>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600">
            <li>Full-stack Web Development and UI/UX Design</li>
            <li>Renewable Energy Systems and Sustainable Solutions</li>
        </ul>
    </div>
);

// This component represents the content for the "Resume" section
const ResumeSection = () => (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Resume</h2>
        <div className="space-y-8">
            {/* Education Section */}
            <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-3 border-b-2 pb-2 border-indigo-200">Education</h3>
                <div className="mt-2 pl-4">
                     <p className="font-bold text-lg text-gray-800">Bachelor of Engineering in Electrical and Electronics Engineering (EEE)</p>
                    <p className="text-gray-600">Sri Krishna College of Technology, Coimbatore.</p>
                    <p className="text-sm text-gray-500 mt-1">Nov 2021 - Mar 2025</p>
                </div>
            </div>

            {/* Technical Skills Section */}
            <div>
                 <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 border-b-2 pb-2 border-indigo-200">Technical Skills</h3>
                 <div className="flex flex-wrap gap-4">
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Java</span>
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">JavaScript</span>
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">SQL</span>
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">HTML</span>
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">CSS</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">React</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">MySQL</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">RESTful APIs</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">UI/UX Design</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Figma</span>
                 </div>
            </div>

            {/* Certifications Section */}
            <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-3 border-b-2 pb-2 border-indigo-200">Certifications</h3>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4 text-gray-600">
                    <li>GREAT LEARNING - REACT JS</li>
                    <li>NASSCOM - AWS Cloud Practitioner Essentials</li>
                    <li>OUTSKILL - Generative AI Mastermind</li>
                </ul>
            </div>
        </div>
    </div>
);

// This component represents the content for the "Portfolio" section
const PortfolioSection = () => (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project One */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700">Trip Planner Web Application</h3>
                <p className="text-sm text-gray-500 mb-2">Frontend Developer | Apr 2022 - Dec 2022</p>
                <p className="text-gray-600">Designed and developed a responsive frontend using React, enabling users to create and organize travel itineraries. Optimized component rendering to reduce page load time by 30%.</p>
            </div>
             {/* Project Two */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700">Database Management System</h3>
                <p className="text-sm text-gray-500 mb-2">Full-Stack Developer | Feb 2023 - Jul 2023</p>
                <p className="text-gray-600">Developed a full-stack system with Spring Boot, React, and MySQL. Increased data retrieval speed by 45% by implementing RESTful APIs and indexing.</p>
            </div>
            {/* Project Three */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-700">Automotive Spare Parts E-Commerce Platform</h3>
                <p className="text-sm text-gray-500 mb-2">Full-Stack Developer | Jun 2024 - Mar 2025</p>
                <p className="text-gray-600">Built a specialized e-commerce platform using Spring Boot and React. Engineered an advanced search feature to filter parts by vehicle make, model, and year, streamlining product discovery.</p>
            </div>
        </div>
    </div>
);

// This component represents the content for the "Contact" section
const ContactSection = () => (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-lg animate-fadeIn text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-6">
            I'm always open to discussing new projects or opportunities. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a href="mailto:gapradeep123@gmail.com" className="font-medium text-indigo-600 hover:text-indigo-800">gapradeep123@gmail.com</a>
             <span className="hidden sm:block">|</span>
             <a href="tel:6369114503" className="font-medium text-indigo-600 hover:text-indigo-800">6369114503</a>
             <span className="hidden sm:block">|</span>
             
        </div>
    </div>
);


// --- Main App Component ---

export default function Content() {
    const [activeSection, setActiveSection] = useState('about');

    const renderContent = () => {
        switch (activeSection) {
            case 'about': return <AboutSection />;
            case 'resume': return <ResumeSection />;
            case 'portfolio': return <PortfolioSection />;
            case 'contact': return <ContactSection />;
            default: return <AboutSection />;
        }
    };
    
    // Add keyframes for fadeIn animation
    const styles = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
    `;

    const NavButton = ({ section, children }) => {
        const isActive = activeSection === section;
        return (
            <li>
                <button
                    onClick={() => setActiveSection(section)}
                    className={`px-3 sm:px-5 py-3 text-sm sm:text-lg font-medium transition-colors duration-300 relative block ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                    {children}
                    {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 rounded-t-full"></span>
                    )}
                </button>
            </li>
        );
    };

    return (
        <>
            <style>{styles}</style>
            <div className="min-h-screen bg-gray-100 font-sans">
                <header className="bg-gray-800 shadow-md sticky top-0 z-10">
                    <nav className="max-w-6xl mx-auto">
                        <ul className="flex justify-center">
                            <NavButton section="about">About</NavButton>
                            <NavButton section="resume">Resume</NavButton>
                            <NavButton section="portfolio">Portfolio</NavButton>
                            <NavButton section="contact">Contact</NavButton>
                        </ul>
                    </nav>
                </header>

                <main className="p-4 sm:p-6 md:p-10">
                    <div className="max-w-4xl mx-auto">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </>
    );
}

