import './App.css';
import React from 'react';
import {
  Route, BrowserRouter as Router, Redirect, Routes,
} from 'react-router-dom';

import Pub from './components/Pub'
import PubsList from './components/PubsList'
import Home from './components/Home'


const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/pubs' element={<PubsList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
