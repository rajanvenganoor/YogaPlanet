const BACKEND_URL = "http://127.0.0.1:8000";

export default function PoseImage({ src, alt, width = "200px" }) {
  if (!src) {
    return <p>No image available</p>;
  }

  let imageSrc = src;

  // ✅ Case 1: full URL already provided
  if (src.startsWith("http")) {
    imageSrc = src;
  }
  // ✅ Case 2: stored as "poses/pose.png"
  else if (src.startsWith("poses/")) {
    imageSrc = `${BACKEND_URL}/media/${src}`;
  }
  // ✅ Case 3: stored as "/media/poses/pose.png"
  else if (src.startsWith("/media/")) {
    imageSrc = `${BACKEND_URL}${src}`;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{
        width: width,
        height: "auto",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    />
  );
}
