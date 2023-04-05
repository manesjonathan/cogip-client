import {useNavigate} from "react-router-dom";

const InvoicesRendering = ({data}) => {
    const navigate = useNavigate();

    function handleOnClick(e, invoiceId) {
        console.log(e.target.id);
        navigate(`/invoices/${invoiceId}`);
    }
    return (
        <div className={'bg-white px-4 md:px-24'}>
            <div className="flex flex-col overflow-x-auto">
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
                            <tr key={index} className={'even:bg-gray-200 cursor-pointer'}
                                onClick={(e) => handleOnClick(e, invoice['id'])}>
                                <td className={'py-3 px-4'}>{invoice.ref}</td>
                                <td className={'py-3 px-4'}>{new Date(date.setDate(date.getDate() + 15)).toLocaleDateString()}</td>
                                <td className={'py-3 px-4'}>{invoice['name']}</td>
                                <td className={'py-3 px-4'}>{new Date(invoice['created_at'].split(' ')[0]).toLocaleDateString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InvoicesRendering;
