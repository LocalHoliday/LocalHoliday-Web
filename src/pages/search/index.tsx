import Nav from '@/components/Common/Nav'
import Footer from '@/components/Common/Footer'
import Search from '@/components/Search'
import dynamic from 'next/dynamic'
export default function index() {
  return (
    <>
      <Nav />
      <Search />
      <Footer />
    </>
  )
}
