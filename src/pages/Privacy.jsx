import React from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../config';
import './Privacy.css';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description={`Privacy Policy for ${siteConfig.siteName}. Learn how we collect, use, and protect your personal information.`}
      />
      <div className="privacy-page">
        <div className="container">
          <div className="content-wrapper">
            <article className="privacy-content">
              <h1>Privacy Policy</h1>
              <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="privacy-section">
                <h2>Introduction</h2>
                <p>
                  At {siteConfig.siteName}, we take your privacy seriously. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you
                  visit our website. Please read this privacy policy carefully.
                </p>
              </div>

              <div className="privacy-section">
                <h2>Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we
                may collect on the site includes:</p>
                <ul>
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as
                  your name, email address, and demographic information, that you voluntarily give
                  to us when you register with the site or when you choose to participate in
                  various activities related to the site.</li>
                  <li><strong>Derived Data:</strong> Information our servers automatically collect
                  when you access the site, such as your IP address, your browser type, your
                  operating system, your access times, and the pages you have viewed directly
                  before and after accessing the site.</li>
                  <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to
                  track the activity on our site and hold certain information. You can instruct
                  your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>How We Use Your Information</h2>
                <p>We may use information collected about you via the site to:</p>
                <ul>
                  <li>Create and manage your account</li>
                  <li>Process your transactions and send you related information</li>
                  <li>Email you regarding your account or order</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                  <li>Generate a personal profile about you to make future visits more personalized</li>
                  <li>Increase the efficiency and operation of the site</li>
                  <li>Monitor and analyze usage and trends to improve your experience</li>
                  <li>Notify you of updates to the site</li>
                  <li>Perform other business activities as needed</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>Disclosure of Your Information</h2>
                <p>We may share information we have collected about you in certain situations. Your
                information may be disclosed as follows:</p>
                <ul>
                  <li><strong>By Law or to Protect Rights:</strong> If we believe the release of
                  information about you is necessary to respond to legal process, to investigate
                  or remedy potential violations of our policies, or to protect the rights,
                  property, and safety of others, we may share your information as permitted or
                  required by any applicable law, rule, or regulation.</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information
                  with third parties that perform services for us or on our behalf, including
                  payment processing, data analysis, email delivery, hosting services, customer
                  service, and marketing assistance.</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information
                  in connection with, or during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business to another company.</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect
                  your personal information. While we have taken reasonable steps to secure the
                  personal information you provide to us, please be aware that despite our efforts,
                  no security measures are perfect or impenetrable, and no method of data transmission
                  can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div className="privacy-section">
                <h2>Third-Party Advertising (AdSense)</h2>
                <p>
                  We use Google AdSense to serve ads on our website. Google AdSense is a third-party
                  advertising service that uses cookies and similar technologies to serve ads based on
                  your interests and browsing behavior.
                </p>
                <p>
                  <strong>How AdSense Works:</strong>
                </p>
                <ul>
                  <li>Google AdSense uses cookies to personalize ads and analyze traffic</li>
                  <li>AdSense may collect information about your visits to this and other websites</li>
                  <li>This information is used to provide relevant advertisements</li>
                  <li>AdSense may use web beacons to collect information about your browsing behavior</li>
                </ul>
                <p>
                  <strong>Your Options:</strong>
                </p>
                <ul>
                  <li>You can opt out of personalized ads by visiting{' '}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                      Google Ad Settings
                    </a>
                  </li>
                  <li>You can opt out of third-party cookies by visiting{' '}
                    <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                      Your Online Choices
                    </a>
                  </li>
                  <li>You can disable cookies in your browser settings</li>
                  <li>You can use browser extensions to block ads</li>
                </ul>
                <p>
                  <strong>Google's Privacy Policy:</strong>
                </p>
                <p>
                  For more information about how Google uses data when you use our site, please visit{' '}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                    Google's Privacy & Terms
                  </a>.
                </p>
              </div>

              <div className="privacy-section">
                <h2>Policy for Children</h2>
                <p>
                  We do not knowingly solicit information from or market to children under the age
                  of 13. If we learn that we have collected personal information from a child under
                  age 13 without verification of parental consent, we will delete that information
                  as quickly as possible.
                </p>
              </div>

              <div className="privacy-section">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time in order to reflect changes
                  to our practices or for other operational, legal, or regulatory reasons. We will
                  notify you of any changes by posting the new Privacy Policy on this page and
                  updating the "Last updated" date.
                </p>
              </div>

              <div className="privacy-section">
                <h2>Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us
                  at <a href={`mailto:${siteConfig.authorEmail}`}>{siteConfig.authorEmail}</a>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;

