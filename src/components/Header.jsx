import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    return (
        <div className=''>
            <div className=' bg-amber-300'>
                <div className="navbar container mx-auto ">
                    <div className="flex-1">
                        <Link to="/">
                            <img className='w-14' src="https://i.ibb.co/p46dLVy/Borcelle-removebg-preview.png" alt="" />
                        </Link>
                    </div>
                    <div className="flex-none gap-6 md:gap-12 text-red-400 font-bold">
                        <Link to="/">Home</Link>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        {!user && <ActiveLink to="/login">Login</ActiveLink>}
                        <div className="dropdown dropdown-end">
                            {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>}
                            {user &&<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;