import './App.css';
import HERO from './Components/HERO';

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D7F8FF_1px,transparent_1px),linear-gradient(to_bottom,#D7F8FF_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-20 right-0 top-0 bg-[radial-gradient(circle_1000px_at_100%_200px,#D7F8FF,transparent)]"></div></div>
      <Navbar />
      <HERO />
    </div>
  );
}

export default App;
