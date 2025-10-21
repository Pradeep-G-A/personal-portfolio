import { useState } from 'react';  
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';    
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import Link from '@mui/material/Link';
import "../portfolio/portfolio.css";

export const ContactSection = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };
    
        const handleFormSubmit = (e) => {
            e.preventDefault();
            const { name, email, message } = formData;
    
            // Construct the mailto link
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(
    `You have received a new message from your portfolio contact form.
    
    Name: ${name}
    Email: ${email}
    Message:
    ${message}
    `
            );
    
            // Open the user's default email client
            window.location.href = `mailto:gapradeep123@gmail.com?subject=${subject}&body=${body}`;
            
            // Clear the form after preparing the email
            setFormData({ name: '', email: '', message: '' });
        };
    
    return (
         <div className="section-content">
            <h2>Get in Touch</h2>
            <p>
                I'm currently available for freelance work and open to discussing new projects. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="contact-container">
                <div className="contact-info-wrapper">
                    <h3>Contact Information</h3>
                    <p>Fill up the form and I will get back to you within 24 hours.</p>
                    <div className="contact-details-grid">
                        <div className="contact-detail-item">
                            <CallIcon />
                            <span>+91 6369114503</span>
                        </div>
                        <div className="contact-detail-item">
                            <EmailIcon />
                            <a 
                            href="mailto:gapradeep123@gmail.com"
                            className="profile-info link"
                            >
                            gapradeep123@gmail.com
                            </a>                        
                        </div>
                        <div className="contact-detail-item">
                            <LocationOnIcon />
                            <span>Coimbatore, India</span>
                        </div>
                    </div>
                    <div className="social-links">
                        <Link href="https://github.com/pradeepga" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link>
                        <Link href="https://www.linkedin.com/in/pradeep-ga1104/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Link>
                        <Link href="https://x.com/Pradeep_g_a7" target="_blank" rel="noopener noreferrer"><XIcon /></Link>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder='Enter Your Name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder='Enter Your Mail-Id' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} required placeholder='Enter the Message.......'></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
