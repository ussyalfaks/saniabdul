import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Children from './pages/Children';
import ChildrenDetails from './pages/ChildrenDetails'; // This should be the component for viewing individual child details
import FamilyForm from './components/FamilyForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/children" element={<Children />} />
          <Route path="/children/:id" element={<ChildrenDetails />} /> {/* Render ChildrenDetails for specific child */}
          <Route path="/familyForm" element={<FamilyForm />} /> {/* Added missing slash */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
