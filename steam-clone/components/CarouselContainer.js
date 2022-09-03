import Link from 'next/link'
import CarouselGameInfo from './CarouselGameInfo'
import CarouselImages from './CarouselImages'

const CarouselContainer = () => {
  return (
    // added a height so that the black gradient was below scroll bar this is different from the steam website.
    <div className='bg-[url(https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2)] bg-no-repeat h-[445px] block bg-bottom pb-[1px] mx-auto my-0'>
      <div className='w-[940px] mx-auto my-0 '>
        <CarouselImages />
        <CarouselGameInfo />
      </div>
    </div>
  )
}

export default CarouselContainer