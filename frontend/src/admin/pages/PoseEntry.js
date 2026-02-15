
import { useEffect, useState } from "react";
import axios from "axios";

export default function PoseEntry() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/api/yoga/yogacategory/").then(r => setCategories(r.data));
  }, []);

  const save = async () => {
    await axios.post("/api/yoga/yogapose/", { name, category });
    alert("Saved");
    setName("");
  };

  return (
    <div>
      <h2>Yoga Pose</h2>
      <input placeholder="Pose name" value={name} onChange={e => setName(e.target.value)} />
      <select onChange={e => setCategory(e.target.value)}>
        <option>Select Category</option>
        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <button onClick={save}>Save</button>
    </div>
  );
}
