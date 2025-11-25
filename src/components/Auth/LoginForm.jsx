import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import styles from './Auth.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password. Try student@ucu.ac.ug / password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.authCard}>
            <div className={styles.header}>
                <h2>Welcome Back</h2>
                <p>Sign in to access your dashboard</p>
            </div>

            {error && (
                <div className={styles.errorAlert}>
                    <AlertCircle size={18} />
                    <span>{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <div className={styles.inputWrapper}>
                        <Mail className={styles.inputIcon} size={20} />
                        <input
                            type="email"
                            id="email"
                            placeholder="student@ucu.ac.ug"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.inputWrapper}>
                        <Lock className={styles.inputIcon} size={20} />
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: '100%' }}>
                    {isLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
                </button>
            </form>

            <div className={styles.footer}>
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
