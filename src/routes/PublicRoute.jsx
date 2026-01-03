import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isAuthenticated = false; // fake for now

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}