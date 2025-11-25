import React from 'react';
import styles from './Dashboard.module.css';

const AnalyticsChart = () => {
    const data = [
        { label: 'Jan', value: 12 },
        { label: 'Feb', value: 19 },
        { label: 'Mar', value: 15 },
        { label: 'Apr', value: 25 },
        { label: 'May', value: 32 },
        { label: 'Jun', value: 28 },
    ];

    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className={styles.chartContainer}>
            <h3 className={styles.chartTitle}>Project Submissions (6 Months)</h3>
            <div className={styles.barChart}>
                {data.map((item, index) => (
                    <div key={index} className={styles.barGroup}>
                        <div
                            className={styles.bar}
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                            title={`${item.value} Projects`}
                        >
                            <span className={styles.barValue}>{item.value}</span>
                        </div>
                        <span className={styles.barLabel}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnalyticsChart;
