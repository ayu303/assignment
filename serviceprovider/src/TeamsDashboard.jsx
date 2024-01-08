import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamsDashboard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Adjust the endpoint based on your server configuration
    const apiEndpoint = '/api/teams';

    axios.get(apiEndpoint)
      .then(response => {
        if (Array.isArray(response.data)) {
          setTeams(response.data);
        } else {
          console.error('Invalid data format received from the API.');
        }
      })
      .catch(error => {
        console.error('Error fetching teams data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Teams Dashboard</h2>
      <div className="row">
        {teams.map(team => (
          <div key={team.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text">{team.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsDashboard;
