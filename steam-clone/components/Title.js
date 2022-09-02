import React from 'react'

const Title = () => {
  
  return (
    <div className="w-[940px] relative mx-auto my-0">
      <div>
        <a className="text-[14px] text-[#8f98a0] hover:text-[#c6d4df]" href='https://store.steampowered.com/search/?term=&snr=1_5_9__205'>{'All Games <'} </a>
        <a className="text-[14px] text-[#8f98a0] hover:text-[#c6d4df]" href='/'>{'Adventure Games <'}</a>
        <a className="text-[14px] text-[#8f98a0] hover:text-[#c6d4df]" href='https://store.steampowered.com/app/990080/?snr=1_5_9__205'>{' Hogwarts'}</a>
      </div>
      <div className='mx-auto my-[0px]'>
        <div className='text-[26px] text-ellipsis leading-[32px] text-white'>
          Put title here
          <div className='relative float-right'>
            <a href='https://steamcommunity.com/app/990080'>
              <span className='bg-[#67c1f533] p-[1px] inline-block rounded-[2px] text-[15px] leading-[30px] pr-[15px] pl-[15px] text-[#67c1f5] hover:text-white hover:bg-[#67c1f5]'>
                Community Hub
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title