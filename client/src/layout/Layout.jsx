import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx';
import '../styles/Layout.scss';

export const Layout = () => {
    return (
        <div className='Layout'>
            <header className='layout-sidebar'>
                <Navbar />
            </header>
            <main className='layout-content'>
                <Outlet />
            </main>
        </div>
    );
}