import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Search, Filter } from 'lucide-react';
import styles from './Projects.module.css';

// Mock Data
const MOCK_PROJECTS = [
    {
        id: 1,
        title: 'UCU Innovators Hub',
        description: 'A centralized platform for student innovations and research projects.',
        category: 'Technology',
        technologies: ['React', 'Node.js', 'MongoDB'],
        author: 'John Doe',
        date: '2025-11-20',
        githubLink: 'https://github.com'
    },
    {
        id: 2,
        title: 'Smart Irrigation System',
        description: 'IoT based irrigation system for automated farming in rural Uganda.',
        category: 'Agriculture',
        technologies: ['Arduino', 'C++', 'IoT'],
        author: 'Jane Smith',
        date: '2025-11-18',
        githubLink: 'https://github.com'
    },
    {
        id: 3,
        title: 'Mobile Health Tracker',
        description: 'Android application for tracking vital signs and medication reminders.',
        category: 'Health',
        technologies: ['Flutter', 'Firebase'],
        author: 'Mike Johnson',
        date: '2025-11-15',
        githubLink: 'https://github.com'
    },
    {
        id: 4,
        title: 'E-Learning Portal',
        description: 'Web-based learning management system for remote education.',
        category: 'Education',
        technologies: ['Vue.js', 'Laravel', 'MySQL'],
        author: 'Sarah Williams',
        date: '2025-11-10',
        githubLink: 'https://github.com'
    },
    {
        id: 5,
        title: 'FinTech Savings App',
        description: 'Mobile app to help students save money and track expenses.',
        category: 'Finance',
        technologies: ['React Native', 'Express'],
        author: 'David Brown',
        date: '2025-11-05',
        githubLink: 'https://github.com'
    },
    {
        id: 6,
        title: 'Solar Power Monitor',
        description: 'System to monitor solar panel efficiency and battery usage.',
        category: 'Engineering',
        technologies: ['Python', 'Raspberry Pi'],
        author: 'Emily Davis',
        date: '2025-11-01',
        githubLink: 'https://github.com'
    }
];

const ProjectList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = MOCK_PROJECTS.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', 'Technology', 'Agriculture', 'Health', 'Education', 'Finance', 'Engineering'];

    return (
        <div className={styles.projectListContainer}>
            {/* Filters */}
            <div className={styles.filterBar}>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.categoryFilter}>
                    <Filter size={20} className={styles.filterIcon} />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className={styles.categorySelect}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Grid */}
            {filteredProjects.length > 0 ? (
                <div className={styles.projectGrid}>
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <h3>No projects found</h3>
                    <p>Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
    );
};

export default ProjectList;
