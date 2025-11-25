import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Lock, Loader2 } from 'lucide-react';
import styles from './Auth.module.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            await register(formData);
            navigate('/dashboard');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.authCard}>
            <div className={styles.header}>
                <h2>Create Account</h2>
                <p>Join the UCU Innovators Hub</p>
            </div>

            {error && (
                <div className={styles.errorAlert}>
                    <span>{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Full Name</label>
                    <div className={styles.inputWrapper}>
                        <User className={styles.inputIcon} size={20} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <div className={styles.inputWrapper}>
                        <Mail className={styles.inputIcon} size={20} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="student@ucu.ac.ug"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className={styles.inputWrapper}>
                        <Lock className={styles.inputIcon} size={20} />
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: '100%' }}>
                    {isLoading ? <Loader2 className="animate-spin" /> : 'Create Account'}
                </button>
            </form>

            <div className={styles.footer}>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;
