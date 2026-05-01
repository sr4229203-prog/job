import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SimplePage.css';

const RecommendationsPage: React.FC = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      title: 'Senior Researcher - Machine Learning',
      institution: 'MIT',
      location: 'Cambridge, MA',
      field: 'Computer Science',
      salary: '150,000 - 180,000',
      match: '95%',
      reason: 'Strong match based on your ML expertise',
      icon: '⭐',
    },
    {
      id: 2,
      title: 'Associate Professor - AI Ethics',
      institution: 'University of Cambridge',
      location: 'Cambridge, UK',
      field: 'Computer Science',
      salary: '80,000 - 100,000',
      match: '88%',
      reason: 'Matches your research interests',
      icon: '⭐',
    },
    {
      id: 3,
      title: 'Research Scientist - Deep Learning',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      field: 'Computer Science',
      salary: '140,000 - 170,000',
      match: '92%',
      reason: 'Aligns with your expertise areas',
      icon: '⭐',
    },
    {
      id: 4,
      title: 'Principal Researcher - Data Science',
      institution: 'Google AI',
      location: 'Mountain View, CA',
      field: 'Data Science',
      salary: '160,000 - 200,000',
      match: '85%',
      reason: 'Similar role to your background',
      icon: '⭐',
    },
  ];

  return (
    <div className="recommendations-page">
      <div className="page-content" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⭐</div>
          <h1>Recommended for You</h1>
          <p>Based on your profile and preferences</p>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          {recommendations.map(rec => (
            <div
              key={rec.id}
              style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onClick={() => navigate(`/job/${rec.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#1a1a1a' }}>{rec.title}</h3>
                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>
                    {rec.institution} • {rec.location}
                  </p>
                </div>
                <div style={{ 
                  background: '#f0fff0', 
                  padding: '8px 16px', 
                  borderRadius: '6px', 
                  textAlign: 'center',
                  minWidth: '80px'
                }}>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: '#2e7d32' }}>{rec.match}</div>
                  <div style={{ fontSize: '12px', color: '#2e7d32', fontWeight: '600' }}>Match</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>📚 Field: {rec.field}</p>
                <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>💰 {rec.salary}</p>
              </div>

              <p style={{ 
                margin: '0 0 12px 0', 
                padding: '8px 12px', 
                background: '#e3f2fd', 
                borderLeft: '3px solid #667eea',
                color: '#667eea',
                fontSize: '13px',
                borderRadius: '4px'
              }}>
                💡 {rec.reason}
              </p>

              <button
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
                onClick={() => navigate(`/job/${rec.id}`)}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: '#f8f9ff',
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Want to see more recommendations?</h3>
          <p style={{ margin: '0 0 16px 0', color: '#666' }}>Complete your profile to get even better matches</p>
          <button
            onClick={() => navigate('/profile')}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;