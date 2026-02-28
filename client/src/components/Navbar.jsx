import { LogoutButton } from './LogoutButton.jsx';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';
import { MdDashboard } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='navbar-top'>
                <h1 className='navbar-logo'>ClearCents</h1>
                <div className='navbar-links'>
                    <NavLink end to="/dashboard" className={({isActive}) => isActive ? 'link active' : 'link'}><MdDashboard /><span>Overview</span></NavLink>
                    <NavLink to="/dashboard/income" className={({isActive}) => isActive ? 'link active' : 'link'}><FaMoneyCheckAlt /><span>Income</span></NavLink>
                    <NavLink to="/dashboard/expenses" className={({isActive}) => isActive ? 'link active' : 'link'}><FaMoneyCheck /><span>Expenses</span></NavLink>
                    {/* <NavLink to="/dashboard/test" className={({isActive}) => isActive ? 'link active' : 'link'}>Test Page</NavLink> */}
                </div>
            </div>
            <div className='navbar-bottom'>
                <LogoutButton />
            </div>
        </nav>
    )
}