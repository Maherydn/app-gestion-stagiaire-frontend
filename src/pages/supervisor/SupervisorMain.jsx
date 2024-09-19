import React, { useEffect, useState } from 'react'
import ValidateButton from '../../components/commun/buttons/ValidateButton'
import { fetchDataStagiaire } from '../../services/supervisor/internService'
import CancelButton from '../../components/commun/buttons/CancelButton'
import { refreshContext } from '../../hooks/refreshContext'
import FilterButton from '../../components/commun/buttons/FilterButton'
import EncadreurTh from '../../components/commun/tableHead/EncadreurTh'
import SupervisorRows from '../../containers/supervisor/SupervisorRows'

const SupervisorMain = () => {
    
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
    }, [refresh])

    // filter data (tous/ validate/ invalidate)
    const filterData = data && data.filter(data => filter === null || filter === data.status);

    const handleButtonClick = (filterValue, activeButton) => {
        setFilter(filterValue)
        setActiveButton(activeButton)
    }

  return (
    <>

            <div className="-my-2 py-2 space-y-2 mx-4">

                <div className="px-4 py-2">
                    <h3 className="inline-block border-b-2 border-slate-900/55 font-semibold font-mono tracking-tighter text-xl">Liste des stagiaires :</h3>
                </div>

                {/* Bouton pour filtrer stagiaire*/}
                {/* staus  front != back*/}
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
                            onClick={() => handleButtonClick('invalidate', 'Non valider')} 
                            activeButton={activeButton}
                            />
                    </div>
                </div>

                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg min-h-screen">
                    <table className="min-w-full">
                        <thead>
                            <EncadreurTh/>       
                        </thead>

                        <refreshContext.Provider value={[refresh, setRefresh]}>
                            <tbody className="bg-white">
                                {
                                    filterData && filterData.map((data, index) => (
                                        <SupervisorRows 
                                            key={index} 
                                            data={data}
                                            button={data.status === 'invalidate' ? <ValidateButton id={data.id}/> : <CancelButton id={data.id} />} 
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

export default SupervisorMain
