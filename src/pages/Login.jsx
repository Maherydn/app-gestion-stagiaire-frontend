import LoginForm from "../containers/LoginForm"

const Login = () => {


  return (
    <>
      <section className="h-screen border-l-4 bg-slate-200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <p className="mb-6 text-2xl font-bold text-blue-800 ">
                Bienvenue    
            </p>
            <div className="w-full rounded-lg shadow-xl bg-slate-50 md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl ">
                        Connectez-vous à votre compte
                    </h1>
                    <LoginForm/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
