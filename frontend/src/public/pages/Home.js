import "../../components/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const Home = () => {
  const [ads, setAds] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch ads
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/ads/")
      .then((res) => setAds(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Rotate ads
  useEffect(() => {
    if (!ads.length) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, (ads[index]?.display_seconds || 30) * 1000);

    return () => clearTimeout(timer);
  }, [ads, index]);

  const currentAd = ads[index];

  return (
    <div className="home-container">

      {/* BIG ADVERTISEMENT SECTION */}
      <div className="ad-section">
        {currentAd && (
          <>
            {currentAd.image_url && (
              <img
                src={`${BASE_URL}${currentAd.image_url}`}
                alt={currentAd.description}
                className="big-ad-image"
              />
            )}

            <p className="ad-text">
              {currentAd.description}
            </p>
          </>
        )}
      </div>

      {/* HERO SECTION */}
      <div className="welcome-text">
        <h2>Welcome to <span>YogaPlanet</span></h2>
        <p>Step into the sacred science of self-realization</p>
      </div>

     </div>
  );
};

export default Home;
