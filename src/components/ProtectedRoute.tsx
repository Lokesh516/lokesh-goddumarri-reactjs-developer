import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Restricts access to routes based on authentication.
 * If the user is logged in, shows the nested route (Outlet).
 * If not, redirects to the login page.
 */
const ProtectedRoute = () => {
  const { currentUser } = useAuth(); // Check user authentication state
  
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
