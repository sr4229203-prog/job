import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleJobs } from '../data';
import './JobsPage.css';

const JobsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredJobs = sampleJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1>Browse Academic Positions</h1>
        <p>Discover opportunities from top institutions worldwide</p>
      </div>

      <div className="jobs-search">
        <input
          type="text"
          placeholder="Search positions, institutions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-field"
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="jobs-grid">
        {filteredJobs.length === 0 ? (
          <div className="no-results">No jobs found</div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="job-item"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-type-tag">{job.jobType}</span>
              </div>
              <p className="job-institution">{job.institution}</p>
              <p className="job-location">📍 {job.location}</p>
              <p className="job-field">📚 {job.field}</p>
              {job.salary && <p className="job-salary">💰 {job.salary}</p>}
              <p className="job-deadline">
                Deadline: {new Date(job.deadline).toLocaleDateString()}
              </p>
              <button className="view-button">View Details →</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobsPage;
