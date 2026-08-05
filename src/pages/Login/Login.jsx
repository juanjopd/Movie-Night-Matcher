import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const Login = () => {
  const { user, login, loading } = useAuth();

  //Si ya inició sesión, redirige al inicio
  if(user) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async () => {
    try {
      await login();
    } catch (error){
      console.error("Error al iniciar sesion:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-xl">
        <div className="text-center">
          <h1 className="mb-2 text-5xl">🍿</h1>

          <h2 className="mb-2 text-3xl font-bold text-white">
            Movie Night Matcher
          </h2>

          <p className="mb-8 text-slate-400">
            Decide qué película ver con tus amigos.
          </p>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Continuar con Google"}
          </button>
        </div>
      </div>
    </div>
  )
};

export default Login;