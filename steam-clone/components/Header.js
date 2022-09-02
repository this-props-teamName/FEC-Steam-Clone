import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-[#171a21] bg-center-top min-w-[940px]  font-sans font-normal text-[14px] px-[16px]">
      <div className="relative h-[104px] w-[940px] mx-auto my-0 z-[402]">
        <div className="float-left pt-[30px] mr-[40px]">
          <img className="h-[44px] w-[176px]" src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"/>
        </div>
        <div className="absolute left-[200px]">
          <a className="block relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            <Link href="/">Store</Link>
          </a>
          <a className="block relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            <Link href="/"> Community</Link>
          </a>
          <a className="block relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            <Link href="/">UserName Here</Link>
          </a>
          <a className="block relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            <Link href="/">Chat</Link>
          </a>
          <a className="block relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            <Link href="/">Support</Link>
          </a>
          {/* -----Hidden hover for Store */}
                {/* the followig is the style of hover when appearinng */}
                  {/* <div className=" absolute z-[1500] opacity-1 left-[1px] top-[64px] bg-[#171a21] max-w-[132px]
                  p-[10px] shadow-[3px_3px_5px_-3px_#000] text-left " ></div> */}
          <div className="hidden">
            <div >
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                Home
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                  Discovery Queue
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                WishList
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                Point Shop
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                News
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                Stats
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
                ABOUT
              </a>
            </div>
          </div>
          {/* --------Hidden hover for Community---- */}
          {/* the followig is the style of hover when appearinng */}
                  {/* <div className=" absolute z-[1500] opacity-1 left-[59px] top-[64px] bg-[#171a21] max-w-[132px]
                  p-[10px] shadow-[3px_3px_5px_-3px_#000] text-left " ></div> */}
          <div className="hidden " >
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Home
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Discussions
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Workshop
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Market
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Broadcast
              </a>
          </div>
          {/* --------Hidden hover for USERNAME ---- */}
          {/* the followig is the style of hover when appearinng */}
                  {/* <div className=" absolute z-[1500] opacity-1 left-[159px] top-[64px] bg-[#171a21] max-w-[132px]
                  p-[10px] shadow-[3px_3px_5px_-3px_#000] text-left " ></div> */}
          <div className="hidden " >
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Activity
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Profile
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Freinds
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Groups
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Content
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Badges
              </a>
              <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] " >
                Inventory
              </a>
          </div>
        </div>
        <div className="absolute right-0 top-[6px] h-[21px] leading-[21px] text-[#b8b6b4] text-[11px] z-[401]">
          <div className="leading-[24px] align-top inline-block align-top">
              <div className="inline-block relative leading-[24px] mr-[3px]" >
                <a className=" inline-block  pl-[35px] pr-[9px] bg-[bottom_5px_left_10px] bg-[#616a72] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1')] bg-no-repeat leading-[24px] text-[11px] h-[21px] text-[#e5e4dc]">Install Steam</a>
              </div>
              <div className="inline-block bg-[#262625] p-[4px]">
                <div className="inline-block my-0 mx-[4px] ">
                    <img className="w-[12px] h-[10px]  " src='https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_notifications.png'/>
                </div>
              </div>
              <span className="inline-block pl-[4px] leading-[25px] mr-[5px] pr-[18px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png')] bg-no-repeat bg-[center_right] text-[12px]" >
                username here
              </span>
              <div className="inline-block ml-[3px]" > 
                  <img className="p-[1px]" src='https://avatars.akamai.steamstatic.com/c34d6c555878a155a93565791de54510e36154bd.jpg'/>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
