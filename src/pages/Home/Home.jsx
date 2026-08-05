import { useAuth } from "../../hooks/useAuth"

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 text-white">
      <img
        src={user?.photoURL}
        alt={user?.displayName}
        className="h-24 w-24 rounded-full"
      />

      <h1 className="text-3xl font-bold">
        Bienvenido {user?.displayName}
      </h1>

      <p>{user?.email}</p>

      <button
        onClick={logout}
        className="rounded-lg bg-red-600 px-5 py-3 hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>
  )
};

export default Home;