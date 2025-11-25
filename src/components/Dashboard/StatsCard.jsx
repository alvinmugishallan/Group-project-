import React from 'react';
import styles from './Dashboard.module.css';

const StatsCard = ({ title, value, icon, trend }) => {
    return (
        <div className={styles.statsCard}>
            <div className={styles.statsHeader}>
                <span className={styles.statsTitle}>{title}</span>
                {icon && <div className={styles.statsIcon}>{icon}</div>}
            </div>
            <div className={styles.statsValue}>{value}</div>
            {trend && (
                <div className={`${styles.statsTrend} ${trend > 0 ? styles.trendUp : styles.trendDown}`}>
                    {trend > 0 ? '+' : ''}{trend}% from last month
                </div>
            )}
        </div>
    );
};

export default StatsCard;
