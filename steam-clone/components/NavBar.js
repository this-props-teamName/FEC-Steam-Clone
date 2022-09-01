import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="bg-transparent pl-0 pr-0 h-[66px] min-w-[940px]"> {/*store_hander*/}
      <div className="h-[66px] relative w-[940px] mt-0 mr-auto mb-0 ml-auto z-300"> {/*content*/}
        <div className="absolute right-0 top-[8px] text-right z-[300] text-[11px]"> {/*store_control*/}
          <div className="shadow-[0_0_3px_rgba(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-wishlist"> {/*store_header_btn_gray*/}
            <a className ="incline-block pt-[0px] pr-[25px] pb-[0px] pl-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Wishlist
            </a> {/*wishlist_link*/}
            </div>
          <div className="bg-[-34px, 30px] shadow-[0_0_3px_rgba(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-cart"> {/*store_header_btn_green*/}
            <a className = "incline-block pt-[0px] pr-[25px] pb-[0px] pl-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar