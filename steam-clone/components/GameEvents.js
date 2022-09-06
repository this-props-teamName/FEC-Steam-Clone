import Backing from '../styles/events.module.css';

const GameEvents = () => {
  return (
    <div>
      <div className='mt-[1.875rem] mr-0 mb-0 ml-0 block p-0 block'>
        <div className='p-0 m-0 block'>
        <h2 className='font-serif text-[#fff] text-sm mb-2.5 tracking-wide font-normal pt-2'>RECENT EVENTS & ANNOUNCEMENTS</h2>
        <div className='flex flex-row-reverse -mb-[1.3125rem] -mt-[0.3125rem] p-0 m-0'>
          <a className='bg-transparent rounded-sm text-[#fff] text-[11px] pt-[2px] pr-[15px] pb-[2px] pl-[15px] leading-normal w-fit cursor-pointer relative bottom-[30px] decoration-0' href='https://store.steampowered.com/news/app/990080'>
            View All
          </a>
        </div>
        <div className='font-sans flex mb-[0.3125rem] mt-[0.3125rem] overflow-x-auto p-0 m-0'>
          <a className={Backing.left} href='https://store.steampowered.com/news/app/990080/view/3333248206672092333'>
            <div className='absolute top-0 pointer-events-none w-full h-full z-[1] p-0 m-0 block'>
              <div className='mt-5 mr-5 mb-0 ml-5 text-xs uppercase font-medium overflow-hidden blur-[5px] select-none scale-100 z-[2] p-0 block'>News</div>
              {/* <div className='mt-2.5 mr-5 mb-2.5 ml-5 text-[15px] leading-5 font-light overflow-hidden blur-[5px] select-none scale-100 z-[2] p-0 '>
                "Take a tour of the Slytherin common room, located deep within the dungeons of Hogwarts Castle."
              </div> */}
            </div>
          {/* <div className='bg-[url("https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/42155078/6e9647679e2a01001e1a61da7b7373bc086350f6_400x225.jpg")] w-full h-full bg-cover absolute opacity-40 p-0 m-0 block '> */}
          {/* </div> */}
          <div className='flex flex-col h-full p-0 m-0'>
            <div className='w-full h-auto relative overflow-hidden'>
              <img src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/42155078/6e9647679e2a01001e1a61da7b7373bc086350f6_400x225.jpg'/>      
            </div>
            <div className='box-content relative flex flex-col bottom-0 h-[3.8125rem] p-12 text-left text-[13px] m-0'>
              <div className='text-[15px] leading-[1.1875rem] text-[#fff] max-h-[2.4375rem] mb-1 p-0 m-0 block'>
                Tour the Slytherin Common Room
              </div>
              <span className='inline-flex whitespace-nowrap p-0 m-0'>
                Sat, September 3, 2022
              </span>
            </div>
          </div>
          </a>
          <a className={Backing.events} href='https://store.steampowered.com/news/app/990080/view/3333248206672082972'>
            <div className={Backing.right}>
              <div className={Backing.rightInner}>News</div>
              <div className={Backing.rightInner2}>
                "Welcome to Hufflepuff Common Room, where cozy natural sunlight and an array of plants await."
                </div>
            </div>
            <div className='w-full h-full bg-cover absolute opactiy-40'></div>
            <div className='flex flex-col h-full'>
              <div className='w-full h-auto relative overflow-hidden'>
                <img className={Backing.rightImg} src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/42155078/db8eef3034e5b0fb77b5528ee7eafa812ff830f0_400x225.jpg'/>
              </div>
              <div className={Backing.other}>
                <div className='text-[15px] leading-[1.1875rem] text-[#fff] max-h-[2.4375rem] mb-1 overflow-hidden'>
                  Tour the Hufflepuff Common Room
                </div>
                <span className='inline-flex whitespace-nowrap'>
                  "Sat, September 3, 2022"
                </span>
              </div>
            </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GameEvents;