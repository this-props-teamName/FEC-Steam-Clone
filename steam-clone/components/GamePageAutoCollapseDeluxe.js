import React, {useState} from 'react'; 



const GamePageAutoCollapseDeluxe = () => {

  const [readMoreClick, setReadMoreClick] = useState(false); 

  const digiDeFullScreenClass = () => {
      return `${readMoreClick ? '' : 'max-h-[300px] overflow-hidden'}`
  }
  const readMoreClass = () => {
    return `${readMoreClick ? 'hidden' : 'block absolute left-0 right-0 bottom-0 h-[73px] z-[1]'}`
  }

  return (
    <div className="pb-[20px] relative">
      {/* If you take away the max-h-[300px] it will show the entire thing */}
      <div className={digiDeFullScreenClass()}>
        <div className="leading-[1.5rem] text-[14px] mt-[30px] overflow-hidden font-sans font-normal ">
          <h2 className="text-[14px] uppercase text-[#fff] mt-[0px] mx-[0px] mb-[10px] tracking-[0.03rem] font-normal pt-2px  ">
            Pre-Purchase Offer
            <img
              className="leading-[26px] bg-no-repeat bg-left-bottom "
              src="https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png"
            />
          </h2>
          <p className="mb-[8px] block ">
            Preorder to get the Onyx Hippogriff Mount.
          </p>
        </div>
        <div className="leading-[1.5rem] text-[14px] mt-[30px] overflow-hidden font-sans font-normal  ">
          <h2 className='text-[14px] uppercase text-[#fff] mt-[0px] mx-[0px] mb-[10px] tracking-[0.03rem] font-normal pt-2px leading-[26px] bg-[url("https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png")] bg-no-repeat bg-left-bottom  '>
            Digital Deluxe Edition
          </h2>
          <p className="mb-[8px] ">
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/extras/Hogwarts_Legacy_DE_WideWebBanner_632x250_22_0706.jpg?t=1661535551" />
            <br />
            The Hogwarts Legacy Digital Deluxe Edition Include: <br />
            -Thestral Mount <br />
            -Dark Arts Battle Arena <br />
            -Dark Arts Cosmetics Set<br />
            -Dark Arts Garrison Hat <br />
            -72 Hours Early
            <br />
          </p>
        </div>
        <div className={readMoreClass()}>
          <div className="absolute right-0 bottom-0 h-[20px] leading-[20px] cursor-pointer text-[#537ca6] text-[10px] pr-[12px] hover:text-[#fff] " onClick={()=> setReadMoreClick(true)}>
            READ MORE
            {/* need to add a gradient here but cant add since image is not http */}
          </div>
          {/* need to add a arrow down */}
        </div>
      </div>
    </div>
  )
}

export default GamePageAutoCollapseDeluxe