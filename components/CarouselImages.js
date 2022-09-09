import { carouselState } from './state'
import { useRecoilState } from 'recoil'
import { arrow } from '../styles/Carousel.module.css'
import { useState, useEffect } from 'react'


const CarouselImages = () => {
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);
  const [frame, setFrame] = useState(0)
  const [counter, setCounter] = useState(0)

 
  useEffect(()=>{
    setInterval(() => {
      if(frame < 480){
        setFrame(frame += 120)
        setCounter(counter += 1)
      }else{
        setFrame(frame -= 480)
        setCounter(counter -= 4)
      }
    },5000)
  },[])

  
  let clicked = (x, y) => {
    clearInterval(0)
    setFrame(x)
    setCounter(y)
  }

  if(carouselInfo.large_img_url){
  return (
      <div className="w-[616] float-left p-[0px] m-[0px] font-sans">
        <div className = "overflow-hidden relative mr-[16px]">
          <div className ="bg-black overflow-hidden relative" >
            <div>
              <img src='https://store.cloudflare.steamstatic.com/public/images/game/game_highlight_image_spacer.gif' />
            </div>
            {/* large images of the carousel */}
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href={carouselInfo.huge_img_url[counter]}>
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            {/* <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <script></script> */}
          </div>
          <div className="mt-[4px] relative h-[69px] mb-[4px] z-40">
            <div className="w-[602px] left-0 absolute">
              {/* frame of mini picutres */}
              <div className='absolute w-[116px] h-[72px] z-50 top-[-3px] border-[3px] cursor-pointer border-[#fff]' style={{left:`${frame}px`}}>
               {console.log(frame)}
                <div className={arrow}></div>
              </div>
              {/* small images below the main viewer of the carousel */}
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(0, 0)} >
                <img src={carouselInfo.small_img_url[0]}/>
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(120, 1)}>
                <img src={carouselInfo.small_img_url[1]} />
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(240, 2)}>
                <img src={carouselInfo.small_img_url[2]} />
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(360, 3)}>
                <img src={carouselInfo.small_img_url[3]} />
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(480, 4)}>
                <img src={carouselInfo.small_img_url[4]} />
              </div>
            </div>
          </div>
          <div className="relative h-[18px]">

            {/* Scroll bar under the carousel
                fix the hover effects (the arrow doesn't highlight at same time as the background) */}
            <div className="absolute w-[38px] top-0 bottom-0 rounded-[3px] block cursor-pointer bg-[#233c5166] hover:bg-[#417a9b]">
              <span className="h-[7px] w-[9px] ml-[13px] mt-[5px] inline-block bg-no-repeat bg-right-top hover:bg-right bg-0 bg-[url('https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png')]"></span>
            </div>
            <div className="absolute left-[39px] right-[39px] top-0 bottom-0 bg-[#00000033] rounded-[3px] ">
              <div></div>
              <div className="absolute left-0 bg-[#233c5166] h-[18px] w-[60px] rounded-[3px] hover:bg-[#417a9b] cursor-pointer e"></div>
            </div>
              <div className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer right-0 bg-[#233c5166] hover:bg-[#417a9b]">
              <span className='h-[7px] w-[9px] ml-[15px] mt-[5px] inline-block bg-no-repeat bg-top hover:bg-center bg-[url("https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png")]'></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselImages