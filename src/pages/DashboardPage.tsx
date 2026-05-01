import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isFacultyOrAdmin = user?.role === 'faculty' || user?.role === 'admin';

  const stats = isFacultyOrAdmin ? [
    { label: 'Jobs Posted', value: 8, icon: '💼' },
    { label: 'Applications Received', value: 45, icon: '📨' },
    { label: 'Active Positions', value: 3, icon: '📊' },
    { label: 'Interviews Scheduled', value: 7, icon: '📅' },
  ] : [
    { label: 'Active Applications', value: 5, icon: '📨' },
    { label: 'Saved Jobs', value: 12, icon: '❤️' },
    { label: 'Profile Views', value: 24, icon: '👁️' },
    { label: 'Interviews', value: 2, icon: '📅' },
  ];

  const facultyApplications = [
    { id: 1, position: 'Assistant Professor - CS', applicant: 'John Doe', status: 'Under Review' },
    { id: 2, position: 'Postdoc - Physics', applicant: 'Jane Smith', status: 'Interview Scheduled' },
    { id: 3, position: 'Lecturer - Math', applicant: 'Bob Johnson', status: 'Accepted' },
  ];

  const studentApplications = [
    { id: 1, position: 'Assistant Professor - CS', institution: 'MIT', status: 'Pending' },
    { id: 2, position: 'Postdoc - Physics', institution: 'Stanford', status: 'Under Review' },
    { id: 3, position: 'Lecturer - Math', institution: 'Oxford', status: 'Accepted' },
  ];

  const recentApplications = isFacultyOrAdmin ? facultyApplications : studentApplications;

  const quickActions = isFacultyOrAdmin ? [
    { icon: '➕', title: 'Post New Job', description: 'Create a job listing', action: () => navigate('/post-job') },
    { icon: '📨', title: 'Review Applications', description: 'Check submissions', action: () => navigate('/applications') },
    { icon: '📊', title: 'Analytics', description: 'View hiring stats', action: () => navigate('/analytics') },
    { icon: '👥', title: 'Team Management', description: 'Manage department', action: () => navigate('/team') },
  ] : [
    { icon: '🔍', title: 'Browse Jobs', description: 'Find your next opportunity', action: () => navigate('/jobs') },
    { icon: '👤', title: 'Update Profile', description: 'Improve your visibility', action: () => navigate('/profile') },
    { icon: '❤️', title: 'Saved Jobs', description: 'View your bookmarks', action: () => navigate('/saved-jobs') },
    { icon: '📨', title: 'Applications', description: 'Track your submissions', action: () => navigate('/applications') },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name}! 👋</h1>
        <p>Here's what's happening with your academic journey</p>
      </div>

      <div className="dashboard-grid">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="action-card"
                onClick={action.action}
              >
                <span className="action-icon">{action.icon}</span>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="recent-activity">
          <h2>{isFacultyOrAdmin ? 'Recent Applications' : 'Your Applications'}</h2>
          <div className="activity-list">
            {recentApplications.map((app) => (
              <div key={app.id} className="activity-item">
                <div className="activity-content">
                  <h3>{app.position}</h3>
                  <p>{'applicant' in app ? `Applicant: ${app.applicant}` : app.institution}</p>
                </div>
                <div className={`activity-status ${app.status.toLowerCase().replace(' ', '-')}`}>
                  {app.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="featured-section">
          <h2>Featured Opportunities 🌟</h2>
          <div className="featured-cards">
            {[1, 2, 3].map((i) => (
              <div key={i} className="featured-card">
                <div className="featured-badge">Featured</div>
                <h3>Research Institute Position</h3>
                <p className="featured-institution">University of Excellence</p>
                <p className="featured-location">📍 Location</p>
                <button className="featured-action">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
