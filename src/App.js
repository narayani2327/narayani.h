import Navbar from "./components/Navbar";
import About from "./components/About";
import Body from "./components/Body";
import {Routes, Route} from "react-router-dom";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/narayani.h' element={<Body/>} />
        <Route path='/narayani.h/about' element={<About/>} />
        <Route path='/narayani.h/skills' element={<Skills/>} />
        <Route path='/narayani.h/project' element={<Project/>} />
        <Route path='/narayani.h/education' element={<Education/>} />
        <Route path='/narayani.h/contacts' element={<Contact/>} />
      </Routes>
    </>
  );
}
export default App;