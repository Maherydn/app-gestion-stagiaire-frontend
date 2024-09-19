import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const userApi = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
});

// Fonction pour rafraîchir le token
const refreshAccessToken = async () => {
    try {
        const res = await axios.post('http://localhost:8000/api/token/refresh', {
            refresh_token: refreshToken,
        });

        const newAccessToken = res.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        // Mettre à jour l'en-tête Authorization de l'instance userApi
        userApi.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return newAccessToken;
    } catch (error) {
        console.error('Erreur lors du rafraîchissement du token', error);
        throw error;
    }
};

// Intercepter les réponses pour vérifier si l'access token est expiré
userApi.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        // Si le token est invalide (401 Unauthorized)
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Pour éviter une boucle infinie

            try {
                // Rafraîchir le token
                await refreshAccessToken();

                // Relancer la requête originale avec le nouveau token
                return userApi(originalRequest);
            } catch (refreshError) {
                // Si le refresh échoue, déconnecter l'utilisateur (ou autre logique)
                console.error('Échec du rafraîchissement du token', refreshError);
                throw refreshError;
            }
        }

        // Si une autre erreur survient, la relancer
        return Promise.reject(error);
    }
);



export const loginUser = async (formData) => {
    try {
        const res = await userApi.post('/api/login_check', formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const userInfo = async (token) => {
    try {
        const res = await fetch('http://localhost:8000/api/user_info', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,  // Envoie du token
                'Content-Type': 'application/json'   // Optionnel, mais utile si tu envoies des JSON
            }
        });

        if (!res.ok) {
            throw new Error(`Erreur: ${res.status}`);  // Pour gérer les erreurs HTTP
        }

        return await res.json();  // Assure-toi que le serveur renvoie du JSON
    } catch (error) {
        console.error("Erreur lors de la récupération des infos utilisateur:", error);
        throw error;
    }
};


export const logoutUser = async (token, refresh_token) => {
    try {
        const res = await userApi.post('/api/token/invalidate', 
            { "refresh_token": refresh_token }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return res;
    } catch (error) {
        throw error;
    }
};
