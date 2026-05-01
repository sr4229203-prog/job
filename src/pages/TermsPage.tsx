import React, { useState } from 'react';
import './LoginPage.css';

const TermsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card" style={{ maxWidth: '900px', maxHeight: '70vh', overflowY: 'auto' }}>
          <div className="login-header">
            <h1>{activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h1>
          </div>

          <div className="tabs-container">
            <button
              className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              Terms
            </button>
            <button
              className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              Privacy
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'terms' ? (
              <div className="terms-content">
                <h3>Terms of Service</h3>
                <p>Last updated: May 2026</p>
                
                <section>
                  <h4>1. Acceptance of Terms</h4>
                  <p>By accessing and using the Academic Jobs portal, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </section>

                <section>
                  <h4>2. User Accounts</h4>
                  <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                </section>

                <section>
                  <h4>3. Intellectual Property</h4>
                  <p>The content, features, and functionality of our service are owned by Academic Jobs, its licensors, or other providers of such material and are protected by international copyright laws.</p>
                </section>

                <section>
                  <h4>4. Limitations of Liability</h4>
                  <p>In no event shall Academic Jobs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption).</p>
                </section>

                <section>
                  <h4>5. Modifications</h4>
                  <p>We reserve the right to modify these terms at any time. Your continued use of the service following the posting of revised terms means that you accept and agree to the changes.</p>
                </section>
              </div>
            ) : (
              <div className="privacy-content">
                <h3>Privacy Policy</h3>
                <p>Last updated: May 2026</p>

                <section>
                  <h4>1. Information We Collect</h4>
                  <p>We collect information you provide directly, such as when you create an account or apply for a job.</p>
                </section>

                <section>
                  <h4>2. How We Use Your Information</h4>
                  <p>We use the information we collect to provide, maintain, and improve our services, and to send you technical notices and support messages.</p>
                </section>

                <section>
                  <h4>3. Information Security</h4>
                  <p>We take reasonable measures to help protect personal information from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                </section>

                <section>
                  <h4>4. Third-Party Services</h4>
                  <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices or the content of such websites.</p>
                </section>

                <section>
                  <h4>5. Contact Us</h4>
                  <p>If you have questions about this Privacy Policy, please contact us at privacy@academicjobs.com</p>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;