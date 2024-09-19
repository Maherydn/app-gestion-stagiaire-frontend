import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const AdminNav = () => {

    const navigate = useNavigate()
    const [active, setActive] = useState('')
    

  return (
    <>
       <div className="relative pt-3 text-base font-semibold text-white mt-8">
            <button 
                className={`flex items-center text-white opacity-75 ${active == 'dashboard' && "opacity-100 bg-blue-700"}  hover:opacity-100 hover:bg-blue-700 py-4 pl-6 w-full `}
                onClick={() => {setActive('dashboard'); navigate("/admin")}}
            >
               <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                Dashboard
            </button>
            <button 
                className={`flex items-center text-white opacity-75 ${active == 'user' && "opacity-100 bg-blue-700"}  hover:opacity-100 hover:bg-blue-700 py-4 pl-6 w-full `}
                onClick={() => {active === 'user' ? setActive(null) : setActive('user')}}
            >
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                Utilisateurs
            </button>

            {
                active === 'user' &&
                <div className="w-full shadow-lg ">
                    <ul >
                        <li>
                            <NavLink to={"/admin/adduser"} className="flex items-center py-4 pl-8 text-white opacity-75 hover:opacity-100 hover:bg-blue-700">
                                Ajouter un utilisateur
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/table/users"} className="flex items-center py-4 pl-8 text-white opacity-75 hover:opacity-100 hover:bg-blue-700">
                                Listes des utilisateurs
                            </NavLink>
                        </li>
                    </ul>
                </div>
            }
             <button 
                className={`flex items-center text-white opacity-75 ${active == 'stagiaire' && "opacity-100 bg-blue-700"}  hover:opacity-100 hover:bg-blue-700 py-4 pl-6 w-full `}
                onClick={() => {active === 'stagiaire' ? setActive(null) : setActive('stagiaire'); navigate('/admin/table/stagiaires')}}
            >
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                Stagiaire
            </button>

        </div>
            
    </>
  )
}

export default AdminNav
