import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { ConfirmGlobal } from "./hooks/confirmModal/ConfirmGlobal"
import AppRoutes from "./router/Routes"
import { AuthProvider } from "./hooks/AuthContext"

function App() {
  return (
    <>
    <AuthProvider>
      <AppRoutes/>
      <ConfirmGlobal/>  
      <ToastContainer/>

    </AuthProvider>
    </>
  )
}

export default App
