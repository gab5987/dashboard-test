
const FlotingThings = () => {
    return (
        <div className="mt-4">
            <div className="flex flex-wrap -mx-6">
                <div className=" px-6 sm:w-1/2 xl:w-1/2">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-gray-900">
                        <div className="p-3 rounded-full bg-gray-500 bg-opacity-75">
                            <svg className="h-8 w-8 text-gray-200" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z" fill="currentColor"/>
                                <path d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z" fill="currentColor"/>
                                <path d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z" fill="currentColor"/>
                                <path d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z" fill="currentColor"/>
                                <path d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z" fill="currentColor"/>
                                <path d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z" fill="currentColor"/>
                            </svg>
                        </div>

                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-200">8,282</h4>
                            <div className="text-gray-300">Novos Usuarios</div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/2 xl:mt-0">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-gray-900">
                        <div className="p-3 rounded-full bg-gray-500 bg-opacity-75">
                            <svg className="h-8 w-8 text-gray-200" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-200">136,486 TPS</h4>
                            <div className="text-gray-300">Trafego da API</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserList = () => {
    return (
    <div className='pl-3 pr-3'>
        <FlotingThings/>    
    <div className="mt-8">
    </div>

    <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-600">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-600 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 border-b border-gray-600 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                            <th className="px-6 py-3 border-b border-gray-600 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 border-b border-gray-600 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 border-b border-gray-600 bg-gray-900"></th>
                        </tr>
                    </thead>

                    <tbody className="bg-gray-900">
                        <CreateUsers />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        </div>
    )
}

export default UserList;


var content: any = [];

const CreateUsers = () => {
    for(let i = 0 ; i < 4 ; i++) content.push(User(i))
    return content
}

function User(i: number) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-600">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                    </div>

                    <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-300">Tabaco da Silva</div>
                        <div className="text-sm leading-5 text-gray-500">emailmuitotop@email.com</div>
                    </div>
                </div>
            </td>
            
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-600">
                <div className="text-sm leading-5 text-gray-300">Desenvolvedor de Software</div>
                <div className="text-sm leading-5 text-gray-500">Me contrata pfv</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-600">
                {
                    (i % 2 === 0)
                        ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-800">Ativo</span>
                        : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">Inativo</span>
                }
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-600 text-sm leading-5 text-gray-500">Desenvolvedor</td>

            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-600 text-sm leading-5 font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
            </td>
        </tr>
    )
} 