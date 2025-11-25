import React, { useState } from 'react';
import { Upload, Github, FileText, Loader2, CheckCircle } from 'lucide-react';
import styles from './Projects.module.css';

const ProjectSubmissionForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        technologies: '',
        githubLink: '',
        document: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, document: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form after success if needed
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className={styles.successState}>
                <CheckCircle size={64} className={styles.successIcon} />
                <h2>Project Submitted!</h2>
                <p>Your project has been successfully submitted for review.</p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setIsSuccess(false);
                        setFormData({ title: '', description: '', category: '', technologies: '', githubLink: '', document: null });
                    }}
                >
                    Submit Another
                </button>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h2>Submit New Project</h2>
                <p>Share your innovation with the UCU community.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.submissionForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Project Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="e.g., UCU Innovators Hub"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Health">Health</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Education">Education</option>
                        <option value="Finance">Finance</option>
                        <option value="Technology">Technology</option>
                        <option value="Engineering">Engineering</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="5"
                        placeholder="Describe your project, its goals, and impact..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="technologies">Technologies Used</label>
                    <input
                        type="text"
                        id="technologies"
                        name="technologies"
                        placeholder="e.g., React, Node.js, MongoDB"
                        value={formData.technologies}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="githubLink">GitHub Repository Link</label>
                    <div className={styles.inputWrapper}>
                        <Github className={styles.inputIcon} size={20} />
                        <input
                            type="url"
                            id="githubLink"
                            name="githubLink"
                            placeholder="https://github.com/username/repo"
                            value={formData.githubLink}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="document">Project Documentation (PDF)</label>
                    <div className={styles.fileUpload}>
                        <input
                            type="file"
                            id="document"
                            name="document"
                            accept=".pdf"
                            onChange={handleFileChange}
                            required
                        />
                        <div className={styles.uploadPlaceholder}>
                            <Upload size={24} />
                            <span>{formData.document ? formData.document.name : 'Click to upload PDF'}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formActions}>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={20} style={{ marginRight: '0.5rem' }} />
                                Submitting...
                            </>
                        ) : (
                            'Submit Project'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectSubmissionForm;
