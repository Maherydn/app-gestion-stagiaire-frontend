import { useNavigate } from "react-router-dom"

const AddStagiaireButton = () => {

    const navigate =  useNavigate()

  return (
    <>
      <button 
            className="py-2 px-4 border-none bg-blue-600 shadow-sm shadow-blue-600 duration-200 rounded-xl font-medium text-white text-sm hover:scale-105"
            onClick={() => navigate('/recruiter/addintern')} 
            >
                Ajouter un stagiaires
        </button>
    </>
  )
}

export default AddStagiaireButton
