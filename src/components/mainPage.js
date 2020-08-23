import React, { useContext } from "react";
import { createUrl } from "../sanity";
import { InformationContext } from "../helpers/informationContext";

import "./styles/mainPage.scss";

function MainPage() {
    const info = useContext(InformationContext);
    const jobList = info.jobs.map((job) => (
      <div className={"job-container " + job.company.name.replace(/\s+/g, '-') } key={job._id}>
        <h3>{job.company.name}</h3>
        <h4>{job.title.en}</h4>
        <p>{job.description.en}</p>
        <p className="dates">
          {job.start.substring(0, 4)} -{" "}
          {job.end !== undefined ? job.end.substring(0, 4) : "present"}
        </p>
      </div>
    ));
    const projectList = info.personalProjects.map((project) => (
      <div
        className={"project-container"}
        key={project._id}
      >
        <h3>{project.title.en}</h3>
        <p>{project.description.en}</p>
        <p className="dates">
          {project.start.substring(0, 4)} -{" "}
          {project.end !== undefined ? project.end.substring(0, 4) : "present"}
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
        <div className="section-container">
          <h2>Experience</h2>
          {jobList}
        </div>
        <div className="section-container">
          <h2>Projects</h2>
          {projectList}
        </div>
      </div>
    );
}
export default MainPage;
