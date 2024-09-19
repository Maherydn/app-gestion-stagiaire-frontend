import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoutButton from "../buttons/LogoutButton"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { userInfo } from "../../../services/connexion/userService"
import { useEffect, useState } from "react"

export const Headers = () => {

    const [user, setUser] = useState()
    const token = localStorage.getItem('accessToken')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await userInfo(token)
                setUser(userData)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData()
    }, [])

  return (
    <>
        <header className="flex items-center justify-between bg-blue-700/90 py-2 px-4 w-full mb-4">
            <div>
                <h1 className="text-3xl font-extrabold md:text-5xl lg:text-6xc text-white ml-5">{user?.departement?.name || null} </h1>
            </div>  

            <div className="space-x-2 mr-4 flex items-center relative w-32 ">
                <FontAwesomeIcon 
                    icon={faUser} 
                    aria-hidden="true"
                    className="text-white" 
                />
                <p className="text-white">{user?.username || null} </p>
                <LogoutButton/>
            </div>
        </header>
    </>
  )
}
