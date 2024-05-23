import React from 'react'
import { Link } from 'react-router-dom';

export default function DesktopNav({user}) {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-C1 text-C7 z-50'>
      <div className='flex justify-between items-center border-b h-10 w-full hover:cursor-pointer '>
        <div>
          <Link to="/" className='px-4'>Home</Link>
        </div>
        <div className="flex justify-center">
          <div className="border-r pr-1">
            <Link to="/jobs/new" className='px-4'>Add Job</Link>
          </div>
          <div className="border-r pr-1 pl-1">
            <Link to="/jobs" className='px-4'>Jobs</Link>
          </div>
          <div className='pl-1'>
            <Link to="/tech" className='px-4'>Tech</Link>
          </div>
        </div>
        <div>
          <Link to="/profile" className='px-4'><span>{user.name}</span></Link>
        </div>
      </div>
    </nav>
  )
}
