import { useState } from 'react';
import SignUp from "./components/FormComponent/SignUpForm"
import Login from './components/FormComponent/LoginForm';

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