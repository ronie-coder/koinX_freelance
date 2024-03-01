"use client";

import { createContext } from "react";

import { useState, useEffect } from "react";
import axios from "axios";

export const coinContext = createContext({});

export const CoinContextProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [priceUSD, setPriceUSD] = useState({});
  const [priceINR, setPriceINR] = useState({});

  useEffect(() => {
    try {
      const fetchAll = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending",
          { crossDomain: true }
        );
        setTrendingCoins(res.data);
      };
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  }, [axios]);

  useEffect(() => {
    try {
      const fetchAll = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
          { crossDomain: true }
        );
        setPriceUSD(res.data);
      };
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  }, [axios]);
  useEffect(() => {
    try {
      const fetchAll = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr",
          { crossDomain: true }
        );
        setPriceINR(res.data);
      };
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  }, [axios]);

  return <coinContext.Provider>{children}</coinContext.Provider>;
};
