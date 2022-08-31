// import Header from "./Header"
// import Footer from "./Footer"

import Link from 'next/link'

const Layout = ({children}) => {
  return (
      <div>
        <header className='bg-black text-white h-20'>
          <Link href='/'>Store</Link>
          <Link href='/'> Community</Link>
          <Link href='/'>Chat</Link>
          <Link href='/'>Support</Link>
        </header>
          <div>{children}</div>
        <footer className="bg-[#171A21] h-[182px]">
            <div>
                blah
            </div>
        </footer>
      </div>
  )
}

export default Layout
