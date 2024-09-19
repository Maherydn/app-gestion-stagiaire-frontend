import React, { useEffect, useState } from 'react';
import { fetchCv } from '../../services/supervisor/internService'; // Ajuste ce chemin selon ton projet
import { useParams } from 'react-router-dom';

const ShowCv = () => {
    const { id } = useParams();
    const [cvUrl, setCvUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPdfUrl = async () => {
            try {
                // Récupère l'URL relative du CV depuis l'API
                const response = await fetchCv(id);
                const relativeCvUrl = response.cvUrl;

                if (!relativeCvUrl) {
                    throw new Error('No CV URL returned');
                }

                // Convertir l'URL relative en URL absolue
                const baseUrl = 'http://localhost:8000';
                const completeCvUrl = `${baseUrl}${relativeCvUrl}`;

                setCvUrl(completeCvUrl);
            } catch (error) {
                console.error('Error loading PDF:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPdfUrl();
    }, [id]);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            {loading ? (
                <p>Loading PDF...</p>
            ) : cvUrl ? (
                <iframe
                    src={cvUrl}
                    style={{ width: '100%', height: '100%' }}
                    title="Internship CV"
                >
                    Ce navigateur ne prend pas en charge les iframes.
                </iframe>
            ) : (
                <p>No PDF available</p>
            )}
        </div>
    );
};

export default ShowCv;
