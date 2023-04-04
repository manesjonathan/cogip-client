import {useEffect, useState} from "react";
import {getInvoices} from "../backend/backend.js";
import ReactPaginate from 'react-paginate';
import InvoicesRendering from "../components/InvoicesRendering.jsx";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        getInvoices()
            .then(data => {
                setInvoices(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    let itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = invoices.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(invoices.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % invoices.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <main className={'mt-[4rem] md:mt-[6.5rem] flex flex-col'}>
            <InvoicesRendering data={currentItems} title={'All invoices'}/>

            <ReactPaginate className={'flex w-1/2 justify-center justify-between mx-auto pt-12'}
                           breakLabel="..."
                           nextLabel="next >"
                           onPageChange={handlePageClick}
                           pageRangeDisplayed={5}
                           pageCount={pageCount}
                           previousLabel="< previous"
                           renderOnZeroPageCount={null}/>
        </main>
    );
}

export default Invoices;
