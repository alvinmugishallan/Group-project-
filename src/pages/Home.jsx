import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Globe } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                padding: '6rem 0',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, var(--color-background), white)'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '3.5rem',
                        color: 'var(--color-primary)',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Innovate. Collaborate. Showcase.
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem',
                        lineHeight: '1.6'
                    }}>
                        The centralized platform for Uganda Christian University students to document,
                        share, and discover groundbreaking innovations.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/explore" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}>
                            Explore Projects <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/register" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}>
                            Submit Your Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            icon={<Code size={32} />}
                            title="Project Repository"
                            description="A centralized hub for all student projects, easily searchable and accessible."
                        />
                        <FeatureCard
                            icon={<Users size={32} />}
                            title="Collaboration"
                            description="Connect with other innovators, form teams, and build the future together."
                        />
                        <FeatureCard
                            icon={<Globe size={32} />}
                            title="Global Visibility"
                            description="Showcase your work to the world, potential investors, and industry partners."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div style={{
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--color-background)',
        border: '1px solid var(--color-border)',
        transition: 'transform var(--transition-normal)',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{
            color: 'var(--color-primary)',
            marginBottom: '1rem',
            background: 'rgba(0, 71, 171, 0.1)',
            width: 'fit-content',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-muted)' }}>{description}</p>
    </div>
);

export default Home;
