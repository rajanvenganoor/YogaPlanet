
import { Routes, Route } from "react-router-dom";
import AdminMenu from "./components/AdminMenu";
import CategoryEntry from "./pages/CategoryEntry";
import PoseEntry from "./pages/PoseEntry";
import VinyasaEntry from "./pages/VinyasaEntry";

export default function AdminApp({ role }) {
  return (
    <>
      <AdminMenu role={role} />
      <Routes>
        <Route path="category" element={<CategoryEntry />} />
        <Route path="pose" element={<PoseEntry />} />
        <Route path="vinyasa" element={<VinyasaEntry />} />
      </Routes>
    </>
  );
}
