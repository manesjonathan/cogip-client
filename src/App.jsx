import './index.css'
import Navbar from "./components/Navbar.jsx";
import React, {Fragment} from "react";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <Footer/>
        </Fragment>
    )
}

export default App
