import * as userService from '../utilities/users-service';
import { checkToken } from "../utilities/users-service";
import { Link } from 'react-router-dom';

export default function ProfilePage({user, setUser}){

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
      }

    function handleLogOut() {
        // Remove token using the user service
        userService.logOut();
        // Update user state in App
        setUser(null);
    }

    return (
        <>
        <div>
            profile page
        </div>
        <div>
            user name: {user.name}
        </div>
        <div>
            email: {user.email}
        </div>
        <div>
            name: (add anme to follow)
        </div>
        <div>
            bio:
        </div>
        <div>
            education level
        </div>
        <div>
            location
        </div>
        <div>
            <button onClick={handleCheckToken}>Check Token Exp console</button>
        </div>
        <div>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
        </>
    )
}