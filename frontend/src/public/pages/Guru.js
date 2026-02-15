
import React, { useEffect, useState, useRef } from "react";
import "../../components/Guru.css";
import profileImg from "../../assets/rajan.jpg";
import omSound from "../../assets/om.mp3";

const poses = [
  { name: "Pranamasana", d: "M50 15 L50 55 M35 30 L50 35 L65 30 M50 55 L40 90 M50 55 L60 90" },
  { name: "Hasta Uttanasana", d: "M50 20 L50 55 M50 20 L30 5 M50 20 L70 5 M50 55 L45 95 M50 55 L55 95" },
  { name: "Padahastasana", d: "M50 25 Q50 55 50 80 M50 80 L45 95 M50 80 L55 95" },
  { name: "Ashwa Sanchalanasana", d: "M50 25 L50 55 M50 55 L30 95 M50 55 L70 70" },
  { name: "Dandasana", d: "M20 60 L80 60" },
  { name: "Ashtanga Namaskara", d: "M25 65 L75 65 M40 70 L40 85 M60 70 L60 85" },
  { name: "Bhujangasana", d: "M30 75 Q50 35 70 75" },
  { name: "Adho Mukha Svanasana", d: "M30 40 L50 80 L70 40" },
  { name: "Ashwa Sanchalanasana", d: "M50 25 L50 55 M50 55 L70 95" },
  { name: "Padahastasana", d: "M50 25 Q50 55 50 80" },
  { name: "Hasta Uttanasana", d: "M50 20 L50 55 M50 20 L30 5 M50 20 L70 5" },
  { name: "Pranamasana", d: "M50 15 L50 55 M35 30 L50 35 L65 30" }
];

const Guru = () => {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % poses.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 1200);
  }, []);

  return (
    <section className="home-section">
      <audio ref={audioRef} src={omSound} preload="auto" />

      {/* 🔱 TITLE */}
      <div className="surya-heading">
        <h1>Surya Namaskara</h1>
        <h2>(Sun Salutation)</h2>
        <h3>King of Yogasanas</h3>
      </div>

      {/* 🌞 SVG FLOW */}
      <div className="surya-svg">
        <svg viewBox="0 0 100 100">
          <path>
            <animate
              attributeName="d"
              dur="26s"
              repeatCount="indefinite"
              values={poses.map(p => p.d).join(";")}
            />
          </path>
        </svg>
        <div className="asana-name">{poses[step].name}</div>
      </div>

      {/* 👤 PROFILE + TEXT */}
      <div className="profile-row">
        <img src={profileImg} alt="Profile" className="profile-photo" />

        <div className="profile-text">
          <h4>Rajendrakumar R. Nair</h4>
          <p className="degree">BSc Chemistry · MSc Yoga Therapy</p>
          <p className="experience">
            40+ Years of Experience in Classical Hatha Yoga & Meditation
          </p>
          <p>
            YogaPlanet is a global digital sanctuary created to spread the
            timeless wisdom of Yoga to humanity.
          </p>
          <p className="quote">
            “Let Yoga unite humanity. Let peace begin within.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guru;
