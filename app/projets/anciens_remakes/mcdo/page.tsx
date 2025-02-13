'use client'

import React, { useState } from "react";
import "/styles/items/remake_mcdo.css";

const McdoPage = () => {
  const [connectionText, setConnectionText] = useState("Se connecter");

  const handleConnectionClick = () => {
    setConnectionText("Mon compte");
  };

  return (
    <div>
      <header>
        <div>
          <a href="remake_mcdo.html">
            <img src="/items/anciens_remake/logo_mcdo.jpg" alt="Logo McDo" />
          </a>

          <ul>
            <li>
              <a href="#">
                Nos engagements
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="chevron-down_svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">Les Big Questions</a>
            </li>
            <li>
              <a href="#">En famille</a>
            </li>
            <li>
              <a href="#">
                Nos produits
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="chevron-down_svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">Nos actualités</a>
            </li>
          </ul>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            id="search_svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <p>|</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            id="localisation_svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <button id="button_connection" onClick={handleConnectionClick}>
            {connectionText}
          </button>
          <button id="button_command">Commander</button>
        </div>
      </header>

      <main>
        <section>
          <img src="/items/anciens_remake/mcdo_1.jpg" id="image1" alt="McDonald's Image" />
          <div id="div_image1">
            <h1>Nos actions pour le climat</h1>
            <p>
              Chaque année, nous nous efforçons de réduire notre impact
              environnemental.
            </p>
            <button>En savoir plus</button>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#">Frites de légumes</a>
              </li>
              <li>
                <a href="#">Les p'tites offres</a>
              </li>
              <li>
                <a href="#">Nos actions environnementales</a>
              </li>
              <li>
                <a href="#">280 Original</a>
              </li>
              <li>
                <a href="#">Les steaks hachés McDo</a>
              </li>
              <li>
                <a href="#">Happy Meal</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>

      <a href="../../../" className="retour_bouton">
        Retour
      </a>

      <script src="remake_mcdo.js"></script>
    </div>
  );
};

export default McdoPage;
