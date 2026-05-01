import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import './SimplePage.css';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    jobAlerts: true,
    applicationUpdates: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showActivity: false,
    allowMessaging: true,
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handlePrivacyChange = (key: string, value: boolean) => {
    setPrivacy(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="settings-page">
      <div className="page-content">
        <div className="page-icon">⚙️</div>
        <h1>Account Settings</h1>
        <p>Manage your account preferences and privacy settings</p>

        <div className="settings-section">
          <h2>Profile Information</h2>
          <div className="profile-info">
            <div className="info-item">
              <label>Name:</label>
              <span>{user?.name}</span>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <span>{user?.email}</span>
            </div>
            <div className="info-item">
              <label>Role:</label>
              <span className="role-badge">{user?.role}</span>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notification Preferences</h2>
          <div className="settings-group">
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => handleNotificationChange('email', e.target.checked)}
                />
                Email notifications
              </label>
              <p className="setting-description">Receive updates via email</p>
            </div>

            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) => handleNotificationChange('push', e.target.checked)}
                />
                Push notifications
              </label>
              <p className="setting-description">Receive browser notifications</p>
            </div>

            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={notifications.jobAlerts}
                  onChange={(e) => handleNotificationChange('jobAlerts', e.target.checked)}
                />
                Job alerts
              </label>
              <p className="setting-description">Get notified about new job postings</p>
            </div>

            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={notifications.applicationUpdates}
                  onChange={(e) => handleNotificationChange('applicationUpdates', e.target.checked)}
                />
                Application updates
              </label>
              <p className="setting-description">Receive updates on your applications</p>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>Privacy Settings</h2>
          <div className="settings-group">
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={privacy.profileVisible}
                  onChange={(e) => handlePrivacyChange('profileVisible', e.target.checked)}
                />
                Profile visibility
              </label>
              <p className="setting-description">Make your profile visible to employers</p>
            </div>

            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={privacy.showActivity}
                  onChange={(e) => handlePrivacyChange('showActivity', e.target.checked)}
                />
                Show activity
              </label>
              <p className="setting-description">Display your recent activity on your profile</p>
            </div>

            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={privacy.allowMessaging}
                  onChange={(e) => handlePrivacyChange('allowMessaging', e.target.checked)}
                />
                Allow messaging
              </label>
              <p className="setting-description">Let employers contact you directly</p>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="save-button">Save Changes</button>
          <button className="reset-button">Reset to Defaults</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;