import './index.css'
import Navbar from "./components/Navbar.jsx";
import React, {Fragment} from "react";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Invoices from "./pages/Invoices.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Fragment>
                        <Navbar/>
                        <Home/>
                        <Footer/>
                    </Fragment>
                }/>
                <Route path="/invoices" element={
                    <Fragment>
                        <Navbar/>
                        <Invoices/>
                        <Footer/>
                    </Fragment>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
