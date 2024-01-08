// ServicesDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicesDashboard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('C:\Users\HP\Desktop\backend\server.jsxpp')  // Update the endpoint to match your backend route
      .then(response => {
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error('Invalid data format received from the API.');
        }
      })
      .catch(error => {
        console.error('Error fetching services data:', error);
      });
  }, []);

  // ... rest of your component code
};

export default ServicesDashboard;
