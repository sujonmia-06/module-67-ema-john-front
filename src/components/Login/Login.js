import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error?.message}</p>
                    {
                        loading && <p style={{ textAlign: 'center' }}>Loading...</p>
                    }
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p className='create-account'>
                    New to Ema-John? <Link className='form-link' to="/signup" >Create an account</Link>
                </p>
                <div className='divider'>
                    <div className='line' />
                    <p>or</p>
                    <div className='line' />
                </div>
                <div className='google-btn'>
                    <button>
                        <img src="/google.svg" alt="" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;