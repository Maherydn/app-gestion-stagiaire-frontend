import { confirm } from "../../../hooks/confirmModal/ConfirmGlobal";
import { deleteIntern } from "../../../services/admin/internService";
import { DeleteButton } from "./DeleteButton";

const DeleteStagiaireButton = ({ id }) => {

  const deleteStagiaire = async () => {
      if (await confirm({ message: "voulez-vous vraiment supprimer ce stagiaire?"})){
  
        try {
          const res = await deleteIntern(id)
          
        } catch (error) {
          console.log(error);
        }
      }
    }

  return (
    <>
      <DeleteButton onclick={deleteStagiaire}/>
    </>
  )
}

export default DeleteStagiaireButton