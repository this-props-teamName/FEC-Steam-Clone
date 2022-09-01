import Header from "./Header"
import Footer from "./Footer"
import MainBody from './MainBody'

import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        <div>
          <MainBody /> {children}
        </div>
      <Footer/>
    </>
  )
}

export default Layout
