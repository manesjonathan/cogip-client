import {getCompanyById} from "../../backend/backend.js";
import {useEffect, useState} from "react";

const LastFiveContacts = ({data}) => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        data.map((contact, index) => {
            getCompanyById(contact[index])
                .then(data => {
                    setCompanies(companies => [...companies, data['company']['name']]);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
    });
    return (
        <div className={'bg-white px-4 md:px-24'}>
            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 pb-14'}>Last contacts</h1>
            <div className="flex flex-col  overflow-x-auto">
                <table className={'w-full text-left border-collapse font-bold overflow-x-auto'}>
                    <thead>
                    <tr className={'bg-yellow-300'}>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Name
                            number
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Phone
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Mail
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Company
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Created
                            at
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((contact, index) => {
                        const date = new Date(contact['created_at'].split(' ')[0]);
                        return (
                            <tr key={index} className={'even:bg-gray-200'}>
                                <td className={'py-3 px-4'}>{contact['name']}</td>
                                <td className={'py-3 px-4'}>{contact['phone']}</td>
                                <td className={'py-3 px-4'}>{contact['email']}</td>
                                <td className={'py-3 px-4'}>{companies[index]}</td>
                                <td className={'py-3 px-4'}>{date.toLocaleDateString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default LastFiveContacts;
