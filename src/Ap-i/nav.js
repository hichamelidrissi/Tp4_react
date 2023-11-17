// Navigation.js

import React from 'react';

const Navigation = ({ currentPage, onNext, onBack }) => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',  // Adjust the height as needed
  };

  const buttonStyles = {
    padding: '10px 15px',
    fontSize: '14px',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    margin: '0 10px',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #3498db, #e74c3c)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyles}>
      <button onClick={onBack} disabled={currentPage === 1} style={buttonStyles}>
        Back
      </button>
      <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{`Page ${currentPage}`}</span>
      <button onClick={onNext} disabled={currentPage === 3} style={buttonStyles}>
        Next
      </button>
    </div>
  );
};

export default Navigation;
