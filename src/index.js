import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/map';
import TaskManagement from './components/taskManagement';
import Authentication from './components/authentication';
import Share from './components/share';
import Persistence from './components/persistence';
import RoutePlan from './components/routePlan';
import 'semantic-ui-css/semantic.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultValues = {
  location: {
    lat: 27.42,
    lng: 85.18
  }
}

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/map" element={<Map lat={defaultValues.location.lat} lng={defaultValues.location.lng} />} />
        <Route exact path="/tasks" element={<TaskManagement/>} />
        <Route exact path="/auth" element={<Authentication/>} />
        <Route exact path="/share" element={<Share/>} />
        <Route exact path="/data-persistence" element={<Persistence/>} />
        <Route exact path="/route-plan" element={<RoutePlan/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();