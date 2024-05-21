import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {

  return (
    <nav className='border-b'>
      <div className='border-b text-center h-12'>
        <Link to="/">Home</Link>
      </div>
      <div className='border-b text-center h-12'>
      <Link to="/jobs/new">Add Job</Link>
      </div>
      <div className='border-b text-center h-12'>
      <Link to="/jobs">Jobs</Link>
      </div>
      <div className='border-b text-center h-12'>
      <Link to="/tech">Tech</Link>
      </div>
      <div className='text-center h-12'>
      <Link to="/profile"><span>{user.name}</span></Link>
      </div>
    </nav>
  );
}