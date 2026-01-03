import { Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AppLayout from "../components/layout/AppLayout";

export default function PrivateLayout() {
  return (
    <PrivateRoute>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </PrivateRoute>
  );
}
