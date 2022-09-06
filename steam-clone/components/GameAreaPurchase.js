import styles from '../styles/PurchaseGame.module.css'
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

export const GameAreaPurchase = () => {
  /* padding(top, right, bottom, left) */
  const [gameInfo, setGameInfo] = useState([])

  console.log(gameInfo, "this is gameInfo")
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/gameInfo")
      .then((res) => setGameInfo(res.data[0]))

  }, [])

  if (gameInfo) {
    return (
      <div className="text-[14px] mt-[16px]">
        <div className=" text-[#d5d6d8] mb-[28px] shadow-[2px_2px_15px_rgba(0,0,0,0.4)] rounded-[4px] text-[13px] font-sans font-[300] ">
          <div className={styles.gradientReleaseDate}>
            <h1 className=" text-[24px] font-normal leading-[26px] max-h-[54px]  overflow-hidden">
              Coming February 10, 2023
            </h1>
            <p className="block text-[12px] ">
              This game will unlock in approximately 5 months
            </p>
          </div>
        </div>
        <div className="mb-[28px]  ">
          <div className={styles.gradientPurchase}>
            <div className="float-right">
              <img
                className="inline-block w-[20px] h-[20px] bg-no-repeat  "
                src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3"
              />
            </div>
            <h1 className="text-[21px] font-sans text-[#ffffff] font-normal block">
              Pre-Purchase Hogwarts Legacy
            </h1>
            <div className="absolute right-[16px] bottom-[-17px] left-[16px] whitespace-nowrap text-right ">
              <div className="h-[32px] inline-block align-bottom bg-[#000000] p-[2px] rounded-[2px] whitespace-nowrap text-0">
                <div className="bg-[#000000] text-[13px] pl-[12px] pr-[12px] height-[24px] relative inline-block align-middle ml-[2px] ">
                  {gameInfo.prepur_offer}
                </div>
                <div className=" relative inline-block text-[12px] align-middle ml-[2px]">
                  <a className="rounded-[2px] border-none inline-block cursor-pointer no-underline text-[#d2efa9] shadow-[1px_1px_0px_rgba(0,0,0,0.3)] ">
                    <span className="bg-[#588a1b] py-[4px] px-[15px] text-[15px] leading-[30px] rounded-[2px] hover:text-[#ffffff] hover:bg-[#75b022]">
                      Add to Cart
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[28px]  ">
          <div className={styles.gradientPurchase}>
            <div className="float-right">
              <img
                className="inline-block w-[20px] h-[20px] bg-no-repeat  "
                src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3"
              />
            </div>
            <h1 className="text-[21px] font-sans text-[#ffffff] font-normal block">
              Pre-Purchase Hogwarts Legacy Deluxe Edition
            </h1>
            <div className="absolute right-[16px] bottom-[-17px] left-[16px] whitespace-nowrap text-right ">
              <div className="h-[32px] inline-block align-bottom bg-[#000000] p-[2px] rounded-[2px] whitespace-nowrap text-0">
                <div className="bg-[#000000] text-[13px] pl-[12px] pr-[12px] height-[24px] relative inline-block align-middle ml-[2px] ">
                  $69.99
                </div>
                <div className=" relative inline-block text-[12px] align-middle ml-[2px]">
                  <a className="rounded-[2px] border-none inline-block cursor-pointer no-underline text-[#d2efa9] shadow-[1px_1px_0px_rgba(0,0,0,0.3)] ">
                    <span className="bg-[#588a1b] py-[4px] px-[15px] text-[15px] leading-[30px] rounded-[2px] hover:text-[#ffffff] hover:bg-[#75b022]">
                      Add to Cart
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GameAreaPurchase
