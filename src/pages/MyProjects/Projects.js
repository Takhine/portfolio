import React, { useEffect } from "react";
import { Link, Events } from "react-scroll";

// Images
import jbm from "static/images/projects/jbm.PNG";
import eg from "static/images/projects/eg.PNG";
import gcs from "static/images/projects/gcs.PNG";
import hhss from "static/images/projects/hhss.PNG";
import ev from "static/images/projects/ev.PNG";

import tof from "static/images/projects/tof.PNG";
import bdp from "static/images/projects/bdp.PNG";
import nom from "static/images/projects/nom.PNG";
import won from "static/images/projects/won.PNG";
import dp from "static/images/projects/dp.PNG";



  /*

    1. Design Pataki
    2. Taxofile
    3. Body Politic
    4. Nomadion
    5. Whatsonnet

    6. Jewels by Mala
    7. Eventgrab
    8. GCS
    9. HHSS
    10. Euphoric Victorians
    
    
*/


const projectList = [
  {
    id: 1,
    name: "Taxofile",
    ref: "project1",
    description:
      "A cross-platform product for filing your Income Tax Returns, GST & also registering your business. The product is available as a stand alone website as well as an app on the PlayStore & Appstore!",
    link: "https://taxofile.com/",
    img: tof,
    github: 0,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
      { id: 3, name: "Digital Ocean" },
      { id: 4, name: "NextJs" },
      { id: 5, name: "React Native" },
      { id: 6, name: "Firebase" },
      { id: 7, name: "NodeJs" },
    ],
    role: (
      <p>
        Designed & Developer the client admin panel for the backend staff as
        well as the user facing webapp for all tax filing functionalities and
        customer support.
      </p>
    ),
    difficulties:
      "The business logic was specific to tax filing & a user persona of a CA might be able to get through the process quite easily but it was my reponsibility to ensurer that even a normal user would be able to go through the tax filing flow without getting overwhelmed by the jargon involved.",
    solution:
      "Since Taxofile provides a multitude of services related to filing taxes or a government registration process expected from a CA firm, I was able to design a resusable Filing Module that can be flexibly reused for any new service with different steps involved in filing for that service.",
  },
  {
    id: 2,
    name: "Design Pataki",
    ref: "project2",
    description:
      "A media house bringing fresh articles and stories to their thousands of subscribers via their Wordpress website & shopify store. They needed to upgrade thier modules and scale up with more custom features but were chained down by the multiple plugins being used and indpendent themes. My MERN solution is enabling them to migrate to a custom product capable of integrating a custom LMS as well, which is a part of their future scope.",
    link: "https://www.designpataki.com/",
    img: dp,
    github: "https://design-pataki.herokuapp.com/",
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
      { id: 3, name: "Heroku" },
      { id: 4, name: "TinyMCE" },
      { id: 5, name: "Ant.design" },
      { id: 6, name: "Next.js" },
    ],
    role: (
      <p>
        Migrated the CMS to React with an integration of TinyMCE customizing the
        WYSIWYG plugin as per the client preference.
      </p>
    ),
    difficulties:
      "Competing with a WordPress template, the challenge lies in the nitty-gritties of the UI, which the client is particular about. Although, with the right use of SCSS and proper styling standards, it is possible to replicate even the most outworldly UI",
    solution:
      "Moving the WordPress CMS to React with GraphQL for the required queries and Filters. On the client facing side, the website is replicated as per the Illustrator files that were provided by the designer on the team.",
  },
  {
    id: 3,
    name: "Body Politic",
    ref: "project3",
    description:
      "A local business based in Brooklyn, NY providing Accupuncture & therapy to its hyperlocal clients, needed the right way to put the word out during Covid-19 that they are open for business and are taking the rigth precautions to provide medical services to their community",
    link: "http://bodypolitic.info/",
    img: bdp,
    github: "https://github.com/Takhine/bodypolitic",
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Facebook Pixels" },
      { id: 3, name: "PHP" },
      { id: 4, name: "Google Console" },
    ],
    role: (
      <p>
        Developed a 5-pager business website to provide complete information to
        clients about Accupuncture & Herbal services. Explored integration of
        Facebook Pixels & Google Console to help drive a marketing campaign with
        blog templates for the client targetting each service type
      </p>
    ),
    difficulties:
      "The time difference of working with a USA client got difficult at first but proper time management and meetings scheduled at the right stages in the project helped with smooth delivery of the project.",
    solution:
      "React business webapp using antd powered by Facebook Pixels and Google Console, is the perfect mix for a cheap and efficient Marketing campaign for a hyperlocal business. This is exactly what I built for my client and she is now able to attach campaigns to the same website by making use of the template I made for her.",
  },
  {
    id: 4,
    name: "Nomadion",
    ref: "project4",
    description:
      "My personal project paired with two trusted associates in an efforts to promote innovation and remote work between multi-disciplinary teams. Nomadion is a team of teams that works mostly on Non-profit projects but is open to take up complex projects to test our expertise.",
    link: "https://nomadion.org/",
    img: nom,
    github: 0,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
    ],
    role: (
      <p>
        A quick website for my NPO Organization that I built over a weekend when
        I got off from work. It's a work in progress! Looking forward to guiding
        the young team of developers and engineers that have come in to build
        open-source projects (and hopefully startups of their own) :)
      </p>
    ),
    difficulties:
      "The main difficulty of a side hustle is that you do not get to give time to it since your focused on your main work, but proper time management over the weekends help you learn new skills and explore new friendships and avenues!",
    solution:
      "At Nomadion we are currently working on an NGO platform for people who want to launch movements with a specific mission and agenda to solve certain problems, in this platform collaborations can be setup.",
  },
  {
    id: 5,
    name: "Whatsonnet",
    ref: "project5",
    description:
      "A Product & Services Company specializing in building platforms with a React base for CMS/ERPs, NextJs for Client Facing web apps & React Native for  iOS & Android. Whatsonnet at its center has built an e-news platform to curate Internet news in a consumable format for its users.",
    link: "https://whatsonnet.com/",
    img: won,
    github: 0,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
      { id: 3, name: "NextJs" },
      { id: 4, name: "GraphQl" },
      { id: 5, name: "Digital Ocean" },
      { id: 6, name: "React Native" },
      { id: 7, name: "NodeJs" },
      { id: 8, name: "Express.js" },

      { id: 9, name: "Heroku" },
    ],
    role: (
      <p>
        As Fullstack React Developer with Whatsonnet my role is to build
        architectures for our products as well as client projects, primarily
        when cross-platform requirements come up with a CMS/Website/APP setup
        using React, NextJs & React Native.
      </p>
    ),
    difficulties:
      "Managing multiple modules may get overwhelming sometimes without the right approach of spearationg of concerns and following proper SCRUM based software development. Especially considering that we usually have more than two projects in our pipeline. Thankfully our team goes the extra mile to ensure that proper project milestones & deadlines are maintained to build products in a modular fashion.",
    solution:
      "I've build the Whatsonnet Website & CMS architecture and helped replicate the modules on our apps on the App Store & Playstore, utilizing Firebase for dynamic links useful for retaining both web and app audiences.",
  },

  {
    id: 6,
    name: "Jewels by Mala",
    ref: "project6",
    description:
      "A jewellery website with a focus on high quality jewels, Jewels by Mala has mutiple diamond and uncut-diamond collections all of which are designed personally by the founder of the company.",
    link: "http://jewels-by-mala.herokuapp.com/",
    img: jbm,
    github: "https://github.com/Takhine/jewels-by-mala",
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
      { id: 3, name: "Heroku" },
    ],
    role: (
      <p>
        Built the Webapp from scratch as the Front-end Developer, the project
        did not have any intensive backend requirements.
      </p>
    ),
    difficulties:
      "The UX requirements were not traditional as such there were a lot DOM Manipulation and tests involved to ensure that the UX changes across pages would not break the Design.",
    solution:
      "The client provided me with references and media assets, I was able to convert the designs into Website UI by following a Front-end Architecture in React to simplify the work done across repetitive layouts and stand-alone pages.",
  },
  {
    id: 7,
    name: "Eventgrab",
    ref: "project7",
    description:
      "Rent equipment, book performers and hire organisers! As your moments turn into hours, turn every occasion into an event with eventgrab. Eventgrab is an event management & equipment rental portal, here to make event organizing easier.",
    link: "http://eventgrab.com/",
    img: eg,
    github: 0,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
      { id: 3, name: "Redux" },
      { id: 4, name: "Material-UI" },
      { id: 5, name: "Node.js" },
      { id: 6, name: "Express.js" },
      { id: 7, name: "Next.js" },
    ],
    role: (
      <div>
        <p>
          Managed the project by aligning business logic to the website, working
          primarily on the front-end &amp; UI/UX. Partnered with{" "}
          <b>Aishwarya Sharma</b> who led the product development and helped
          build the architecture from the ground up.
        </p>
        <a
          href="https://www.linkedin.com/in/aishwarya-sharma-a6772a15b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Aishwarya's Profile!
        </a>
      </div>
    ),
    difficulties:
      "As a startup, the technical requirements for eventgrab was abstract from the get-go, the real challenge was to align the business logic to the technical resources and in doing so build a flexible system that can adapt to rapid changes in business requirements as eventgrab explores the market.",
    solution:
      "Keeping SEO in mind along with E-commerce standards we built a SPA (Single Page Application) which was server-side rendered (SSR) using React & Next.js at the fore-front of the architecture. To keep up to design levels Material UI was included. The Back-end was build with the Node/Express combination, making Eventgrab a complete Javascript solution.",
  },
  {
    id: 8,
    name: "Giri Consultancy Services",
    ref: "project8",
    description:
      "Giri Consultancy Services Is A Human Resources Consultancy Firm Specialized In Providing Manpower For Paints, Coatings, Inks, Polymer, Plastics, Specialty Chemicals, Science And Technology. Our specialization doesn't stop there. Having experienced executives in almost all industries we have time and again proved that our experience plays a major role in job search & hiring.",
    link: "https://giriconsultancy.in/",
    img: gcs,
    github: 0,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Sass" },
      { id: 3, name: "Reactstrap" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Express.js" },
      { id: 6, name: "AWS" },
      { id: 7, name: "Adobe XD" },
    ],
    role: (
      <div>
        <p>
          Worked directly with <b>Aishwarya Sharma</b> in building an HR Job
          Portal, where clients can post job requiremetns and candidates can
          upload their CV's. Assisted Giri Consultancy Services in UI/UX design
          as well as laying out the components on the website as per page
          requirements.
        </p>
        <a
          href="https://www.linkedin.com/in/aishwarya-sharma-a6772a15b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Aishwarya's Profile if you haven't already!
        </a>
      </div>
    ),
    difficulties:
      "Giri Consultancy Services is a traditionally offline business having a great reputation  well known beyond international waters, it was important to ensure that the brand image that has existed for over 25 years be traferred exactly to the online platform, to do so extra attention was given to the design.",
    solution:
      "Using a toolkit of Design & Development a fullstack job portal was created and deployed onto AWS, with features like job search, email subscription and an admin panel to keep up with the growing demand for candidates.",
  },
  {
    id: 9,
    name: "Hungry Hearts Soccer School",
    ref: "project9",
    description:
      "At Hungrey Hearts Soccer School Coach Ganesh, is focused on making the foundation of footballers strong at an early age and instill sportsmanship in them. His motto 'Let's build early', is what he follows in his own lifestyle as someone who has played for the Indian Team himself.",
    link: "http://hungryheartssoccerschool.com/",
    img: hhss,
    github: "https://github.com/Takhine/HHSS",
    technologies: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Bulma.js" },
      { id: 4, name: "ES5" },
    ],
    role: (
      <p>
        Unlike a traditional portfolio website, I was charged with developing a
        site for the target demographic of 9-17 year olds, wherein catchy design
        would have to be put to use.{" "}
      </p>
    ),
    difficulties:
      "The website was to appeal to both footballers and their parents and so deciding the information that would go up as well as figuring out the sitemap was a vital task.",
    solution:
      "Backed by Bulma.js I was able to design a website and develop components that would not only compliment the information but also the rest of the website.",
  },
  {
    id: 10,
    name: "Euphoric Victorians",
    ref: "project10",
    description:
      "Euphoric Victorians is a community of academics with the aim to create and proliferate a culture of excellence and distinctiveness that inspires intellectual competitiveness, wholesome development, spirit of enterprise, quality in education and lifelong learning skills, in a learner-centered, educator-centered and technology enabled environment of world class standards.",
    link: "http://euphoricvictorians.com/",
    img: ev,
    github: "https://github.com/Takhine/Euphoric-Victorians",
    technologies: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Bootstrap" },
      { id: 4, name: "ES5" },
      { id: 5, name: "PHP" },
      { id: 6, name: "MySQL" },
    ],
    role: (
      <p>
        As the Webapp consultant I was tasked with not only building a business
        website but also an exam portal wherein, applicants could take the test
        online after logging in and receive rewards as per their scores.
      </p>
    ),
    difficulties: (
      <React.Fragment>
        This had been one of my first projects as a freelancer and thus learning
        the web standards and implementing a fullstack solution for a test
        portal was a little overwhelming but with the support and encouragement
        from <b>Mudit Garg</b> I was able to pull it off.
        <a
          href="https://www.marketwithmaddy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Mudit's Website!
        </a>
      </React.Fragment>
    ),
    solution:
      "Backed by Bulma.js I was able to design a website and develop components that would not only compliment the information but also the rest of the website.",
  },
];
export default function Projects() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <div className="projects-container">
      <ol className="projects-menu">
        <li>
          <Link
            activeClass="active"
            to="project1"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Taxofile
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project2"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Design Pataki
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project3"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Body Politic
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project4"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Nomadion
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project5"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Whatsonnet
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project6"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Jewels by Mala
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project7"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Eventgrab
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project8"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Giri Consultancy Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project9"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Hungry Hearts Soccer School
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project10"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Euphoric Victorians
          </Link>
        </li>
        <p>Get in touch for more :)</p>
      </ol>
      {projectList.map((project) => {
        return (
          <div className="project" key={project.id}>
            <h2 className="project-heading" name={project.ref}>
              Project #{project.id}
            </h2>
            <p className="description">
              {project.name}: <b>{project.description}</b>
            </p>

            <div className="content-wrapper">
              <div className="left-top">
                <div className="image-container">
                  <img src={project.img} alt={project.name} />
                </div>

                <div className="buttons-container">
                  <a
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                  >
                    <button className="visit">Visit</button>
                  </a>
                  {project.github !== 0 && (
                    <a
                      target="_blank"
                      href={project.github}
                      rel="noopener noreferrer"
                    >
                      <button className="source">Source</button>
                    </a>
                  )}
                </div>
                <div>
                  <h3 className="section-title">Technologies</h3>
                  <ul className="technologies-container">
                    {project.technologies.map((tech) => {
                      return (
                        <li className="technology" key={tech.id}>
                          {tech.name}
                        </li>
                      );
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
            <hr />
          </div>
        );
      })}
    </div>
  );
}
