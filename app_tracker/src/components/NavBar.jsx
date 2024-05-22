import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {

  return (
    <nav className='fixed top-0 left-0 right-0 bg-C1 text-C7 z-50'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center w-full'>
          <div className='flex justify-center items-center border-b h-12 w-full'>
            <Link to="/" className='px-4'>Home</Link>
          </div>
          <div className='flex justify-center items-center border-b h-12 w-full'>
            <Link to="/jobs/new" className='px-4'>Add Job</Link>
          </div>
          <div className='flex justify-center items-center border-b h-12 w-full'>
            <Link to="/jobs" className='px-4'>Jobs</Link>
          </div>
          <div className='flex justify-center items-center border-b h-12 w-full'>
            <Link to="/tech" className='px-4'>Tech</Link>
          </div>
          <div className='flex justify-center items-center border-b h-12 w-full'>
            <Link to="/profile" className='px-4'><span>{user.name}</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}