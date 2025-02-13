"use client";

import React from "react";
import "/styles/items/SASS/carte/style.css";

const CarComponent: React.FC = () => {
  return (
    <div className="all-container">
      <img
        src="/items/SASS/urus.webp"
        className="all-container__image"
        alt="Lamborghini URUS"
      />

      <p className="all-container__text1">Voitures</p>
      <p className="all-container__text2">Publié le 10 décembre 2024</p>

      <h2 className="all-container__text3">Lamborghini URUS</h2>

      <p className="all-container__text4">
        Lamborghini Urus est le premier Super Sport Utility Vehicle au monde,
        associant l'âme d'une supersportive et la praticité d'un SUV.
      </p>

      <div className="all-container2">
        <img
          src="/images/photo-perso.jpg"
          className="all-container2__image"
          alt="Célestin Godefroy"
        />
        <p className="all-container2__text1">Célestin Godefroy</p>
      </div>

      <a href="../../../" className="retour_bouton">
        Retour
      </a>
    </div>
  );
};

export default CarComponent;
