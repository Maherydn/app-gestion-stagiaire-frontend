import React from 'react'
import { confirm } from '../../..//hooks/confirmModal/ConfirmGlobal'
import { logoutUser } from '../../../services/connexion/userService'
import { useNavigate } from 'react-router-dom'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const LogoutButton = () => {

    const token = localStorage.getItem('accessToken')
    const refresh_token = localStorage.getItem('refreshToken')
    const navigate = useNavigate()

    const logout = async () => {
        if (await confirm({ message: "Souhaitez-vous vous déconnecter ?"})){
        
            try { 
                const res = await logoutUser(token, refresh_token)
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')

                delete axios.defaults.headers.common['Authorization'];

                navigate('/login')
            } catch (error) {
                console.log(error);
            }
        }
    }
    
  return (
    <>
      <button 
            className="mr-6 py-2 px-4 border-none opacity-90 duration-200 rounded-lg font-semibold text-white text-sm hover:scale-105  hover:opacity-100" 
            onClick={logout}
            >
               <FontAwesomeIcon icon={faRightFromBracket} className='text-white' aria-hidden="true"/>
        </button>
    </>
  )
}

export default LogoutButton
