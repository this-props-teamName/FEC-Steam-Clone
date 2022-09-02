import { data } from 'autoprefixer'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


const NavBar = () => {
  return (
    <div className="bg-transparent pl-0 pr-0 h-[66px] min-w-[940px] mb-[16px]"> {/*store_hander*/}
      <div className="h-[66px] relative w-[940px] my-0 mx-auto z-[300]"> {/*content*/}

{/*WishList and Cart Button*/}
        <div className="top-[8px] absolute right-0 text-right z-[300] text-[11px]"> {/*store_control*/}
        <div className= "text-right text-[11px]">
          <div className="shadow-[0_0_3px_rgb(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-wishlist invisible"> {/*store_header_btn_gray*/}
            <a className ="inline-block pt-[0px] pr-[25px] pb-[0px] pl-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Wishlist
            </a> {/*wishlist_link*/}
            </div>
          <div className="bg-[-34px, 30px] shadow-[0_0_3px_rgba(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-cart invisible"> {/*store_header_btn_green*/}
            <a className = "inline-block py-[0px] px-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Cart
            </a>
          </div>
        </div>
        </div>

{/*NavBar Start*/}
          <div className= {navStyles.store_area}> {/*store_nav_area*/}
            <div className= {navStyles.store_bg}> {/*store_nav_bg*/}
              <div className= "h-[35px] flex">

{/*Your Store */}
                <div className= {navStyles.tab}>
                  <span className= {navStyles.span}>
                    {/* <img className= {navStyles.profile_img} src="https://avatars.akamai.steamstatic.com/bb3ef3a7103423dbfe4947ad72c6a43a84b53fa9.jpg"/> */}
                    <a className= "inline text-[#e5e5e5] font-sans text-[13px]">Your Store</a>
                    <span></span>
                  </span>
                </div>

{/*Store Dropdown*/}
                <div className = "z-[200] absolute shadow-[0_0_12px_rgb(0,0,0)] visible top-[42px] left-[0px] block opacity-100">
                  <div className = {navStyles.store_popup_block}>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/?snr=1_5_9__12">Home</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/communityrecommendations/?snr=1_5_9__12">Community Recommendations</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/recommended/?snr=1_5_9__12">Recently Viewed</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/curators/?snr=1_5_9__12">Steam Curators</a>
                  </div>
                </div>

{/* News and Noteworthy */}
                <div className= {navStyles.tab}>
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5]">News and Noteworthy</a>
                    <span></span>
                  </span>
                </div>

{/* Categories */}
                <div className= {navStyles.tab}>
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5]">Categories</a>
                    <span></span>
                  </span>
                </div>

{/* Points Shop */}
                <a className= {navStyles.tab}>
                    <span className= {navStyles.span}>Points Shop</span>
                </a>

{/* News */}
                <a className= {navStyles.tab}>
                    <span className= {navStyles.span}>News</span>
                </a>

{/* Labs */}    
                <div className= {navStyles.tab}>
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5]" href="javascript:void(0);">Labs</a>
                    <span></span>
                  </span>
                </div>

{/*Search_Bar*/}
                <div className= "grow shrink basis-[0%] w-[20px]"></div>
                  <div className= "grow shrink-0 max-w-[210px]">
                    <div className= "float-none px-[4px] pt-[3px] pb-[2px] h-[30px]">
                      <form>
                        <input type="hidden"/>
                          <div className= {navStyles.searchbar}>
                            <input className= {navStyles.searchbox}/>
                              <a className="absolute right-[2px] top-0 no-underline bg-[#ffff]">
                                <img className= "w-[25px] h-[25px] absoulte top-[1px] right-[-1px] bg-[url('https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png')]" src="https://store.akamai.steamstatic.com/public/images/blank.gif"/>
                              </a>

                            
                          </div>
                      </form>
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