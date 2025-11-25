import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, User, Calendar } from 'lucide-react';
import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.cardHeader}>
                <span className={`${styles.categoryBadge} ${styles[project.category.toLowerCase()]}`}>
                    {project.category}
                </span>
                <div className={styles.cardActions}>
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <Github size={18} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className={styles.cardTitle}>
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h3>

            <p className={styles.cardDescription}>
                {project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description}
            </p>

            <div className={styles.techStack}>
                {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                    <span className={styles.techTag}>+{project.technologies.length - 3}</span>
                )}
            </div>

            <div className={styles.cardFooter}>
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
    );
};

export default ProjectCard;
