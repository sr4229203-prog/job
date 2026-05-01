import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { sampleJobs } from '../data';
import './JobsPage.css'; // Reuse styles

const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [loading, setLoading] = useState(false);

  const job = sampleJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="jobs-page">
        <div className="jobs-header">
          <h1>Job Not Found</h1>
          <p>The job you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/jobs')} className="view-button">
            ← Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleSaveJob = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaved(!isSaved);
    setLoading(false);
  };

  const handleApply = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setHasApplied(true);
    setLoading(false);
  };

  const isDeadlinePassed = new Date(job.deadline) < new Date();

  return (
    <div className="jobs-page">
      <div className="job-detail">
        <div className="job-detail-header">
          <button onClick={() => navigate('/jobs')} className="back-button">
            ← Back to Jobs
          </button>
          <div className="job-actions">
            <button
              onClick={handleSaveJob}
              className={`action-button ${isSaved ? 'saved' : ''}`}
              disabled={loading}
            >
              {loading ? '...' : (isSaved ? '❤️ Saved' : '🤍 Save Job')}
            </button>
          </div>
        </div>

        <div className="job-detail-content">
          <div className="job-main-info">
            <div className="job-title-section">
              <h1>{job.title}</h1>
              <span className={`job-type-badge ${job.jobType.toLowerCase()}`}>
                {job.jobType}
              </span>
            </div>

            <div className="job-meta">
              <div className="meta-item">
                <span className="meta-icon">🏛️</span>
                <div>
                  <strong>{job.institution}</strong>
                  <br />
                  <span>{job.department}</span>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>{job.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📚</span>
                <span>{job.field}</span>
              </div>
              {job.salary && (
                <div className="meta-item">
                  <span className="meta-icon">💰</span>
                  <span>{job.salary}</span>
                </div>
              )}
              <div className="meta-item">
                <span className="meta-icon">⏰</span>
                <span className={isDeadlinePassed ? 'deadline-passed' : 'deadline-active'}>
                  Deadline: {new Date(job.deadline).toLocaleDateString()}
                  {isDeadlinePassed && ' (Passed)'}
                </span>
              </div>
            </div>
          </div>

          <div className="job-description-section">
            <h2>Job Description</h2>
            <div className="job-description">
              {job.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="job-requirements-section">
            <h2>Requirements</h2>
            <ul className="requirements-list">
              <li>PhD or equivalent in relevant field</li>
              <li>Strong research background</li>
              <li>Teaching experience preferred</li>
              <li>Excellent communication skills</li>
            </ul>
          </div>

          <div className="job-application-section">
            <h2>How to Apply</h2>
            <div className="application-info">
              <p>Please submit your application materials including:</p>
              <ul>
                <li>Cover letter</li>
                <li>Curriculum Vitae</li>
                <li>Research statement</li>
                <li>Teaching statement</li>
                <li>References</li>
              </ul>
              {job.url ? (
                <p>
                  Apply at: <a href={job.url} target="_blank" rel="noopener noreferrer">{job.url}</a>
                </p>
              ) : (
                <p>Application link will be provided upon request.</p>
              )}
            </div>

            {!isDeadlinePassed && (
              <div className="application-actions">
                {hasApplied ? (
                  <div className="application-success">
                    <span className="success-icon">✅</span>
                    <span>Application submitted successfully!</span>
                  </div>
                ) : (
                  <button
                    onClick={handleApply}
                    className="apply-button"
                    disabled={loading || !isAuthenticated}
                  >
                    {loading ? 'Submitting...' : 'Apply Now'}
                  </button>
                )}
                {!isAuthenticated && (
                  <p className="auth-required">
                    <a href="/login">Sign in</a> to apply for this position
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;