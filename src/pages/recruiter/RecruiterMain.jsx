import React, { useEffect, useState } from 'react'
import { refreshContext } from '../../hooks/refreshContext'
import FilterButton from '../../components/commun/buttons/FilterButton'
import RecruteurTh from '../../components/commun/tableHead/RecruteurTh'
import AddStagiaireButton from '../../components/commun/buttons/AddStagiaireButton'
import RecruiterRows from '../../containers/recruiter/RecruiterRows'
import { fetchDataStagiaire } from '../../services/recruiter/internService'

const RecruiterMain = () => {
    
    const [data, setData] = useState()
    const [activeButton, setActiveButton] = useState('Tous')
    
    const [filter, setFilter] = useState(null)

    const [refresh, setRefresh] = useState(true)

    

    // récupere data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchDataStagiaire()
                setData(res)

                console.log(res);
                
            } catch (error) {
                console.log(error)
            }
        };

        fetchData()
    }, [refresh, localStorage.getItem('accessToken')])

    // filter data (tous/ validate/ invalidate)
    const filterData = data && data.filter(data => filter === null || filter === data.status);

    const handleButtonClick = (filterValue, activeButton) => {
        setFilter(filterValue)
        setActiveButton(activeButton)
    }

    // user && console.log(user.departement.name);
    

  return (
    <>
            <div className="-my-2 py-2 space-y-2 mx-4">

                <div className="px-4 py-2">
                    <h3 className="inline-block border-b-2 border-slate-900/55 font-semibold font-mono tracking-tighter text-xl">Liste des stagiaires :</h3>
                </div>

                {/* Bouton pour filtrer stagiaire*/}

                {/*  le status en back != front */}
                <div className="px-4 h-10 flex justify-between items-center">
                    <div>
                    <FilterButton 
                            name={'Tous'} 
                            onClick={() => handleButtonClick(null, 'Tous')} 
                            activeButton={activeButton}
                            />
                        <FilterButton 
                            name={'Valider'} 
                            onClick={() => handleButtonClick('validate', 'Valider')} 
                            activeButton={activeButton}
                        />
                        <FilterButton 
                            name={'Non valider'} 
                            onClick={() => handleButtonClick('non valider', 'Non valider')} 
                            activeButton={activeButton}
                            />
                    </div>
                        <AddStagiaireButton/> 
                </div>

                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg min-h-screen">
                    <table className="min-w-full">
                        <thead>
                            <RecruteurTh/>                                                                             
                        </thead>

                        <refreshContext.Provider value={[refresh, setRefresh]}>
                            <tbody className="bg-white">
                                {
                                    filterData && filterData.map((data, index) => (
                                        <RecruiterRows 
                                            key={index} 
                                            data={data}
                                            id={data.id}
                                        />
                                    ))
                                }
                            </tbody>
                        </refreshContext.Provider>

                    </table>
                </div>
            </div>
        
    </>
  )
}

export default RecruiterMain
