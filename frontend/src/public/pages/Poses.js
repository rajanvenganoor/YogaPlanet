import React, { useEffect, useState } from "react";
import axios from "axios";
//import PoseSelector from "./PoseSelector";
//mport PoseImage from "./PoseImage";
//import "./PoseImage.css";
import PoseSelector from "../../components/PoseSelector";
import PoseImage from "../../components/PoseImage";
import "../../components/PoseImage.css";

const API_BASE = "http://127.0.0.1:8000/api";

function Poses() {
  const [categories, setCategories] = useState([]);
  const [poses, setPoses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPose, setSelectedPose] = useState(null);

  // Load categories
  useEffect(() => {
    axios
      .get(`${API_BASE}/categories/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results;
        setCategories(data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  // Load poses for selected category
  useEffect(() => {
    if (!selectedCategory) {
      setPoses([]);
      setSelectedPose(null);
      return;
    }

    axios
      .get(`${API_BASE}/poses/?category=${selectedCategory}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results;
        setPoses(data || []);
        setSelectedPose(null);
      })
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <div>
      <h2>Select Category</h2>

      {/* ✅ Category combobox with 50-character width */}
      <select
        className="combo-50"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">-- Select Category --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* ✅ Pose searchable combobox with 50-character width */}
      {poses.length > 0 && (
        <>
          <h4 style={{ marginTop: "20px" }}>Select Pose</h4>

          <div className="combo-50">
            <PoseSelector
              poses={poses}
              onPoseSelect={setSelectedPose}
            />
          </div>
        </>
      )}

      {selectedPose && (
        <div className="pose-container" style={{ marginTop: "20px" }}>
          <div className="pose-card">
            <h3>{selectedPose.name}</h3>

            <div className="pose-content">
              <PoseImage
                src={selectedPose.image_url}
                alt={selectedPose.name}
                width="280px"
              />

              <div className="pose-text">
                <p>
                  <strong>Description:</strong><br />
                  {selectedPose.description}
                </p>
<p>
                  <strong>Procedure:</strong><br />
                  {selectedPose.procedure}
                </p>

                <p>
                  <strong>Benefits:</strong><br />
                  {selectedPose.benefits}
                </p>
                <p>
                  <strong>Precautions:</strong><br />
                  {selectedPose.precautions}
                </p>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Poses;
