import { useEffect, useState } from 'react'
import DeleteStagiaireButton from '../../components/commun/buttons/DeleteStagiaireButton'
import { fetchDataStagiaire } from '../../services/admin/internService'

export const AdminTableStagiaires    = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    const VisibleData = data && data.filter(data => {
        const search = value.toLowerCase() 

        return data.email.toLowerCase().includes(search) || 
                data.fullName.toLowerCase().includes(search)  
    })
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token')
                const res = await fetchDataStagiaire(token)
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
                        <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">FullName</th>
                        <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">email</th>
                        <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">numero stagiaire</th>
                        <th className="px-4 py-3 border-b-2 border-gray-300"></th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        VisibleData && VisibleData.map((data, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-b border-gray-500 text-sm leading-5 text-blue-900">
                                {data.fullName}
                            </td>
                            <td className="px-4 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">{data.email}</td>
                            <td className="px-4 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">{data.numeroStagiaire} </td>
                            <td  className="px-4 py-2 text-right border-b border-gray-500 text-sm leading-5 space-x-2">
                                <DeleteStagiaireButton id={data.id}/>
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
