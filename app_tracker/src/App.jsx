import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';

import Authorization from './AuthorizationPage';
import AddJobPage from './AddJobPage';
import JobListPage from './JobListPage'
import Header from './components/Header';
import JobDetailPage from './JobDetailPage';


const App = () => {
const [user, setUser] = useState(getUser());

return (
    <main>
      { user ?
        <>
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route path="/jobs/new" element={<AddJobPage />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="jobs/:jobId" element={<JobDetailPage />} />
          </Routes>
        </>
        :
        <Authorization setUser={setUser} />
      }
    </main>
);
}

export default App
