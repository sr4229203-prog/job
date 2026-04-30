import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  onFilterChange: (filters: FilterOptions) => void;
  fields: string[];
  jobTypes: string[];
}

export interface FilterOptions {
  searchTerm: string;
  field?: string;
  jobType?: string;
  location?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  onFilterChange, 
  fields, 
  jobTypes 
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedField, setSelectedField] = React.useState('');
  const [selectedJobType, setSelectedJobType] = React.useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
    onFilterChange({ searchTerm: value, field: selectedField, jobType: selectedJobType });
  };

  const handleFieldChange = (value: string) => {
    setSelectedField(value);
    onFilterChange({ searchTerm, field: value, jobType: selectedJobType });
  };

  const handleJobTypeChange = (value: string) => {
    setSelectedJobType(value);
    onFilterChange({ searchTerm, field: selectedField, jobType: value });
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedField('');
    setSelectedJobType('');
    onSearch('');
    onFilterChange({ searchTerm: '', field: '', jobType: '' });
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search job titles, institutions, or keywords..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="filter-controls">
        <select
          className="filter-select"
          value={selectedField}
          onChange={(e) => handleFieldChange(e.target.value)}
        >
          <option value="">All Fields</option>
          {fields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedJobType}
          onChange={(e) => handleJobTypeChange(e.target.value)}
        >
          <option value="">All Job Types</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {(searchTerm || selectedField || selectedJobType) && (
          <button className="reset-button" onClick={handleReset}>
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
