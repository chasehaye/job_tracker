import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';

import Authorization from './AuthorizationPage';
import NavBar from './components/NavBar';
import AddJobPage from './AddJobPage';
import JobListPage from './JobListPage'
import JobDetailPage from './JobDetailPage';
import AddTechPage from './AddTechPage';
import TechListPage from './TechListPage';
import TechDetailPage from './TechDetailPage';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';


const App = () => {
const [user, setUser] = useState(getUser());

return (
    <main>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/jobs/new" element={<AddJobPage />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="/jobs/:jobId" element={<JobDetailPage />} />
            <Route path="/tech/new" element={<AddTechPage />} />
            <Route path="/tech" element={<TechListPage />} />
            <Route path="/tech/:techId" element={<TechDetailPage />} />
          </Routes>
        </>
        :
        <Authorization setUser={setUser} />
      }
    </main>
);
}

export default App
