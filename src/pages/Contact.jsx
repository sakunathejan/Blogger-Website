import React, { useState } from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <SEO 
        title="Contact"
        description={`Get in touch with ${siteConfig.siteName}. We'd love to hear from you!`}
      />
      <div className="contact-page">
        <div className="container">
          <div className="content-wrapper">
            <article className="contact-content">
              <h1>Contact Us</h1>
              <p className="contact-intro">
                We'd love to hear from you! Whether you have a question, feedback, or just want
                to say hello, feel free to reach out to us.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <h3>Email</h3>
                  <a href={`mailto:${siteConfig.authorEmail}`}>{siteConfig.authorEmail}</a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

