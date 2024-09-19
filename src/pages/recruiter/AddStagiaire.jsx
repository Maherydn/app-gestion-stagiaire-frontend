import { useNavigate } from 'react-router-dom';
import AddStagiaireForm from '../../containers/recruiter/AddStagiaireForm';
import { Headers } from '../../components/commun/header/Headers';

const AddStagiaire = () => {

    const navigate  = useNavigate()

    
  return (
    <>
        <section 
            className="w-full mb-4">
            <div className="bg-slate-50 rounded-lg shadow-2xl p-4 relative mx-4">
                <button 
                    className="absolute top-5 right-6 bg-red-500 text-white px-2 rounded-md hover:bg-red-600 duration-100 hover:scale-105"
                    onClick={() => navigate('/home')}
                >
                    Retour
                </button>
                <p className="flex items-center pb-4 pl-4 mb-6 lg:text-4xl text-2xl font-bold text-blue-800 border-b-2 border-blue-900">
                    Formulaire stagiaire    
                </p>
                <AddStagiaireForm />
            </div>
        </section>
    </>
  )
}

export default AddStagiaire
