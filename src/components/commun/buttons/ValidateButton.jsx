import { useContext } from "react"
import { toast } from "react-toastify"
import { validateStagiaire } from "../../../services/supervisor/internService"
import { refreshContext } from "../../../hooks/refreshContext"
import { confirm } from "../../../hooks/confirmModal/ConfirmGlobal"

const ValidateButton = ({id}) => {

  const [refresh, setRefresh] = useContext(refreshContext)
  const validate = async () => {
    if (await confirm({ message: "voulez-vous vraiment valider?"})){

      try {
        const res = await validateStagiaire(id)
        setRefresh(!refresh)
        toast.success("Stagiaire valider!", {
          theme: "colored",
        })
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <button 
        className="px-6 py-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none"
        onClick={validate}
        >Valider</button>
    </>
  )
}

export default ValidateButton
