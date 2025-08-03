import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockUsers from '../data/mockUsers.json';

// Defines the shape of authentication context
interface AuthContextType {
  currentUser: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// Auth context creation (non-null assertion for default value)
const AuthContext = createContext<AuthContextType>(null!);

// Context provider for managing login state and auth actions
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const navigate = useNavigate();

  // Checks credentials against mock user data
  const login = (email: string, password: string) => {
    const user = mockUsers.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      setCurrentUser(user.email);
      return true;
    }
    return false;
  };

  // Logs user out and navigates to login screen
  const logout = () => {
    setCurrentUser(null);
  document.body.className = 'theme1';
  localStorage.setItem('theme', 'theme1');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
