import { useNavigate } from 'react-router-dom'
import DeleteUserButton from '../../components/commun/buttons/DeleteUserButton'
import { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/admin/userService'

export const AdminTableUsers = () => {

    const navigate =  useNavigate() 
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    const VisibleData = data && data.filter(data => {
        const search = value.toString().toLowerCase() 

    return data.email.toLowerCase().includes(search) || 
            data.username.toLowerCase().includes(search) || 
            data.matricule.toString().toLowerCase().includes(search) 
    })
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchUsers()
                setData(res)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData()
    }, [])


  return (
    <>  
     <main className="w-full flex-grow space-y-4">
            <div className="w-1/3 h-8">
                <input 
                    type="text" 
                    name="nom" 
                    id="nom"
                     className="bg-gray-50 border border-gray-300 text-gray-900 lett  rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-600 focus:border-blue-600 block w-full h-full p-2.5" 
                    placeholder="Recherche" 
                    required
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </div>
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white rounded-lg  px-8 pt-3 rounded-bl-lg rounded-br-lg min-h-screen">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">fullName</th>
                            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">email</th>
                            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Role</th>
                            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Matricule</th>
                            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Departement</th>
                            <th className="px-4 py-3 border-b-2 border-gray-300"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            VisibleData && VisibleData.map((data, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border-b border-gray-500 text-sm leading-5 text-blue-900">
                                    {data.username} 
                                </td>
                                <td className="px-4 py-2 border-b border-gray-500 text-sm leading-5 text-blue-900">
                                    {data.email} 
                                </td>
                                <td className="px-4 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">{data.roles[0]}</td>
                                <td className="px-4 py-2 border-b border-gray-500 text-sm leading-5 text-blue-900">
                                    {data.matricule} 
                                </td>
                                <td className="px-4 py-2 border-b border-gray-500 text-sm leading-5 text-blue-900">
                                    {data.departement.name} 
                                </td>
                                <td  className="px-4 py-2 text-right border-b border-gray-500 text-sm leading-5 space-x-2">
                                    <button className="px-5 py-2 border-slate-500 border text-slate-500 rounded-xl transition duration-300 hover:bg-slate-700 hover:text-white focus:outline-none"
                                    onClick={() => navigate(`/admin/user/${data.id}`)}
                                    >
                                        Editer
                                    </button>
                                    <DeleteUserButton id={data._id}/>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
        
    </>
  )
}
