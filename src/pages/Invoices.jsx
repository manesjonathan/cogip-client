import {useEffect, useState} from "react";
import {getInvoices} from "../backend/backend.js";
import InvoicesRendering from "../components/InvoicesRendering.jsx";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getInvoices()
            .then(data => {
                setInvoices(data['invoices']);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return <InvoicesRendering data={invoices}/>;
}

export default Invoices;
