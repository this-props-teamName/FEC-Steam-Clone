import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-[#1b2838] text-white font-sans min-w-fit flex-row'>
      <div className='realtive h-28 w-58 m-auto'>
      <div className='float-left pt-7 mr-10 w-44 h-11'>
      <img className="pl-4" src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" />
      </div>
      <div className='absolute left-52'>
        <div className='block realtive pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase'>
      <Link href='/'>Store</Link>
        </div >
        <div className=' block realtive pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase' >
        <Link  href='/'> Community</Link>
        </div>
        <div className=' block realtive pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase' >
        <Link  href='/'>UserName Here</Link>
        </div>
        <div className='block realtive pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase' >
        <Link href='/'>Chat</Link>
        </div>
        <div className='block realtive pt-11 pb-1.5 pl-1.5 pr-1.5 float-left text-sm uppercase'>
        <Link href='/'>Support</Link>
        </div>
      </div>
      </div>
     
    </header>
  )
}

export default Header
