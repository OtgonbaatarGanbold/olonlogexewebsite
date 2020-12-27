import Navbar from "./components/Navbar/Navbar";
import Links from "./components/Links/Links";
import EdProgram from "./components/EdProgram/EdProgram";
import Messages from "./components/Messages/Messages";
// import Slider from './components/Sliders/Tslider';

function Main() {  
  return (
    <div>
      <Navbar />
      <Messages />
      <EdProgram />
      <Links />
      {/* <Slider /> */}
    </div>
  )
}

export default Main;