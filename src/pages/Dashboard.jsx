import React from 'react';
import StatsCard from '../components/Dashboard/StatsCard';
import AnalyticsChart from '../components/Dashboard/AnalyticsChart';
import { Folder, CheckCircle, Clock, Users } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="dashboard-overview">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                <StatsCard
                    title="Total Projects"
                    value="12"
                    icon={<Folder size={20} />}
                    trend={12}
                />
                <StatsCard
                    title="Pending Review"
                    value="2"
                    icon={<Clock size={20} />}
                />
                <StatsCard
                    title="Approved"
                    value="8"
                    icon={<CheckCircle size={20} />}
                    trend={5}
                />
                <StatsCard
                    title="Total Views"
                    value="1.2k"
                    icon={<Users size={20} />}
                    trend={24}
                />
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem'
            }}>
                <AnalyticsChart />

                <div style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Recent Activity</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <ActivityItem
                            action="Project Submitted"
                            project="Smart Irrigation"
                            time="2 hours ago"
                        />
                        <ActivityItem
                            action="Project Approved"
                            project="Health Tracker"
                            time="5 hours ago"
                        />
                        <ActivityItem
                            action="New Comment"
                            project="E-Learning Portal"
                            time="1 day ago"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ActivityItem = ({ action, project, time }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--color-border)'
    }}>
        <div>
            <p style={{ fontWeight: '500', fontSize: '0.9rem' }}>{action}</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{project}</p>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{time}</span>
    </div>
);

export default Dashboard;
