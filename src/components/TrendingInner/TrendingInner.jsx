import React from 'react'

import { coinContext } from '@/context/coinsContext'
import { useContext } from 'react'
const TrendingInner = () => {
  const {trendingCoins} = useContext(coinContext);
 console.log(trendingCoins);
  const reversedArray = []

for(let i = trendingCoins?.coins?.length - 1; i >=1 ; i--) {
  const valueAtIndex = trendingCoins?.coins[i]
  
  reversedArray.push(valueAtIndex)
}

  return (
    <div className="flex-1  flex flex-col gap-4">
        <div className="w-full h-[36px] text-[24px] font-[600] flex items-center  max-[411px]:pl-3">Trending Coins</div>
        
    </div>
  )
}

export default TrendingInner