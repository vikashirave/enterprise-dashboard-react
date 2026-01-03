import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "220px", borderRight: "1px solid #ddd", padding: "12px" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/roles">Roles</Link></li>
          <li><Link to="/records">Records</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
