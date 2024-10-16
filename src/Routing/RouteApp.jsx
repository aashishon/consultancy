import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Contact from '../components/Contact/Contact';
import AdminPanel from '../components/Admin/Admin';
import TopStudyDestination from '../components/TopDestination/TopDestination';
import DestinationDetails from '../components/TopDestination/DestinationDetails';

const RouteApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TopStudyDestination/>} />
        <Route path="/destination/:slug" element={<DestinationDetails />} />
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default RouteApp;
