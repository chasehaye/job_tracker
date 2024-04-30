import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import JobListPage from './JobListPage';
import Authorization from './Authorization';
import AddJobPage from './AddJobPage';
import Header from './components/Header';

const App = () => {
const [user, setUser] = useState(null);

  return (
      <main className="text-3xl font-bold underline">
        { user ?
          <>
        < Header />
        <Routes>
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/jobs/new" element={<AddJobPage />} />
        </Routes>
          </>
        :
        <Authorization />
        }
      </main>
  )
}

export default App
