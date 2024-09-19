import { useContext } from "react"
import { toast } from "react-toastify"
import { confirm } from "../../../hooks/confirmModal/ConfirmGlobal"
import { invalidateStagiaire } from "../../../services/supervisor/internService"
import { refreshContext } from "../../../hooks/refreshContext"

const CancelButton = ({id}) => {

  const [refresh, setRefresh] = useContext(refreshContext)

  const invalidate = async () => {
    if (await confirm({ message: "voulez-vous vraiment annuler?"})){
      
      const token = localStorage.getItem('token')
      try {
        const res = await invalidateStagiaire(id)
        setRefresh(!refresh)
        toast.error("Stagiaire invalider!", {
          theme: "colored",
        })
      } catch (error) {
        console.log(error)
      }
    }
}

  return (
    <>
      <button 
        className="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
        onClick={invalidate}
        >Rejeter</button>
    </>
  )
}

export default CancelButton
