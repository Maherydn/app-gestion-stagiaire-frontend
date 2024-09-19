import React from 'react';
import AdminAside from '../../containers/admin/AdminAside';
import { Outlet } from 'react-router-dom';
import { Headers } from '../../components/commun/header/Headers';

const HomeAdmin = () => {
  return (
    <>
      <main className='flex flex-col space-y-2 bg-slate-100'>
        <Headers />
        <div className="flex bg-slate-100 space-x-4 min-h-screen"> 
          
          <AdminAside/>
          
          <div className="w-full flex flex-col  overflow-y-hidden">
              <div className="w-full overflow-x-hidden border-t flex flex-col bg-slate-100 ">
                  <Outlet/>
              </div> 
          </div>
          
      </div>
    </main>
    </>
  );
};

export default HomeAdmin;
