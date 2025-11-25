import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, LogOut, Settings, User } from 'lucide-react';
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className={styles.dashboardContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>Innovators Hub</h2>
                    <span className={styles.roleBadge}>Student</span>
                </div>

                <nav className={styles.sidebarNav}>
                    <Link to="/dashboard" className={`${styles.navItem} ${isActive('/dashboard') ? styles.active : ''}`}>
                        <LayoutDashboard size={20} />
                        <span>Overview</span>
                    </Link>
                    <Link to="/dashboard/submit" className={`${styles.navItem} ${isActive('/dashboard/submit') ? styles.active : ''}`}>
                        <FolderPlus size={20} />
                        <span>Submit Project</span>
                    </Link>
                    <Link to="/dashboard/profile" className={`${styles.navItem} ${isActive('/dashboard/profile') ? styles.active : ''}`}>
                        <User size={20} />
                        <span>Profile</span>
                    </Link>
                    <Link to="/dashboard/settings" className={`${styles.navItem} ${isActive('/dashboard/settings') ? styles.active : ''}`}>
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link>
                </nav>

                <div className={styles.sidebarFooter}>
                    <button className={styles.logoutBtn}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <header className={styles.topHeader}>
                    <h1>Dashboard</h1>
                    <div className={styles.userProfile}>
                        <div className={styles.avatar}>JD</div>
                        <span>John Doe</span>
                    </div>
                </header>
                <div className={styles.contentArea}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
