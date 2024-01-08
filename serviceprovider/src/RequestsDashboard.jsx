import React from 'react';

const RequestsPage = (props) => {
  // Destructure the props to avoid potential issues if props is undefined
  const { location } = props || {};

  // Retrieve predefined values from the location state
  const { selectedService, selectedTeam } = location?.state || {};

  return (
    <div className="container mt-5">
      <h2>Service Requests</h2>
      <form>
        <label>
          Service:
          <input type="text" value={selectedService || ''} readOnly />
        </label>
        <br />
        <label>
          Team/Location:
          <input type="text" value={selectedTeam || ''} readOnly />
        </label>
        {/* No need for a submit button if you don't have a form */}
      </form>
    </div>
  );
};

export default RequestsPage;
