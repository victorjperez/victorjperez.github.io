import React, { useContext } from "react";
import { InformationContext } from "../helpers/informationContext";

import "./styles/mainPage.scss";

// Images
import Divider from './assets/fancyDivider.svg'
import Jaw from './assets/Jaw.svg'
import Wireless from "./assets/wireless.svg";
import Rania from "./assets/rania.svg";
import RegRot from "./assets/RegRot.svg";

function MainPage() {
    const info = useContext(InformationContext);
    const jobList = info.jobs.map((job) => (
      <div className={"job-container " + job.company.name.replace(/\s+/g, '-') } key={job._id}>
        <h3>{job.company.name}</h3>
        <h4>{job.title.en}</h4>
        <p>{job.description.en}</p>
        <p className="dates">
          {job.start.substring(0, 4)} -{" "}
          {job.end !== undefined ? job.end.substring(0, 4) : "Present"}
        </p>
      </div>
    ));
    const projectList = info.personalProjects.map((project) => (
      <div
        className={"project-container"}
        key={project._id}
      >
        {project.title.en === "RegRotator" ? (<img src={RegRot} alt="RegRotator Logo" width="250px" />) : ""}
        {project.title.en === "RANIA Control System" ? (<img src={Rania} alt="Rania Logo" width="250px" />) : ""}
        {project.title.en === "Writing" ? (<img src={Jaw} alt="Jaw" width="250px" />) : ""}
        {project.title.en === "Wireless Fall 2019" ? (<img src={Wireless} alt="Wireless" width="400px" />) : ""}
        <h3>{project.title.en}</h3>
        <p>{project.description.en}</p>
        <p className="dates">
          {project.start.substring(0, 4)} -{" "}
          {project.end !== undefined ? project.end.substring(0, 4) : "Present"}
        </p>
      </div>
    ));
    return (
      <div className="main-section">
        <div className="section-container">
          <h2>Education</h2>
          <h3>{info.education[0].degree.en}</h3>
          <h4>{info.education[0].institutionName.en}</h4>
          <p className="dates">
            {info.education[0].start.substring(0, 4)} -{" "}
            {info.education[0].end.substring(0, 4)}
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
