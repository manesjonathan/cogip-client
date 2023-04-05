import './index.css'
import Navbar from "./components/Navbar.jsx";
import React, {Fragment} from "react";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Invoices from "./pages/Invoices.jsx";
import Contacts from "./pages/Contacts.jsx";
import Companies from "./pages/Companies.jsx";
import CompanyDetails from "./pages/CompanyDetails.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";

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
                <Route path="/companies" element={
                    <Fragment>
                        <Navbar/>
                        <Companies/>
                        <Footer/>
                    </Fragment>
                }/>
                <Route path="/contacts" element={
                    <Fragment>
                        <Navbar/>
                        <Contacts/>
                        <Footer/>
                    </Fragment>
                }/>
                <Route path='/invoice/:id' element={
                    <Fragment>
                        <Navbar/>
                        <h2>Contact details</h2>
                        <Footer/>
                    </Fragment>
                }/>
                <Route path='/company/:id' element={
                    <Fragment>
                        <Navbar/>
                        <CompanyDetails/>
                        <Footer/>
                    </Fragment>
                }/>
                <Route path='/contact/:id' element={
                    <Fragment>
                        <Navbar/>
                        <ContactDetails/>
                        <Footer/>
                    </Fragment>
                }/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
