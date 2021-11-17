import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, handleResetPassword, isLogin, error, toggleLogin } = useAuth();
    return (
        <div>
        <form onSubmit={handleRegistration}>
          <h3 className="text-primary text-center mb-3">{isLogin ? 'Please Log In' : 'Please Register'}</h3>
          {!isLogin && <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Your Name" id="inputName" required />
          </div>}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input placeholder="Your Email" onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input placeholder="Your Password" onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="mb-3 form-check">
            <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label text-primary" htmlFor="exampleCheck1">Already Registered?</label>
          </div>

          <div className="mb-3 text-danger">{error}</div>
          <button type="submit" className="btn btn-primary">{isLogin ? 'Log In' : 'Register'}</button>
          <br /> <br />
          <button onClick={handleResetPassword} type="button" className="btn btn-secondary mt-2">Reset Password</button>
        </form>
        <br /> <br />
        <button onClick={signInUsingGoogle} className="btn btn-warning mb-3">Google Sign In</button>
        </div>
    );
};

export default Login;