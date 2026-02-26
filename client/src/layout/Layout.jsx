import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx';
import '../styles/Layout.scss';

export const Layout = () => {
    return (
        <div className='Layout'>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}