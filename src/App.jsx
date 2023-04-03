import './index.css'
import Navbar from "./components/Navbar.jsx";
import React, {Fragment} from "react";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
        </Fragment>
    )
}

export default App
