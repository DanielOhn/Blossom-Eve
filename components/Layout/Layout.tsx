import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

import "../../styles/Layout.module.css"

function Layout(props) {
  return (
    <div id="layout" className="max-w-2xl h-screen m-auto flex flex-col">
      <Head>
        <title>Blossom By Eve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="m-auto w-full h-3/6 border border-red-500">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
