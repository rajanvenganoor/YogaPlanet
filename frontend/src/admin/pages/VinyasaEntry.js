
import { useEffect, useState } from "react";
import axios from "axios";

export default function VinyasaEntry() {
  const [name, setName] = useState("");
  const [poses, setPoses] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios.get("/api/yoga/yogapose/").then(r => setPoses(r.data));
  }, []);

  const addStep = () => setSteps([...steps, { pose: "", order: steps.length + 1 }]);

  const save = async () => {
    await axios.post("/api/yoga/yogavinyasa/", { name, steps });
    alert("Saved");
  };

  return (
    <div>
      <h2>Yoga Vinyasa</h2>
      <input placeholder="Vinyasa name" value={name} onChange={e => setName(e.target.value)} />
      {steps.map((s, i) => (
        <div key={i}>
          <select onChange={e => s.pose = e.target.value}>
            <option>Select Pose</option>
            {poses.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <span>Step {s.order}</span>
        </div>
      ))}
      <button onClick={addStep}>Add Step</button>
      <button onClick={save}>Save Vinyasa</button>
    </div>
  );
}
