import {useEffect, useState} from "react";
import {getContacts} from "../backend/backend.js";
import ReactPaginate from 'react-paginate';
import ContactsRendering from "../components/tables/ContactsRendering.jsx";

const Invoices = () => {
    const itemsPerPage = 10;
    const [contacts, setContacts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        getContacts()
            .then((data) => {
                setContacts(data);
                setCurrentItems(data.slice(itemOffset, endOffset));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [itemOffset]);

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const pageCount = Math.ceil(contacts.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const handleChange = (e) => {
        const {value} = e.target;
        if (value === "") {
            setItemOffset(0);
            setCurrentItems(contacts.slice(0, itemsPerPage));
        } else {
            setCurrentItems(
                contacts.filter((item) =>
                    item["name"].toLowerCase().includes(value.toLowerCase())
                ).slice(0, itemsPerPage)
            );
        }
    };

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
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 px-4 md:px-24">
                All contacts
            </h1>
            <div className="w-full md:text-right mb-8 px-4 pt-4 md:px-24">
                <input
                    onChange={handleChange}
                    className="rounded-md border-2 border-gray-300 p-1"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"/>
            </div>

            <ContactsRendering
                data={currentItems}
                title="All contacts"
                search={true}
                key={currentItems.map((item) => item.id).join()}/>

            <ReactPaginate
                className="flex w-2/3 justify-between mx-auto pt-12"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"/>
        </main>
    );
};

export default Invoices;
