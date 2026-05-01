import React from 'react';
import './SimplePage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-content" style={{ maxWidth: '900px', textAlign: 'left' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎓</div>
          <h1>About Academic Jobs</h1>
          <p style={{ fontSize: '18px', color: '#666' }}>Connecting talented researchers with academic opportunities worldwide</p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '12px' }}>Our Mission</h2>
          <p>
            Academic Jobs is dedicated to simplifying the academic job search process for researchers, scholars, and educators around the world. 
            We believe that finding the right position should be efficient, transparent, and accessible to everyone.
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '12px' }}>What We Offer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '20px' }}>
            <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>🔍</span>
              <h3>Advanced Search</h3>
              <p>Find positions by location, field, institution, or job type with our powerful filtering system.</p>
            </div>
            <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>💼</span>
              <h3>Job Postings</h3>
              <p>Create comprehensive job listings that attract the best talent in your field.</p>
            </div>
            <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>📊</span>
              <h3>Analytics</h3>
              <p>Track applications, view statistics, and optimize your hiring strategy.</p>
            </div>
            <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>🔔</span>
              <h3>Job Alerts</h3>
              <p>Get notified about new positions that match your interests and qualifications.</p>
            </div>
            <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>❤️</span>
              <h3>Saved Jobs</h3>
              <p>Bookmark positions and review them later at your convenience.</p>
            </div>
            <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>👥</span>
              <h3>Community</h3>
              <p>Connect with other academics and build your professional network.</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '12px' }}>By the Numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#667eea' }}>2,500+</div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Active Positions</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#667eea' }}>50,000+</div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Job Seekers</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#667eea' }}>150+</div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Institutions</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#667eea' }}>100+</div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Countries</div>
            </div>
          </div>
        </div>

        <div style={{}}>
          <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '12px' }}>Contact Us</h2>
          <p>Have questions? We'd love to hear from you!</p>
          <div style={{ marginTop: '16px' }}>
            <p>📧 Email: <a href="mailto:support@academicjobs.com">support@academicjobs.com</a></p>
            <p>🌐 Website: <a href="https://academicjobs.com">academicjobs.com</a></p>
            <p>📱 Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;