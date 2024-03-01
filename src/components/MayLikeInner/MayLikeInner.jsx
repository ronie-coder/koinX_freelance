"use client"
import React from 'react'

import { coinContext } from '@/context/coinsContext'
import { useContext } from 'react'
import { useState } from 'react'
const MayLikeInner = () => {

  
  const {trendingCoins} = useContext(coinContext);
  
  return (
    <div className="flex-1  flex flex-col gap-4">
        <div className="w-full h-[36px] text-[24px] font-[600] flex items-center max-[411px]:pl-3">You May Also Like</div>
        
    </div>
  )
}

export default MayLikeInner