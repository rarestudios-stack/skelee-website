import Head from 'next/head'
import Image from 'next/image'
import Base from '../components/base'
import Navbar from '../components/navbar'
import Home from '../components/main'
import Slider from '../components/slide'
import Team from '../components/team'
import Navtabs from '../components/navtabscopy'
import Footer from '../components/footer'
import Mobilenavtabs from '../components/mobilenavtabs'


export default function Index() {
  return (
    <>
      <Head>
        <title>Skelee-Web3</title>
        <meta name="Description" content="Skelee Nfts" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" />
      </Head>

        <Navtabs/>
        


    </>
  )
}
