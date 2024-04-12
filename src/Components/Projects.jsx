import React, { useEffect } from 'react'
import '../Styles/projects.css'

export default function Projects({ componentRef }) {

  return (
    <div className='projects-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='projects-heading'>Projects</div>
      <div className="all-projects">

        {/* CCC */}
        <div className="proj-ccc project">
          <div className="proj-heading">Consumer Complaint Classification</div>
          <div className="proj-tech">Data Science - Python</div>
          <div className='proj-date'>February 2024</div>
          <div className="proj-description">
            <ul>
              <li>Team size 2, this application uses <b>Stochastic Gradient Descent (SGD) Classifier</b> Algorithm.</li>
              <li>This model is deployed using <b>streamlit</b> on streamlit.io cloud and gives <b>71%</b> accuracy.</li>
              <li>Libraries used- <b>seaborn, sci-kit learn, numpy, matplotlib, pandas, regex, nltk, openpyxl</b>.</li>
            </ul>
          </div>
          <div className='proj-buttons'>
            <a href='https://consumercomplaintclassification.streamlit.app/' target='_blank'>Live</a>
            <a href='https://github.com/anubagre/Consumer_Complaint_Classification' target='_blank'>GitHub</a>
          </div>
        </div>

        {/* CC */}
        <div className="proj-ccc project">
          <div className="proj-heading">CityCompeer</div>
          <div className="proj-tech">Python</div>
          <div className='proj-date'>January 2024</div>
          <div className="proj-description">
            <ul>
              <li>Team size- 4, my contribution- ChatBot development using <b>TensorFlow</b>, which is trained on the data of famous Indian cities.</li>
            </ul>
          </div>
          <div className='proj-buttons'>
            {/* <a>Live</a> */}
            <a href='https://github.com/anubagre/CityCompeer' target='_blank'>GitHub</a>
          </div>
        </div>

        {/* PPoPOC */}
        <div className="proj-ccc project">
          <div className="proj-heading">Predicting Price of Pre-Owned-Cars</div>
          <div className="proj-tech">Data Science- Python</div>
          <div className='proj-date'>March 2023</div>
          <div className="proj-description">
            <ul>
              <li>In this <b>Regression</b> case study, the <b>Base RMSE</b> value turned out to be <b>1</b>.127 when missing values were <b>omitted</b> and <b>1.188</b> when missing values were <b>imputed</b>.</li>
              <li>Applied Algorithms- <b>Random Forest, Linear Regression</b>.</li>
            </ul>
          </div>
          <div className='proj-buttons'>
            <a href='https://predicting-price-of-pre-owned-cars.streamlit.app/' target='_blank'>Live</a>
            <a href='https://github.com/anubagre/Predicting-Price-of-Pre-owned-cars' target='_blank'>GitHub</a>
          </div>
        </div>

        {/* AS */}
        <div className="proj-ccc project">
          <div className="proj-heading">Author Stylometry</div>
          <div className="proj-tech">Natural Language Processing- Python</div>
          <div className='proj-date'>July 2023</div>
          <div className="proj-description">
            <ul>
              <li>This application analyzes the writing styles of different authors such as ‘James Madison’, ‘Anthony Walter Patrick Hamilton’ and ‘Jay Wright’ using Natural Language Processing.</li>
              <li>The model is trained using <b>85 PDFs</b> of different write-ups and the <b>nltk</b> library is used for prediction.</li>
            </ul>
          </div>
          <div className='proj-buttons'>
            {/* <a>Live</a> */}
            <a href='https://github.com/anubagre/Author-Stylometery-Natural-Language-Processing-' target='_blank'>GitHub</a>
          </div>
        </div>

        {/* WWA */}
        <div className="proj-ccc project">
          <div className="proj-heading">WhatsApp Web-Automation</div>
          <div className="proj-tech">Python</div>
          <div className='proj-date'>December 2022</div>
          <div className="proj-description">
            <ul>
              <li>This application uses web automation of Google Chrome to send multiple messages to specific contact numbers directly using the code.</li>
              <li>Library used - <b>selenium</b>.</li>
            </ul>
          </div>
          <div className='proj-buttons'>
            {/* <a>Live</a> */}
            <a href='https://github.com/anubagre/WhatsApp-Web-Automation' target='_blank'>GitHub</a>
          </div>
        </div>

        {/* LM */}
        <div className="proj-ccc project">
          <div className="proj-heading">Library Management</div>
          <div className="proj-tech">Python-MySQL connectivity</div>
          <div className='proj-date'>October 2020</div>
          <div className="proj-description">
            <ul>
              <li>This was my school project and was part of an assignment for the Computer Science Practical Exam, 12th. </li>
              <li>Library used - <b>mysql.connector, datetime, panda</b>.</li>
            </ul>
          </div>
          <div className='proj-buttons'>
            {/* <a>Live</a> */}
            <a href='https://github.com/anubagre/Library-Management' target='_blank'>GitHub</a>
          </div>
        </div>

      </div>
    </div>
  )
}
