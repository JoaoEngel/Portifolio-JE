import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import "./styles/global.css";
import "./styles/menu-mobile.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
      <div className="sections">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Footer/>
      </div>    
  );
}

export default App;
