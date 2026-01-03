import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}>
        <Header />
        <Box component="main" sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
