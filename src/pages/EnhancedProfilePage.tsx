import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import './ProfilePage.css';

const EnhancedProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    title: 'PhD Candidate',
    department: 'Computer Science',
    institution: 'Stanford University',
    bio: 'Passionate researcher in machine learning and AI',
    expertise: ['Machine Learning', 'AI', 'Deep Learning'],
    phone: '+1 (555) 123-4567',
    website: 'https://example.com',
    location: 'Stanford, CA',
  });

  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.expertise.includes(newSkill)) {
      setProfileData(prev => ({
        ...prev,
        expertise: [...prev.expertise, newSkill],
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setProfileData(prev => ({
      ...prev,
      expertise: prev.expertise.filter(s => s !== skill),
    }));
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%' }} />
          ) : (
            <span>{user?.name?.[0]?.toUpperCase()}</span>
          )}
        </div>
        <div className="profile-header-info">
          <h1>{user?.name}</h1>
          <p>{profileData.title}</p>
          <p className="role-badge">{user?.role}</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="edit-profile-btn"
        >
          {isEditing ? '✓ Done' : '✎ Edit Profile'}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Basic Information</h2>
          {isEditing ? (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Website</label>
              <input
                type="url"
                name="website"
                value={profileData.website}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          ) : (
            <div className="info-list">
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Phone:</strong> {profileData.phone}</p>
              <p><strong>Website:</strong> <a href={profileData.website}>{profileData.website}</a></p>
              <p><strong>Location:</strong> {profileData.location}</p>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h2>Professional Information</h2>
          {isEditing ? (
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={profileData.title}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={profileData.department}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Institution</label>
              <input
                type="text"
                name="institution"
                value={profileData.institution}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Bio</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                className="form-input"
                rows={4}
              />
            </div>
          ) : (
            <div className="info-list">
              <p><strong>Title:</strong> {profileData.title}</p>
              <p><strong>Department:</strong> {profileData.department}</p>
              <p><strong>Institution:</strong> {profileData.institution}</p>
              <p><strong>Bio:</strong> {profileData.bio}</p>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h2>Expertise & Skills</h2>
          <div className="expertise-tags">
            {profileData.expertise.map(skill => (
              <div key={skill} className="expertise-tag">
                <span>{skill}</span>
                {isEditing && (
                  <button
                    onClick={() => removeSkill(skill)}
                    className="remove-skill"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="add-skill">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                placeholder="Add a skill..."
                className="form-input"
              />
              <button onClick={addSkill} className="add-skill-btn">
                + Add Skill
              </button>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h2>Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-value">5</span>
              <span className="stat-label">Active Applications</span>
            </div>
            <div className="stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Saved Jobs</span>
            </div>
            <div className="stat">
              <span className="stat-value">24</span>
              <span className="stat-label">Profile Views</span>
            </div>
            <div className="stat">
              <span className="stat-value">2</span>
              <span className="stat-label">Interview Invites</span>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="profile-actions">
            <button className="save-btn">Save Changes</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedProfilePage;