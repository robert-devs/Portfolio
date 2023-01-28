import Navbar from "./components/navbar/Navbar";
import {Testimonial ,Intro,Portfolio,Works,Contact} from "./components"
import "./App.css"


function App() {
  return (
    <div className="App">
     <Navbar/>
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
