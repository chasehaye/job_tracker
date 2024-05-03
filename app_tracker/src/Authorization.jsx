import { useState } from 'react';
import SignUp from "./components/SignUp"
import Login from './components/Login';

const Authorization = ({ setUser}) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUp setUser={setUser} />
          :
          <Login setUser={setUser} />
      }
    </main>
  );
}

export default Authorization