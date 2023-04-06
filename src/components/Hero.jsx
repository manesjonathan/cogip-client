import {Fragment} from "react";
import hero1 from '../assets/images/hero1.png'

const Hero = () => {
    return (
        <Fragment>
            <div className={'pt-4 flex flex-col md:grid md:grid-cols-2 w-full justify-center items-center bg-yellow-300'}>
                <h2 className={"text-xl md:text-6xl font-extrabold text-gray-900 text-center md:text-left md:w-4/5 md:mx-auto"}>
                    MANAGE YOUR CUSTOMERS AND INVOICES EASILY
                </h2>
                <img src={hero1} alt="hero"/>
            </div>
        </Fragment>
    );
}

export default Hero;
