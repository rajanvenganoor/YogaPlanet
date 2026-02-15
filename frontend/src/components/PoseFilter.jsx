
import { useEffect, useState } from "react";

export default function PoseFilter({ onPoseSelect }) {
  const [categories, setCategories] = useState([]);
  const [poses, setPoses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories/")
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const loadPoses = (categoryId) => {
    fetch(`http://localhost:8000/api/poses/category/${categoryId}/`)
      .then(res => res.json())
      .then(setPoses);
  };

  return (
    <>
      <select onChange={e => loadPoses(e.target.value)}>
        <option>Select Category</option>
        {categories.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <select onChange={e => onPoseSelect(e.target.value)}>
        <option>Select Pose</option>
        {poses.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
    </>
  );
}
