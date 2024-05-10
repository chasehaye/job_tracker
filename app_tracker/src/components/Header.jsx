import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/jobs">Jobs</Link>
      &nbsp; | &nbsp;
      <Link to="/jobs/new">Add Job</Link>
      &nbsp; | &nbsp;
      <Link to="/tech/new">Add Tech</Link>
      &nbsp; | &nbsp;
      <Link to="/tech">Known Tech</Link>
      &nbsp; | &nbsp;
      <span>{user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}