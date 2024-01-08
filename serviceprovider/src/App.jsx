import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';


// Import Dashboard Components
import ServicesDashboard from './ServicesDashboard';
import TeamsDashboard from './TeamsDashboard';
import RequestsDashboard from './RequestsDashboard';
import KPIDashboard from './KPIDashboard';
import QualityDashboard from './QualityDashboard';
import SpeedOfServiceDashboard from './SpeedOfServiceDashboard';
import BusinessOpportunitiesDashboard from './BusinessOpportunitiesDashboard';
import FinancialKPIDashboard from './FinancialKPIDashboard';
import HomePage from './HomePage';
const App = () => {
  return (
    <Router>
      <div>
       
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesDashboard />} />
          <Route path="/teams" element={<TeamsDashboard />} />
          <Route path="/requests" element={<RequestsDashboard />} />
          <Route path="/kpis" element={<KPIDashboard />} />
          <Route path="/quality" element={<QualityDashboard />} />
          <Route path="/speed-of-service" element={<SpeedOfServiceDashboard />} />
          <Route path="/business-opportunities" element={<BusinessOpportunitiesDashboard />} />
          <Route path="/financial-kpis" element={<FinancialKPIDashboard />} />
          {/* Add more routes for other components */}
        </Routes>

      </div>
    </Router>
  );
};

export default App;
