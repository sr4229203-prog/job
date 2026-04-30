import React, { useState, useMemo } from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import type { FilterOptions } from './SearchBar';
import type { Job } from '../types';
import './JobList.css';

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    field: '',
    jobType: '',
    location: '',
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Get unique values for filters
  const uniqueFields = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.field))).sort();
  }, [jobs]);

  const uniqueJobTypes = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.jobType))).sort();
  }, [jobs]);

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !filters.searchTerm ||
        job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        job.institution.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesField = !filters.field || job.field === filters.field;
      const matchesJobType = !filters.jobType || job.jobType === filters.jobType;

      return matchesSearch && matchesField && matchesJobType;
    });
  }, [jobs, filters]);

  const handleSearch = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="job-list-container">
      <SearchBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        fields={uniqueFields}
        jobTypes={uniqueJobTypes}
      />

      {selectedJob && (
        <div className="job-detail-modal">
          <button
            className="close-modal-btn"
            onClick={() => setSelectedJob(null)}
          >
            ✕
          </button>
          <div className="modal-content">
            <h2>{selectedJob.title}</h2>
            <p className="modal-institution">{selectedJob.institution}</p>
            <div className="modal-meta">
              <span>{selectedJob.department}</span>
              <span>•</span>
              <span>{selectedJob.jobType}</span>
              <span>•</span>
              <span>{selectedJob.location}</span>
            </div>
            <div className="modal-details">
              <h3>Position Overview</h3>
              <p>{selectedJob.description}</p>
              {selectedJob.salary && (
                <>
                  <h3>Salary</h3>
                  <p>{selectedJob.salary}</p>
                </>
              )}
              <h3>Field</h3>
              <p>{selectedJob.field}</p>
              <h3>Application Deadline</h3>
              <p>{new Date(selectedJob.deadline).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}

      <div className="job-list-header">
        <h2>
          {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} Found
        </h2>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="no-results">
          <p>No positions match your search criteria.</p>
          <p>Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="job-list">
          {filteredJobs.map((job) => (
            <div key={job.id} onClick={() => setSelectedJob(job)}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
