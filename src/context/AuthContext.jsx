import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'student@ucu.ac.ug' && password === 'password') {
                    const mockUser = { id: 1, name: 'John Doe', email, role: 'student' };
                    setUser(mockUser);
                    localStorage.setItem('user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else if (email === 'admin@ucu.ac.ug' && password === 'password') {
                    const mockUser = { id: 2, name: 'Admin User', email, role: 'admin' };
                    setUser(mockUser);
                    localStorage.setItem('user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const register = async (data) => {
        // Mock register
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUser = { id: 3, name: data.name, email: data.email, role: 'student' };
                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
