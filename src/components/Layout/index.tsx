import Navbar from '../Common/Nav'
import Footer from '../Common/Footer'

const Layout = (children: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
