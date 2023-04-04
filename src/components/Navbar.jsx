import React, {useState} from "react";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header>
            <nav
                className={'fixed top-0 z-10 w-full justify-between px-auto p-4 bg-yellow-300 text-gray-900 md:px-16 md:py-8'}>
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-2xl md:text-4xl md:mr-12 font-bold leading-relaxed inline-block whitespace-nowrap uppercase"
                           href="/">COGIP
                        </a>
                        <button
                            className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <FaBars/>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
                         id="navbar">
                        <ul className="flex flex-col lg:flex-row list-none text-center justify-center">
                            <li>
                                <a
                                    className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}
                                    href={'/'}>Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}

                                    href={'/invoices'}>Invoices
                                </a>
                            </li>
                            <li>
                                <a
                                    className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}

                                    href={'/companies'}>Companies
                                </a>
                            </li>
                            <li>
                                <a
                                    className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}

                                    href={'/contacts'}>Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"lg:flex lg:flex-row flex-col " + (navbarOpen ? " flex" : " hidden")}>
                        <a className={'px-3 py-2 mr-8 flex font-bold leading-snug cursor-pointer rounded-lg bg-gray-50'}
                           href={'/'}>Sign up
                        </a>
                        <a className={'px-3 py-2 flex font-bold leading-snug cursor-pointer'}
                           href={'/'}>Login
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
