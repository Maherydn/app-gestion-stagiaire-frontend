import axios from 'axios';

// Créer une instance d'Axios pour l'API des stagiaires
const internApi = axios.create({
    baseURL: 'http://localhost:8000/recruiter/intern',
});

// Fonction pour rafraîchir le token
const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken'); // Récupérer le refreshToken localement
    try {
        const res = await axios.post('http://localhost:8000/api/token/refresh', {
            refresh_token: refreshToken,
        });

        const newAccessToken = res.data.token;
        localStorage.setItem('accessToken', newAccessToken);

        // Mettre à jour l'en-tête Authorization de l'instance internApi
        internApi.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return newAccessToken;
    } catch (error) {
        console.error('Erreur lors du rafraîchissement du token', error);
        // Vous pouvez également gérer le cas où le refreshToken est invalide ici
        throw error;
    }
};

// Configurer un intercepteur pour gérer les erreurs de token expiré
internApi.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

internApi.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        // Si le token est invalide (401 Unauthorized) et que ce n'est pas une tentative de réessai
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Marquer la requête comme ayant été essayée

            try {
                // Rafraîchir le token
                await refreshAccessToken();

                // Relancer la requête originale avec le nouveau token
                return internApi(originalRequest);
            } catch (refreshError) {
                // Si le refresh échoue, déconnecter l'utilisateur (ou autre logique)
                console.error('Échec du rafraîchissement du token', refreshError);
                // Vous pouvez également rediriger vers la page de connexion ici
                throw refreshError;
            }
        }

        // Si une autre erreur survient, la relancer
        return Promise.reject(error);
    }
);

// Fonctions d'API pour gérer les stagiaires
export const createStagiaire = async (formData) => {
    try {
        // En-têtes pour les requêtes multipart/form-data
        const headers = {
            'Content-Type': 'multipart/form-data',
        };

        const res = await internApi.post('/create', formData, { headers });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const fetchDataStagiaire = async () => {
    try {
        const res = await internApi.get('');
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const updateStagiaire = async (id, formData) => {
    try {
        // En-têtes pour les requêtes multipart/form-data
        const headers = {
            'Content-Type': 'multipart/form-data',
        };

        const res = await internApi.post(`/${id}`, formData, { headers }); 
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const fetchStagiaire = async (id) => {
    try {
        const res = await internApi.get(`/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};
