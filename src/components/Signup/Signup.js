import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError(`Your passwords didn't match`);
            return
        }
        if (password.length < 8) {
            setError(`Password must be at least 8 characters long`);
            return
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>
                <p className='create-account'>
                    Already have an account? <Link className='form-link' to="/login" >Login</Link>
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

export default Signup;