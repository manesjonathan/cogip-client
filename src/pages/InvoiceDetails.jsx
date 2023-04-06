import {useEffect, useState} from "react";
import {getInvoiceById} from "../backend/backend.js";
import {useParams} from "react-router-dom";

const InvoiceDetails = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        getInvoiceById(id)
            .then((data) => {
                setInvoice(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    if (!invoice) {
        return <div>Loading...</div>;
    }
    const date = new Date(invoice['created_at'].split(' ')[0]);

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
            <div className={'px-4 md:mx-24 pt-8 pb-12 flex justify-between w-3/4'}>
                <div className={''}>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 pb-8">{invoice.ref.toUpperCase()}</h2>
                    <p className={'font-bold'}>Ref: {invoice.ref}</p>
                    <p className={'font-bold'}>Company: {(invoice[0]['company'])}</p>
                    <p className={'font-bold'}>Dates
                        due: {new Date(date.setDate(date.getDate() + 15)).toLocaleDateString()}</p>
                    <p className={'font-bold'}>Created
                        at: {new Date(invoice['created_at'].split(' ')[0]).toLocaleDateString()}</p>
                </div>
            </div>
        </main>
    );
};

export default InvoiceDetails;
