import './App.css';
import Navbar from './component/Navbar';
import About from './section/About';
import ContactUs from './section/ContactUs';
import Home from './section/Home';
import Projects from './section/Projects';
import Skills from './section/Skills';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <section id="homee"><Home/></section>
      <section id="aboutt"><About/></section>
      <section id="skill"><Skills/></section>
      <section id="project"><Projects/></section>
      <section id="contactUs"><ContactUs/></section>
      
      
    </div>
  );
}

export default App;
