import React from 'react'
import '../Styles/courses.css'

export default function Courses({componentRef}) {
  return (
    <div className='courses-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='courses-heading'>Courses</div>
    </div>
  )
}
