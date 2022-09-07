import Backing from '../styles/events.module.css';
import { useState } from 'react';

const GameEvents = () => {
  const [onHoverLeft, setOnHoverLeft] = useState(false)
  const [onHoverRight, setOnHoverRight] = useState(false)

  return (
    <div>
      <div className="mt-[30px] mr-0 mb-0 ml-0 block p-0 block">
        <div>
          <h2 className="font-sans text-[#fff] text-[14px] mx-0 mt-0 mb-[10px] uppercase font-normal pt-[2px] ">
            Recent Events & Announcements
            <img
              className="leading-[26px] bg-no-repeat bg-left-bottom "
              src="https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png"
            />
          </h2>
          <div className="flex flex-row-reverse mb-[-21px] mt-[-5px] ">
            <a
              className="bg-transparent border border-solid border-[#ffffff66] rounded-[2px]  text-[#fff] text-[11px] py-[2px] px-[15px] leading-[1rem] w-fit cursor-pointer relative bottom-[30px] decoration-0 hover:text-[#66c0f4] hover:border-[#fff]"
              href="https://store.steampowered.com/news/app/990080"
            >
              View All
            </a>
          </div>
          <div className=" font-sans flex mb-[5px] mt-[5px] overflow-x-auto ">
            <a
              className={Backing.left}
              // onMouseEnter={() => setOnHoverLeft(true)}
              // onMouseLeave={() => setOnHoverLeft(false)}
              href="https://store.steampowered.com/news/app/990080/view/3333248206672092333"
            >
              <div className=" absolute top-0 bg-[#15161900]  w-full h-full z-[1] ">
                <div className="mt-[20px] mx-[20px] mb-[0px] text-[12px] uppercase font-[500] text-[#289cff00] overflow-hidden blur-[5px] select-none scale-100 z-[2] p-0 block">
                  News
                </div>
                <div className="hover:text-[#fff] mx-[20px] my-[10px] text-[15px] text-[#ffffff00] leading-[20px] font-[300] overflow-hidden select-none scale-100 z-[2] p-0 hover:ease-out duration-300 ">
                  Take a tour of the Slytherin common room, located deep within
                  the dungeons of Hogwarts Castle.
                </div>
              </div>
              {/* <div className='bg-[url("https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/42155078/6e9647679e2a01001e1a61da7b7373bc086350f6_400x225.jpg")] w-full h-full bg-cover absolute opacity-40 p-0 m-0 block '> */}
              {/* </div> */}
              {/* this happens whe No onhover */}
              <div
                className=" flex flex-col h-full "
                // onMouseEnter={() => setOnHoverLeft(true)}
                // onMouseLeave={() => setOnHoverLeft(false)}
              >
                <div className=" w-full h-auto relative overflow-hidden">
                  <img
                    className=" hover:bg-[#00000080] w-full h-auto relative left-0 top-0 block  "
                    src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/42155078/6e9647679e2a01001e1a61da7b7373bc086350f6_400x225.jpg"
                  />
                </div>
                <div className="box-content relative flex flex-col bottom-0 h-[61px] p-[12px] text-left text-[#ffffff80] text-[13px] ">
                  <div className="text-[15px] leading-[1.1875rem] text-[#fff] max-h-[2.4375rem] mb-[4px] overflow-hidden">
                    Tour the Slytherin Common Room
                  </div>
                  <span className="inline-flex whitespace-nowrap ">
                    Sat, September 3, 2022
                    <span>&nbsp;</span>
                  </span>
                </div>
              </div>
            </a>
            <a
              className={Backing.events}
              href="https://store.steampowered.com/news/app/990080/view/3333248206672082972"
            >
              {/* This portion is the on hover area  */}
              <div className={Backing.right}>
                <div className={Backing.rightInner}>News</div>
                <div className={Backing.rightInner2}>
                  Welcome to Hufflepuff Common Room, where cozy natural
                  sunlight and an array of plants await.
                </div>
              </div>
              <div className="w-full h-full bg-cover absolute opactiy-[.4]"></div>
              {/* this is Before Hover  */}
              <div className="flex flex-col h-full">
                <div className="w-full h-auto relative overflow-hidden">
                  <img
                    className={Backing.rightImg}
                    src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/42155078/db8eef3034e5b0fb77b5528ee7eafa812ff830f0_400x225.jpg"
                  />
                </div>
                <div className={Backing.other}>
                  <div className="text-[15px] leading-[19px] text-[#fff] max-h-[2.4375rem] mb-[4px] overflow-hidden">
                    Tour the Hufflepuff Common Room
                  </div>
                  <span className="inline-flex whitespace-nowrap">
                    Sat, September 3, 2022
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