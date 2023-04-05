import {useEffect, useState} from "react";
import {getInvoices} from "../backend/backend.js";
import ReactPaginate from 'react-paginate';
import InvoicesRendering from "../components/tables/InvoicesRendering.jsx";

const Invoices = () => {

    let itemsPerPage = 10;
    const [invoices, setInvoices] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const [searchField, setSearchField] = useState("");
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        getInvoices()
            .then(data => {
                setInvoices(data);
                setCurrentItems(invoices.slice(itemOffset, endOffset));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const pageCount = Math.ceil(invoices.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % invoices.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const handleChange = (e) => {
        if (e.target.value === "") {
            setCurrentItems(invoices.slice(itemOffset, endOffset));
        }
        setSearchField(e.target.value);
        setCurrentItems(invoices.filter((item) => {
            return item['ref'].toLowerCase().includes(searchField.toLowerCase());
        }));

    }

    return (
        <main className={'mt-[4rem] md:mt-[6.5rem] flex flex-col'}>
            <div className={'bg-yellow-300'}>
                <svg className={'px-4 md:px-16'} viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
                </svg>
            </div>
            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 px-24'}>All invoices</h1>
            <div className={'w-full text-right mb-8 px-24'}>
                <input onChange={handleChange}
                       className={'rounded-md border-2 border-gray-300 p-1'} type="search"
                       name="search" id="search" placeholder={'Search'}/>
            </div>

            <InvoicesRendering data={currentItems} title={'All invoices'} search={true}/>

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
