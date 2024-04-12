import './App.css';
import HERO from './Components/HERO';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Courses from './Components/Courses';
import Achievements from './Components/Achievements';
import Education from './Components/Education';
import { useEffect, useRef, useState } from 'react'

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const courses = useRef(null);
  const achievements = useRef(null);
  const education = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const compoA = (e) => {
    e.preventDefault();
    scrollToRef(skills);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoB = (e) => {
    e.preventDefault();
    scrollToRef(projects);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoC = (e) => {
    e.preventDefault();
    scrollToRef(courses);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoD = (e) => {
    e.preventDefault();
    scrollToRef(achievements);
    setShowMediaIcons(!showMediaIcons);
  };
  const compoE = (e) => {
    e.preventDefault();
    scrollToRef(education);
    setShowMediaIcons(!showMediaIcons);
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollButton = document.getElementById('topButton');
      if (window.scrollY > 400) {
        setShowUpArrow(true);
        scrollButton.classList.add('animate');
      }
      else {
        setShowUpArrow(false);
        scrollButton.classList.remove('animate');
      }
    })
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMediaIcons = (e) => {
    e.preventDefault(); // Prevent default behavior
    setShowMediaIcons(!showMediaIcons);
  }; 

  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D7F8FF_1px,transparent_1px),linear-gradient(to_bottom,#D7F8FF_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-20 right-0 top-0 bg-[radial-gradient(circle_1000px_at_100%_200px,#D7F8FF,transparent)]"></div></div>
      {/* <Navbar compoA={compoA} compoB={compoB} compoC={compoC} compoD={compoD} compoE={compoE} toggleMediaIcons={toggleMediaIcons} showMediaIcons={showMediaIcons} showUpArrow={showUpArrow} scrollToTop={scrollToTop}/> */}

      <div className='navbar-main-div'>
        <div className="hamburger-button">
          <a href="#" onClick={toggleMediaIcons}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div className={showMediaIcons ? "nav-link mobile-nav-link" : "nav-link"} >
          <ul>
            <li><a onClick={compoA}>Achievements</a></li>
            <li><a onClick={compoB}>Projects</a></li>
            <li><a onClick={compoC}>Courses</a></li>
            <li><a onClick={compoD}>Education</a></li>
            <li><a onClick={compoE}>Resume</a></li>
          </ul>
        </div>

      </div >

      <HERO />
      <Skills componentRef={skills} />
      <Projects componentRef={projects} />
      <Courses componentRef={courses} />
      <Achievements componentRef={achievements} />
      <Education componentRef={education} />
      <div className='button-to-top' id='topButton'>
        <button>{showUpArrow && <i onClick={scrollToTop} class="fa fa-arrow-up" aria-hidden="true"></i>}</button>
      </div>
    </div>
  );
}

export default App;
