
import { Link } from "react-router-dom";
import "./AdminMenu.css";

export default function AdminMenu({ role }) {
  const disabled = role !== "admin" && role !== "editor";

  return (
    <nav className="admin-menu">
      <ul>
        <li>{disabled ? <span>Category</span> : <Link to="/admin/category">Category</Link>}</li>
        <li>{disabled ? <span>Pose</span> : <Link to="/admin/pose">Pose</Link>}</li>
        <li>{disabled ? <span>Vinyasa</span> : <Link to="/admin/vinyasa">Vinyasa</Link>}</li>
      </ul>
    </nav>
  );
}
