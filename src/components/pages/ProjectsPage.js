import React from 'react';
import Layout from '../Layout';
import './ProjectsPage.scss';

const projects = [
    {
        title: 'Istorya Adventure',
        description: 'A',
        imageUrl: 'path/to/image1.jpg',
    },
    {
        title: 'Dental Clinic Appointment System',
        description: 'A',
        imageUrl: 'path/to/image2.jpg',
    },
    // Add more projects as needed
];

const ProjectsPage = () => {
    return (
        <Layout title='PROJECTS'>
            <div className='projectspage'>
                <div className='content-box'>
                    <h1>My Projects</h1>
                    <div className='projects-list'>
                        {projects.map((project, index) => (
                            <div key={index} className='project-item'>
                                <img src={project.imageUrl} alt={project.title} className='project-thumbnail' />
                                <div className='project-details'>
                                    <h2 className='project-title'>{project.title}</h2>
                                    <p className='project-description'>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;
