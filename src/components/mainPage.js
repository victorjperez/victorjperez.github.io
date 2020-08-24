import React, { useContext } from "react"
import format from "date-fns/format"

import { InformationContext } from "../helpers/informationContext"

import "./styles/mainPage.scss"

// Images
import Divider from './assets/fancyDivider.svg'
import Jaw from './assets/Jaw.svg'
import Wireless from "./assets/wireless.svg"
import Rania from "./assets/rania.svg"
import RegRot from "./assets/RegRot.svg"
import GitHub from "./assets/github.png"

function MainPage() {
    const info = useContext(InformationContext);
    const jobList = info.jobs.map((job) => (
      <div className={"job-container " + job.company.name.replace(/\s+/g, '-') } key={job._id}>
        <h3>{job.company.name}</h3>
        <h4>{job.title.en}</h4>
        <p>{job.description.en}</p>
        <p className="dates">
          {format(new Date(job.start), 'MMM yyyy')} -{" "}
          {job.end !== undefined ? format(new Date(job.end), 'MMM yyyy') : "Present"}
        </p>
      </div>
    ));
    const projectList = info.personalProjects.map((project) => (
      <div
        className={"project-container"}
        key={project._id}
      >
        {project.title.en === "RegRotator" ? (<img src={RegRot} alt="RegRotator Logo" width="220px" />) : ""}
        {project.title.en === "RANIA Control System" ? (<img src={Rania} alt="Rania Logo" width="250px" />) : ""}
        {project.title.en === "Writing" ? (<img src={Jaw} alt="Jaw" width="250px" />) : ""}
        {project.title.en === "Wireless Fall 2019" ? (<img src={Wireless} alt="Wireless" width="450px" />) : ""}
        <h3><a href={project.url !== undefined ? project.url : project.githubUrl}>{project.title.en}</a></h3>
        <p>{project.description.en}</p>
        <p className="dates">
          {format(new Date(project.start), 'MMM yyyy')} -{" "}
          {project.end !== undefined ? format(new Date(project.end), 'MMM yyyy') : "Present"}
        </p>
        
        <span className="tech-section">
        <a href={project.githubUrl} ><img src={GitHub} alt="Github link" width="20px"></img></a>
        {project.technologies.map((tech) => (
          <p className="tech-title" key={tech}>{tech}</p>
        ))}
        </span>
      </div>
    ));
    return (
      <div className="main-section">
        <div className="section-container">
          <h2>Education</h2>
          <h3>{info.education[0].degree.en}</h3>
          <h4>{info.education[0].institutionName.en}</h4>
          <p className="dates">
            {format(new Date(info.education[0].start), "MMM yyyy")}{" "}
            -{" "}
            {format(new Date(info.education[0].end), "MMM yyyy")}
          </p>
        </div>
        <img src={Divider} alt="Section Divider" />
        <div className="section-container">
          <h2>Experience</h2>
          {jobList}
        </div>
        <img src={Divider} alt="Section Divider" />
        <div className="section-container">
          <h2>Projects</h2>
          {projectList}
        </div>
      </div>
    );
}
export default MainPage;
