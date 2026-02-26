import { LogoutButton } from './LogoutButton.jsx';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

export const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='navbar-top'>
                <h1>ClearCents</h1>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/dashboard/test">Test Page</NavLink>
            </div>
            <div className='navbar-bottom'>
                <LogoutButton />
            </div>
        </nav>
    )
}