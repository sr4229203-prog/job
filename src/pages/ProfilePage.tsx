import React from 'react';
import { useAuth } from '../hooks/useAuth';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user?.avatar} alt={user?.name} className="profile-banner" />
        <div className="profile-info">
          <h1>{user?.name}</h1>
          <p className="profile-email">{user?.email}</p>
          <p className="profile-role">Student</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Professional Information</h2>
          <div className="form-group">
            <label>Department/Field</label>
            <input type="text" value="Computer Science" readOnly />
          </div>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
