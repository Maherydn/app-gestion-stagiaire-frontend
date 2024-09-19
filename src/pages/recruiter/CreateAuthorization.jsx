// pour telecharger
// import React from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer'
// import MyDocument from '../containers/MyDocument';

// const App = () => (
//   <div>
//     <h1>Créer et télécharger un PDF</h1>
//     <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
//       {({ loading }) => (loading ? 'Génération du PDF...' : 'Télécharger le PDF')}
//     </PDFDownloadLink>
//   </div>
// );

// export default App;

import { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Authorization from '../../containers/recruiter/Authorization';
import { fetchStagiaire } from '../../services/supervisor/internService';
import { useParams } from 'react-router-dom';

const CreateAuthorization = () => {

  const {id} = useParams()
  const [stagiaire, setStagiaire] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchStagiaire(id)
        setStagiaire(res)
      } catch (error) {
        console.error( error)
      } 
  }

  fetchData()
  }, [])
  
  return (
  <>
    {stagiaire &&
      <div>
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          <Authorization 
            nomPrenom={`${stagiaire.nom} ${stagiaire.prenom}`}
            numero={stagiaire.numeroStagiaire}
            dateDebut={stagiaire.dateDebutStage}
            dateFin={stagiaire.dateFinStage}
            durer={stagiaire.dureeStage}
          />
        </PDFViewer>
      </div>
    }
  </>
)}

export default CreateAuthorization;

