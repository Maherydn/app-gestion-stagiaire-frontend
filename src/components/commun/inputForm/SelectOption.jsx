import { useEffect, useState } from "react"
import { departementData } from "../../../services/departementService"

export const SelectOption = ({ onChange, departement }) => {
    const [departements, setDepartements] = useState([])
    const [dpt, setDpt] = useState(departement)

    // Récupération des départements depuis le backend
    useEffect(() => {
        const fetchDepartements = async () => {
            try {
                const response = await departementData() 
                setDepartements(response)
            } catch (error) {
                console.error('Erreur lors de la récupération des départements:', error)
            }
        }

        fetchDepartements()
    }, [])

    // Mise à jour de l'état local lorsque la prop departement change
    useEffect(() => {
        setDpt(departement)
    }, [departement])

    const handleChange = (e) => {
        const value = e.target.value 
        setDpt(value)
        onChange(value)
    }

    return (
        <>
            <label htmlFor="departement" className="block mb-2 text-lg font-medium text-gray-900 md:text-xl">
                Choix département
            </label>
            <select 
                id="departement" 
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg text-base rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                onChange={handleChange}
                value={dpt}
            >
                <option value="">Choix département</option>
                {
                    departements.map((departement, key) => (
                        <option key={key} value={departement.id}>{departement.name}</option> 
                    ))
                }
            </select>
        </>
    )
}
