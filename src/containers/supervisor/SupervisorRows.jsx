import React from 'react'
import Validate from '../../components/commun/statusRows/Validate'
import Invalidate from '../../components/commun/statusRows/Invalidate'
import { useNavigate } from 'react-router-dom'

const SupervisorRows = ({ data, button, id}) => {

  const navigate = useNavigate()

  const openCv = () => {
    const baseUrl = window.location.origin
    const pageUrl = `${baseUrl}/supervisor/intern-cv/${id}`
    window.open(pageUrl, '_blank')
  }

  return (
    <>
       <tr >
          <td className="px-4 py-2 border-b border-gray-500">
              <div className="text-sm leading-5 text-blue-900">{data.fullName}</div>
          </td>
          <td className="px-4 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">{data.email}</td>
          <td className="px-10 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">{data.university}</td>
            <td className="px-10 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">
              <button className="px-4 py-0.5 border-gray-500 border text-gray-500 rounded-md transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"
              onClick={openCv}
              >
                Voir
              </button>
            </td>

            { 
              data.status === 'validate' ? <Validate/> : <Invalidate/>
            }
            
            <td className="px-4 py-2 text-right border-b border-gray-500 text-sm leading-5">
              {button}
            </td>
        </tr>
     </>
  )
}

export default SupervisorRows
