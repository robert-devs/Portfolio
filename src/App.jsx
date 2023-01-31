import Navbar from "./components/navbar/Navbar";
import {Testimonial ,Intro,Portfolio,Works,Contact, Menu} from "./components"
import "./App.scss"
import { useState } from "react";


function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
     <Navbar menuOpen= {menuOpen} setMenuOpen = {setMenuOpen} />
     <Menu openMenu = {menuOpen} setMenuOpen={setMenuOpen} />
   
     <div className="sections">
      
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonial/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
