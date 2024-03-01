import React from 'react'
import HeroGraph from '../HeroGraph/HeroGraph'
const GraphTrendingContain = () => {
  return (
    <div className="w-full h-[760px]  flex justify-between gap-[20px] max-[411px]:flex-col max-[411px]:h-[1000px]">
        <HeroGraph></HeroGraph>
    </div>
  )
}

export default GraphTrendingContain