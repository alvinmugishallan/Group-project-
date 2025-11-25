import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github, FileText, User, Calendar, ArrowLeft, MessageSquare, Send } from 'lucide-react';
import styles from './Projects.module.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [comment, setComment] = useState('');

    // Mock fetch project
    useEffect(() => {
        // In a real app, fetch by ID
        setProject({
            id,
            title: 'UCU Innovators Hub',
            description: 'A centralized platform for student innovations and research projects. This platform bridges the gap between student creativity and industry visibility. It allows students to document their work, get feedback from supervisors, and showcase their projects to potential investors.',
            category: 'Technology',
            technologies: ['React', 'Node.js', 'MongoDB', 'Vite'],
            author: 'John Doe',
            team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
            date: '2025-11-20',
            githubLink: 'https://github.com',
            documentLink: '#',
            comments: [
                { id: 1, user: 'Dr. Sarah', text: 'Great initiative! Please add more details on the security architecture.', date: '2025-11-21' },
                { id: 2, user: 'Admin', text: 'Approved for the exhibition.', date: '2025-11-22' }
            ]
        });
    }, [id]);

    if (!project) return <div className="container" style={{ padding: '4rem' }}>Loading...</div>;

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <Link to="/explore" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <div className={styles.detailsContainer}>
                {/* Header */}
                <div className={styles.detailsHeader}>
                    <div>
                        <span className={`${styles.categoryBadge} ${styles[project.category.toLowerCase()]}`}>
                            {project.category}
                        </span>
                        <h1 className={styles.detailsTitle}>{project.title}</h1>
                        <div className={styles.metaInfo}>
                            <div className={styles.authorInfo}>
                                <User size={16} />
                                <span>{project.author}</span>
                            </div>
                            <div className={styles.dateInfo}>
                                <Calendar size={16} />
                                <span>{new Date(project.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actionButtons}>
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
                                <Github size={18} /> Repository
                            </a>
                        )}
                        {project.documentLink && (
                            <a href={project.documentLink} className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
                                <FileText size={18} /> Documentation
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className={styles.detailsContent}>
                    <section className={styles.section}>
                        <h3>Description</h3>
                        <p>{project.description}</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Technologies Used</h3>
                        <div className={styles.techStack}>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Team Members</h3>
                        <ul className={styles.teamList}>
                            {project.team.map((member, index) => (
                                <li key={index}>{member}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Comments */}
                <div className={styles.commentsSection}>
                    <h3>Comments & Feedback</h3>

                    <div className={styles.commentList}>
                        {project.comments.map(comment => (
                            <div key={comment.id} className={styles.comment}>
                                <div className={styles.commentHeader}>
                                    <span className={styles.commentUser}>{comment.user}</span>
                                    <span className={styles.commentDate}>{comment.date}</span>
                                </div>
                                <p>{comment.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.commentForm}>
                        <textarea
                            placeholder="Leave a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows="3"
                        ></textarea>
                        <button className="btn btn-primary" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <Send size={16} /> Post Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
