import { useAuth0 } from '@auth0/auth0-react';
import '../styles/LogoutButton.scss';

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className='logout-btn'
            type='button'
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    );
};