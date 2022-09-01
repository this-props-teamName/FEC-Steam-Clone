import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="bg-transparent pl-0 pr-0 h-[66px] min-w-[940px]"> {/*store_hander*/}
      <div className="h-[66px] relative w-[940px] mt-0 mr-auto mb-0 ml-auto z-300"> {/*content*/}
        <div className="t-[8px] absolute r-0 text-right z-[300] text-[11px]"> {/*store_control*/}
          <div className="shadow-[0_0_3px_rgba(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-wishlist">
            <a className =" incline-block"></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar