import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import PubsList from "./components/PubsList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
    return (
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path="/pubs" element={<PubsList />} />
          </Routes>
      </BrowserRouter>
    );
};

export default App;
