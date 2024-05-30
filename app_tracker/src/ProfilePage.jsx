import * as userService from '../utilities/users-service';
import { checkToken } from "../utilities/users-service";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './main.css';

export default function ProfilePage({ user, setUser }) {
    const [expDate, setExpDate] = useState(null);

    async function handleCheckToken() {
        const experationDate = await checkToken();
        setExpDate(experationDate);
    }
    async function closeToken() {
        setExpDate(null);
    }

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <>
            <main className="flex flex-col items-center justify-between min-h-screen pt-6 relative">
                <div className="w-full">
                    <div className="rounded-lg bg-C4 text-C6 card-shadow pt-4 pb-6 px-8 mx-4">
                        <div className={`flex ${window.innerWidth > 769 ? 'justify-start' : 'justify-center'}`}>
                            <div className='mr-4'>
                                <p>username:</p>
                                <p>email:</p>
                            </div>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.email}</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-4 border border-C6 rounded cursor-pointer">
                                <button onClick={handleCheckToken} className='mx-2'>Auto Log At</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={closeToken} className='mb-60 px-10 mt-6 cursor-pointer'>
                    {expDate && <p>{expDate.toString()}</p>}
                </div>

                <Link to="" onClick={handleLogOut} className="border p-2 pl-4 pr-4 rounded cursor-pointer absolute bottom-0 right-0 mb-12 mr-2 hover:border-C5 hover:text-C5">
                    <div className="text-lg">X</div>
                </Link>
            </main>
        </>
    );
}