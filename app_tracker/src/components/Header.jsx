import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
        <Link to="/jobs">Job List</Link>
        &nbsp; | &nbsp;
        <Link to="/jobs/new">Add Job</Link>
    </div>
  )
}

export default Header