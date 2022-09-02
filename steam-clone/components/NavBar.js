import { data } from 'autoprefixer'
import Link from 'next/link'


const NavBar = () => {
  return (
    <div className="bg-transparent pl-0 pr-0 h-[66px] min-w-[940px]"> {/*store_hander*/}
      <div className="h-[66px] relative w-[940px] mt-0 mr-auto mb-0 ml-auto z-300"> {/*content*/}
        <div className="absolute right-0 top-[8px] text-right z-[300] text-[11px]"> {/*store_control*/}

{/*WishList and Cart Button*/}
          <div className="shadow-[0_0_3px_rgb(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-wishlist"> {/*store_header_btn_gray*/}
            <a className ="inline-block pt-[0px] pr-[25px] pb-[0px] pl-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Wishlist
            </a> {/*wishlist_link*/}
            </div>
          <div className="bg-[-34px, 30px] shadow-[0_0_3px_rgba(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-cart"> {/*store_header_btn_green*/}
            <a className = "inline-block py-[0px] px-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Cart
            </a>
          </div>

{/*NavBar Start*/}
          <div className= "absolute left-0 right-0 top-[24px] h-[49px]"> {/*store_nav_area*/}
            <div className= "bg-gradient-to-r from-[#0f216e] via-[#3d6695] to-[#3978b0] shadow-[0_0_3px_rgb(0_0_0/40%)] h-[35px] my-[7px] mx-[0px]">
              <div className= "h-[35px] flex">

{/*Your Store */}
                <div className= "p-[1px] inline-block no-underline cursor-pointer">
                  <span className= "p-[1px] inline-block no-underline cursor-pointer h-[35px] flex pr-[10px] mr-[0px]">
                    <img className= "ml-[-5px] w-[16px] h-[16px] align-text-bottom mr-[6px]" src="https://avatars.akamai.steamstatic.com/bb3ef3a7103423dbfe4947ad72c6a43a84b53fa9.jpg"></img>
                    <a clssName= "inline text-[#e5e5e5]" href="javascript:void(0);">Your Store</a>
                    <span></span>
                  </span>
                </div>
                <div className="bg-slate-300 visible top-[42px] left-[0px] block opacity-100 z-200 absolute shadow-[0_0_12px_rgb(#00000)]">
                  <div v-if="isOpen" className= "flex flex-col"> 
                    <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/?snr=1_5_9__12">Home</a>
                    <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://steamcommunity.com/my/followedgames/?snr=1_5_9__12">Followed Games and Software</a>
                  <div className = "ml-[14px] pt-[0px] pr-[5px] pb-[5px] pl-[0px] mx-[10px] my-[5px] h-[1px] bg-white"></div>
                    <div className= "ml-[14px] pt-[0px] pr-[5px] pb-[5px] pl-[0px] font-normal mt-[16px] mb-[0px] ml-[14px] mr-[13px] uppercase tracking-[.07em] text-[11px] text-[#2EBFFF]">Subscriptions</div>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/account/subscriptions?snr=1_5_9__12">Manage Subscriptions</a>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/account/preferences/?snr=1_5_9__12">Preferences</a>
                    <div className = "font-normal mt-[16px] mb-[opx] ml-[14px] mr-[13px] uppercase tracking-[.07em] text-[11px] text-[#2EBFFF]">Recommendations</div>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/explore/next/0?snr=1_5_9__12">Discovery Queue</a>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/explore/next/3?snr=1_5_9__12">New Releases Queue</a>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/communityrecommendations/?snr=1_5_9__12">Community Recommendations</a>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/recommender/?snr=1_5_9__12">Interactive Recommender</a>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/recommended/friendactivity/?snr=1_5_9__12">Popular Among Friends</a>
                      <a className= "w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/curators/?snr=1_5_9__12">Steam Curators</a>
                    <div className= "ml-[14px] pt-[0px] pr-[5px] pb-[5px] pl-[0px] font-normal mt-[16px] mb-[0px] ml-[14px] mr-[13px] uppercase tracking-[.07em] text-[11px] text-[#2EBFFF]">
                      <div className="float-right ml-[8px]"></div> Because You Love
                    </div>
                    <div></div>
                    <a className="w-fit hover:border-b-[2px] border-white px-[1px] pt-[3px] pb-[2px] mt-[0px] mr-[10px] mb-[3px] ml-[13px] text-[12px] font-normal no-underline block leading-normal text-left" href="https://store.steampowered.com/tag/browse/?snr=1_5_9__12#recommended">More Tags for You...</a>
                  </div>

{/* News and Noteworthy */}
                <div className= "p-[1px] inline-block no-underline cursor-pointer">
                  <span className= "p-[1px] inline-block no-underline cursor-pointer h-[35px] flex pr-[10px] mr-[0px]">
                    <img className= "ml-[-5px] w-[16px] h-[16px] align-text-bottom mr-[6px]" src="https://avatars.akamai.steamstatic.com/bb3ef3a7103423dbfe4947ad72c6a43a84b53fa9.jpg"></img>
                    <a clssName= "inline text-[#e5e5e5]" href="javascript:void(0);">News and Noteworthy</a>
                    <span></span>
                  </span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar