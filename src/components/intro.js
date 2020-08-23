import React, { useContext } from "react";
import { createUrl } from "../sanity";
import { InformationContext } from "../helpers/informationContext";

import "./styles/intro.scss";

function Intro() {
    const info = useContext(InformationContext);
    return (
      <div className="intro-section">
        <img
          src={createUrl(info.image).width(250).height(250)}
          alt="Person"
        />
        <div className="intro-keyinfo">
          <h1>Victor J. Perez III</h1>
          <p>{info.introduction.en}</p>
        </div>
      </div>
    );
}
export default Intro;
