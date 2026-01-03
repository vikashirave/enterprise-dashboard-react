import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 220;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {[
          { text: "Dashboard", path: "/dashboard" },
          { text: "Users", path: "/users" },
          { text: "Roles", path: "/roles" },
          { text: "Records", path: "/records" },
          { text: "Reports", path: "/reports" },
          { text: "Settings", path: "/settings" },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
