const CarouselImages = () => {
  return (
    <div className="w-[616] float-left p-[0px] m-[0px] font-sans">
      <div className = "overflow-hidden relative mr-[16px]">
        <div className ="bg-black overflow-hidden relative" >
          <div>
            <img src='https://store.cloudflare.steamstatic.com/public/images/game/game_highlight_image_spacer.gif' />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
            <div className="flex h-[100%] flex-col justify-center">
              <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.1920x1080.jpg?t=1661535551">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.600x338.jpg?t=1661535551" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
            <div className="flex h-[100%] flex-col justify-center">
              <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1661535551">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.600x338.jpg?t=1661535551" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
            <div className="flex h-[100%] flex-col justify-center">
              <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg?t=1661535551">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.600x338.jpg?t=1661535551" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
            <div className="flex h-[100%] flex-col justify-center">
              <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.1920x1080.jpg?t=1661535551">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.600x338.jpg?t=1661535551" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
            <div className="flex h-[100%] flex-col justify-center">
              <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.1920x1080.jpg?t=1661535551">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.600x338.jpg?t=1661535551" />
              </a>
            </div>
          </div>
          <script></script>
        </div>
        <div className="mt-[4px] relative h-[69px] mb-[4px] z-40">
          <div className="w-[602px] left-0 absolute">
            {/* create arrow */}
            <div className="absolute w-[116px] h-[77px] z-50 top-[-10px] border-[2px]"></div>
            <div></div>

            <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.116x65.jpg?t=1661535551"/>
            </div>
            <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.116x65.jpg?t=1661535551"/>
            </div>
            <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.116x65.jpg?t=1661535551"/>
            </div>
            <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.116x65.jpg?t=1661535551"/>
            </div>
            <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.116x65.jpg?t=1661535551"/>
            </div>
          </div>
        </div>
        <div className="relative h-[18px]">

          {/* fix the hover effects and the right scroll bar clicker */}
          <div className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer bg-[#233c5166]">
            <span className="h-[7px] w-[9px] ml-[13px] mt-[5px] bg-no-repeat bg-[left_18px] bg-[right_-18px] hover:bg-[#446480] bg-0 bg-[url('https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png')]"></span>
          </div>
          <div className="absolute left-[39px] right-[39px] top-0 bottom-0 bg-[#00000033]  rounded-[3px] ">
            <div></div>
            <div className="absolute left-0 bg-[#233c5166] h-[18px] w-[60px] rounded-[3px] hover:bg-[#446480] cursor-pointer e"></div>
          </div>
          <div className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer bg-[#233c5166]">
            <span className="h-[7px] w-[9px] ml-[15px] mt-[5px] bg-no-repeat bg-[left_9px] bg-[right_-9px] hover:bg-[#446480] right-0 bg-0 bg-[url('https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png')]"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselImages