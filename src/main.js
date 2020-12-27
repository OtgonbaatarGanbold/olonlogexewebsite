import Navbar from "./components/Navbar/Navbar";
import Links from "./components/Links/Links";
import EdProgram from "./components/EdProgram/EdProgram";
import Slider from './components/Sliders/Slider';

function Main() {  
  return (
    <div>
      <Navbar />
      <EdProgram />
      <Links />
      <Links /> 
      <Slider />
    </div>
  )
}

export default Main;