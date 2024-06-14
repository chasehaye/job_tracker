import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';

import Authorization from './AuthorizationPage';
import NavBar from './components/NavBarComponent/MobileNavComplex';
import AddJobPage from './AddJobPage';
import JobListPage from './JobListPage'
import JobDetailPage from './JobDetailPage';
import TechDetailPage from './components/TechPageSection/TechDetailPage';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import TechMainPage from './TechMainPage';
import MobileNavSimple from './components/NavBarComponent/MobileNavSimple';
import DesktopNav from './components/NavBarComponent/DesktopNav';


const App = () => {
  const [user, setUser] = useState(getUser());
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <main>
      {user ? (
        <>
          {isLargeScreen ? (
            <DesktopNav user={user} />
          ) : isNavBarVisible ? (
            <MobileNavSimple user={user} toggleNavBar={toggleNavBar} />
          ) : (
            <NavBar user={user} toggleNavBar={toggleNavBar} />
          )}
          <main className={isNavBarVisible ? 'pt-10' : 'pt-60'}>
            <Routes>
              <Route path="/" element={<LandingPage user={user} />} />
              <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
              <Route path="/jobs/new" element={<AddJobPage user={user} />} />
              <Route path="/jobs" element={<JobListPage />} />
              <Route path="/jobs/:jobId" element={<JobDetailPage />} />
              <Route path="/tech/:techId" element={<TechDetailPage />} />
              <Route path="/tech" element={<TechMainPage user={user}/>} />
            </Routes>
          </main>
        </>
      ) : (
        <Authorization setUser={setUser} />
      )}
    </main>
  );
};

export default App;
