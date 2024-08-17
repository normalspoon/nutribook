import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { useState } from 'react';
import './AuthPage.css';


export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <main>
            <h1 className='welcome'>Welcome to Nutribook</h1>
            <div className='loginBox'>
            <button onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'Sign Up' : 'Login'}
            </button>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </div>
        </main>
     
    );
}