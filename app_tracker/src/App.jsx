import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';

import Authorization from './Authorization';
import AddJob from './AddJob';
import JobList from './JobList'
import Header from './components/Header';


const App = () => {
const [user, setUser] = useState(getUser());

return (
  <main>
    { user ?
      <>
        <Header user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/jobs/new" element={<AddJob />} />
          <Route path="/jobs" element={<JobList />} />
        </Routes>
      </>
      :
      <Authorization setUser={setUser} />
    }
  </main>
);
}

export default App
