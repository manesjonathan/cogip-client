import Hero from "../components/Hero.jsx";
import DataContainer from "../components/DataContainer.jsx";
import {getLatestInvoices} from "../backend/backend.js";
import {useEffect, useState} from "react";

const Home = () => {
    const [invoices, setInvoices] = useState([]);
    useEffect(() => {
        getLatestInvoices()
            .then(data => {
                setInvoices(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <main className={'mt-[4rem] md:mt-[10rem] lg:mt-[9rem] bg-yellow-300'}>
            <Hero/>
            <svg className={'px-4 md:px-16'} viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
            </svg>

            <DataContainer data={invoices}/>
        </main>
    )
}

export default Home;
