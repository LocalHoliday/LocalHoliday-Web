import Navbar from '../Common/Navbar'
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
