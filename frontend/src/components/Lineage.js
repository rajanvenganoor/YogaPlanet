import React from "react";
import { motion } from "framer-motion";

const Lineage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-8 md:p-12 relative overflow-hidden"
      >
        {/* Lotus background */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full opacity-10 z-0 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250 60 C210 130 150 170 80 190 C150 210 210 250 250 320 C290 250 350 210 420 190 C350 170 290 130 250 60 Z"
            fill="#F59E0B"
          />
          <circle cx="250" cy="210" r="40" fill="#FBBF24" />
        </svg>

        {/* Text content */}
        <div className="relative z-10 text-justify">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-orange-600 drop-shadow-lg font-serif text-center">
            🕉️ Founder & Lineage
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-900 font-medium font-sans">
            Rooted in the ancient yogic tradition of India, the Founder of <span className="font-semibold text-orange-700">YogaPlanet</span> carries a living lineage received from his great-grandfather <span className="font-semibold">Dr. B. Padmanabha Pillai (Guruji)</span> and nurtured through <span className="font-semibold">Swami RajaKrishna</span>. A lifelong yogic practitioner and teacher with over <span className="font-semibold">four decades of experience</span>, his path integrates Haṭha, Rāja, Karma, and Bhakti Yoga.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-900 font-medium font-sans">
            Alongside yoga, he has served as a <span className="font-semibold">Chemistry teacher in Africa</span> and a <span className="font-semibold">Software Architect</span> with a Mumbai-based pharmaceutical manufacturing group. Blending spiritual wisdom, scientific discipline, and technology, he is also the <span className="font-semibold text-orange-700">Architect and Developer of YogaPlanet</span>—a space where classical yoga meets the modern world.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold tracking-wide shadow-lg font-sans">
              Ancient Lineage · Modern Vision · Living Yoga
            </span>
          </div>
        </div>

        {/* Yoga pose image below text */}
        <div className="relative z-10 mt-10 flex justify-center">
          <img
            src="/images/RajanUpavishta.jpg"
            alt="Upavishta Konasana"
            className="w-full max-w-3xl rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Lineage;
