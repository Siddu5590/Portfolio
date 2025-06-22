import './App.css';
import Navbar from './component/Navbar';
import About from './section/About';
import ContactUs from './section/ContactUs';
import Home from './section/Home';
import Projects from './section/Projects';
import Skills from './section/Skills';


function App() {
  return (
    <>
      <div className="app-wrapper">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><ContactUs /></section>
    </div>
    </>
  );
}

export default App;
