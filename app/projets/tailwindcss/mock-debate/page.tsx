"use client"

import React, { useEffect, useRef, useState } from "react";

const VehiclePage: React.FC = () => {
  const [isVehicle1Visible, setIsVehicle1Visible] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const audioR1Ref = useRef<HTMLAudioElement>(null);
  const audioURUSRef = useRef<HTMLAudioElement>(null);

  // Gestion de la largeur de l'écran
  useEffect(() => {
    const checkWidthEcran = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeScreen(true);
        setIsVehicle1Visible(true); // Affiche les deux véhicules sur les grands écrans
      } else {
        setIsLargeScreen(false);
        setIsVehicle1Visible(true); // Affiche que le 1er véhicule sur les ptis écrans
      }
    };

    checkWidthEcran();
    window.addEventListener("resize", checkWidthEcran);

    return () => {
      window.removeEventListener("resize", checkWidthEcran);
    };
  }, []);

  // Basculer entre les véhicules sur les ptits écrans
  const handleSwitchVehicle = () => {
    if (!isLargeScreen) {
      setIsVehicle1Visible((prev) => !prev);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      {/* Vehicle 1 - Yamaha R1 */}
      <div
        id="vehicle1"
        className={`h-full w-full bg-red-400 flex flex-col items-center ${
          isLargeScreen || isVehicle1Visible ? "" : "hidden"
        }`}
      >
        <img
          className="h-1/3 mt-16 md:mt-24"
          src="/items/tailwindcss/yamaha-R1.png"
          alt="Yamaha R1"
        />
        <h2 className="text-[3vh] text-black font-bold mt-[1.5vh]">
          Yamaha R1 2024
        </h2>

        <div className="text-center text-gray-900 text-[2vh] m-[1vh]">
          <ul className="infos1 space-y-[0.5vw] font-medium">
            <li>Prix : 20.500 €</li>
            <li>Accélération (0 à 100) : 3,0s</li>
            <li>V max : 300km/h</li>

            <ul className="flex flex-col lg:hidden space-y-[0.5vw]">
              <li>Puissance : 200ch (147kW)</li>
              <li>Poids : 200Kg</li>
              <li>Rapport poids/puissance : 1,005Kg/ch</li>
            </ul>

            <audio ref={audioR1Ref}>
              <source
                src="/items/tailwindcss/son moteur yamaha R1.mp3"
                type="audio/mpeg"
              />
              Audio non supporté
            </audio>
            <button
              onClick={() => audioR1Ref.current?.play()}
              className="text-sky-600 m-2 p-1 border rounded-xl"
            >
              Vrooom
            </button>
            <button
              onClick={() => audioR1Ref.current?.pause()}
              className="text-sky-200 m-2 p-1 border rounded-xl"
            >
              Pause
            </button>
          </ul>
        </div>
      </div>

      {/* Barre verte middle*/}
      {isLargeScreen && (
        <div
          className="w-28 h-full transform -skew-x-6 absolute z-50"
          style={{ backgroundColor: "rgb(37, 238, 37)" }}
        ></div>
      )}

      {/* Vehicle 2 - Lamborghini URUS */}
      <div
        id="vehicle2"
        className={`h-full w-full bg-blue-500 flex flex-col items-center ${
          isLargeScreen || !isVehicle1Visible ? "" : "hidden"
        }`}
      >
        <img
          className="h-1/3 mt-16 md:mt-24"
          src="/items/tailwindcss/URUS.png"
          alt="Lamborghini URUS"
        />
        <h2 className="text-[3vh] text-yellow-100 font-bold mt-[1.5vh]">
          Lamborghini URUS 2024
        </h2>

        <div className="text-center text-[2vh] m-[1vh]">
          <ul className="infos1 space-y-[0.5vw] font-medium">
            <li>Prix : 225.000 €</li>
            <li>Accélération (0 à 100) : 3,6s</li>
            <li>V max : 305km/h</li>

            <ul className="flex flex-col lg:hidden space-y-[0.5vw]">
              <li>Puissance : 650ch (478kW)</li>
              <li>Poids : 2.200Kg</li>
              <li>Rapport poids/puissance : 3,38Kg/ch</li>
            </ul>

            <audio ref={audioURUSRef}>
              <source
                src="/items/tailwindcss/son démarrage URUS.mp3"
                type="audio/mpeg"
              />
              Audio non supporté
            </audio>
            <button
              onClick={() => audioURUSRef.current?.play()}
              className="text-indigo-800 m-2 p-1 border rounded-xl"
            >
              Vrooom
            </button>
            <button
              onClick={() => audioURUSRef.current?.pause()}
              className="text-indigo-300 m-2 p-1 border rounded-xl"
            >
              Pause
            </button>
          </ul>
        </div>
      </div>

      {/* Boutton de switch*/}
      {!isLargeScreen && (
        <button
          id="boutonChange"
          className="absolute bottom-10 px-4 p-2 bg-gray-800 text-white rounded lg:hidden"
          onClick={handleSwitchVehicle}
        >
          Switch
        </button>
      )}

      <a href="../../../" className="retour_bouton">
        Retour
      </a>
    </div>
  );
};

export default VehiclePage;