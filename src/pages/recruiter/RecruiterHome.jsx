import { Outlet } from 'react-router-dom'
import { Headers } from '../../components/commun/header/Headers'

const RecruiterHome = () => {
    
    

  return (
    <>
        <main className='bg-slate-100'>
            <Headers />

            <Outlet/>
        </main>
    </>
  )
}

export default RecruiterHome
