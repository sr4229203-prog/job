import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleJobs } from '../data';
import './JobsPage.css';

const JobsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState<string>('all');
  const [selectedField, setSelectedField] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'deadline' | 'title' | 'institution'>('deadline');

  const jobTypes = ['all', ...Array.from(new Set(sampleJobs.map(job => job.jobType)))];
  const fields = ['all', ...Array.from(new Set(sampleJobs.map(job => job.field)))];

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = sampleJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.field.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesJobType = selectedJobType === 'all' || job.jobType === selectedJobType;
      const matchesField = selectedField === 'all' || job.field === selectedField;

      return matchesSearch && matchesJobType && matchesField;
    });

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'deadline':
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'institution':
          return a.institution.localeCompare(b.institution);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedJobType, selectedField, sortBy]);

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1>Browse Academic Positions</h1>
        <p>Discover opportunities from top institutions worldwide</p>
      </div>

      <div className="jobs-filters">
        <div className="search-section">
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
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <label>Job Type:</label>
            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="filter-select"
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Field:</label>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="filter-select"
            >
              {fields.map(field => (
                <option key={field} value={field}>
                  {field === 'all' ? 'All Fields' : field}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'deadline' | 'title' | 'institution')}
              className="filter-select"
            >
              <option value="deadline">Deadline</option>
              <option value="title">Title</option>
              <option value="institution">Institution</option>
            </select>
          </div>
        </div>
      </div>

      <div className="jobs-results">
        <p className="results-count">
          {filteredAndSortedJobs.length} position{filteredAndSortedJobs.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="jobs-grid">
        {filteredAndSortedJobs.length === 0 ? (
          <div className="no-results">
            <div className="no-results-content">
              <span className="no-results-icon">🔍</span>
              <h3>No jobs found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          </div>
        ) : (
          filteredAndSortedJobs.map((job) => {
            const isDeadlinePassed = new Date(job.deadline) < new Date();
            return (
              <div
                key={job.id}
                className={`job-item ${isDeadlinePassed ? 'deadline-passed' : ''}`}
                onClick={() => navigate(`/job/${job.id}`)}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className={`job-type-tag ${job.jobType.toLowerCase()}`}>
                    {job.jobType}
                  </span>
                </div>
                <p className="job-institution">{job.institution}</p>
                <p className="job-location">📍 {job.location}</p>
                <p className="job-field">📚 {job.field}</p>
                {job.salary && <p className="job-salary">💰 {job.salary}</p>}
                <p className={`job-deadline ${isDeadlinePassed ? 'passed' : ''}`}>
                  Deadline: {new Date(job.deadline).toLocaleDateString()}
                  {isDeadlinePassed && ' (Closed)'}
                </p>
                <button className="view-button">View Details →</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default JobsPage;
