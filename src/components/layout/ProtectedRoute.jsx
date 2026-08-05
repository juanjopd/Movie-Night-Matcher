import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Espera a que Firebase determine si hay una sesión activa
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  // Si no hay usuario, envía al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, muestra la página solicitada
  return children;
};

export default ProtectedRoute;