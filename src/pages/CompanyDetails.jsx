import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCompanyById, getContactsByCompany, getInvoicesByCompany} from "../backend/backend.js";
import PictureProfile1 from "../assets/images/img1.png"
import PictureProfile2 from "../assets/images/img2.png"
import PinOne from "../components/PinOne.jsx";
import InvoicesRendering from "../components/tables/InvoicesRendering.jsx";

const CompanyDetails = () => {
    const {id} = useParams();
    const [company, setCompany] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getCompanyById(id).then((data) => {
            setCompany(data);
        }).catch((error) => {
            console.log(error);
        });

        getContactsByCompany(id).then((data) => {
            setContacts(data);

        }).catch((error) => {
            console.log(error);
        });

        getInvoicesByCompany(id).then((data) => {
            setInvoices(data);

        }).catch((error) => {
            console.log(error);
        });

    }, [id]);

    if (!company) {
        return <div>Loading...</div>;
    }

    return (
        <main className="mt-[4rem] md:mt-[6.5rem] flex flex-col">
            <div className="bg-yellow-300">
                <svg
                    className="px-4 md:px-16"
                    viewBox="0 0 1299 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z"
                        fill="white"/>
                </svg>
            </div>
            <div className={'px-4 md:mx-24 pt-8 pb-12 border-b-2'}>
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 pb-8">{company.name.toUpperCase()}</h2>
                <p className={'font-bold'}>Name: {company.name}</p>
                <p className={'font-bold'}>TVA: {company.tva}</p>
                <p className={'font-bold'}>Country: {company.country}</p>
                <p className={'font-bold'}>Type: {(company.type_id === 2) ? "Client" : "Supplier"}</p>
            </div>

            <div className={'px-4 md:mx-24 pt-8 pb-12 border-b-2'}>
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 pb-8">Contact people</h2>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                    {contacts.map((contact, index) => (
                        <div key={index}
                             className={'flex bg-gray-100 rounded-2xl p-4 items-center justify-center bg-opacity-60 backdrop-blur-sm'}>
                            <img src={index % 2 !== 0 ? PictureProfile1 : PictureProfile2} alt="Profile picture"
                                 className={'w-24 h-24 rounded-full'}/>
                            <div className={'flex flex-col ml-4'}>
                                <p className={'font-bold text-2xl mx-auto'}>{contact.name}</p>
                            </div>
                        </div>
                    ))}
                    <div className={'absolute right-0'}>
                        <PinOne/>
                    </div>
                </div>
            </div>

            <div className={''}>
                <h2 className="px-4 md:mx-24 pt-8 pb-12 border-b-2 text-2xl md:text-4xl font-extrabold text-gray-900 py-12">Last
                    invoices</h2>
                <InvoicesRendering data={invoices}/>

            </div>

        </main>
    );
}
export default CompanyDetails;
