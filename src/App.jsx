import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Sobre from "./components/sobre/Sobre";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
      <div className="sections">
        <Navbar/>
        <Home/>
        <Sobre/>
        <Portifolio/>
        <Contact/>
      </div>    
  );
}

export default App;
