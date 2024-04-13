import React from 'react'
import '../Styles/achievements.css'

export default function Achievements({ componentRef }) {
  return (
    <div className='achievements-main-div'>
      <div className='empty-space' ref={componentRef}></div>
      <div className='achievements-heading'>Achievements</div>
      <div className="all-achievements">
        <div className="achi-slider">
          <div><a href="https://www.linkedin.com/posts/anu-bagre_team-techfest-winner-activity-7027564170933854208-4E8K?utm_source=share&utm_medium=member_desktop" target='_blank'><b>1st rank</b> in Coding Competition, <b>Satyarth</b> (Tech fest 2023, SATI, Vidisha); Team size-5</a></div>
          <div><a href="https://www.linkedin.com/posts/anu-bagre_kriyeta-hackathon-innovation-activity-7167070886401970176-n_3C?utm_source=share&utm_medium=member_desktop" target='_blank'>Amongst <b>Top 5</b> in Kriyeta 2.0 hackathon, Team size 5</a></div>
          <div>Amongst <b>Top 10</b> in <b>SIH, 2023 internal hackathon</b>, Team size 6 </div>
          <div><a href="https://youtu.be/5ggWsD5qUi4?si=DP0El7aH3idQomDx" target='_blank'>Secured <b>1st rank</b> in English Poetry Competition at Samrat Utsav, 2023</a></div>
          <div>Secured <b>2nd rank</b> in Hindi Extempore Competition at Samrat Utsav, 2022</div>
          <div><a href="https://drive.google.com/file/d/1ymF4oRjuW7_LSCM0RiqzrTbHDKpSe3Mc/view?usp=sharing" target='_blank'>Participated in <b>Google Solution Challenge</b>, 2024</a></div>
          <div>Participated in Debate, Quiz, Slogan, Poem, Drawing, and Essay Writing Competition and received applauds</div>
        </div>
        <div className="achi-slider">
          <div><a href="https://www.linkedin.com/posts/anu-bagre_team-techfest-winner-activity-7027564170933854208-4E8K?utm_source=share&utm_medium=member_desktop" target='_blank'><b>1st rank</b> in Coding Competition, <b>Satyarth</b> (Tech fest 2023, SATI, Vidisha); Team size-5</a></div>
          <div><a href="https://www.linkedin.com/posts/anu-bagre_kriyeta-hackathon-innovation-activity-7167070886401970176-n_3C?utm_source=share&utm_medium=member_desktop" target='_blank'>Amongst <b>Top 5</b> in Kriyeta 2.0 hackathon, Team size 5</a></div>
          <div>Amongst <b>Top 10</b> in <b>SIH, 2023 internal hackathon</b>, Team size 6 </div>
          <div><a href="https://youtu.be/5ggWsD5qUi4?si=DP0El7aH3idQomDx" target='_blank'>Secured <b>1st rank</b> in English Poetry Competition at Samrat Utsav, 2023</a></div>
          <div>Secured <b>2nd rank</b> in Hindi Extempore Competition at Samrat Utsav, 2022</div>
          <div><a href="https://drive.google.com/file/d/1ymF4oRjuW7_LSCM0RiqzrTbHDKpSe3Mc/view?usp=sharing" target='_blank'>Participated in <b>Google Solution Challenge</b>, 2024</a></div>
          <div>Participated in Debate, Quiz, Slogan, Poem, Drawing, and Essay Writing Competition and received applauds</div>
        </div>
      </div>
      <div className='end-text'>Thanks for visiting!</div>
    </div>
  )
}
