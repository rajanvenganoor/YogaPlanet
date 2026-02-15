import React from "react";
import Select from "react-select";

const PoseSelector = ({ poses, onPoseSelect }) => {
  if (!Array.isArray(poses)) return null;

  const options = poses.map(pose => ({
    value: pose.id,
    label: pose.name,
    pose: pose
  }));

  return (
    <Select
      options={options}
      placeholder="Type or select a yoga pose..."
      onChange={(option) => onPoseSelect(option ? option.pose : null)}
      isClearable
    />
  );
};

export default PoseSelector;

