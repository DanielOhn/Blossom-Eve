import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

function Layout(props) {
  return (
    <div className="w-4/6 h-screen m-auto flex flex-col">
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
