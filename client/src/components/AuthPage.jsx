import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import "../styles/AuthPage.scss";

export const AuthPage = () => {
    const { isAuthenticated, isLoading, error, loginWithRedirect } = useAuth0();

    const handleAuth = async (screenHint) => {
        try{
            await loginWithRedirect(
                screenHint
                    ? { authorizationParams: { screen_hint: screenHint } }
                    : undefined
            );
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) {
        return (
            <div className="AuthPage">
                <div className="auth-card">
                    <p className="auth-loading">Checking your session...</p>
                </div>
            </div>
        );
    }

    
    return (
        <div className="AuthPage">
            {error && <div className="auth-error">Error: {error.message}</div>}
            {isAuthenticated ?
                <Navigate to="/dashboard" /> :
                <div className="auth-card">
                    <p className="auth-pill">Smart money tracking, simplified</p>
                    <h1 className="auth-title">Welcome to ClearCents</h1>
                    <p className="auth-subtitle">
                        Track spending, monitor income, and get a clean dashboard for your daily finances.
                    </p>

                    <div className="auth-highlights">
                        <span>Quick expense overview</span>
                        <span>Visual spending trends</span>
                        <span>Secure account access</span>
                    </div>

                    <div className="auth-actions">
                        <button
                            className="login-btn"
                            type="button"
                            onClick={() => handleAuth()}
                        >
                            Sign In
                        </button>
                        <button
                            className="signup-btn"
                            type="button"
                            onClick={() => handleAuth("signup")}
                        >
                            Create Account
                        </button>
                    </div>

                    <p className="auth-note">Authentication is handled securely by Auth0.</p>
                </div>
            }
        </div>
    )
};