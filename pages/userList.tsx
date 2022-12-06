import React from "react";

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

class UserList extends React.Component {
    componentWillMount(): void {
        CreateUsers();
    }
    render() { console.log(Content)
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
                                    {
                                        Content.map((content: any) => (
                                            <>{content}</>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default UserList;

var Content: any = [];

const CreateUsers = () => {
    for(let i = 0 ; i < 4 ; i++) Content.push(User(i))
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