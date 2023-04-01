import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBanner() {
  return (
    <div className="d-flex align-items-center bg-light py-3">
      <img src="./logo192.png" alt="companyLogo" className="me-3" />
      <h1 className="text-primary mb-0">Steve's React Site</h1>
    </div>
  );
}

export default TopBanner;
