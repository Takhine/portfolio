import React from 'react';
// Images
import jbm from 'static/images/projects/jbm.PNG';
import eg from 'static/images/projects/eg.PNG';
import gcs from 'static/images/projects/gcs.PNG';
import hhss from 'static/images/projects/hhss.PNG';
import ev from 'static/images/projects/ev.PNG';




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
        difficulties: 'As a startup, the technical requirements for eventgrab was abstract from the get-go, the real challenge was to align the business logic to the technical resources and in doing so build a flexible system that can adapt to rapid changes in business requirements as eventgrab explores the market.',
        solution: 'Keeping SEO in mind along with E-commerce standards we built a SPA (Single Page Application) which was server-side rendered (SSR) using React & Next.js at the fore-front of the architecture. To keep up to design levels Material UI was included. The Back-end was build with the Node/Express combination, making Eventgrab a complete Javascript solution.',
    
    },
    {
        id: 3,
        name: 'Giri Consultancy Services',
        description: "Giri Consultancy Services Is A Human Resources Consultancy Firm Specialized In Providing Manpower For Paints, Coatings, Inks, Polymer, Plastics, Specialty Chemicals, Science And Technology. Our specialization doesn't stop there. Having experienced executives in almost all industries we have time and again proved that our experience plays a major role in job search & hiring.",
        link: 'https://giriconsultancy.in/',
        img: gcs,
        github: 0,
        technologies: [{ id: 1, name: 'React' },
        { id: 2, name: 'Sass' },
        { id: 3, name: 'Reactstrap' },
        { id: 4, name: 'Node.js' },
        { id: 5, name: 'Express.js' },
        { id: 6, name: 'AWS' },
        { id: 7, name: 'Adobe XD' }],
        role: <div>
            <p>Worked directly under <b>Aishwarya Sharma</b> in building an HR Job Portal, where clients can post job requiremetns and candidates can upload their CV's. Assisted Giri Consultancy Services in UI/UX design as well as laying out the components on the website as per page requirements.</p>
            <a href="https://www.linkedin.com/in/aishwarya-sharma-a6772a15b/" target="_blank" rel="noopener noreferrer">Visit Aishwarya's Profile if you haven't already!</a>
            </div>,
        difficulties: 'Giri Consultancy Services is a traditionally offline business having a great reputation  well known beyond international waters, it was important to ensure that the brand image that has existed for over 25 years be traferred exactly to the online platform, to do so extra attention was given to the design.',
        solution: 'Using a toolkit of Design & Development a fullstack job portal was created and deployed onto AWS, with features like job search, email subscription and an admin panel to keep up with the growing demand for candidates.',
    
    },
    {
        id: 4,
        name: 'Hungry Hearts Soccer School',
        description: "At Hungrey Hearts Soccer School Coach Ganesh, is focused on making the foundation of footballers strong at an early age and instill sportsmanship in them. His motto 'Let's build early', is what he follows in his own lifestyle as someone who has played for the Indian Team himself.",
        link: 'http://hungryheartssoccerschool.com/',
        img: hhss,
        github: 'https://github.com/Takhine/HHSS',
        technologies: [{ id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'Bulma.js' },
        { id: 4, name: 'ES5' }],
        role: <p>Unlike a traditional portfolio website, I was charged with developing a site for the target demographic of 9-17 year olds, wherein catchy design would have to be put to use. </p>,
        difficulties: 'The website was to appeal to both footballers and their parents and so deciding the information that would go up as well as figuring out the sitemap was a vital task.',
        solution: 'Backed by Bulma.js I was able to design a website and develop components that would not only compliment the information but also the rest of the website.',
    
    },
    {
        id: 5,
        name: 'Euphoric Victorians',
        description: "Euphoric Victorians is a community of academics with the aim to create and proliferate a culture of excellence and distinctiveness that inspires intellectual competitiveness, wholesome development, spirit of enterprise, quality in education and lifelong learning skills, in a learner-centered, educator-centered and technology enabled environment of world class standards.",
        link: 'http://euphoricvictorians.com/',
        img: ev,
        github: 'https://github.com/Takhine/Euphoric-Victorians',
        technologies: [{ id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'Bootstrap' },
        { id: 4, name: 'ES5' },
        { id: 5, name: 'PHP' },
        { id: 6, name: 'MySQL' }],
        role: <p>As the Webapp consultant I was tasked with not only building a business website but also an exam portal wherein, applicants could take the test online after logging in and receive rewards as per their scores.</p>,
        difficulties: <React.Fragment>
            This had been one of my first projects as a freelancer and thus learning the web standards and implementing a fullstack solution for a test portal was a little overwhelming but with the support and encouragement from <b>Mudit Garg</b> I was able to pull it off.
            <a href="https://www.marketwithmaddy.com/" target="_blank" rel="noopener noreferrer">Visit Mudit's Website!</a>
            </React.Fragment>,
        solution: 'Backed by Bulma.js I was able to design a website and develop components that would not only compliment the information but also the rest of the website.',
    
    },
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