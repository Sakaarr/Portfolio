import logo from './assets/img/logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from './components/Education';
import { Languages } from './components/Language';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Languages />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
