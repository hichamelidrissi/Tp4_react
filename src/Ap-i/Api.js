// Pages.js

import React from 'react';

const pagesContent = [
  'This is Page 1 content.',
  'This is Page 2 content.',
  'This is Page 3 content.',
];

const Pages = ({ currentPage }) => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  // Adjust the height as needed
  };

  const contentStyles = {
    maxWidth: '600px',  // Adjust the width as needed
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',  // Center the text horizontally
  };

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <p>{pagesContent[currentPage - 1]}</p>
      </div>
    </div>
  );
};

export default Pages;
