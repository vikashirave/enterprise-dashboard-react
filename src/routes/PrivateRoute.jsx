import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuthenticated = true; // fake for now

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}