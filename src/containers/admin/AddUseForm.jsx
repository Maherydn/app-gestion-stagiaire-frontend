import { useState } from 'react';
import { createUser } from '../../services/admin/userService';
import Input from '../../components/commun/inputForm/Input';
import { SelectOption } from '../../components/commun/inputForm/SelectOption';
import { useParams } from 'react-router-dom';
import { confirm } from '../../hooks/confirmModal/ConfirmGlobal';

const UpdateUserForm = () => {
    const { id } = useParams();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [matricule, setMatricule] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [departement, setDepartement] = useState('');

    const changeRole = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await confirm({ message: "Êtes-vous sûr de vouloir mettre à jour cet utilisateur ?" })) {
            const userData = {
                username,
                email,
                password,
                departement: parseInt(departement, 10),
                roles: [role], 
                matricule: parseInt(matricule, 10)
            };
    
            try {
                const res = await createUser(userData);
            } catch (error) {
                console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
            }
        }
    };
    

    return (
        <form className="px-10 space-y-4 md:space-y-6 md:m-10" onSubmit={handleSubmit}>
            <div>
                <Input
                    nameAndId={'username'}
                    type={'text'}
                    label={'Fullname'}
                    placeholder={'Entrez votre prénom'}
                    value={username}
                    setValue={(e) => setUsername(e.target.value)}
                />
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
                    nameAndId={'matricule'}
                    type={'text'}
                    label={'Votre numéro matricule'}
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
                    <option value="">Choix rôle</option>
                    <option value="ROLE_ADMIN">admin</option>
                    <option value="ROLE_RECRUITER">recruteur</option>
                    <option value="ROLE_SUPERVISOR">superviseur</option>
                </select>
            </div>

            <div className="flex justify-center mt-4">
                <button type="submit" className="w-1/5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg py-2.5 text-center">
                    Mettre à jour
                </button>
            </div>
        </form>
    );
};

export default UpdateUserForm;
