import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Blog from './pages/Blog.jsx';
// import Store from './pages/Projects.jsx/index.js';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <div id='#contact' > */}
      <Footer  />
      {/* </div> */}
    </Router>
  );
}

export default App;
