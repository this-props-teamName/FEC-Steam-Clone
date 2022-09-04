import Link from 'next/link'

const CarouselGameInfo = () => {
  return (
    <div className='w-[324px] ml-[0px] float-right'>

      <div className='p-[0px] font-sans'>
        <div className='mb-[7px]'>
          {/* need to use database for the image below */}
          <img className='w-[324px] h-[151px]' src='https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg?t=1661535551' />
        </div>
        {/* need to use database for game description text below */}
        <div className='max-h-[111px] text-[13px] leading-[18px] pr-[16px] text-[#c6d4df] font-sans'>
					Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.							
        </div>
        <div className='text-[12px] text-[#556772] mt-[10px]'>
          <div className='flex leading-[16px] cursor-pointer font-sans'>
            <div className='text-[10px] pr-[10px] min-w-[94px] uppercase'>All Reviews:</div>
            <div className='truncate'>No user reviews </div>
          </div>
        </div>
        <div className='flex leading-[16px] pt-[9px] pb-[13px]'>
          <div className='uppercase text-[10px] text-[#556772] pr-[10px] min-w-[94px]'>Release Date:</div>
          <div className='max-h-[30px] truncate leading-[16px] text-[12px] text-[#8f98a0]'>Feb 10, 2023</div>
        </div>
        <div className='flex leading-[16px] text-[#c6d4df] text-[12px]'>
          <div className='truncate text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]'>Developer:</div>
          <div className='truncate leading-[16px]'>
          {/* get developer from the backend ... NEEDS CHANGE */}
            <a className='text-[#67c1f5] hover:text-[#fff]' href='https://store.steampowered.com/developer/WBGames?snr=1_5_9__2000'>Avalanche Software</a>
          </div>
        </div>
        <div className='flex leading-[16px]'>
          {/* get Publisher from the backend ... NEEDS CHANGE */}
          <div className='truncate text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]'>Publisher:</div>
          <div className='truncate leading-[16px] '>
            <a className='text-[#67c1f5] text-[12px] leading-[16px] hover:text-[#fff]' href='https://store.steampowered.com/publisher/WBGames?snr=1_5_9__2000'>Warner Bros. Games</a>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-[10px] text-[11px]'>
          <div className='leading-[19px] text-[12px] text-[#556772] font-sans'>Popular user-defined tags for this product:</div>
          <div className='truncate h-[22px] font-sans'>
            {/* get this info from the backend ... NEEDS CHANGE */}
            <a href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] hover:text-[#fff]'> Adventure </a>
            <a href='https://store.steampowered.com/tags/en/Magic/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] hover:text-[#fff]'> Magic </a>
            <a href='https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] hover:text-[#fff]'> Open World </a>
            <a href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] hover:text-[#fff]'> Fantasy </a>
            <a href='https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] hover:text-[#fff]'> RPG </a>
            <a href='/' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] hover:text-[#fff]'> + </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselGameInfo