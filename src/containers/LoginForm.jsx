import React, { useState } from 'react';
import { loginUser } from '../services/connexion/userService';
import { useNavigate } from 'react-router-dom';
import Input from '../components/commun/inputForm/Input';
import {jwtDecode} from 'jwt-decode'; // Assure-toi d'avoir bien installé ce module
import { useAuth } from '../hooks/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // État pour indiquer le chargement
    const [error, setError] = useState(null); // État pour gérer les erreurs
    const navigate = useNavigate();
    const { token, setToken } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Activer l'indicateur de chargement
        setError(null); // Réinitialiser les erreurs

        const formData = {
            username: email,
            password: password,
        };

        try {
            const res = await loginUser(formData);
            const token = res.token;
            const roles = jwtDecode(token).roles;
            const refreshToken = res.refresh_token;

            // Stocker les tokens
            localStorage.setItem('accessToken', token);
            localStorage.setItem('refreshToken', refreshToken);

            setToken(token);

            // Redirection en fonction du rôle
            if (roles.includes('ROLE_RECRUITER')) {
                return navigate('/recruiter');
            }
            if (roles.includes('ROLE_ADMIN')) {
                return navigate('/admin');
            }
            if (roles.includes('ROLE_SUPERVISOR')) {
                return navigate('/supervisor');
            }
        } catch (error) {
            setError("Erreur lors de la connexion. Veuillez vérifier vos identifiants.");
            console.error(error);
        } finally {
            setLoading(false); // Désactiver l'indicateur de chargement
        }
    };

    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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

                {error && (
                    <div className="text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                    disabled={loading} // Désactiver le bouton lors du chargement
                >
                    {loading ? 'Connexion en cours...' : 'Se connecter'}
                </button>
            </form>
        </>
    );
};

export default LoginForm;
