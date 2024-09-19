import { useNavigate, useParams } from 'react-router-dom';
import UpdateStagiaireForm from '../../containers/recruiter/UpdateStagiaireForm';
import { Headers } from '../../components/commun/header/Headers';

const UpdateStagiaire = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const openAuthorization = () => {
        const baseUrl = window.location.origin
        const pageUrl = `${baseUrl}/authorization/${id}`
        window.open(pageUrl, '_blank')
    }

    
  return (
    <>
        <section 
            className="w-full mb-4">
            <div className="bg-slate-50 rounded-lg shadow-2xl p-4 relative mx-4">
                <button 
                    className="absolute top-5 right-6 bg-red-600 shadow-md shadow-red-600 text-white px-2 rounded-md hover:bg-red-600 duration-100 hover:scale-105"
                    onClick={() => navigate('/recruiter')}
                >
                    Retour
                </button>
                <button 
                    className="absolute top-20 right-6 bg-blue-600 shadow-md shadow-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 duration-100 hover:scale-105"
                    onClick={openAuthorization}
                    >
                        Générer autorisation
                </button>
                {/* <!-- pdf https://react-pdf.org/repl?example=mixed-styles --> */}
                <p className="flex items-center pb-4 pl-4 mb-6 lg:text-4xl text-2xl font-bold text-blue-800 border-b-2 border-blue-900">
                    Formulaire stagiaire    
                </p>
                <UpdateStagiaireForm />
            </div>
        </section>
    </>
  )
}

export default UpdateStagiaire
