import axios from "axios";

// Fonction pour obtenir le token d'authentification
const getAuthToken = () => localStorage.getItem('token');

// Créez une instance d'Axios pour l'API des utilisateurs
const userApi = axios.create({
    baseURL: 'http://localhost:8000/admin/user',
    headers: {
        'Content-Type': 'application/json',  // Indique que le corps de la requête est au format JSON
        'Accept': 'application/json'         // Indique que la réponse attendue est au format JSON
    }
});

// Intercepteur pour ajouter le token d'authentification à chaque requête
userApi.interceptors.request.use(
    config => {
        const token = getAuthToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Fonction pour créer un utilisateur
export const createUser = async (userData) => {
    try {
        const res = await userApi.post('/create', userData);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur', error);
        throw error;
    }
};

// Fonction pour mettre à jour un utilisateur
export const updateUser = async (id, userData) => {
    try {
        const res = await userApi.put(`/${id}`, userData); // Utiliser PUT pour les mises à jour
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
        throw error;
    }
};

// Fonction pour récupérer tous les utilisateurs
export const fetchUsers = async () => {
    try {
        const res = await userApi.get('');
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        throw error;
    }
};

// Fonction pour récupérer un utilisateur spécifique
export const fetchUser = async (id) => {
    try {
        const res = await userApi.get(`/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur', error);
        throw error;
    }
};

// Fonction pour supprimer un utilisateur
export const deleteUser = async (id) => {
    try {
        const res = await userApi.delete(`/${id}`); // Utiliser DELETE pour supprimer
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur', error);
        throw error;
    }
};
