import React from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../config';
import './About.css';

const About = () => {
  return (
    <>
      <SEO 
        title="About"
        description={`Learn more about ${siteConfig.siteName} and our mission to deliver quality content.`}
      />
      <div className="about-page">
        <div className="container">
          <div className="content-wrapper">
            <article className="about-content">
              <h1>About Us</h1>
              <div className="about-section">
                <h2>Welcome to {siteConfig.siteName}</h2>
                <p>
                  {siteConfig.siteDescription}
                </p>
                <p>
                  We are dedicated to delivering high-quality, informative, and engaging content
                  that resonates with our readers. Our mission is to provide valuable insights,
                  share knowledge, and create a community of like-minded individuals.
                </p>
              </div>

              <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to create content that educates, inspires, and empowers our
                  readers. We believe in the power of storytelling and the importance of sharing
                  diverse perspectives on topics that matter.
                </p>
              </div>

              <div className="about-section">
                <h2>What We Do</h2>
                <p>
                  We publish articles on a wide range of topics including technology, lifestyle,
                  travel, food, health, business, design, and personal development. Our content
                  is carefully curated to provide value to our readers and help them stay informed
                  about the latest trends and insights.
                </p>
              </div>

              <div className="about-section">
                <h2>Get in Touch</h2>
                <p>
                  We'd love to hear from you! If you have any questions, suggestions, or feedback,
                  please don't hesitate to <a href="/contact">contact us</a>. You can also reach
                  us at <a href={`mailto:${siteConfig.authorEmail}`}>{siteConfig.authorEmail}</a>.
                </p>
              </div>

              <div className="about-section">
                <h2>Follow Us</h2>
                <p>
                  Stay connected with us on social media for the latest updates, articles, and
                  behind-the-scenes content. Follow us on our social media channels to join our
                  growing community.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

