import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Children from './pages/Children';
import ChildrenDetails from './pages/ChildrenDetails';
import FamilyForm from './components/FamilyForm'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/children" element={<Children />} />
          <Route path="/children/:id" element={<ChildrenDetails />} />
          <Route path="FamilyForm" element={<FamilyForm />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
