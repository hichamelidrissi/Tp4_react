// App.js
import React, { useState } from 'react';
import Navigation from './Ap-i/nav';
import Pages from './Ap-i/Api';
import './Ap-i/Api.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Multi-Page Application</h1>
      <Navigation currentPage={currentPage} onNext={handleNext} onBack={handleBack} />
      <Pages currentPage={currentPage} />
    </div>
  );
};

export default App;
