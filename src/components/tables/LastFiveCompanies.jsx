const LastFiveCompanies = ({data}) => {
    return (
        <div className={'bg-white px-4 md:px-24'}>
            <h1 className={'text-2xl md:text-4xl font-extrabold text-gray-900 pb-14'}>Last companies</h1>
            <div className="flex flex-col  overflow-x-auto">
                <table className={'w-full text-left border-collapse font-bold overflow-x-auto'}>
                    <thead>
                    <tr className={'bg-yellow-300'}>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Name
                            number
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>TVA
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Country
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Type
                        </th>
                        <th className={'py-2 px-6 font-bold text-sm text-grey-dark'}>Created
                            at
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((company, index) => {
                        const date = new Date(company['created_at'].split(' ')[0]);

                        return (
                            <tr key={index} className={'even:bg-gray-200'}>
                                <td className={'py-3 px-4'}>{company['name']}</td>
                                <td className={'py-3 px-4'}>{company['tva']}</td>
                                <td className={'py-3 px-4'}>{company['country']}</td>
                                <td className={'py-3 px-4'}>{company['type_id'] === 2 ? "Client" : "Supplier"}</td>
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

export default LastFiveCompanies;
