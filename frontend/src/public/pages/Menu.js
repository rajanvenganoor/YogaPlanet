import { Link } from "react-router-dom";
import "../../components/Menu.css";

//import Poses from './Poses';
//import Homes from "./Homes";
import LineageShow from "../pages/LineageShow";

import Poses from "../pages/Poses";

const Menu = () => {
  return (
    <nav className="menu-bar">
      <div className="menu-logo">
        <Link to="/">YogaPlanet</Link>
      </div>

      <ul className="menu-links">

        {/* HOME */}
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* LEARN */}
        <li className="dropdown">
          <span>Learn ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/learn/asanas">Asanas</Link></li>
            <li><Link to="/learn/pranayama">Pranayama</Link></li>
            <li><Link to="/learn/mudra-bandha">Mudra & Bandha</Link></li>
          </ul>
        </li>

        {/* PRACTICE */}
        <li className="dropdown">
          <span>Practice ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/practice/surya-namaskara">
                🌞 Surya Namaskara
              </Link>
            </li>
            <li>
              <Link to="/practice/chandra-namaskara">
                🌙 Chandra Namaskara
              </Link>
            </li>
            <li>
              <Link to="/practice/yoga-nidra">
                💤 Yoga Nidra
              </Link>
            </li>
            <li>
              <Link to="/practice/pranayama-flow">
                🌬 Pranayama Flow
              </Link>
            </li>
            <li>
              <Link to="/practice/daily-practice">
                🗓 Daily Practice
              </Link>
            </li>
          </ul>
        </li>

        {/* THERAPY */}
        <li className="dropdown">
          <span>Therapy ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/therapy/back-pain">Back Pain</Link></li>
            <li><Link to="/therapy/diabetes">Diabetes</Link></li>
            <li><Link to="/therapy/stress">Stress & Anxiety</Link></li>
            <li><Link to="/therapy/heart">Heart Health</Link></li>
            <li><Link to="/therapy/vericos">Vericos Vein</Link></li>
            <li><Link to="/therapy/sciatica">Sciatica</Link></li>
            <li><Link to="/therapy/obesity">Obesity</Link></li>
          </ul>
        </li>

        {/* RESEARCH */}
        <li className="dropdown">
          <span>Research ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/research/texts">Classical Texts</Link></li>
            <li><Link to="/research/studies">Modern Studies</Link></li>
            <li><Link to="/research/case-studies">Case Studies</Link></li>
          </ul>
        </li>

        {/* ABOUT */}
        <li className="dropdown">
          <span>About ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/about/guru">Guru Profile</Link></li>
            <li><Link to="/about/LineageShow">LineageShow</Link></li>
            <li><Link to="/about/contact">Contact</Link></li>
          </ul>
        </li>

      </ul>

       {/* TOP-RIGHT LOTUS */}
      <div className="lotus-top-right">
        <div className="chakra-glow"></div>

        <svg
          className="lotus-svg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer petals */}
          <path d="M100 25 C130 60 165 95 100 175 C35 95 70 60 100 25 Z" />
          <path d="M100 40 C150 75 170 115 100 165 C30 115 50 75 100 40 Z" opacity="0.85"/>

          {/* Inner petals */}
          <path d="M100 60 C120 85 135 105 100 145 C65 105 80 85 100 60 Z" opacity="0.9"/>
          <path d="M100 75 C112 95 120 110 100 130 C80 110 88 95 100 75 Z" opacity="0.95"/>

          {/* Center */}
          <circle cx="100" cy="115" r="6" />
        </svg>
      </div>
    </nav>
  );
};

export default Menu;

