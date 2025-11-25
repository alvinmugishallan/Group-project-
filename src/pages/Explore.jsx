import React from 'react';
import ProjectList from '../components/Projects/ProjectList';

const Explore = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Explore Projects</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Discover groundbreaking innovations from UCU students.</p>
            </div>
            <ProjectList />
        </div>
    );
};

export default Explore;
