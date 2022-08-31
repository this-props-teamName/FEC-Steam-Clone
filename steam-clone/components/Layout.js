import Header from "./Header"
import Footer from "./Footer"

import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        <div>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout
