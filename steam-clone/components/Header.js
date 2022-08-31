import Link from 'next/link'



const Header = () => {
  return (
      <header className='bg-black text-white h-20'>
        <Link href='/'>Store</Link>
        <Link href='/'> Community</Link>
        <Link href='/'>Chat</Link>
        <Link href='/'>Suport</Link>
      </header>
  )
}

export default Header
