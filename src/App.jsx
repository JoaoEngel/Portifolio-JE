import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
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
        <Experience/>
        <Projects/>
        <Footer/>
      </div>    
  );
}

export default App;
