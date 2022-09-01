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
            <div className= "shadow-[0_0_3px_rgb(0_0_0/40%)] h-[35px] mt-[7px] mr-[0px] mb-[7px] ml[0px] bg-rgb(103_193_243_0.4)">
              <div className= "h-[35px] flex">
                <div className= "p-[1px] inline-block no-underline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar