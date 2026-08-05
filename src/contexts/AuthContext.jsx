import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged((currentUser) => {
            setUser(currentUser);

            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const login = async () => {
        await authService.loginWithGoogle();
    };

    const logout = async () => {
        await authService.logout();
    };

    return (
    <AuthContext.Provider
            value={{
        user,
        loading,
        login,
        logout,
        }}
    >
      {children}
    </AuthContext.Provider>
    )
}