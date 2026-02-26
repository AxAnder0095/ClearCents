import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const AuthPage = () => {
    const { isAuthenticated, error, loginWithRedirect } = useAuth0();

    const handleSignin = async () => {
        try{
            await loginWithRedirect();
        } catch (err) {
            console.error(err);
        }
    };

    
    return (
        <div>
            {error && <div>Error: {error.message}</div>}
            {isAuthenticated ?
                <Navigate to="/dashboard" /> :
                <div>
                    Please log in to access the dashboard.
                    <button className="login-btn" type="button" onClick={handleSignin}>Login</button>
                </div>
            }
        </div>
    )
};