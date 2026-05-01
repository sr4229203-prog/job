import React from 'react';
import './SimplePage.css';

interface SimplePageProps {
  title: string;
  icon: string;
  description: string;
}

const SimplePage: React.FC<SimplePageProps> = ({ title, icon, description }) => {
  return (
    <div className="simple-page">
      <div className="page-content">
        <div className="page-icon">{icon}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="page-placeholder">
          Coming soon...
        </div>
      </div>
    </div>
  );
};

export default SimplePage;

export const SettingsPage = () => (
  <SimplePage
    icon="⚙️"
    title="Settings"
    description="Manage your account preferences and settings"
  />
);

export const SavedJobsPage = () => (
  <SimplePage
    icon="❤️"
    title="Saved Jobs"
    description="Your bookmarked job positions"
  />
);

export const ApplicationsPage = () => (
  <SimplePage
    icon="📨"
    title="My Applications"
    description="Track your submitted applications"
  />
);

export const NotificationsPage = () => (
  <SimplePage
    icon="🔔"
    title="Notifications"
    description="Stay updated with the latest news and alerts"
  />
);

export const ForgotPasswordPage = () => (
  <SimplePage
    icon="🔐"
    title="Forgot Password"
    description="Reset your password here"
  />
);

export const TermsPage = () => (
  <SimplePage
    icon="📋"
    title="Terms & Privacy"
    description="Read our terms of service and privacy policy"
  />
);
