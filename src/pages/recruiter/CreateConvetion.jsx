import { PDFViewer } from '@react-pdf/renderer';
import Convention from '../../containers/recruiter/Convention';

const CreateConvention = () => {


  
  return (
  <>
      <div>
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          <Convention />
        </PDFViewer>
      </div>
    
  </>
)}

export default CreateConvention;

