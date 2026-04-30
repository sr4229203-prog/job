import React from 'react';
import './Header.css';

interface HeaderProps {
  onTitleClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTitleClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo" onClick={onTitleClick}>
            <span className="logo-icon">🎓</span>
            Academic Jobs
          </h1>
          <p className="tagline">Discover your next academic opportunity</p>
        </div>
        <nav className="header-nav">
          <a href="#positions" className="nav-link">
            Positions
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
