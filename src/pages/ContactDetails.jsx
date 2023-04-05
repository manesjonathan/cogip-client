import {useEffect, useState} from "react";
import {getContactById} from "../backend/backend.js";
import {useParams} from "react-router-dom";
import PictureProfile1 from "../assets/images/img1.png";

const ContactDetails = () => {
    const {id} = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        getContactById(id)
            .then((data) => {
                setContact(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    if (!contact) {
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
            <div className={'px-4 md:mx-24 pt-8 pb-12 flex justify-between w-3/4'}>
                <div className={''}>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 pb-8">{contact.name.toUpperCase()}</h2>
                    <p className={'font-bold'}>Contact: {contact.name}</p>
                    <p className={'font-bold'}>Phone: {contact.phone}</p>
                    <p className={'font-bold'}>Mail: {contact.email}</p>
                    <p className={'font-bold'}>Company: {(contact[0]['company'])}</p>
                </div>

                <div className={'flex flex-col md:flex-row'}>
                    <img className={'w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto'} src={PictureProfile1} alt=""/>
                </div>
            </div>
        </main>
    );
};

export default ContactDetails;
