import {Link} from "react-scroll";
import {
    AiFillFacebook,
    AiFillPrinter,
    AiFillYoutube,
    AiOutlineGooglePlus,
    AiOutlineInstagram,
    AiOutlineTwitter
} from "react-icons/ai";
import {FaLinkedinIn, FaPinterest, FaRss} from "react-icons/fa";
import {BsTelephoneFill} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="flex flex-col w-5/6 mx-auto text-gray-400 pb-14 mt-24 border-t-2 border-yellow-300">
            <div className={'md:grid md:grid-cols-2 mt-4 md:mt-12'}>
                <div className={'max-w-fit'}>
                    <h2 className={'text-4xl text-gray-900 font-bold border-yellow-300 border-4'}>
                        COGIP
                    </h2>
                </div>

                <div className={'mt-4 md:mt-0 mx-auto w-full'}>
                    <div className={'flex items-center text-sm sm:text-lg'}><IoLocationSharp className={'text-lg text-yellow-300'}/> <p className={'ml-4'}>
                        Square des Martyrs, 6000 Charleroi
                    </p></div>

                    <div className={'flex flex-col sm:flex-row mt-6 text-sm sm:text-lg'}>
                        <div className={'flex items-center'}><BsTelephoneFill className={'text-lg text-yellow-300'}/>
                            <p className={'ml-4'}>(123) 456-7890</p>
                        </div>
                        <div className={'flex items-center'}><AiFillPrinter className={'text-lg text-yellow-300'}/>
                            <p className={'ml-4'}>(123) 456-7890</p>
                        </div>

                    </div>

                    <div className={'flex flex-col md:flex-row mt-12'}>
                        <p>
                            Social Media
                        </p>

                        <ul className={'flex flex-row items-center list-none text-yellow-300 mt-4 md:mt-0 md:ml-4 justify-between w-2/3 text-xl'}>
                            <li>
                                <a href="https://www.facebook.com/"><AiFillFacebook/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/"><AiOutlineTwitter/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/"><FaLinkedinIn/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/"><AiFillYoutube/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/"><AiOutlineInstagram/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/"><AiOutlineGooglePlus/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/"><FaPinterest/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/"><FaRss/></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="mt-12 border-t-2 border-gray-100 flex flex-col md:flex-row">
                <ul className="flex flex-col md:flex-row list-none w-3/4 mt-6">
                    <li>
                        <Link
                            className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            to={'home'}>HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            to={'invoices'}>INVOICES
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            to={'companies'}>COMPANIES
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={'px-3 py-2 flex font-bold leading-snug cursor-pointer hover:outline hover:outline-1 hover:outline-gray-900'}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            to={'contacts'}>CONTACTS
                        </Link>
                    </li>
                </ul>

                <p className="text-center md:justify-end mt-6 md:text-right">
                    Copyright © 2022 • COGIP Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
