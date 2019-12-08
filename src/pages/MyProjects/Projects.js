import React from 'react';
// Images
import jbm from 'static/images/projects/jbm.PNG';
import eg from 'static/images/projects/eg.PNG';

const projectList = [
    {
        id: 1,
        name: 'Jewels by Mala',
        description: 'A jewellery website with a focus on high quality jewels, Jewels by Mala has mutiple diamond and uncut-diamond collections all of which are designed personally by the founder of the company.',
        link: 'http://jewels-by-mala.herokuapp.com/',
        img: jbm,
        github: 'https://github.com/Takhine/jewels-by-mala',
        technologies: [{ id: 1, name: 'React' },
        { id: 2, name: 'Sass' },
        { id: 3, name: 'Heroku' }],
        role: <p>Built the Webapp from scratch as the Front-end Developer, the project did not have any intensive backend requirements.</p>,
        difficulties: 'The UX requirements were not traditional as such there were a lot DOM Manipulation and tests involved to ensure that the UX changes across pages would not break the Design.',
        solution: 'The client provided me with references and media assets, I was able to convert the designs into Website UI by following a Front-end Architecture in React to simplify the work done across repetitive layouts and stand-alone pages.',
    },
    {
        id: 2,
        name: 'Eventgrab',
        description: 'Rent equipment, book performers and hire organisers! As your moments turn into hours, turn every occasion into an event with eventgrab. Eventgrab is an event management & equipment rental portal, here to make event organizing easier.',
        link: 'http://eventgrab.com/',
        img: eg,
        github: 0,
        technologies: [{ id: 1, name: 'React' },
        { id: 2, name: 'Sass' },
        { id: 3, name: 'Redux' },
        { id: 4, name: 'Material-UI' },
        { id: 5, name: 'Node.js' },
        { id: 6, name: 'Express.js' },
        { id: 7, name: 'Next.js' }],
        role: <div>
            <p>Managed the project by aligning business logic to the website, working primarily on the front-end &amp; UI/UX. Partnered with <b>Aishwarya Sharma</b> who led the product development and helped build the architecture from the ground up.</p>
            <a href="https://www.linkedin.com/in/aishwarya-sharma-a6772a15b/" target="_blank" rel="noopener noreferrer">Visit Aishwarya's Profile!</a>
            </div>,
        difficulties: 'The UX requirements were not traditional as such there were a lot DOM Manipulation and tests involved to ensure that the UX changes across pages would not break the Design.',
        solution: 'The client provided me with references and media assets, I was able to convert the designs into Website UI by following a Front-end Architecture in React to simplify the work done across repetitive layouts and stand-alone pages.',
    
    }
]
export default function Projects() {
    return (
        <div className="projects-container">
            {projectList.map((project) => {
                return (
                    <div className="project" key={project.id}>
                        <h2 className="project-heading">Project #{project.id}</h2>
                        <p className="description">{project.name}: <b>{project.description}</b></p>

                        <div className="content-wrapper">
                            <div className="left-top">
                                <div className="image-container">
                                    <img src={project.img} alt={project.name} />
                                </div>

                                <div className="buttons-container">
                                    <a target="_blank" href={project.link} rel="noopener noreferrer">
                                        <button className="visit">Visit</button>
                                    </a>
                                    {project.github !==0 &&
                                        <a target="_blank" href={project.github} rel="noopener noreferrer">
                                        <button className="source">Source</button>
                                    </a>
                                    }
                                </div>
                                <div>
                                    <h3 className="section-title">Technologies</h3>
                                    <ul className="technologies-container">
                                        {project.technologies.map((tech) => {
                                            return (
                                                <li className="technology" key={tech.id}>{tech.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="right-bottom">
                                <h3 className="section-title">My Role</h3>
                                {project.role}

                                <h3 className="section-title">Project Difficulties</h3>
                                <p>{project.difficulties}</p>

                                <h3 className="section-title">The Solution</h3>
                                <p>{project.solution}</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}