import React from 'react'
import AdminNav from '../../components/admin/navbar/AdminNav'

const AdminAside = () => {
  return (
    <>
      <aside className="relative bg-blue-600 w-44  md:w-64 shadow-xl rounded-md ">
            <div className="p-6 text-white text-3xl font-semibold uppercase hover:text-gray-300">
                Admin
            </div>
            
           <AdminNav/>
        </aside>
    </>
  )
}

export default AdminAside
