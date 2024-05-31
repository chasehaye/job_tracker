import { Link } from 'react-router-dom';

export default function NavBar({ user, toggleNavBar }) {
  return (
    
    <nav className='fixed top-0 left-0 right-0 bg-C1 text-C7 z-50'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center w-full'>
          <div className='flex justify-center items-center border-b h-10 w-full hover:cursor-pointer hover:text-C3'>
            <Link onClick={toggleNavBar} to="/" className='px-4'>Home</Link>
          </div>
          <div className='flex justify-center items-center border-b h-10 w-full hover:cursor-pointer hover:text-C3'>
            <Link onClick={toggleNavBar} to="/jobs/new" className='px-4'>Add Job</Link>
          </div>
          <div className='flex justify-center items-center border-b h-10 w-full hover:cursor-pointer hover:text-C3'>
            <Link onClick={toggleNavBar} to="/jobs" className='px-4'>Jobs</Link>
          </div>
          <div className='flex justify-center items-center border-b h-10 w-full hover:cursor-pointer hover:text-C3'>
            <Link onClick={toggleNavBar} to="/tech" className='px-4'>Tech</Link>
          </div>
          <div className='flex justify-center items-center border-b h-10 w-full hover:cursor-pointer hover:text-C3'>
            <Link onClick={toggleNavBar} to="/profile" className='px-4'><span>{user.name}</span></Link>
          </div>
          <div className='flex justify-center items-center border-b h-10 w-full hover:cursor-pointer hover:text-C5'>
            <div onClick={toggleNavBar} className='px-4'><span>Close</span></div>
          </div>
        </div>
      </div>
    </nav>
  );
}