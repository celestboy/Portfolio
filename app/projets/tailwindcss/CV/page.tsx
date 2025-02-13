import React from "react";
import Image from "next/image";

const CV = () => {
  return (
    <div>
      {/* Mobile Version */}
      <div className="w-full grid grid-rows-[auto,auto,1fr] grid-cols-10 md:hidden">
        <div className="row-span-2 col-span-4 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center h-40">
          <Image
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 shadow-lg"
            src="/images/photo-perso.jpg"
            alt="photo personnelle"
            width={112}
            height={112}
          />
        </div>

        <div className="row-span-2 col-span-6 bg-gradient-to-r from-blue-900 to-indigo-900 flex flex-col items-center justify-center h-40 p-2">
          <h2 className="text-center text-white text-lg font-bold">
            Célestin GODEFROY
          </h2>
          <h1 className="text-center text-gray-300 text-xl mt-2 font-semibold">
            Développeur web
          </h1>
        </div>

        <div className="h-full col-span-4 bg-gradient-to-br from-blue-900 to-indigo-900 p-4 text-white">
          <h3 className="mb-3 text-xl font-bold border-b-2 border-gray-700 pb-2">
            Informations personnelles
          </h3>
          <div className="space-y-2">
            <p className="text-sm">🏠 La Défense, Paris</p>
            <p className="text-sm">📟 06 29 33 65 59</p>
            <p className="text-sm">✉️ celestin.godefroy@gmail.com</p>
          </div>

          <h3 className="mt-6 mb-3 text-xl font-bold border-b-2 border-gray-700 pb-2">
            Compétences
          </h3>
          <ul className="space-y-2 text-sm">
            <li>🌐 HTML, CSS, JS, PHP, SQL</li>
            <li>📊 Wordpress</li>
            <li>👥 Soft skills</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-bold border-b-2 border-gray-700 pb-2">
            Langues
          </h3>
          <div className="space-y-2 text-sm">
            <p>🇫🇷 Français (maternel)</p>
            <p>🇬🇧 Anglais (niveau B2 - C1)</p>
          </div>

          <h3 className="mt-6 mb-3 text-xl font-bold border-b-2 border-gray-700 pb-2">
            Centres d'intérêts
          </h3>
          <ul className="space-y-2 text-sm">
            <li>💻 Programmation</li>
            <li>🛠️ Entrepreneuriat</li>
            <li>🛫 Voyage</li>
          </ul>
        </div>

        <div className="row-span-6 p-4 col-span-6 bg-gradient-to-br from-gray-100 to-gray-200 text-slate-800">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-900">
            FORMATION
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Bachelor Coding & Digital Innovation
              </h3>
              <p className="text-sm text-gray-600">
                2023 - 2026 | IIM Digital School
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Baccalauréat Général (mention AB)
              </h3>
              <p className="text-sm text-gray-600">2023</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Brevet des Collèges (mention TB)
              </h3>
              <p className="text-sm text-gray-600">2020</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b-2 border-blue-900 uppercase">
            expériences
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Équipier polyvalent
              </h3>
              <p className="text-sm text-gray-600">
                CDD du 20 juin au 1er septembre 2024 | McDonald's
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Vendeur ELS point chaud
              </h3>
              <p className="text-sm text-gray-600">
                CDD du 7 au 30 juillet 2023 | Super U
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Équipier polyvalent
              </h3>
              <p className="text-sm text-gray-600">
                CDI du 6 janvier au 25 juin 2023 | McDonald's
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 h-screen w-full hidden md:flex items-center justify-center">
        <div className="h-[60%] w-[55%] bg-white shadow-2xl rounded-[1vw] p-8 border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="w-full h-full flex">
            <div className="w-[40%] flex flex-col justify-center items-center border-r border-gray-200 pr-6">
              <div className="relative">
                <Image
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-900 shadow-lg mb-4"
                  src="/images/photo-perso.jpg"
                  alt="photo personnelle"
                  width={160}
                  height={160}
                />
                <div className="absolute bottom-0 right-0 bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold">
                  Dev
                </div>
              </div>
              <h1 className="text-[1.5vw] font-bold text-blue-900 text-center">
                Célestin GODEFROY
              </h1>
              <p className="text-[1.2vw] text-blue-700 text-center">
                Développeur web
              </p>
              <div className="mt-4 text-center text-[0.9vw] text-gray-600 px-4">
                <p>Développement Web</p>
                <p>Innovation Numérique</p>
                <p>Création Digital</p>
              </div>
            </div>

            <div className="w-[60%] pl-6 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-[1vw] text-blue-900">
                    celestin.godefroy@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <p className="text-[1vw] text-blue-900">La Défense, Paris</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-[1vw] text-blue-900">📟 06 29 33 65 59</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-[0.8vw] text-gray-500 italic text-center">
                  Créer, Innover, Développer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="../../../" className="retour_bouton">
        Retour
      </a>
    </div>
  );
};

export default CV;
