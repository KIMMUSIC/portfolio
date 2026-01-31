import React from "react";
import "./BodyStyle.css";

function Skills(props) {
    let skill = []
    for(let i = 0; i < props.sk.length; ++i){
        skill.push( <img className="skill" src={'https://img.shields.io/badge/' + props.sk[i] + '?style=flat-square&logo='+ (props.sk[i]).split('-')[0] +'&logoColor=white'}  key={i} alt="skills"/> )
    }
  return (
    <div>
        <h3>🛠 Tech Stack 🛠</h3>
        <div className="skillwrapper">
        {skill}
        </div>
    </div>
  );
}

export default Skills;
