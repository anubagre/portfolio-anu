import React from 'react'
import '../Styles/courses.css'

export default function Courses({ componentRef }) {
  return (
    <div className='courses-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='courses-heading'>Courses</div>
      <div className="all-courses">
        {/* AI Builder */}
        <div className="ai-builder course">
          <div className="course-heading">AI Builder</div>
          <hr />
          <div className='course-detail'>
            <div className='course-by'>MPSSDEGB, FITT IITD</div>
            <div className="course-date">January 2024 – March 2024</div>
          </div>
          <div className='course-description'>During this 80-hour online course, I explored diverse topics including machine learning, neural networks, and natural language processing.</div>
          <div className='course-buttons'>
            <a href="https://drive.google.com/file/d/1GVze5SKC8HJ1ZDYNKIFZ9Yv5b0YZx5oE/view?usp=sharing" target='_blank'>Certificate</a>
            <a href="https://mp-iitd.in/index.php/cohort-1-january-to-march-2024-certificates/" target='_blank'>Verify</a>
          </div>
        </div>
        {/* Python for DS, AI and Dev */}
        <div className="python-1 course">
          <div className="course-heading">Python for Data Science, AI, and Development</div>
          <hr />
          <div className='course-detail'>
            <div className='course-by'>Coursera, IBM</div>
            <div className="course-date">May 2023</div>
          </div>
          <div className='course-description'>I have completed this five-week course from Coursera with a score of <b>91.93%</b> </div>
          <div className='course-buttons'>
            <a href="https://drive.google.com/file/d/1KIaluy-YDMS7aMYrdf0y6U8QhZ0VPXFz/view?usp=sharing" target='_blank'>Certificate</a>
            <a href="https://coursera.org/verify/G7SNTKHQDAKY" target='_blank'>Verify</a>
          </div>
        </div>
        {/* Python for DS */}
        <div className="python-2 course">
          <div className="course-heading">Python for Data Science</div>
          <hr />
          <div className='course-detail'>
            <div className='course-by'>IITM, NPTEL</div>
            <div className="course-date">January 2023 - March 2023</div>
          </div>
          <div className='course-description'>This four-week course aimed at equipping participants to use Python programming for solving data science problems. I scored <b>76%</b> on the final exam and received an <b>Elite+Silver NPTEL Certificate</b>.</div>
          <div className='course-buttons'>
            <a href="https://drive.google.com/file/d/1uUidtbK1edavivXLcyLT_RioYJm5xzoE/view?usp=sharing" target='_blank'>Certificate</a>
            <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL23CS21S3428013503025410" target='_blank'>Verify</a>
          </div>
        </div>

      </div>
    </div>
  )
}
