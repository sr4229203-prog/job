import React from 'react';
import type { Job } from '../types';
import './JobCard.css';

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const isDeadlineApproaching = () => {
    const deadline = new Date(job.deadline);
    const today = new Date();
    const daysUntilDeadline = Math.floor((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilDeadline <= 7 && daysUntilDeadline > 0;
  };

  return (
    <div className="job-card" onClick={onClick}>
      <div className="job-card-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-institution">{job.institution}</p>
        </div>
        <span className={`job-type ${job.jobType.toLowerCase().replace('-', '')}`}>
          {job.jobType}
        </span>
      </div>

      <div className="job-card-meta">
        <span className="job-field">{job.field}</span>
        <span className="job-location">📍 {job.location}</span>
      </div>

      <p className="job-description">{job.description.substring(0, 120)}...</p>

      <div className="job-card-footer">
        <div>
          {job.salary && <span className="job-salary">💰 {job.salary}</span>}
        </div>
        <div className="job-deadline-container">
          {isDeadlineApproaching() && (
            <span className="deadline-warning">⚠️ Deadline approaching</span>
          )}
          <span className="job-deadline">
            Deadline: {new Date(job.deadline).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
