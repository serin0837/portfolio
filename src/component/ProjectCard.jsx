import React from 'react';

const ProjectCard = ({projectData}) => {
    return (
        <div className="each-project">
            <div>
                <img
                    className="project-image"
                    src={projectData.image}
                    alt={projectData.title}
                />
            </div>
            <h2 className="project-title">{projectData.title}</h2>
            <div className="project-explain">
                <p>{projectData.mainP}</p>
              {/* <p className="explain">Live button is not working at the moment.</p> */}
                You can :
                <ul>
                    <li>{projectData.listP[0]}</li>
                    <li>{projectData.listP[1]}</li>
                    <li>{projectData.listP[2]}</li>
                </ul>
                <div className="project-tech">
                    <h3>Technologies</h3>
                    <ul>
                    <li>Front end: {projectData.frontendTech}</li>
                    <div className="project-button">
                    <button>
                    <a
                    href={projectData.frontendCode}
                    target="_blank"
                    className="projects"
                    rel="noopener noreferrer"
                    >
                    <span className="code">&lt;</span>
                    <i className="fa fa-github" aria-hidden="true"></i> code
                    <span className="code">&#47;&gt;</span>
                    </a>
                    </button>
                    <button>
                    <a
                    href={projectData.frontendLive}
                    target="_blank"
                    className="projects"
                    rel="noopener noreferrer"
                    >
                    <span className="code">&lt;</span>
                    <i className="fa fa-laptop" aria-hidden="true"></i> live
                    <span className="code">&#47;&gt;</span>
                    </a>
                    </button>
                </div>
                <li>
                    Back end: {projectData.backendTech}
                </li>
                </ul>
            </div>
            <div className="project-button">
                <button>
                    <a
                    href= {projectData.backendCode}
                    target="_blank"
                    className="projects"
                    rel="noopener noreferrer"
                    >
                    <span className="code">&lt;</span>
                    <i className="fa fa-github" aria-hidden="true"></i> code
                    <span className="code">&#47;&gt;</span>
                    </a>
                </button>
                <button>
                    <a
                    href= {projectData.backendLive}
                    target="_blank"
                    className="projects"
                    rel="noopener noreferrer"
                    >
                    <span className="code">&lt;</span>
                    <i className="fa fa-laptop" aria-hidden="true"></i> live
                    <span className="code">&#47;&gt;</span>
                    </a>
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;