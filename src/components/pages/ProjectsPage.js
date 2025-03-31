import React from 'react';
import Layout from '../Layout';
import './ProjectsPage.scss';

const projects = [
    {
        title: 'Istorya Adventure',
        description: 'A DGBL application made for students in grades 5 and 6, an alternative way to supplement their learning of Philippine History.',
        imageUrl: 'project 1.jpg',
    },
    {
        title: 'Dental Clinic Site',
        description: 'A site to handle appointments for a dental clinic. It was originally developed as a project for my IT114 course. The project files are stored in GitHub.',
        imageUrl: 'dentalclinicproj.png',
    },
    // add more projects
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
