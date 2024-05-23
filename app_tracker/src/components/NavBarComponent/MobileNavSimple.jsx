import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileNavSimple({ user, toggleNavBar }) {
  return (

    <nav className='fixed top-0 left-0 right-0 bg-C1 text-C7 z-50'>
      <div className='flex justify-between items-center border-b h-10 w-full hover:cursor-pointer px-4'>
        <Link to="/profile"><span>{user.name}</span></Link>
        <div onClick={toggleNavBar} className='space-y-1'>
          <div className='w-6 h-0.5 bg-C7 rounded'></div>
          <div className='w-6 h-0.5 bg-C7 rounded'></div>
          <div className='w-6 h-0.5 bg-C7 rounded'></div>
        </div>
      </div>
    </nav>

  );
}