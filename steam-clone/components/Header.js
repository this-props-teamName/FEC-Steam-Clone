import Link from 'next/link'



const Header = () => {
  return (
      <div>
        <Link href='/'>Store</Link>
        <Link href='/'> Community</Link>
        <Link href='/'>Chat</Link>
        <Link href='/'>Suport</Link>
      </div>
  )
}

export default Header
