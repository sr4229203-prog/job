import React from 'react';
import './SimplePage.css';

const AnalyticsPage: React.FC = () => {
  const stats = [
    { label: 'Total Views', value: 1247, change: '+12%', icon: '👁️' },
    { label: 'Applications Received', value: 89, change: '+8%', icon: '📨' },
    { label: 'Active Positions', value: 5, change: '0%', icon: '💼' },
    { label: 'Avg. Time to Fill', value: '45 days', change: '-5%', icon: '⏱️' },
  ];

  const recentActivity = [
    { action: 'New application received', job: 'Assistant Professor - CS', time: '2 hours ago' },
    { action: 'Job viewed', job: 'Postdoc - Physics', time: '4 hours ago' },
    { action: 'Application status updated', job: 'Lecturer - Math', time: '1 day ago' },
    { action: 'New job posted', job: 'Research Scientist - ML', time: '2 days ago' },
  ];

  return (
    <div className="analytics-page">
      <div className="page-content">
        <div className="page-icon">📊</div>
        <h1>Hiring Analytics</h1>
        <p>Track your job postings performance and application trends</p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
                <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : stat.change.startsWith('-') ? 'negative' : 'neutral'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-content">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-job">{activity.job}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="charts-placeholder">
          <h2>Application Trends</h2>
          <div className="chart-placeholder">
            <span>📈</span>
            <p>Interactive charts coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;