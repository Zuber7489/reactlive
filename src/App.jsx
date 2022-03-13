import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import {  Route, Routes } from "react-router-dom";
import Footer from "./Footer";

const App = () =>{

    return(
    <><Navbar/>
<Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service/>}/>
    </Routes>
    <Footer />
    </>);


}
export default App;
