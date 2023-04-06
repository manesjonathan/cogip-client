import Hero from "../components/Hero.jsx";
import {getLatestCompanies, getLatestContacts, getLatestInvoices} from "../backend/backend.js";
import {useEffect, useState} from "react";
import ContactsRendering from "../components/tables/ContactsRendering.jsx";
import CompaniesRendering from "../components/tables/CompaniesRendering.jsx";
import HeroFooter from "../components/HeroFooter.jsx";
import InvoicesRendering from "../components/tables/InvoicesRendering.jsx";
import PinOne from "../components/PinOne.jsx";
import PinTwo from "../components/PinTwo.jsx";

const Home = () => {
    const [invoices, setInvoices] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getLatestInvoices()
            .then(data => {
                setInvoices(data);

            })
            .catch(error => {
                console.log(error);
            });
        getLatestContacts()
            .then(data => {
                setContacts(data);
            })
            .catch(error => {
                console.log(error);
            });
        getLatestCompanies()
            .then(data => {
                setCompanies(data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <main className={'mt-[4rem] md:mt-[6.5rem] flex flex-col'}>
            <Hero/>
            <div className={'bg-yellow-300'}>
                <svg className={'px-4 md:px-16'} viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
                </svg>
            </div>

            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 px-4 md:px-24 py-14'}>Last invoices</h1>
            <InvoicesRendering data={invoices} title={'Last invoices'} search={false}/>
            <div className={'flex justify-end'}>
                <PinOne/>
            </div>

            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 px-4 md:px-24 py-14'}>Last contacts</h1>
            <ContactsRendering data={contacts}/>

            <div className={''}>
                <PinTwo/>
            </div>

            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 px-4 md:px-24 py-14'}>Last companies</h1>
            <CompaniesRendering data={companies}/>

            <HeroFooter/>
        </main>
    )
}

export default Home;
