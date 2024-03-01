"use client"

import { createContext } from "react";






export const coinContext = createContext({});

export const CoinContextProvider = ({children})=>{
    
   
    
    return (
        <coinContext.Provider>
            {children}
        </coinContext.Provider>
    )
}