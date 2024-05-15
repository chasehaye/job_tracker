import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {

  return (
    <nav>
      &nbsp; | &nbsp;
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/jobs">Jobs</Link>
      &nbsp; | &nbsp;
      <Link to="/jobs/new">Add Job</Link>
      &nbsp; | &nbsp;
      <Link to="/tech/new">Add Tech</Link>
      &nbsp; | &nbsp;
      <Link to="/tech">Known Tech</Link>
      &nbsp; | &nbsp;
      <Link to="/profile"><span>{user.name}</span></Link>
      &nbsp; | &nbsp;
    </nav>
  );
}