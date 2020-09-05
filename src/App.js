import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import SelectorTool from './components/SelectorTool/SelectorTool';

import Home from './components/Home/Home';

import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
=======




function App() {

  return (

    <div className="appDiv">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/SelectorTool' component={SelectorTool} />
       
      </Switch>
      <Carousel />
      <Footer />

    </div>

  );
}

export default App;


