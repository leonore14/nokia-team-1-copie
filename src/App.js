import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import SelectorTool from './components/SelectorTool/SelectorTool';
import Footer from './components/Footer/Footer'



function App() {

  return (
    <>
    <div className="appDiv">  
    <Navbar />
    
    <Footer />
    </div>
    </>
  );
}

export default App;


