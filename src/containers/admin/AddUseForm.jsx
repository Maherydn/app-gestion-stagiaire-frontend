import { useState } from 'react'
import { createUser } from '../../services/admin/userService'
import Input from '../../components/commun/inputForm/Input'
import { SelectOption } from '../../components/commun/inputForm/SelectOption'
import { confirm } from '../../hooks/confirmModal/ConfirmGlobal'

const AddUserForm = () => {
    const  [nom, setNom] = useState('')
    const  [prenom, setPrenom] = useState('')
    const  [email, setEmail] = useState('')
    const  [matricule, setMatricule] = useState('')
    const  [password, setPassword] = useState('')
    const  [passwordConfirm, setPasswordConfirm] = useState('')
    const  [role, setRole] = useState('')

    const  [departement, setDepartement] = useState('')

    const changeRole = (e) => {
        setRole(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (await confirm({ message: "Êtes-vous sûr de vouloir ajouter cette utilisateur ?" })) {
            const formData = new FormData()
            formData.append('nom', nom)
            formData.append('prenom', prenom)
            formData.append('email', email)
            formData.append('password', password === passwordConfirm ? password : '')
            formData.append('departement', departement)
            formData.append('role', role)
            formData.append('matricule', matricule)

            try {
                const res = await createUser(formData)
                console.log(res);
            } catch (error) {
                console.error(error)
            }
        }
    }


  return (
    <>
      <form className="px-10 space-y-4 md:space-y-6 md:m-10 " onSubmit={handleSubmit} >
            <div className="flex space-x-4 ">
                <div className="w-1/2">
                    <Input 
                        nameAndId={'nom'} 
                        type={'text'} 
                        label={'Nom'} 
                        placeholder={'Entrez votre nom'}
                        value={nom}
                        setValue={(e) => setNom(e.target.value)}
                        />
                </div>
                
                <div className="w-1/2">
                    <Input 
                        nameAndId={'prenom'} 
                        type={'text'} 
                        label={'Prénom'} 
                        placeholder={'Entrez votre prénom'}
                        value={prenom}
                        setValue={(e) => setPrenom(e.target.value)}
                        />
                </div>
            </div>

            <div>
                <Input 
                    nameAndId={'email'} 
                    type={'text'} 
                    label={'Votre email'} 
                    placeholder={'name@company.com'}
                    value={email}
                    setValue={(e) => setEmail(e.target.value)}
                    />
            </div>

            <div>
                <Input 
                    nameAndId={'password'} 
                    type={'password'} 
                    label={'Votre mot de passe'} 
                    placeholder={'Votre mot de passe'}
                    value={password}
                    setValue={(e) => setPassword(e.target.value)}
                /> 
            </div>
            
            <div>
                <Input 
                    nameAndId={'passwordConfirm'} 
                    type={'password'} 
                    label={'Confirmez votre mot de passe'} 
                    placeholder={'Votre mot de passe'}
                    value={passwordConfirm}
                    setValue={(e) => setPasswordConfirm(e.target.value)}
                /> 
            </div>

            <div>
                <Input 
                    nameAndId={'matricule'} 
                    type={'test'} 
                    label={'Votre numero matricule'} 
                    placeholder={'Matricule'}
                    value={matricule}
                    setValue={(e) => setMatricule(e.target.value)}
                /> 
            </div>

            <div>
                <SelectOption onChange={setDepartement} departement={departement} />
            </div>

            <div>
                <label htmlFor="role" className="block mb-2 md:text-xl text-lg font-medium text-gray-900">Choix rôle</label>
                <select 
                    id="role" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg text-base rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                    onChange={changeRole}
                    value={role}
                    >
                    <option value="" >Choix rôle</option>
                    <option value="admin" >admin</option>
                    <option value="recruteur">recruteur</option>
                    <option value="superviseur">superviseur</option>
                </select>
            </div>

            <div className="flex justify-center mt-4">
                <button type="submit" className="w-1/5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg py-2.5 text-center">
                    Ajouter
                </button>
            </div>  
        
        </form>
    </>
  )
}

export default AddUserForm
