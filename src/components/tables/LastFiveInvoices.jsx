import {getCompanyById} from "../../backend/backend.js";
import {useEffect, useState} from "react";

const LastFiveInvoices = ({data}) => {
    const [companyIds, setCompanyIds] = useState([]);

    useEffect(() => {
        Promise.all(
            data.map((invoice) => {
                return getCompanyById(invoice['id_company'])
                    .then(data => {
                        return data['company']['name'];
                    })
                    .catch(error => {
                        console.log(error);
                        return null;
                    });
            })
        ).then(names => {
            setCompanyIds(names.filter(name => name !== null));
        });
    }, [data]);


    return (
        <div className={'bg-white px-4 md:px-24'}>
            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 py-14'}>Last invoices</h1>
            <div className="flex flex-col  overflow-x-auto">

                <table className={'w-full text-left border-collapse font-bold overflow-x-auto'}>

                    <thead>
                    <tr className={'bg-yellow-300'}>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Invoice
                            number
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Dates
                            due
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Company
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Created
                            at
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((invoice, index) => {
                        const date = new Date(invoice['created_at'].split(' ')[0]);
                        return (
                            <tr key={index} className={'even:bg-gray-200'}>
                                <td className={'py-3 px-4'}>{invoice.ref}</td>
                                <td className={'py-3 px-4'}>{date.toLocaleDateString()}</td>
                                <td className={'py-3 px-4'}>{companyIds[index]}</td>
                                <td className={'py-3 px-4'}>{new Date(date.setDate(date.getDate() + 15)).toLocaleDateString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

        </div>
    );

}

export default LastFiveInvoices;
