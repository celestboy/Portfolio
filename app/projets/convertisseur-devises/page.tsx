"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faCoins,
  faGlobe,
  faClock,
  faShieldAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<string>("--");
  const [lastUpdate, setLastUpdate] = useState<string>("--");
  const [currencies, setCurrencies] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const apiKey = "cb292f1e4400e868b1c08c85";

  const fetchExchangeRate = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`
      );
      const data = await response.json();
      if (response.ok) {
        setConvertedAmount(
          new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: toCurrency,
          }).format(data.conversion_result)
        );
        setExchangeRate(data.conversion_rate);
        setLastUpdate(new Date().toLocaleTimeString());
      } else {
        console.error("Error fetching exchange rate");
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    } finally {
      setIsLoading(false);
    }
  }, [amount, fromCurrency, toCurrency, apiKey]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (amount > 0 && fromCurrency && toCurrency) {
      fetchExchangeRate();
    } else {
      setConvertedAmount("--");
      setExchangeRate(0);
      setLastUpdate("--");
    }
  }, [amount, fromCurrency, toCurrency, fetchExchangeRate]);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );
      const data = await response.json();
      if (response.ok) {
        setCurrencies(data.conversion_rates);
      } else {
        console.error("Error fetching currencies");
      }
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleQuickConvert = (amount: number) => {
    setAmount(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faExchangeAlt} />
            Convertisseur de Devises
          </h1>
          <p className="text-sm opacity-90 mt-2">
            Taux de change en temps réel
          </p>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Montant
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faCoins}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                placeholder="Entrez le montant"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                De
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Object.keys(currencies).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={handleSwap}
                className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:rotate-180"
              >
                <FontAwesomeIcon icon={faExchangeAlt} />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Vers
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Object.keys(currencies).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {isLoading ? "Chargement..." : convertedAmount}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Taux de change: {exchangeRate.toFixed(4)} {fromCurrency} = 1{" "}
                {toCurrency}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Dernière mise à jour: {lastUpdate}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-600 mb-4">
              Conversions rapides
            </h4>
            <div className="flex gap-2 justify-center">
              {[100, 500, 1000].map((value) => (
                <button
                  key={value}
                  onClick={() => handleQuickConvert(value)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        {[
          {
            icon: faClock,
            title: "Temps réel",
            description: "Taux de change mis à jour en direct",
          },
          {
            icon: faShieldAlt,
            title: "Fiable",
            description: "Sources de données sécurisées",
          },
          {
            icon: faGlobe,
            title: "170+ Devises",
            description: "Toutes les devises mondiales",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center text-white"
          >
            <FontAwesomeIcon icon={feature.icon} className="text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.description}</p>
          </div>
        ))}
      </div>

      <a
        href="../../"
        className="fixed top-8 left-8 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Retour
      </a>
    </div>
  );
};

export default CurrencyConverter;
