import {useNavigate} from "react-router-dom";

const ContactsRendering = ({data}) => {
    const navigate = useNavigate();

    function handleOnClick(e, contactId) {
        console.log(e.target.id);
        navigate(`/contact/${contactId}`);
    }

    return (
        <div className={'bg-white px-4 md:px-24'}>
            <div className="flex flex-col  overflow-x-auto">
                <table className={'w-full text-left border-collapse font-bold overflow-x-auto'}>
                    <thead>
                    <tr className={'bg-yellow-300'}>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Name
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
                            <tr key={index} className={'even:bg-gray-200 cursor-pointer'}
                                onClick={(e) => handleOnClick(e, contact['id'])}>
                                <td className={'py-3 px-4'}>{contact['name']}</td>
                                <td className={'py-3 px-4'}>{contact['phone']}</td>
                                <td className={'py-3 px-4'}>{contact['email']}</td>
                                <td className={'py-3 px-4'}>{contact['company']['name']}</td>
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

export default ContactsRendering;
