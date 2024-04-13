import React from 'react'
import '../Styles/skills.css'

export default function Skills({ componentRef }) {

  const skills = [
    { sname: "Python", img: "./Images/python.png" },
    { sname: "SQL", img: "./Images/sql.png" },
    { sname: "Data Science", img: "./Images/datas.png" },
    { sname: "Machine Learning", img: "./Images/ml.png" },
    { sname: "Generative AI", img: "./Images/genai.png" },
    { sname: "Natural Language Processing", img: "./Images/nlp.png" },
    { sname: "Data Structures and Algorithm (Python)", img: "./Images/dsa.png" },
    { sname: "Frontend - HTML, CSS", img: "./Images/html.png" },
  ];

  return (
    <div className='skills-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='skills-heading'>Technical Skills</div>
      <div className='all-skills'>
        {skills.map((skill, index) => (
          <div key={index} className='my-skill'>
            <img src={skill.img} alt={skill.sname} />
            <div>{skill.sname}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
