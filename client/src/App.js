import "./App.css";
import {React, useState, useEffect} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import PubsList from "./components/PubsList";
import Pub from "./components/Pub";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import context from "./context/context";

const App = () => {
    const [pubs, setPubs] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:8000/pubs");
        const data = await res.json();
        console.log(data[0]);
        setPubs(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const { Provider } = context;
    return (
        <Provider value={pubs}>
            <BrowserRouter>
                <div className="App d-flex flex-column h-100 lead">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/pubs" element={<PubsList />} />
                        <Route exact path="/pubs/:name" element={<Pub />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
