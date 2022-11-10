import React from 'react';
import "./NavBar.css";

export default function NavBar() {
    return (
    <nav className="Navbar">
        <ul>
          <li>
              <a href="#home">Home
              </a>
          </li>
          <li>
              <a href="#favorites">Favorites
              </a>
          </li>
          <li>
              <a href="#random">Random
              </a>
          </li>
          <li>
              <a href="#other">Other
              </a>
          </li>
        </ul>
    </nav>);
  }