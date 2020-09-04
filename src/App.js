import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import SelectorTool from './components/SelectorTool/SelectorTool';
import BannerBottom from './components/BannerBottom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'



function App() {

  return (

    <div className="appDiv">
      <Navbar />
      <BannerBottom />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/SelectorTool' component={SelectorTool} />
      </Switch>

      <Footer />

    </div>

  );
}

export default App;


