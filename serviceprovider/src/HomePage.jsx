import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleSubmit = () => {
    // Implement logic to send form data to the backend
    // You can use fetch or another library like Axios
    console.log('Form data submitted:', { fullName, contactNo, email, selectedService, selectedTeam });
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to Service Provider Dashboard</h1>

      {/* Form Section */}
      <div className="row mt-4">
        <div className="col-md-12">
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNo">Contact No:</label>
              <input
                type="text"
                className="form-control"
                id="contactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service:</label>
              <select
                className="form-control"
                id="service"
                value={selectedService}
                onChange={(e) => handleServiceSelect(e.target.value)}
              >
                <option value="">Select a Service</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrician">Electrician</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="team">Team:</label>
              <select
                className="form-control"
                id="team"
                value={selectedTeam}
                onChange={(e) => handleTeamSelect(e.target.value)}
              >
                <option value="">Select a Team</option>
                <option value="ON FIELD">ON FIELD</option>
                <option value="AT HOME">AT HOME</option>
              </select>
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Submit Request
            </button>
          </form>
        </div>
      </div>

     
        <div className="row mt-4">
          {/* Section for KPIs */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">KPIs</h5>
                <p className="card-text">Key Performance Indicators.</p>
                <Link to="/kpis" className="btn btn-primary">
                  Go to KPIs
                </Link>
              </div>
            </div>
          </div>
  
          {/* Section for Quality */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quality</h5>
                <p className="card-text">Monitor service quality.</p>
                <Link to="/quality" className="btn btn-primary">
                  Go to Quality
                </Link>
              </div>
            </div>
          </div>
  
          {/* Section for Speed of Service */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Speed of Service</h5>
                <p className="card-text">Track service delivery speed.</p>
                <Link to="/speed-of-service" className="btn btn-primary">
                  Go to Speed of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row mt-4">
          {/* Section for Business Opportunities */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Business Opportunities</h5>
                <p className="card-text">Explore potential business opportunities.</p>
                <Link to="/business-opportunities" className="btn btn-primary">
                  Go to Business Opportunities
                </Link>
              </div>
            </div>
          </div>
  
          {/* Section for Financial KPIs */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Financial KPIs</h5>
                <p className="card-text">Analyze financial key performance indicators.</p>
                <Link to="/financial-kpis" className="btn btn-primary">
                  Go to Financial KPIs
                </Link>
              </div>
            </div>
          </div>
  
          {/* Add more sections below */}
        </div>
      </div>
    );
  };
  
  export default HomePage;
  