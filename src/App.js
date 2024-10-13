import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Links from './Links';
import Residencies from './Residencies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Value from './Value';
import Contact from './Contact';
import Start from './Start';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Links/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Start/>
      <Footer/>
    </div>
  );
}

export default App;
