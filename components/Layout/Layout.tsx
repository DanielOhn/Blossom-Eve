import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

function Layout(props) {
  return (
    <>
      <Head>
        <title>Blossom By Eve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
