import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-[#1b2838] bg-center-top min-w-[940px] px-4">
      <div className="relative h-[104px] w-[940px] mx-auto my-0">
        <div className="float-left pt-[30px] mr-[40px]">
          <img className="h-[44px] w-[176px]" src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"/>
        </div>
        <div className="absolute left-[200px]">
          <div className="block relative pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase text-[#b8b6b4]">
            <Link href="/">Store</Link>
          </div>
          <div className="block relative pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase text-[#b8b6b4]">
            <Link href="/"> Community</Link>
          </div>
          <div className="block relative pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase text-[#b8b6b4]">
            <Link href="/">UserName Here</Link>
          </div>
          <div className="block relative pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase text-[#b8b6b4]">
            <Link href="/">Chat</Link>
          </div>
          <div className="block relative pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase text-[#b8b6b4]">
            <Link href="/">Support</Link>
          </div>
        </div>
        <div className="absolute right-0 top-[6px] h-[21px] text-[#b8b6b4] ">
          <div className="leading-6 align-top inline-block">
              <div className="inline-block relative mr-[3px]  bg-[bottom_5px_left_10px] leading-6 bg-[#616a72] pl-[35px] pr-[9px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1')] bg-no-repeat" >
                <a className="text-[12px] h-[21px] text-[#e5e4dc]">Install Steam</a>
              </div>
              <div className="inline-block bg-[#262625]">
                <div className="inline-block my-0 mx-[4px] px-[10px]">
                    <img className="w-[12px] h-[10px]  " src='https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_notifications.png'/>
                </div>
              </div>
              <div className="inline-block pl-[4px] leading-6 " >
                username here 
                <button className="h-8 w-8">⌄ </button>
              </div>
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
