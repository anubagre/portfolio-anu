import React from 'react'
import '../Styles/projects.css'

export default function Projects({componentRef}) {
  return (
    <div className='projects-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='projects-heading'>Projects</div>
      <div className="all-projects">
        
      </div>
    </div>
  )
}
