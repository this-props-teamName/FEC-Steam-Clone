import Header from "./Header"
import Footer from "./Footer"
import MainBody from './MainBody'

import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div className="bg-[#1e2837]">
          <div className='min-w-[972px] bg-no-repeat bg-[top_center] bg-[url("https://cdn.cloudflare.steamstatic.com/steam/apps/990080/page_bg_generated_v6b.jpg?t=1661535551")]'>
            <MainBody /> {children}
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Layout
