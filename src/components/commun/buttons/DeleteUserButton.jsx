

import { confirm } from "../../../hooks/confirmModal/ConfirmGlobal";
import { deleteUser } from "../../../services/admin/userService";
import { DeleteButton } from "./DeleteButton";

const DeleteUserButton = ({ id }) => {


  const deleteStagiaire = async () => {
      if (await confirm({ message: "voulez-vous vraiment supprimer ce stagiaire?"})){
  
        try {
          const res = await deleteUser(id)
          refresh(!refresh)
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

export default DeleteUserButton