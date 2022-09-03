import React from 'react'
import GameRelevance from './GameRelevance'
import GameFeatures from './GameFeatures'

export const RightColumn = () => {
  return (
    <div className="mt-[16px] overflow-hidden w-[308px] ml-[14px] float-right grid-flow-col">
        RightColumn
        {/* responsive_apppage_details_left_ctn */}
        <div></div>
        <div className="mb-0 bg-black-rgba text-[#fff] text-[16px] pt-[10px] pb-[10px] pl-[18px] pr-[18px]">Is this game relevant to you?</div>
        {/* following div is for if they are NOT logged in */}
        <GameRelevance/>
        <GameFeatures/>
    </div>
  )
}


export default RightColumn;
