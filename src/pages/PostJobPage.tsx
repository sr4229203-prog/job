import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './LoginPage.css'; // Reuse styles

interface JobFormData {
  title: string;
  department: string;
  institution: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Postdoc' | 'Contract';
  field: string;
  description: string;
  salary: string;
  deadline: string;
  url: string;
}

const PostJobPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    department: '',
    institution: '',
    location: '',
    jobType: 'Full-time',
    field: '',
    description: '',
    salary: '',
    deadline: '',
    url: '',
  });

  // Check if user can post jobs
  if (!user || (user.role !== 'faculty' && user.role !== 'admin')) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <h1>Access Denied</h1>
            <p>You need faculty or admin privileges to post jobs.</p>
            <button onClick={() => navigate('/dashboard')} className="login-button">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.title || !formData.department || !formData.institution || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.deadline) {
      setError('Please set a deadline');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Job posted successfully!');
      navigate('/jobs');
    } catch {
      setError('Failed to post job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card" style={{ maxWidth: '800px' }}>
          <div className="login-header">
            <div className="login-logo">💼</div>
            <h1>Post a Job</h1>
            <p className="login-tagline">
              Create a new job posting for your institution
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Job Title *</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Assistant Professor of Computer Science"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobType">Job Type</label>
                <select
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Postdoc">Postdoc</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="department">Department *</label>
                <input
                  id="department"
                  name="department"
                  type="text"
                  placeholder="Computer Science"
                  value={formData.department}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="field">Field/Area</label>
                <input
                  id="field"
                  name="field"
                  type="text"
                  placeholder="Machine Learning, AI"
                  value={formData.field}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="institution">Institution *</label>
              <input
                id="institution"
                name="institution"
                type="text"
                placeholder="University of Example"
                value={formData.institution}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City, State/Country"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary Range</label>
                <input
                  id="salary"
                  name="salary"
                  type="text"
                  placeholder="$50,000 - $70,000"
                  value={formData.salary}
                  onChange={handleChange}
                  className="form-input"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deadline">Application Deadline *</label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">Application URL</label>
              <input
                id="url"
                name="url"
                type="url"
                placeholder="https://example.edu/jobs/123"
                value={formData.url}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Job Description *</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the position, requirements, and how to apply..."
                value={formData.description}
                onChange={handleChange}
                className="form-input"
                rows={6}
                disabled={loading}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Posting Job...
                </>
              ) : (
                'Post Job'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;