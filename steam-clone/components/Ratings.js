import React from 'react'

const Ratings = () => {
  return (
    <div className="bg-black-rgba p-[16px] mb-[8px] mt-0 block">
        <div className="hidden">Ratings</div>
        <div className="text-[#c6d4df] text-[12px] block">
          <div className="flex">
            <div className="mr-[10px] block">
              <img src="https://store.cloudflare.steamstatic.com/public/shared/images/game_ratings/ESRB/rp.png"/>
            </div>
            <div></div>
          </div>
          <div className="mt-[8px] block">Rating for: ESRB</div>
        </div>
    </div>
  )
}

export default Ratings