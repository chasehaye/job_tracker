import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';

import Authorization from './AuthorizationPage';
import NavBar from './components/NavBar';
import AddJobPage from './AddJobPage';
import JobListPage from './JobListPage'
import JobDetailPage from './JobDetailPage';
import TechDetailPage from './components/TechPageSection/TechDetailPage';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import TechMainPage from './TechMainPage';


const App = () => {
const [user, setUser] = useState(getUser());

return (
    <main>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path="/jobs/new" element={<AddJobPage />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="/jobs/:jobId" element={<JobDetailPage />} />
            <Route path="/tech/:techId" element={<TechDetailPage />} />
            <Route path="/tech" element={<TechMainPage />} />
          </Routes>
        </>
        :
        <Authorization setUser={setUser} />
      }
    </main>
);
}

export default App
