import React from 'react'
import '../Styles/achievements.css'

export default function Achievements({componentRef}) {
  return (
    <div className='achievements-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='achievements-heading'>Achievements</div>
    </div>
  )
}
