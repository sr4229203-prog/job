import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Navigation.css';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Browse Jobs', path: '/jobs', icon: '💼' },
    { label: 'Recommendations', path: '/recommendations', icon: '⭐' },
    { label: 'Saved Jobs', path: '/saved-jobs', icon: '❤️' },
    { label: 'Applications', path: '/applications', icon: '📨' },
    ...(user?.role === 'faculty' || user?.role === 'admin' ? [
      { label: 'Post Job', path: '/post-job', icon: '➕' },
      { label: 'Analytics', path: '/analytics', icon: '📈' }
    ] : []),
    { label: 'Profile', path: '/enhanced-profile', icon: '👤' },
    { label: 'Notifications', path: '/notifications', icon: '🔔', badge: 3 },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <button
            className="nav-logo"
            onClick={() => navigate('/dashboard')}
          >
            <span className="nav-logo-icon">🎓</span>
            Academic Jobs
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-items">
            {menuItems.map((item) => (
              <button
                key={item.path}
                className="navbar-link"
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          <div className="navbar-user">
            <div
              className="user-profile-trigger"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="user-avatar"
              />
              <span className="user-name">{user?.name}</span>
              <span className="dropdown-arrow">▼</span>
            </div>

            {isProfileOpen && (
              <div className="profile-dropdown">
                <div className="profile-header">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="profile-avatar"
                  />
                  <div>
                    <p className="profile-name">{user?.name}</p>
                    <p className="profile-email">{user?.email}</p>
                  </div>
                </div>

                <div className="profile-divider"></div>

                <button
                  className="profile-menu-item"
                  onClick={() => {
                    navigate('/profile');
                    setIsProfileOpen(false);
                  }}
                >
                  👤 My Profile
                </button>
                <button
                  className="profile-menu-item"
                  onClick={() => {
                    navigate('/settings');
                    setIsProfileOpen(false);
                  }}
                >
                  ⚙️ Settings
                </button>
                <button
                  className="profile-menu-item"
                  onClick={() => {
                    navigate('/notifications');
                    setIsProfileOpen(false);
                  }}
                >
                  🔔 Notifications
                </button>

                <div className="profile-divider"></div>

                <button
                  className="profile-menu-item logout"
                  onClick={() => {
                    handleLogout();
                    setIsProfileOpen(false);
                  }}
                >
                  🚪 Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
