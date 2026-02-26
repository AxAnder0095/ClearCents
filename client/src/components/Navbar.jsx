import { LogoutButton } from './LogoutButton.jsx';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/dashboard/test">Test Page</NavLink>
            </nav>
            <LogoutButton />
        </div>
    )
}