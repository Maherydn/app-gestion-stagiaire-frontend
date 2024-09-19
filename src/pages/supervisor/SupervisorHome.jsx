import { Headers } from '../../components/commun/header/Headers'
import { Outlet } from 'react-router-dom'

const SupervisorHome = () => {
    
  return (
    <>
        <main className='bg-slate-100'>
            <Headers />

            <Outlet/>
        </main>
    </>
  )
}

export default SupervisorHome
