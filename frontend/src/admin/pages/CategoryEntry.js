
import { useState } from "react";
import axios from "axios";

export default function CategoryEntry() {
  const [name, setName] = useState("");

  const save = async () => {
    await axios.post("/api/yoga/yogacategory/", { name });
    alert("Saved");
    setName("");
  };

  return (
    <div>
      <h2>Yoga Category</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={save}>Save</button>
    </div>
  );
}
