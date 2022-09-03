
export const GameAreaPurchase = () => {
   /* padding(top, right, bottom, left) */
  return (
    
    <div className="text-[14px]" >
       <div className=" text-[#d5d6d8] mb-[28px] bg-gradient-to-r from-[#2A485F] to-[#396483] shadow-[2px_2px_15px_rgba(0,0,0,0.4)] rounded-[4px] text-[13px] font-sans font-[300] " >
          <div className="overflow-visible pl-[16px] pt-[12px] min-h-[38px] relative pb-[12px] pl-[16px] pr-[16px] pt-[8px] "   >
            <h1 className=" text-[24px] font-normal leading-[26px] max-h-[54px]  overflow-hidden"  >Coming February 10, 2023</h1>
            <p className="block text-[12px] "   >This game will unlock in approximately 5 months</p>
          </div>
       </div> 
       <div className="mb-[28px]  " >
          <div className="mb-0 relative rounded-[4px] font-sans font-normal text-[13px] text-[#c6d4df] p-[16px] pb-[26px] z-[1]"  >
            <div className='float-right' >
                <img className='inline-block w-[20px] h-[20px] bg-no-repeat  ' src='https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3'/>
            </div>
            <h1 className='text-[21px] font-sans text-[#ffffff] font-normal ' >Pre-Purchase Hogwarts Legacy</h1>
            <div className='absolute right-[16px] bottom-[-17px] left-[16px] whitespace-nowrap text-right ' >
                <div className='h-[32px] inline-block align-bottom bg-[#000000] py-[2px] pr-0 pl-2px rounded-[2px] whitespace-nowrap ' >
                  <div className='bg-[#000000] text-[13px] pt-[8px] pl-[12px] pr-[12px] height-[24px] relative ' >
                    $59.99
                  </div>
                  <div className='relative' >
                    <a className='rounded-[2px] border-none p-[1px] inline-block cursor-pointer no-underline text-[#d2efa9] shadow-[1px_1px_0px_rgba(0,0,0,0.3)] ' >
                      <span>Add to Cart</span>
                    </a> 
                  </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default GameAreaPurchase;