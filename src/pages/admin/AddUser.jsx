import AddUserForm from '../../containers/admin/AddUseForm'

const AddUser = () => {
    
  return (
    <>
        <section 
            className="mr-4 ">
   
            <div className="w-full bg-slate-50 rounded-lg shadow-2xl py-4 relative">
                <p className="flex items-center pb-4 pl-4 mb-6 lg:text-4xl text-2xl font-bold text-blue-800 border-b-2 border-blue-900">
                    Formulaire d'ajout utilisateur    
                </p>
                <AddUserForm />
            </div>
        </section>
    </>
  )
}

export default AddUser
