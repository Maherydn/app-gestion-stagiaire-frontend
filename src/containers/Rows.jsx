import React from 'react'
import Validate from '../components/commun/statusRows/Validate'
import Invalidate from '../components/commun/statusRows/Invalidate'
import Complete from '../components/commun/authirozationRows/Complete'
import Incomplete from '../components/commun/authirozationRows/Incomplete'
import { useNavigate } from 'react-router-dom'

const Rows = ({ data, button, id}) => {

  const roles = localStorage.getItem('roles')
  const navigate = useNavigate()

  const updateStagiaire = () => {
    navigate(`/stagiaire/${id}`)
  }

  const openCv = () => {
    const baseUrl = window.location.origin
    const pageUrl = `${baseUrl}/cv/${id}`
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

          {/* personnalisation tr pour recuteurs / encadeurs */}
          {
            roles && roles.includes('ROLE_RECRUITER') ? (
            <>

              {/* rendre dynamique status et autorisation */}
              { 
                data.validation === true ? <Validate/> : <Invalidate/>
              }

              { 
                data.autorisation === 'none' ? <Incomplete/> : <Complete/>
              }
              
              <td className="px-4 py-2 text-right border-b border-gray-500 text-sm leading-5">
                <button 
                  className="px-5 py-2 border-slate-500 border text-slate-500 rounded-xl transition duration-300 hover:bg-slate-700 hover:text-white focus:outline-none"
                  onClick={updateStagiaire}
                >
                  Editer
                </button>
              </td>

            </>
            
            ) : (

            <>
              <td className="px-10 py-2 border-b text-blue-900 border-gray-500 text-sm leading-5">
                <button className="px-4 py-0.5 border-gray-500 border text-gray-500 rounded-md transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"
                onClick={openCv}
                >
                  Voir
                </button>
              </td>

              { 
                data.validation === true ? <Validate/> : <Invalidate/>
              }
              
              <td className="px-4 py-2 text-right border-b border-gray-500 text-sm leading-5">
                {button}
              </td>
            </>
            
            )
          }

        </tr>
     </>
  )
}

export default Rows
