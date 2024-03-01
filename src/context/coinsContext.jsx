"use client";

import { createContext } from "react";

import { useState, useEffect } from "react";
import axios from "axios";

export const coinContext = createContext({});

export const CoinContextProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

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

  return <coinContext.Provider>{children}</coinContext.Provider>;
};
