import React, { useEffect, useState } from 'react'
import ValidateButton from '../components/commun/buttons/ValidateButton'
import { fetchDataStagiaire } from '../services/supervisor/internService'
import CancelButton from '../components/commun/buttons/CancelButton'
import Rows from '../containers/Rows'
import { refreshContext } from '../hooks/refreshContext'
import FilterButton from '../components/commun/buttons/FilterButton'
import RecruteurTh from '../components/commun/tableHead/RecruteurTh'
import EncadreurTh from '../components/commun/tableHead/EncadreurTh'
import AddStagiaireButton from '../components/commun/buttons/AddStagiaireButton'
import { Headers } from '../components/commun/header/Headers'

const Home = () => {
    
    const [data, setData] = useState()
    const [activeButton, setActiveButton] = useState('Tous')
    
    const [filter, setFilter] = useState(null)

    const [refresh, setRefresh] = useState(true)

    const departement = localStorage.getItem('departement')
    const roles = localStorage.getItem('roles')
    

    // récupere data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchDataStagiaire()
                setData(res)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData()
    }, [refresh])

    // filter data (tous/ validate/ invalidate)
    const filterData = data && data.filter(data => filter === null || filter === data.status);

    const handleButtonClick = (filterValue, activeButton) => {
        setFilter(filterValue)
        setActiveButton(activeButton)
    }

  return (
    <>
        <main className='bg-slate-100'>
            <Headers />

            <div className="-my-2 py-2 space-y-2 mx-4">

                <div className="px-4 py-2">
                    <h3 className="inline-block border-b-2 border-slate-900/55 font-semibold font-mono tracking-tighter text-xl">Liste des stagiaires :</h3>
                </div>

                {/* Bouton pour filtrer stagiaire*/}
                <div className="px-4 h-10 flex justify-between items-center">
                    <div>
                        <FilterButton 
                            name={'Tous'} 
                            onClick={() => handleButtonClick(null, 'Tous')} 
                            activeButton={activeButton}
                            />
                        <FilterButton 
                            name={'Valider'} 
                            onClick={() => handleButtonClick('valider', 'Valider')} 
                            activeButton={activeButton}
                        />
                        <FilterButton 
                            name={'Non valider'} 
                            onClick={() => handleButtonClick('non valider', 'Non valider')} 
                            activeButton={activeButton}
                            />
                    </div>

                    {/* boutton ajout stagiaire */}
                    {
                        roles && roles.includes('ROLE_RECRUITER') &&
                        <AddStagiaireButton/>
                    }

                </div>

                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg min-h-screen">
                    <table className="min-w-full">
                        <thead>
                            {
                                roles && roles.includes('ROLE_RECRUITER') ? <RecruteurTh/> : <EncadreurTh/>  
                            }      
                        </thead>

                        <refreshContext.Provider value={[refresh, setRefresh]}>
                            <tbody className="bg-white">
                                {
                                    filterData && filterData.map((data, index) => (
                                        <Rows 
                                        key={index} 
                                        data={data}
                                        button={data.validation === false ? <ValidateButton id={data._id}/> : <CancelButton id={data._id} />} 
                                        id={data._id}
                                        />
                                    ))
                                }
                            </tbody>
                        </refreshContext.Provider>

                    </table>
                </div>
            </div>
        </main>
    </>
  )
}

export default Home
