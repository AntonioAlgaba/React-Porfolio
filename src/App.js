import './App.css';
import React from 'react'
import { BrowserRouter  as Router,Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar'
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer'

function App() {
  return (
  <Router>
    <div>
      <NavBar />
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />          
        </Routes>
      <Footer />
    </div>
  </Router>
    
  );
}

export default App;
