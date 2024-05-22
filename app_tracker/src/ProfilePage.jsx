import * as userService from '../utilities/users-service';
import { checkToken } from "../utilities/users-service";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProfilePage({user, setUser}){
    const [expDate, setExpDate] = useState(null);

    async function handleCheckToken() {
        const experationDate = await checkToken();
        setExpDate(experationDate)
      }

    function handleLogOut() {
        // Remove token using the user service
        userService.logOut();
        // Update user state in App
        setUser(null);
    }

    return (
        <>
        <main>
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
            <button onClick={handleCheckToken}>Auto Logout at: </button>
        </div>
        <div>
                {expDate && <p>{expDate.toString()}</p>}
        </div>
        <div>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
        </main>
        </>
    )
}