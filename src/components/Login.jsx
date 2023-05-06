import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('')
                form.reset();
                setSuccess('login successfully');
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);

            })
    }
    const handleGoogleLogin = (provider) => {
        setSuccess('')
        signInGoogle(googleProvider)
            .then(result => {setSuccess('successfully login with google') })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleGithubLogin = (provider) => {
        signInGithub(githubProvider)
        .then(result => {setSuccess('successfully login with github') })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-orange-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-300">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center text-lime-700'>{success}</p>
                            <p>{error}</p>
                            <label className="label">
                                <Link to="/register">Don't have account? please register</Link>
                            </label>
                            <h1 className='text-center text-xl text-green-600'>Login with</h1>
                            <div className='flex justify-center items-center gap-8'>
                                <img onClick={handleGoogleLogin} className='h-10 w-10' src="https://i.ibb.co/4WqgX2r/icons8-google-48.png" alt="" />
                                <img onClick={handleGithubLogin} src="https://i.ibb.co/yQL3fCV/icons8-github-50.png" className='h-10 w-10' alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;