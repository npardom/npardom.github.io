// React and React Router Imports
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import { useState , useE} from 'react'

// Context and Constants Import
import MyContext from './context.js';

// Pages Imports
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';

// Components Imports
import Canvas from './components/Canvas.jsx';
import Menu from './components/Menu.jsx';
import Signature from './components/Signature.jsx';
import LanguageButton from './components/LanguageButton.jsx';

// CSS and JS Import
import './styles/index.css'
import './assets/scripts.js'


function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  function changeLanguage(lang){
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }

  return (
    <MyContext.Provider value={{ language,changeLanguage }}>
      <Router>
        <Menu />
        <Canvas />
        <LanguageButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:slug" element = {<Projects />}/>
        </Routes>
        <Signature />
      </Router>
    </MyContext.Provider>
  )
}

export default App
