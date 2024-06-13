import { useState } from 'react';
import SignUp from "./components/FormComponent/SignUpForm"
import Login from './components/FormComponent/LoginForm';

const Authorization = ({ setUser}) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <div className='flex justify-evenly items-center p-4 bg-C1 border-b h-14 mb-4 '>
        <div className='flex-1'>

        </div>
        <div className='flex-1'>
          <h1 className='flex-1 text-center'>Job Tracker</h1>
        </div>
        <div className='flex-1 text-right '>
          <button className='border-l h-14 pl-4' onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? 
            <span className="block">Log<br />In</span> 
            : 
            <span className='block'>Sign<br />Up</span> 
            }
          </button>
        </div>
      </div>
      { showSignUp ?
          <SignUp setUser={setUser} />
          :
          <Login setUser={setUser} />
      }
    </main>
  );
}

export default Authorization