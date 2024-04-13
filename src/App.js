import './App.css';
import HERO from './Components/HERO';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Courses from './Components/Courses';
import Achievements from './Components/Achievements';
import { useEffect, useRef, useState } from 'react';

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const courses = useRef(null);
  const achievements = useRef(null);
  const navRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const compoA = (e) => {
    e.preventDefault();
    scrollToRef(skills);
    setShowMediaIcons(false); // Close the navbar links tab
  };
  const compoB = (e) => {
    e.preventDefault();
    scrollToRef(projects);
    setShowMediaIcons(false); // Close the navbar links tab
  };
  const compoC = (e) => {
    e.preventDefault();
    scrollToRef(courses);
    setShowMediaIcons(false); // Close the navbar links tab
  };
  const compoD = (e) => {
    e.preventDefault();
    scrollToRef(achievements);
    setShowMediaIcons(false); // Close the navbar links tab
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollButton = document.getElementById('topButton');
      if (window.scrollY > 200) {
        setShowUpArrow(true);
        scrollButton.classList.add('animate');
      } else {
        setShowUpArrow(false);
        scrollButton.classList.remove('animate');
      }
    });

    // Event listener to close navbar links tab when clicking outside the hamburger icon
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', () => {});
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setShowMediaIcons(false);
    }
  };

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
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#062438_40%,#112430_100%)]"></div> */}
      <div className='navbar-main-div' ref={navRef}>
        <div className="hamburger-button">
          <a href="#" onClick={toggleMediaIcons}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div className={showMediaIcons ? "nav-link mobile-nav-link" : "nav-link"} >
          <ul>
            <li><a onClick={compoA}>Skills</a></li>
            <li><a onClick={compoB}>Projects</a></li>
            <li><a onClick={compoC}>Courses</a></li>
            <li><a onClick={compoD}>Achievements</a></li>
            <li><a href='https://drive.google.com/file/d/1j_M_dGsBy367c4uurLn02Z4Ch68sdmEj/view?usp=sharing' target='_blank'>Resume</a></li>
          </ul>
        </div>
      </div >

      <HERO />
      <Skills componentRef={skills} />
      <Projects componentRef={projects} />
      <Courses componentRef={courses} />
      <Achievements componentRef={achievements} />
      <div className='button-to-top' id='topButton'>
        <button>{showUpArrow && <i onClick={scrollToTop} class="fa fa-arrow-up" aria-hidden="true"></i>}</button>
      </div>
    </div>
  );
}

export default App;
